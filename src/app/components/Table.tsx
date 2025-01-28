"use client"
import React, { useState, useEffect, useMemo } from "react";

interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
  comment:string;
}

const Table = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPaginationList, setCurrentPaginationList] = useState<number[]>([
    1,
  ]);

  const [, pages] = useMemo(() => {
    return [contacts.length, Math.ceil(contacts.length / 10)];
  }, [contacts]);
  console.log(currentPage, pages);

  const currentPageContacts = contacts.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(parseInt(e.currentTarget.value));
  };

  const handleNext = () => {
    const totalPages = pages;
    const maxButtons = 5;

    if (currentPage % maxButtons === 0) {
      const startPage = currentPage + 1;
      const endPage = Math.min(startPage + maxButtons - 1, totalPages);

      // Update pagination list to the next chunk
      const newPaginationList = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
      setCurrentPaginationList(newPaginationList);
    }

    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    if (currentPaginationList[0] > 1 && currentPage % 5 === 1) {
      const startPage = currentPage - 5;

      const newPaginationList = Array.from(
        { length: 5 },
        (_, i) => startPage + i
      );
      setCurrentPaginationList(newPaginationList);
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const getContact = async () => {
      try {
        const response = await fetch(
          "https://adminbackend-iypc.onrender.com/feedback"
        );
        if (!response.ok) {
          throw new Error("contact fetching from api failed");
        }
        const result = await response.json();
        setContacts(result.contacts);
        setIsLoading(false);
        setCurrentPaginationList(() => {
          const totalPages = Math.ceil(result.contacts.length / 10);
          return Array.from(
            { length: Math.min(5, totalPages) },
            (_, i) => i + 1
          );
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          // Now TypeScript knows error is an instance of Error
          setError(error.message);
        } else {
          // Fallback in case it's not an instance of Error
          setError("An unknown error occurred");
        }
        setIsLoading(false);
      }
    };
    getContact();
  }, []);

  if (isLoading) {
    return <div className="text-center my-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center my-10 text-red-500">{error}</div>;
  }

  return (
    <>
      {contacts.length === 0 ? (
        "No Data Available Here"
      ) : (
        <div className="max-w-7xl mx-auto my-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageContacts.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">
                        {(currentPage - 1) * 10 + i + 1}
                      </td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.phoneNumber}</td>
                      <td className="px-6 py-4">{item.comment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <nav
              className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  {currentPageContacts.length ? (currentPage - 1) * 10 + 1 : 0}
                  - {(currentPage - 1) * 10 + currentPageContacts.length}
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  {contacts.length}
                </span> 
                
              </span>
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="flex items-center  justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </button>
                </li>
                {currentPaginationList.map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={handleButton}
                      value={item}
                      className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                        currentPage === item ? "bg-teal-500 " : ""
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === pages}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
