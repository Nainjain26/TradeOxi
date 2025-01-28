"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useRef, FormEvent, useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisable(true);
    setErrors('');
    setSuccess(false);

    try {
      const data = {
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      };

      const response = await fetch("https://adminbackend-iypc.onrender.com/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSuccess(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrors(error.message);
      } else {
        setErrors("An unknown error occurred.");
      }
      console.error("Error occurred:", error);
    } finally {
      setIsDisable(false);
    }
  };

  useEffect(() => {
    if (success) {
      router.push('/Admin/Dashboard'); // Redirect to Dashboard
    }
  }, [success, router]);

  return (
    <div className="md:h-[80vh] flex justify-center items-center my-10">
      <form
        className="max-w-sm mx-auto border border-green-700 p-8 md:p-20 rounded-xl bg-green-700"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className="block mb-2 text-white font-semibold">
            Your Username
          </label>
          <input
            type="text"
            ref={usernameRef}
            id="username"
            placeholder="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-white font-semibold">
            Your Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          disabled={isDisable}
          type="submit"
          className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {errors && errors !== "" && <div className="text-red-500">{errors}</div>}
    </div>
  );
};

export default Page;
