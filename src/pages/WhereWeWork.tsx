
const WhereWeWork = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Where We Work</h1>
          <p className="text-xl max-w-3xl">
            Our programs span across rural regions, bringing sustainable development to communities that need it most
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Reach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work in remote and underserved rural areas across multiple regions
            </p>
          </div>
          
          {/* Placeholder for map */}
          <div className="h-96 bg-emerald-100 rounded-lg mb-12 flex items-center justify-center">
            <p className="text-emerald-700 text-lg">Interactive Map Coming Soon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mountain Regions</h3>
              <p className="text-gray-600 mb-4">
                Working with highland communities on sustainable agriculture and healthcare access
              </p>
              <div className="text-emerald-600 font-medium">
                • 45 Communities
                • 12,000 Beneficiaries
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Coastal Areas</h3>
              <p className="text-gray-600 mb-4">
                Supporting fishing communities with livelihood diversification and education
              </p>
              <div className="text-emerald-600 font-medium">
                • 35 Communities
                • 8,500 Beneficiaries
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Plains & Valleys</h3>
              <p className="text-gray-600 mb-4">
                Enhancing agricultural productivity and market access for farming communities
              </p>
              <div className="text-emerald-600 font-medium">
                • 70 Communities
                • 29,500 Beneficiaries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Locations</h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="h-64 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/989143b2-4bef-44dd-af20-72164ae91801.png" 
                  alt="Community engagement in South Sudan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Green Valley Region</h3>
                <p className="text-gray-600 mb-4">
                  Our flagship program location where we've been working for over 15 years. 
                  This region has seen remarkable transformation in agricultural productivity 
                  and community health outcomes.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Focus Areas:</strong> Sustainable Agriculture, Education, Healthcare</p>
                  <p><strong>Communities:</strong> 25 villages</p>
                  <p><strong>Population:</strong> 15,000 people</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Riverside District</h3>
                <p className="text-gray-600 mb-4">
                  A newer program area focusing on flood-resilient agriculture and community 
                  preparedness. We're working with local leaders to build sustainable 
                  infrastructure and emergency response systems.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Focus Areas:</strong> Disaster Preparedness, Water Management</p>
                  <p><strong>Communities:</strong> 18 villages</p>
                  <p><strong>Population:</strong> 8,200 people</p>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden lg:order-1">
                <img 
                  src="/lovable-uploads/9bec6d44-5bfe-4c63-aaa4-3e3de495e60e.png" 
                  alt="Community meetings and engagement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereWeWork;
