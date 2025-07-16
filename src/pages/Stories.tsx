import React, { useState, useEffect } from "react";
import SouthSudanStories from "../components/SouthSudanStories";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { supabase } from "@/integrations/supabase/client";

interface Story {
  id: string;
  title: string;
  location: string;
  summary: string;
  image_storage_path: string;
  featured_image_url: string;
  content: string;
  published_date: string;
}

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data, error } = await supabase
          .from('stories')
          .select('*')
          .order('published_date', { ascending: false });

        if (error) {
          console.error('Error fetching stories:', error);
          return;
        }

        setStories(data || []);
      } catch (error) {
        console.error('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const getImageUrl = (storagePath: string, fallbackUrl: string) => {
    if (storagePath) {
      const { data } = supabase.storage.from('story-images').getPublicUrl(storagePath);
      return data.publicUrl;
    }
    return fallbackUrl || '/lovable-uploads/2a687e30-1baa-434c-a933-2cde06dae39f.png';
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <section className="bg-emerald-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl max-w-3xl">
              Real stories from South Sudan communities transformed through sustainable agriculture and food security programs
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading stories...</p>
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
          <h1 className="text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl max-w-3xl">
            Real stories from South Sudan communities transformed through sustainable agriculture and food security programs
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src="/lovable-uploads/3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png" 
                  alt="Community gathering in South Sudan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Failed to load featured story image');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </AspectRatio>
            </div>
            <div>
              <span className="text-emerald-600 font-medium">Featured Story</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">From Subsistence to Prosperity</h2>
              <p className="text-lg text-gray-600 mb-6">
                Meet Mary Akech, a farmer from Juba who transformed her small plot into a 
                thriving agricultural business through CARD's seed distribution and training program. 
                Her story demonstrates the power of agricultural innovation and community support.
              </p>
              <p className="text-gray-600 mb-6">
                "Before CARD came to our village, we struggled to feed our families. Now, 
                not only do we have enough nutritious food, but we're selling surplus crops 
                and sending our children to school with the income."
              </p>
              <button 
                onClick={() => setSelectedStory({
                  id: "featured-story",
                  title: "From Subsistence to Prosperity",
                  location: "Juba, South Sudan",
                  summary: "Meet Mary Akech, a farmer from Juba who transformed her small plot into a thriving agricultural business through CARD's seed distribution and training program.",
                  content: "Meet Mary Akech, a farmer from Juba who transformed her small plot into a thriving agricultural business through CARD's seed distribution and training program. Her story demonstrates the power of agricultural innovation and community support. Through dedicated training sessions and access to drought-resistant seeds, Mary learned sustainable farming techniques that tripled her harvest. Today, she leads a women's cooperative that supports 50 other female farmers in her community. The ripple effects of her success have created employment opportunities, improved child nutrition, and strengthened the entire community's resilience.",
                  image_storage_path: "",
                  featured_image_url: "/lovable-uploads/3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png",
                  published_date: "2024-03-01"
                })}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <article key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src={getImageUrl(story.image_storage_path, story.featured_image_url)} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Failed to load story image: ${story.image_storage_path}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </AspectRatio>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-600 text-sm font-medium">{story.location}</span>
                    <span className="text-gray-500 text-sm">{new Date(story.published_date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.summary}</p>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedStory(story)}
                      className="text-emerald-600 hover:text-emerald-800 font-medium"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={getImageUrl(selectedStory.image_storage_path, selectedStory.featured_image_url)} 
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors text-lg"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-emerald-600 font-medium">{selectedStory.location}</span>
                <span className="text-gray-500">{new Date(selectedStory.published_date).toLocaleDateString()}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedStory.title}</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedStory.content || selectedStory.summary}</p>
              </div>
              <div className="mt-8 pt-6 border-t flex gap-4">
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg transition-colors">
                  Share Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Community Stories from South Sudan */}
      <SouthSudanStories />

      {/* Impact Quote */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 max-w-4xl mx-auto">
            "CARD doesn't just bring seeds and tools to our communities. They listen to us, work with us, 
            and help us build the agricultural solutions we need for our own food security."
          </blockquote>
          <cite className="text-emerald-600 font-medium">
            - Peter Deng, Farmer and Community Leader, Bor County
          </cite>
        </div>
      </section>
    </div>
  );
};

export default Stories;