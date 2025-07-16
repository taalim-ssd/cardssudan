
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const images = [
    {
      src: "/lovable-uploads/edac3eb8-658d-4a51-93c1-76d811025c33.png",
      alt: "Water distribution and community support",
      category: "Water & Sanitation",
      story: "Community members gather at the water distribution point where yellow jerrycans line up in organized rows. Our water programs ensure clean, safe drinking water reaches remote communities, with local volunteers helping to distribute water fairly among families. This vital service supports health and dignity in areas where clean water access was previously limited.",
      location: "Kapoeta, Eastern Equatoria"
    },
    {
      src: "/lovable-uploads/b1a33c9e-52b9-47dd-b4ed-89138b92e9c0.png",
      alt: "Community water collection coordination",
      category: "Water Management",
      story: "From an elevated view, we see the organized effort of water collection where community members coordinate to ensure every family receives their allocation. The systematic arrangement of water containers demonstrates the careful planning and community cooperation that makes our water programs successful in reaching those most in need.",
      location: "Torit, Eastern Equatoria"
    },
    {
      src: "/lovable-uploads/82be0de1-f734-4588-b729-2895d2a01014.png",
      alt: "Traditional village community",
      category: "Rural Communities",
      story: "Traditional thatched-roof homes dot the landscape in this rural village where our community development programs operate. These traditional structures represent the resilience and cultural heritage of South Sudanese communities. Our programs work to support these communities while respecting their traditional ways of life and architectural practices.",
      location: "Juba, Central Equatoria"
    },
    {
      src: "/lovable-uploads/ce7d0cf1-5c4e-43a5-8efe-b7d263303ee8.png",
      alt: "Water access and distribution",
      category: "Humanitarian Aid",
      story: "Community members work together to organize water collection, with rows of yellow containers waiting to be filled. This scene captures the daily reality of water access challenges and the community cooperation required to ensure everyone receives clean water. Our programs support these efforts by providing reliable water sources and distribution systems.",
      location: "Yambio, Western Equatoria"
    },
    {
      src: "/lovable-uploads/1e454688-5ea2-4d3c-afd7-7a717f008a38.png",
      alt: "Community water distribution program",
      category: "Water Security",
      story: "Local volunteers and community members collaborate in the systematic distribution of clean water. Each container represents a family's daily water needs, and the organized process ensures equitable access. This program demonstrates how community-led initiatives, supported by our organization, create sustainable solutions for water security in remote areas.",
      location: "Bor, Jonglei State"
    },
    {
      src: "/lovable-uploads/2d891487-f50a-4faa-b536-902fc37f142a.png",
      alt: "Rural water collection initiative",
      category: "Community Development",
      story: "Against the backdrop of traditional fencing, families gather to collect their daily water allocation. The diverse group of community members - from children to elders - reflects the inclusive nature of our water programs. These initiatives ensure that clean water reaches every member of the community, supporting health, dignity, and development.",
      location: "Wau, Western Bahr el Ghazal"
    },
    {
      src: "/lovable-uploads/3a99b15a-11cd-4f0d-9328-4e41df0b3a4a.png",
      alt: "Large-scale community water distribution",
      category: "Emergency Response",
      story: "A wide view of our water distribution efforts shows the scale of need and response. Hundreds of water containers are arranged in systematic rows while community members gather to receive their allocation. This organized approach ensures that even in challenging conditions, clean water reaches those who need it most through efficient, dignified distribution processes.",
      location: "Rumbek, Lakes State"
    },
    {
      src: "/lovable-uploads/2d77b13f-d304-4fdd-b257-a1056e5781c6.png",
      alt: "Community gathering under the tree",
      category: "Community Engagement",
      story: "Under the shade of a large tree, community members gather for an important meeting. This traditional gathering space serves as the heart of community decision-making, where elders, women, and youth come together to discuss development priorities, resource allocation, and collective action. These meetings are essential for ensuring our programs align with community needs and values.",
      location: "Malakal, Upper Nile"
    },
    {
      src: "/lovable-uploads/d8471b86-ab36-4030-86d5-0b331cfb292c.png",
      alt: "Large community assembly",
      category: "Community Mobilization",
      story: "A large community assembly brings together hundreds of people to discuss development priorities and program implementation. This gathering represents the democratic participation that underpins our work, ensuring that community voices guide program design and implementation. Such assemblies strengthen social cohesion and collective decision-making capacity.",
      location: "Yei, Central Equatoria"
    },
    {
      src: "/lovable-uploads/9c423eb3-f17b-4e9d-a07c-855ece0e0ef2.png",
      alt: "Community leadership and engagement",
      category: "Leadership Development",
      story: "A community leader addresses a large gathering under the traditional meeting tree. This scene exemplifies the leadership development component of our programs, where local leaders are supported to effectively serve their communities. The engaged audience reflects the active participation that makes community-driven development successful.",
      location: "Bentiu, Unity State"
    },
    {
      src: "/lovable-uploads/9cfed559-6e00-4c70-9738-a698dfc629ec.png",
      alt: "Agricultural surveying and planning",
      category: "Technical Training",
      story: "Our team conducts precise land surveying to help communities optimize their agricultural plots. This technical training ensures farmers can maximize crop yields through proper field layout and measurement techniques, combining traditional knowledge with modern agricultural science for sustainable food production.",
      location: "Aweil, Northern Bahr el Ghazal"
    },
    {
      src: "/lovable-uploads/704d4949-6a97-4f68-b782-465dd3a9e61e.png",
      alt: "Community engagement and training",
      category: "Community Development",
      story: "Under the shade of acacia trees, our team facilitates community meetings where local leaders and residents discuss agricultural challenges and solutions. These gatherings strengthen community bonds and ensure everyone has a voice in development decisions, creating lasting partnerships for sustainable development.",
      location: "Kuajok, Warrap State"
    }
  ];

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
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </AspectRatio>
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
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
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
