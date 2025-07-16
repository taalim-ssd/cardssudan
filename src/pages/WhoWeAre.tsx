
const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl max-w-3xl">
            Learn about our mission, vision, and the dedicated team working to transform rural communities
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower rural communities through sustainable development initiatives that promote 
                economic growth, social equity, and environmental stewardship. We believe in community-led 
                solutions that create lasting positive change.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where rural communities thrive with dignity, prosperity, and resilience. 
                We envision self-sufficient communities that preserve their cultural heritage while 
                embracing innovation and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community-Centered</h3>
              <p className="text-gray-600">
                We believe communities know their needs best and support locally-driven solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental and economic sustainability guides all our programs and initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Transparency, accountability, and ethical practices in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-64 h-96 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/1c6a16b6-2d75-43d7-947f-1ee7664f8eb5.png" 
                  alt="Alphonse Lotunyeny" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alphonse Lotunyeny</h3>
              <p className="text-emerald-600 mb-2">Executive Director</p>
              <p className="text-gray-600 text-sm">
                Leading rural development initiatives with expertise in community empowerment and sustainable agricultural practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-64 h-96 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/2372c380-1e7f-4e91-8b2f-1c76730ac09c.png" 
                  alt="Emmy Lonyia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emmy Lonyia</h3>
              <p className="text-emerald-600 mb-2">Program Manager</p>
              <p className="text-gray-600 text-sm">
                Coordinating programs and ensuring effective implementation of development projects across farming and pastoralist communities
              </p>
            </div>
            <div className="text-center">
              <div className="w-64 h-96 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/ca9d0e12-7c58-4ab8-85bd-212bd29f787e.png" 
                  alt="Jemimah Lomongin" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jemimah Lomongin</h3>
              <p className="text-emerald-600 mb-2">FSL Officer</p>
              <p className="text-gray-600 text-sm">
                Specialist in Food Security and Livelihoods programs, working directly with farmers and pastoralists to improve food security
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
