
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Story {
  id: string;
  title: string;
  summary: string;
  image_storage_path: string;
  location: string;
  featured_image_url: string;
}

const SouthSudanStories = () => {
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
    return fallbackUrl || 'https://images.unsplash.com/photo-1594736797933-d0c19e8a7d93?w=400&h=300&fit=crop';
  };

  if (loading) {
    return (
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading stories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Community Stories from South Sudan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real impact stories from our agricultural and food security programs across South Sudan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src={getImageUrl(story.image_storage_path, story.featured_image_url)} 
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm">{story.summary}</p>
                {story.location && (
                  <p className="text-emerald-600 text-xs mt-2">{story.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SouthSudanStories;
