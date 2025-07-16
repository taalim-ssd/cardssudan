
const Blog = () => {
  const posts = [
    {
      title: "Drought-Resistant Crops: A Game Changer for South Sudan",
      date: "March 15, 2024",
      category: "Agriculture",
      excerpt: "How sorghum and millet varieties are helping farmers survive extended dry seasons",
      image: "/lovable-uploads/e200fbed-1014-4ab9-ab6e-8d76106dd2be.png"
    },
    {
      title: "Women Leading Food Security in Rural Communities",
      date: "March 10, 2024",
      category: "Food Security",
      excerpt: "Female farmers drive innovation in vegetable production and nutrition education",
      image: "/lovable-uploads/18065890-ca1d-417c-8a2f-812b97eb3c3f.png"
    },
    {
      title: "Solar-Powered Agriculture: Farming in the 21st Century",
      date: "March 5, 2024",
      category: "Technology",
      excerpt: "How renewable energy is revolutionizing irrigation and food processing",
      image: "/lovable-uploads/b365df88-4601-4cf3-99ce-8900d5aa39fa.png"
    },
    {
      title: "Post-Harvest Losses: Solutions That Work",
      date: "February 28, 2024",
      category: "Storage",
      excerpt: "Innovative storage techniques reduce crop waste by up to 80%",
      image: "/lovable-uploads/7e77a94c-07f5-450c-a535-0fe58e161bd9.png"
    },
    {
      title: "Livestock Health: Protecting Community Assets",
      date: "February 22, 2024",
      category: "Animal Husbandry",
      excerpt: "Mobile veterinary services ensure healthy cattle and sustainable livelihoods",
      image: "/lovable-uploads/dfcb6968-46d0-4bca-b81a-55af1420d366.png"
    },
    {
      title: "Market Linkages: Connecting Farmers to Buyers",
      date: "February 15, 2024",
      category: "Economics",
      excerpt: "Direct market access increases farmer income by 200%",
      image: "/lovable-uploads/ffb0784f-027e-4b2e-bd2f-11698e0250fb.png"
    },
    {
      title: "Nutrition Gardens: Growing Health at Home",
      date: "February 10, 2024",
      category: "Nutrition",
      excerpt: "Kitchen gardens provide families with year-round access to vitamins and minerals",
      image: "/lovable-uploads/d3a7f42f-f187-419a-9a1c-4be4b201a37f.png"
    },
    {
      title: "Youth in Agriculture: The Future of Farming",
      date: "February 5, 2024",
      category: "Youth",
      excerpt: "Training programs attract young people to modern agricultural careers",
      image: "/lovable-uploads/0a381cab-b666-4974-bf27-76f88701ecec.png"
    },
    {
      title: "Water Management: Every Drop Counts",
      date: "January 30, 2024",
      category: "Water",
      excerpt: "Efficient irrigation systems maximize crop yields with minimal water use",
      image: "/lovable-uploads/dfdcc7b8-d2f2-4c31-9fde-befb2fae0326.png"
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
                src="/lovable-uploads/704d4949-6a97-4f68-b782-465dd3a9e61e.png" 
                alt="Community engagement and training"
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
