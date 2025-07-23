import React from 'react';
import { Header } from '@/components/global/Header';
import { Footer } from '@/components/global/Footer';
import { BlogsSection } from '@/components/sections/BlogsSection';

const BlogsPage = () => {
  return (
    <div className="bg-stone dark:bg-slate text-slate dark:text-stone flex flex-col min-h-screen">

      <main className="flex-1">
        <BlogsSection />
      </main>

    </div>
  );
};

export default BlogsPage;