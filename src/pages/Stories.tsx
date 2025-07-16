
import SouthSudanStories from "../components/SouthSudanStories";

const Stories = () => {
  const stories = [
    {
      title: "From Food Insecurity to Agricultural Success",
      location: "Juba, South Sudan",
      summary: "How drought-resistant seeds and training transformed a community's food security",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      title: "Women's Cooperative Feeds the Community",
      location: "Yei County",
      summary: "Female farmers unite to share resources and knowledge, tripling vegetable production",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"
    },
    {
      title: "Youth Return to Farming",
      location: "Torit, Eastern Equatoria",
      summary: "Modern agricultural techniques attract young people back to sustainable farming",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    },
    {
      title: "Solar-Powered Irrigation Success",
      location: "Wau, Western Bahr el Ghazal",
      summary: "Renewable energy solution enables year-round farming in drought-prone areas",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop"
    },
    {
      title: "Livestock Health Program Impact",
      location: "Warrap State",
      summary: "Mobile veterinary services save cattle and improve food security for pastoralists",
      image: "https://images.unsplash.com/photo-1586771107045-b791e006b42a?w=400&h=300&fit=crop"
    },
    {
      title: "Market Access Transforms Lives",
      location: "Nimule, Central Equatoria",
      summary: "Direct market linkages help farmers get fair prices for their produce",
      image: "https://images.unsplash.com/photo-1566754089908-ac581afe4b96?w=400&h=300&fit=crop"
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
                src="https://images.unsplash.com/photo-1594736797933-d0c19e8a7d93?w=600&h=400&fit=crop" 
                alt="Farmers in field"
                className="w-full h-full object-cover"
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
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors">
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
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-emerald-600 text-sm font-medium">{story.location}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-1">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.summary}</p>
                  <button className="text-emerald-600 hover:text-emerald-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
