import React, { useState } from 'react';

const blogPosts = [
  {
    title: 'Event Recap: SAMVAAD 2025',
    category: 'Events',
    thumbnail:
      'https://placehold.co/600x400/879A74/FFFFFF?text=Event+Recap',
    images: [
      'https://placehold.co/800x500/879A74/FFFFFF?text=Recap+1',
      'https://placehold.co/800x500/879A74/FFFFFF?text=Recap+2',
    ],
    content:
      'An in-depth look at what made SAMVAAD 2025 memorable, from keynote sessions to community initiatives.',
  },
  {
    title: 'The Power of Vulnerability',
    category: 'Insights',
    thumbnail:
      'https://placehold.co/600x400/36454F/FFFFFF?text=Leadership',
    images: [
      'https://placehold.co/800x500/36454F/FFFFFF?text=Insight+1',
    ],
    content:
      'Explore how vulnerability shapes authentic leadership and builds meaningful connections.',
  },
  {
    title: 'Navigating Emotions',
    category: 'Wellness',
    thumbnail: 'https://placehold.co/600x400/A7B894/FFFFFF?text=Wellness',
    images: [
      'https://placehold.co/800x500/A7B894/FFFFFF?text=Wellness+1',
      'https://placehold.co/800x500/A7B894/FFFFFF?text=Wellness+2',
    ],
    content:
      'Tips and techniques for understanding and managing emotional wellbeing in daily life.',
  },
];

export const BlogsSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const tagOptions = ['All', 'Events', 'Insights', 'Wellness'];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedTag === 'All' || post.category === selectedTag) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        {/* Search input section */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Insights & Stories
          </h2>
          <p className="text-lg text-slate/80 dark:text-stone/80 mb-4">
            Explore articles, event recaps, and inspiring stories from the
            SAMVAAD community.
          </p>
          {/* Blog categories as global tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tagOptions.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1 text-sm rounded-full border ${
                  selectedTag === tag
                    ? 'bg-orange-500 text-white'
                    : 'border-gray-300 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex justify-center flex-col items-center gap-2">
            <label htmlFor="blog-search" className="text-md font-medium text-gray-700 dark:text-gray-300">
              Search Posts
            </label>
            <input
              id="blog-search"
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded dark:bg-slate-800 dark:text-white dark:border-gray-600 bg-white font-bold text-lg outline-none focus:ring-2 focus:ring-sage"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.title}
              className="bg-stone-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-stone-200 dark:border-slate-700 group shadow-sm flex flex-col"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      post.category === "Coming Soon"
                        ? "bg-yellow-300 text-yellow-900 font-semibold"
                        : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-100"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {post.title}
                </h3>
                <div className="mt-auto flex justify-end items-center gap-2 pt-4">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="px-4 py-1 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded transition"
                  >
                    Know More
                  </button>
                  <button
                    className="px-4 py-1 text-sm text-gray-700 dark:text-gray-200 border border-gray-300 bg-white dark:bg-slate-700 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.content,
                        });
                      } else {
                        alert("Sharing not supported. Copy manually.");
                      }
                    }}
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog post modal (no header/footer inside modal) */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 max-w-3xl w-full p-6 rounded-lg overflow-y-auto max-h-[90vh] relative shadow-lg">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-2xl"
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="text-3xl font-serif font-bold mb-2">
              {selectedPost.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-stone-400 mb-4">
              {selectedPost.category}
            </p>
            <div className="space-y-4">
              {selectedPost.images.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedPost.title} ${idx + 1}`}
                  className="rounded w-full"
                />
              ))}
              <p className="text-lg">{selectedPost.content}</p>
              <div className="flex gap-2 mt-4">
                <button
                  className="px-4 py-1 text-sm text-gray-700 dark:text-gray-200 border border-gray-300 bg-white dark:bg-slate-700 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: selectedPost.title,
                        text: selectedPost.content,
                      });
                    } else {
                      alert("Sharing not supported. Copy manually.");
                    }
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
