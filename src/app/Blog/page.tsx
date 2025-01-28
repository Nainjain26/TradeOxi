"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from '@/app/components/BlogSmallCard'; // Ensure this is the correct import path for BlogCard
import Globe from "@/components/ui/globe"; // Ensure this is the correct import path for Globe
interface BlogData {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}
const Index = () => {
  const [data, setData] = useState<BlogData[]>([]); // Define the state for blog data

  // Fetch blog data when component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://adminbackend-iypc.onrender.com/uploads');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const blogData = await response.json();
        console.log(blogData.images)
        setData(blogData.images); // Update state with fetched data
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="relative flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg bg-background pb-36 pt-8">
        <span className="pointer-events-none bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold text-transparent dark:from-white dark:to-slate-900/10">
          BLOGS
        </span>
        <Globe className="top-16" />
        <div className="pointer-events-none absolute inset-0 h-full" />
      </div>

      {/* Blog Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full sm:w-auto pt-5">
        {data.map((item, index) => (
          <BlogCard
            key={index}
            image={item.imageUrl}
            title={item.title}
            description={item.description}
            href={index} // Update this to reflect proper routing if needed
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
