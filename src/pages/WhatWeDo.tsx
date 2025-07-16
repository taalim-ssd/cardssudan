
const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">What We Do</h1>
          <p className="text-xl max-w-3xl">
            Discover our comprehensive programs and services designed to create sustainable change in rural communities across South Sudan
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Agricultural Development</h2>
              <p className="text-lg text-gray-600 mb-6">
                We support farmers and agricultural communities with modern farming techniques, 
                sustainable practices, and market access programs that increase productivity while 
                protecting the environment for future generations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Drought-resistant seed distribution and training
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Sustainable farming technique workshops
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Market linkage programs for fair pricing
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Crop diversification and rotation support
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Solar-powered irrigation systems
                </li>
              </ul>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/28a14471-0cd0-458a-a3d7-acc4378ce4b1.png" 
                alt="Agricultural development work in South Sudan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-96 rounded-lg overflow-hidden lg:order-1">
              <img 
                src="/lovable-uploads/e5975fb9-cf6a-468a-bfa3-bf4cc9795823.png" 
                alt="Education and training session in South Sudan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Education & Training</h2>
              <p className="text-lg text-gray-600 mb-6">
                Building human capacity through comprehensive education and skills development 
                programs that prepare communities for sustainable economic growth and food security.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Adult literacy programs in local languages
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Vocational skills training for youth
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Women's leadership development programs
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Agricultural extension training
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Digital literacy and mobile banking
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Food Security & Nutrition</h2>
              <p className="text-lg text-gray-600 mb-6">
                Addressing malnutrition and food insecurity through comprehensive programs that 
                ensure families have access to nutritious food year-round, especially during drought seasons.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Emergency food assistance during crises
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Nutrition education for mothers and children
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  School feeding programs
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Kitchen garden establishment
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Food storage and preservation training
                </li>
              </ul>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/7125d47e-f8b6-4ce7-b455-a0ec9c418627.png" 
                alt="Food security and nutrition programs in South Sudan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden lg:order-1">
              <img 
                src="/lovable-uploads/5d0a4f3a-1e7b-4c5c-8609-a8b8ad2bf573.png" 
                alt="Livestock and pastoralism programs in South Sudan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Livestock & Pastoralism</h2>
              <p className="text-lg text-gray-600 mb-6">
                Supporting pastoralist communities with veterinary services, livestock management 
                training, and sustainable grazing practices that protect both animals and environment.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Mobile veterinary clinics and services
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Livestock vaccination campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Pasture management and restoration
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Conflict resolution between farmers and herders
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Dairy processing and marketing training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Areas */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Program Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="/lovable-uploads/5d2017ce-b48b-4324-a195-b5d40538fd4a.png" 
                  alt="Community water infrastructure development project in Lowi Simon, Kapoeta East"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Water & Sanitation</h3>
                <p className="text-gray-600 mb-4">Community-led water infrastructure development in Lowi Simon village, Kapoeta East County</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Borehole drilling and maintenance</li>
                  <li>• Water point management training</li>
                  <li>• Hygiene education programs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="/lovable-uploads/95428baa-b2f2-42dc-a222-56d36f1f1c14.png" 
                  alt="Community market access programs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Market Access</h3>
                <p className="text-gray-600 mb-4">Connecting farmers to markets for better income opportunities</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Farmer group formation</li>
                  <li>• Value chain development</li>
                  <li>• Price information systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="/lovable-uploads/e24492a5-4a03-4120-b42e-d5dd236858c5.png" 
                  alt="Capacity building and community training programs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Capacity Building</h3>
                <p className="text-gray-600 mb-4">Strengthening local institutions and community organizations</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Community organization training</li>
                  <li>• Financial literacy programs</li>
                  <li>• Grant writing workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25,847</div>
              <div className="text-gray-600 font-medium">Farmers Trained</div>
              <div className="text-sm text-gray-500 mt-1">Across 8 states in South Sudan</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1,200</div>
              <div className="text-gray-600 font-medium">Community Health Workers</div>
              <div className="text-sm text-gray-500 mt-1">Providing rural healthcare</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">156,000</div>
              <div className="text-gray-600 font-medium">People Reached</div>
              <div className="text-sm text-gray-500 mt-1">Through our programs</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">340</div>
              <div className="text-gray-600 font-medium">Communities Served</div>
              <div className="text-sm text-gray-500 mt-1">In rural South Sudan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in transforming rural communities through sustainable agriculture and development programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
