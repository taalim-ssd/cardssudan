import { useState } from "react";
import SouthSudanStories from "../components/SouthSudanStories";

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<any>(null);
  
  const stories = [
    {
      title: "From Food Insecurity to Agricultural Success",
      location: "Juba, South Sudan",
      summary: "How drought-resistant seeds and training transformed a community's food security",
      image: "/lovable-uploads/2a687e30-1baa-434c-a933-2cde06dae39f.png",
      fullStory: "In the heart of Juba, Mary Akech and her community faced severe food insecurity due to prolonged drought seasons. Through CARD's agricultural training program, they learned to use drought-resistant seeds and sustainable farming techniques. The traditional hand-digging methods combined with modern agricultural science resulted in a 300% increase in crop yields. Today, Mary's family not only has enough food but also sells surplus crops to support their children's education. This transformation demonstrates how proper training and quality seeds can revolutionize food security in rural communities.",
      date: "March 2024",
      impact: "150 families now food secure"
    },
    {
      title: "Women's Cooperative Feeds the Community",
      location: "Yei County",
      summary: "Female farmers unite to share resources and knowledge, tripling vegetable production",
      image: "/lovable-uploads/ddb90a65-09c6-4d66-8e47-167f6bd19c6b.png",
      fullStory: "Under the vast acacia trees of Yei County, women from five villages gather weekly to share agricultural knowledge and resources. Led by mama Grace, this cooperative has transformed from a small group of 12 women to a powerful network of 200 female farmers. They collectively purchase seeds, share farming tools, and provide mutual support during challenging times. The cooperative's vegetable gardens now supply fresh produce to local markets, and member incomes have increased by 400%. Their success has inspired similar groups across the region, proving that when women unite, entire communities prosper.",
      date: "February 2024",
      impact: "200 women farmers empowered"
    },
    {
      title: "Youth Return to Farming",
      location: "Torit, Eastern Equatoria",
      summary: "Modern agricultural techniques attract young people back to sustainable farming",
      image: "/lovable-uploads/c492242c-94f0-490c-82c6-288564a363f4.png",
      fullStory: "In Torit, young people were abandoning agriculture for urban migration, leaving elderly farmers to struggle alone. CARD's youth engagement program changed this narrative by introducing modern farming techniques and entrepreneurship training. Joseph, 24, returned from Juba to establish a model farm using precision agriculture and solar-powered irrigation. His success attracted 50 other young people who now lead agricultural innovation in their communities. These youth-led initiatives have increased regional food production by 60% and created sustainable employment opportunities that keep families together.",
      date: "January 2024",
      impact: "50 young farmers trained"
    },
    {
      title: "Solar-Powered Irrigation Success",
      location: "Wau, Western Bahr el Ghazal",
      summary: "Renewable energy solution enables year-round farming in drought-prone areas",
      image: "/lovable-uploads/a1d51629-89a7-4160-bbc2-c3b75b2725f9.png",
      fullStory: "Water scarcity in Wau had limited farming to just one season per year, forcing communities to rely on food aid during dry periods. The installation of solar-powered irrigation systems transformed this reality. Farmer Peter Deng now grows vegetables year-round, harvesting fresh produce even during the driest months. The solar panels power water pumps that draw from a nearby borehole, irrigating 50 hectares of community farmland. This innovation has eliminated seasonal hunger and created a reliable income source for 300 families. The success has led to requests for similar systems in 15 other communities.",
      date: "December 2023",
      impact: "300 families with year-round food"
    },
    {
      title: "Livestock Health Program Impact",
      location: "Warrap State",
      summary: "Mobile veterinary services save cattle and improve food security for pastoralists",
      image: "/lovable-uploads/bf7c1f2b-d2d4-4b03-a108-f223289776fe.png",
      fullStory: "For pastoralist communities in Warrap State, cattle are not just livestock—they're life itself. When diseases struck the herds, families faced both economic and nutritional disaster. CARD's mobile veterinary program brings professional animal health services directly to remote communities. Veterinarian Dr. James travels with his team to provide vaccinations, treatment, and health education. Their interventions have reduced cattle mortality by 80% and improved milk production by 150%. Healthy cattle mean secure livelihoods, better nutrition for children, and preserved cultural traditions for these proud pastoralist communities.",
      date: "November 2023",
      impact: "5,000 cattle protected"
    },
    {
      title: "Market Access Transforms Lives",
      location: "Nimule, Central Equatoria",
      summary: "Direct market linkages help farmers get fair prices for their produce",
      image: "/lovable-uploads/6ec63915-221d-4322-9674-b06712028084.png",
      fullStory: "Farmers in Nimule produced excellent crops but struggled with market access, often selling to middlemen at unfairly low prices. CARD established direct market linkages connecting farmers to urban buyers and exporters. The program includes mobile market information systems that provide real-time price updates and quality standards training. Farmer Sarah's tomato sales increased from 500 SSP to 2,000 SSP per bag within six months. The cooperative she joined now supplies vegetables to restaurants in Juba and has secured contracts with international buyers. This direct market access has doubled farmer incomes and improved food distribution chains.",
      date: "October 2023",
      impact: "80% increase in farmer income"
    }
  ];

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
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png" 
                alt="Community gathering in South Sudan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Failed to load featured story image');
                  e.currentTarget.style.display = 'none';
                }}
              />
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
                  title: "From Subsistence to Prosperity",
                  location: "Juba, South Sudan",
                  fullStory: "Meet Mary Akech, a farmer from Juba who transformed her small plot into a thriving agricultural business through CARD's seed distribution and training program. Her story demonstrates the power of agricultural innovation and community support. Through dedicated training sessions and access to drought-resistant seeds, Mary learned sustainable farming techniques that tripled her harvest. Today, she leads a women's cooperative that supports 50 other female farmers in her community. The ripple effects of her success have created employment opportunities, improved child nutrition, and strengthened the entire community's resilience.",
                  image: "/lovable-uploads/3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png",
                  impact: "Transformed 50 families' livelihoods",
                  date: "March 2024"
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
            {stories.map((story, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Failed to load story image: ${story.image}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-600 text-sm font-medium">{story.location}</span>
                    <span className="text-gray-500 text-sm">{story.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 text-sm font-medium">{story.impact}</span>
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
              <img 
                src={selectedStory.image} 
                alt={selectedStory.title}
                className="w-full h-64 object-cover"
              />
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
                <span className="text-gray-500">{selectedStory.date}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedStory.title}</h1>
              <div className="mb-6">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedStory.impact}
                </span>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedStory.fullStory}</p>
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