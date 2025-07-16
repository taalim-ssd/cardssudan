
const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/9cfed559-6e00-4c70-9738-a698dfc629ec.png",
      alt: "Agricultural surveying and planning",
      category: "Technical Training"
    },
    {
      src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      alt: "Corn harvest season",
      category: "Food Security"
    },
    {
      src: "/lovable-uploads/a021a960-9509-4547-860c-69682c6adc9e.png",
      alt: "Field measurement and assessment",
      category: "Agricultural Planning"
    },
    {
      src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
      alt: "Rice paddy fields",
      category: "Crop Production"
    },
    {
      src: "/lovable-uploads/5d36f115-30a2-4b2a-b2d9-ebccbb46c7d0.png",
      alt: "Agricultural land surveying",
      category: "Land Management"
    },
    {
      src: "https://images.unsplash.com/photo-1592419443411-cbdf67c3db0a?w=400&h=300&fit=crop",
      alt: "Tomato cultivation",
      category: "Horticulture"
    },
    {
      src: "https://images.unsplash.com/photo-1566754089908-ac581afe4b96?w=400&h=300&fit=crop",
      alt: "Fresh produce market",
      category: "Market Access"
    },
    {
      src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      alt: "Seed planting techniques",
      category: "Farming Methods"
    },
    {
      src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop",
      alt: "Irrigation systems",
      category: "Water Management"
    },
    {
      src: "https://images.unsplash.com/photo-1586771107045-b791e006b42a?w=400&h=300&fit=crop",
      alt: "Livestock farming",
      category: "Animal Husbandry"
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      alt: "Greenhouse farming",
      category: "Protected Agriculture"
    },
    {
      src: "https://images.unsplash.com/photo-1623123616913-2c2b13511203?w=400&h=300&fit=crop",
      alt: "Farmers training session",
      category: "Capacity Building"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Agriculture & Food Security</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting sustainable farming and ensuring food security in rural communities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
