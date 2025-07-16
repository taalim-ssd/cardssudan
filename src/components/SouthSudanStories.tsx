
const SouthSudanStories = () => {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1594736797933-d0c19e8a7d93?w=400&h=300&fit=crop",
      title: "Women's Farming Cooperative in Juba",
      caption: "Local women formed a cooperative to share farming tools and knowledge, increasing crop yields by 40%"
    },
    {
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop",
      title: "Seed Distribution Program",
      caption: "CARD distributed drought-resistant seeds to 500 families in Eastern Equatoria State"
    },
    {
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop",
      title: "Clean Water Access Project",
      caption: "New borehole provides clean water for irrigation and drinking in Yei County"
    },
    {
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
      title: "Nutrition Education Workshop",
      caption: "Community health workers teach mothers about balanced diets using local foods"
    },
    {
      image: "https://images.unsplash.com/photo-1594736797933-d0c19e8a7d93?w=400&h=300&fit=crop",
      title: "Vegetable Garden Training",
      caption: "Farmers learn intercropping techniques to maximize small plot productivity"
    },
    {
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
      title: "Livestock Vaccination Drive",
      caption: "Mobile veterinary teams vaccinate cattle against diseases in Warrap State"
    },
    {
      image: "https://images.unsplash.com/photo-1610074560147-e75a4c1e6302?w=400&h=300&fit=crop",
      title: "Youth Agricultural Training",
      caption: "Young farmers learn modern techniques at the Torit Agricultural Center"
    },
    {
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&h=300&fit=crop",
      title: "Market Linkage Program",
      caption: "Farmers connect directly with buyers in Wau, eliminating middlemen"
    },
    {
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
      title: "Fish Farming Initiative",
      caption: "Community pond supports 50 families with protein and income in Mundri"
    },
    {
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      title: "Cassava Processing Center",
      caption: "New facility reduces post-harvest losses and adds value to crops"
    },
    {
      image: "https://images.unsplash.com/photo-1586771107045-b791e006b42a?w=400&h=300&fit=crop",
      title: "Goat Rearing Project",
      caption: "Families receive goats to improve nutrition and generate income"
    },
    {
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      title: "Maize Storage Facility",
      caption: "Climate-controlled storage prevents 80% of grain spoilage in Nimule"
    },
    {
      image: "https://images.unsplash.com/photo-1566754089908-ac581afe4b96?w=400&h=300&fit=crop",
      title: "Mobile Market Initiative",
      caption: "Truck brings fresh produce to remote villages in Kapoeta County"
    },
    {
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop",
      title: "Drought-Resistant Crop Trials",
      caption: "Testing sorghum varieties that can survive with minimal rainfall"
    },
    {
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      title: "Community Granary Project",
      caption: "Shared storage facility serves 200 households in Bor County"
    },
    {
      image: "https://images.unsplash.com/photo-1586771107045-b791e006b42a?w=400&h=300&fit=crop",
      title: "Beekeeping Training Program",
      caption: "Local honey production provides alternative income for farmers"
    },
    {
      image: "https://images.unsplash.com/photo-1595437193398-f24279553ca0?w=400&h=300&fit=crop",
      title: "School Garden Initiative",
      caption: "Students grow vegetables for school meals in Rumbek"
    },
    {
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop",
      title: "Solar-Powered Irrigation",
      caption: "Renewable energy system waters crops during dry season"
    },
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      title: "Women's Poultry Cooperative",
      caption: "Chicken farming provides eggs and income for 75 women in Malakal"
    },
    {
      image: "https://images.unsplash.com/photo-1623123616913-2c2b13511203?w=400&h=300&fit=crop",
      title: "Agricultural Extension Services",
      caption: "Field officers provide ongoing support to farmers in Lakes State"
    }
  ];

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
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm">{story.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SouthSudanStories;
