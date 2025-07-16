
import { useState } from "react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const images = [
    {
      src: "/lovable-uploads/9cfed559-6e00-4c70-9738-a698dfc629ec.png",
      alt: "Agricultural surveying and planning",
      category: "Technical Training",
      story: "Our team conducts precise land surveying to help communities optimize their agricultural plots. This technical training ensures farmers can maximize crop yields through proper field layout and measurement techniques.",
      location: "Kapoeta, Eastern Equatoria"
    },
    {
      src: "/lovable-uploads/704d4949-6a97-4f68-b782-465dd3a9e61e.png",
      alt: "Community engagement and training",
      category: "Community Development",
      story: "Under the shade of acacia trees, our team facilitates community meetings where local leaders and residents discuss agricultural challenges and solutions. These gatherings strengthen community bonds and ensure everyone has a voice in development decisions.",
      location: "Torit, Eastern Equatoria"
    },
    {
      src: "/lovable-uploads/a021a960-9509-4547-860c-69682c6adc9e.png",
      alt: "Field measurement and assessment",
      category: "Agricultural Planning",
      story: "Using traditional surveying tools, our agricultural specialists work with farmers to measure and plan optimal field layouts. This collaborative approach ensures that modern techniques complement traditional farming wisdom.",
      location: "Juba, Central Equatoria"
    },
    {
      src: "/lovable-uploads/18065890-ca1d-417c-8a2f-812b97eb3c3f.png",
      alt: "Rural community meetings",
      category: "Community Engagement",
      story: "Community elders, women, and youth gather in the traditional meeting space where important decisions about farming seasons, resource allocation, and community development are made through consensus and mutual respect.",
      location: "Yambio, Western Equatoria"
    },
    {
      src: "/lovable-uploads/5d36f115-30a2-4b2a-b2d9-ebccbb46c7d0.png",
      alt: "Agricultural land surveying",
      category: "Land Management",
      story: "Professional land surveyors work alongside community members to establish precise boundaries and optimize land use. This technical expertise helps prevent conflicts and ensures sustainable agricultural practices.",
      location: "Bor, Jonglei State"
    },
    {
      src: "/lovable-uploads/e200fbed-1014-4ab9-ab6e-8d76106dd2be.png",
      alt: "Agricultural land preparation",
      category: "Farming Techniques",
      story: "Traditional farming methods meet modern agricultural science as community members learn sustainable land preparation techniques. This hands-on training ensures food security while preserving the environment for future generations.",
      location: "Wau, Western Bahr el Ghazal"
    },
    {
      src: "/lovable-uploads/b365df88-4601-4cf3-99ce-8900d5aa39fa.png",
      alt: "Community agricultural projects",
      category: "Rural Development",
      story: "Collaborative farming initiatives bring together community members to clear and prepare land for collective agricultural projects. These efforts strengthen social bonds while improving food security for entire villages.",
      location: "Rumbek, Lakes State"
    },
    {
      src: "/lovable-uploads/7e77a94c-07f5-450c-a535-0fe58e161bd9.png",
      alt: "Land surveying and planning",
      category: "Technical Services",
      story: "Professional surveying equipment enables precise land measurement and planning. Our technical team works closely with farmers to ensure optimal field layouts that maximize productivity while conserving resources.",
      location: "Malakal, Upper Nile"
    },
    {
      src: "/lovable-uploads/dfcb6968-46d0-4bca-b81a-55af1420d366.png",
      alt: "Agricultural measurement techniques",
      category: "Field Assessment",
      story: "Accurate field measurements are crucial for successful farming. Our team demonstrates proper surveying techniques that help farmers optimize their land use and increase crop yields through scientific planning.",
      location: "Yei, Central Equatoria"
    },
    {
      src: "/lovable-uploads/0a381cab-b666-4974-bf27-76f88701ecec.png",
      alt: "Peace building and community development",
      category: "Community Programs",
      story: "Beyond agricultural work, our programs focus on peace building and community development. This gathering represents the diverse voices working together to create sustainable solutions for rural development challenges.",
      location: "Bentiu, Unity State"
    },
    {
      src: "/lovable-uploads/ffb0784f-027e-4b2e-bd2f-11698e0250fb.png",
      alt: "Professional agricultural training",
      category: "Skills Development",
      story: "Skilled agricultural professionals demonstrate advanced farming techniques to local farmers. This hands-on training program combines traditional knowledge with modern scientific methods to improve agricultural productivity.",
      location: "Aweil, Northern Bahr el Ghazal"
    },
    {
      src: "/lovable-uploads/d3a7f42f-f187-419a-9a1c-4be4b201a37f.png",
      alt: "Youth engagement in agriculture",
      category: "Youth Training",
      story: "Young people are the future of agriculture in South Sudan. This training session shows youth learning modern farming techniques and leadership skills that will help them become successful agricultural entrepreneurs in their communities.",
      location: "Kuajok, Warrap State"
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
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  console.error(`Failed to load image: ${image.src}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="text-white">
                  <p className="text-sm font-medium text-emerald-300 mb-1">{image.category}</p>
                  <p className="text-xs text-gray-300 mb-2">{image.location}</p>
                  <h3 className="text-sm font-semibold mb-2">{image.alt}</h3>
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
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-64 object-cover"
                />
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedImage.alt}</h2>
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
