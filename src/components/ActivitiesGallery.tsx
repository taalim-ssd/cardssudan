import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ActivityImage {
  id: string;
  storage_path: string;
  description: string;
  created_at: string;
}

const ActivitiesGallery = () => {
  const [activityImages, setActivityImages] = useState<ActivityImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivityImages = async () => {
      try {
        const { data, error } = await supabase
          .from('activity_images')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        setActivityImages(data || []);
      } catch (error) {
        console.error('Error fetching activity images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityImages();
  }, []);

  const getImageUrl = (storagePath: string): string => {
    if (!storagePath) return '/placeholder.svg';
    
    const { data } = supabase.storage
      .from('activity-images')
      .getPublicUrl(storagePath);
    
    return data.publicUrl || '/placeholder.svg';
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (activityImages.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Activities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key activities and programs driving sustainable development in Kapoeta East County
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activityImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={getImageUrl(image.storage_path)}
                  alt={image.description || `Activity ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              {image.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">
                    {image.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesGallery;
