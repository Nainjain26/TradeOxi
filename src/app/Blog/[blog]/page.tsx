"use client";

import React, { useEffect, useState } from "react";
import BlogBigCard from "@/app/components/BlogBigCard";
import { usePathname } from "next/navigation";
import Globe from "@/components/ui/globe";

// Define the type of a single blog entry
type BlogData = {
  imageUrl: string;
  title: string;
  description: string;
};

const Page = () => {
  const [blogDataArray, setBlogDataArray] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("https://adminbackend-iypc.onrender.com/uploads"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogDataArray(data.images);
      } catch (err) {
        setError(`Failed to load data ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!pathname) {
    return <div>Loading path...</div>;
  }

  // Extract the slug and convert it to an index
  const slug = pathname.split("/").pop() || "";
  const index = parseInt(slug, 10) - 1;

  // Validate index and get the blog data
  if (isNaN(index) || index < 0 || index >= blogDataArray.length) {
    return <div>No blog found for the provided URL.</div>;
  }

  const blogData = blogDataArray[index];

  return (
    <div>
      <div className="relative flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg bg-background pb-36 pt-8">
        <span className="pointer-events-none bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold text-transparent dark:from-white dark:to-slate-900/10">
          BLOG
        </span>
        <Globe className="top-16" />
        <div className="pointer-events-none absolute inset-0 h-full" />
      </div>
      <BlogBigCard
        image={blogData.imageUrl}
        title={blogData.title}
        description={blogData.description}
      />
    </div>
  );
};

export default Page;
