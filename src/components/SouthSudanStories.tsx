
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

  return null;
};

export default SouthSudanStories;
