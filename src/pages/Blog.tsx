
const Blog = () => {
  const posts = [
    {
      title: "Drought-Resistant Crops: A Game Changer for South Sudan",
      date: "March 15, 2024",
      category: "Agriculture",
      excerpt: "How sorghum and millet varieties are helping farmers survive extended dry seasons",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    },
    {
      title: "Women Leading Food Security in Rural Communities",
      date: "March 10, 2024",
      category: "Food Security",
      excerpt: "Female farmers drive innovation in vegetable production and nutrition education",
      image: "https://images.unsplash.com/photo-1594736797933-d0c19e8a7d93?w=400&h=300&fit=crop"
    },
    {
      title: "Solar-Powered Agriculture: Farming in the 21st Century",
      date: "March 5, 2024",
      category: "Technology",
      excerpt: "How renewable energy is revolutionizing irrigation and food processing",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop"
    },
    {
      title: "Post-Harvest Losses: Solutions That Work",
      date: "February 28, 2024",
      category: "Storage",
      excerpt: "Innovative storage techniques reduce crop waste by up to 80%",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"
    },
    {
      title: "Livestock Health: Protecting Community Assets",
      date: "February 22, 2024",
      category: "Animal Husbandry",
      excerpt: "Mobile veterinary services ensure healthy cattle and sustainable livelihoods",
      image: "https://images.unsplash.com/photo-1586771107045-b791e006b42a?w=400&h=300&fit=crop"
    },
    {
      title: "Market Linkages: Connecting Farmers to Buyers",
      date: "February 15, 2024",
      category: "Economics",
      excerpt: "Direct market access increases farmer income by 200%",
      image: "https://images.unsplash.com/photo-1566754089908-ac581afe4b96?w=400&h=300&fit=crop"
    },
    {
      title: "Nutrition Gardens: Growing Health at Home",
      date: "February 10, 2024",
      category: "Nutrition",
      excerpt: "Kitchen gardens provide families with year-round access to vitamins and minerals",
      image: "https://images.unsplash.com/photo-1595437193398-f24279553ca0?w=400&h=300&fit=crop"
    },
    {
      title: "Youth in Agriculture: The Future of Farming",
      date: "February 5, 2024",
      category: "Youth",
      excerpt: "Training programs attract young people to modern agricultural careers",
      image: "https://images.unsplash.com/photo-1623123616913-2c2b13511203?w=400&h=300&fit=crop"
    },
    {
      title: "Water Management: Every Drop Counts",
      date: "January 30, 2024",
      category: "Water",
      excerpt: "Efficient irrigation systems maximize crop yields with minimal water use",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-3xl">
            Insights, updates, and innovations in agriculture and food security from South Sudan and beyond
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop" 
                alt="Sustainable farming"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-emerald-600 font-medium">Featured Post</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-2">
                Building Food Security Through Climate-Smart Agriculture
              </h2>
              <p className="text-gray-500 mb-4">March 20, 2024 • Agriculture & Climate</p>
              <p className="text-lg text-gray-600 mb-6">
                As climate change intensifies, South Sudanese farmers are adopting innovative 
                agricultural practices that increase productivity while protecting the environment. 
                Discover the techniques that are transforming rural livelihoods.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-600 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-emerald-600 hover:text-emerald-800 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights and updates from the field
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
