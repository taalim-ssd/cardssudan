
const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/9cfed559-6e00-4c70-9738-a698dfc629ec.png",
      alt: "Agricultural surveying and planning",
      category: "Technical Training"
    },
    {
      src: "/lovable-uploads/704d4949-6a97-4f68-b782-465dd3a9e61e.png",
      alt: "Community engagement and training",
      category: "Community Development"
    },
    {
      src: "/lovable-uploads/a021a960-9509-4547-860c-69682c6adc9e.png",
      alt: "Field measurement and assessment",
      category: "Agricultural Planning"
    },
    {
      src: "/lovable-uploads/18065890-ca1d-417c-8a2f-812b97eb3c3f.png",
      alt: "Rural community meetings",
      category: "Community Engagement"
    },
    {
      src: "/lovable-uploads/5d36f115-30a2-4b2a-b2d9-ebccbb46c7d0.png",
      alt: "Agricultural land surveying",
      category: "Land Management"
    },
    {
      src: "/lovable-uploads/e200fbed-1014-4ab9-ab6e-8d76106dd2be.png",
      alt: "Agricultural land preparation",
      category: "Farming Techniques"
    },
    {
      src: "/lovable-uploads/b365df88-4601-4cf3-99ce-8900d5aa39fa.png",
      alt: "Community agricultural projects",
      category: "Rural Development"
    },
    {
      src: "/lovable-uploads/7e77a94c-07f5-450c-a535-0fe58e161bd9.png",
      alt: "Land surveying and planning",
      category: "Technical Services"
    },
    {
      src: "/lovable-uploads/dfcb6968-46d0-4bca-b81a-55af1420d366.png",
      alt: "Agricultural measurement techniques",
      category: "Field Assessment"
    },
    {
      src: "/lovable-uploads/0a381cab-b666-4974-bf27-76f88701ecec.png",
      alt: "Peace building and community development",
      category: "Community Programs"
    },
    {
      src: "/lovable-uploads/ffb0784f-027e-4b2e-bd2f-11698e0250fb.png",
      alt: "Professional agricultural training",
      category: "Skills Development"
    },
    {
      src: "/lovable-uploads/d3a7f42f-f187-419a-9a1c-4be4b201a37f.png",
      alt: "Youth engagement in agriculture",
      category: "Youth Training"
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
