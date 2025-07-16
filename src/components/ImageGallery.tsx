
import React, { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { supabase } from "@/integrations/supabase/client";

interface GalleryImage {
  id: string;
  storage_path: string;
  alt_text: string;
  category: string;
  location: string;
  story: string;
  display_order: number;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery_images')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching gallery images:', error);
          return;
        }

        setImages(data || []);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getImageUrl = (storagePath: string) => {
    if (!storagePath) return '';
    const { data } = supabase.storage.from('gallery-images').getPublicUrl(storagePath);
    return data.publicUrl;
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work in South Sudan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting communities through water access, agricultural development, and sustainable programs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={getImageUrl(image.storage_path)} 
                  alt={image.alt_text}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.storage_path}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="text-white">
                  <p className="text-sm font-medium text-emerald-300 mb-1">{image.category}</p>
                  <p className="text-xs text-gray-300 mb-2">{image.location}</p>
                  <h3 className="text-sm font-semibold mb-2">{image.alt_text}</h3>
                  <p className="text-xs leading-relaxed mb-3 line-clamp-3">{image.story}</p>
                  <button 
                    onClick={() => setSelectedImage(image)}
                    className="text-emerald-300 hover:text-emerald-200 text-xs font-medium transition-colors"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed story */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src={getImageUrl(selectedImage.storage_path)} 
                    alt={selectedImage.alt_text}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-600 font-medium text-sm">{selectedImage.category}</span>
                  <span className="text-gray-500 text-sm">{selectedImage.location}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedImage.alt_text}</h2>
                <p className="text-gray-600 leading-relaxed">{selectedImage.story}</p>
                <div className="mt-6 pt-4 border-t">
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
