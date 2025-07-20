
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getStorageImageUrl } from "@/utils/imageUtils";

interface BlogPost {
  id: string;
  title: string;
  published_date: string;
  category: string;
  excerpt: string;
  image_storage_path: string;
  featured_image_url: string;
  content: string;
  author: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_date', { ascending: false });

        if (error) {
          console.error('Error fetching blog posts:', error);
          return;
        }

        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getImageUrl = (storagePath: string, fallbackUrl: string) => {
    if (storagePath) {
      const { data } = supabase.storage.from('blog-images').getPublicUrl(storagePath);
      return data.publicUrl;
    }
    return fallbackUrl || getStorageImageUrl('media', 'stories/story-fallback.png', '/placeholder.svg');
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <section className="bg-emerald-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl max-w-3xl">
              Insights, updates, and innovations in agriculture and food security from South Sudan and beyond
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-3xl">
            Insights, updates, and innovations in agriculture and food security from South Sudan and beyond
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src={getStorageImageUrl('media', 'stories/community-engagement.png', '/placeholder.svg')} 
                alt="Community engagement and training"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-emerald-600 font-medium">Featured Post</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-2">
                Building Food Security Through Climate-Smart Agriculture
              </h2>
              <p className="text-gray-500 mb-4">March 20, 2024 • Agriculture & Climate</p>
              <p className="text-lg text-gray-600 mb-6">
                As climate change intensifies, South Sudanese farmers are adopting innovative 
                agricultural practices that increase productivity while protecting the environment. 
                Discover the techniques that are transforming rural livelihoods.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                  <img 
                    src={getImageUrl(post.image_storage_path, post.featured_image_url)} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-600 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-500 text-sm">{new Date(post.published_date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-emerald-600 hover:text-emerald-800 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights and updates from the field
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
