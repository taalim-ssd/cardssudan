import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ImageGallery from "../components/ImageGallery";
import SouthSudanStories from "../components/SouthSudanStories";
import { InlineEditableText } from "../components/InlineEditableText";
const Index = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{
        backgroundImage: "url('/lovable-uploads/3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png')"
      }}></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">
            Empowering Rural Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-right [animation-delay:0.3s]">
            Building sustainable futures through community-driven development initiatives across rural regions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-emerald-500 hover:bg-emerald-400 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              Get Involved
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/what-we-do" className="border border-white hover:bg-white hover:text-emerald-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">150+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">50K+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">25</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">100%</div>
              <div className="text-gray-600">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-in-left">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-in-right [animation-delay:0.2s]">
              We work across multiple sectors to create comprehensive and sustainable development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-emerald-500">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img src="/lovable-uploads/b972445d-ae0b-4a40-99c1-d7cd9c2962f2.png" alt="Community-driven agricultural development and water infrastructure in South Sudan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 animate-fade-slide-up [animation-delay:0.4s]">Agricultural Development</h3>
              <p className="text-gray-600 mb-4">
                Community members actively participate in infrastructure development combining agricultural training with water access initiatives
              </p>
              <Link to="/what-we-do" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-emerald-500">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img src="/lovable-uploads/7125d47e-f8b6-4ce7-b455-a0ec9c418627.png" alt="Food Security" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 animate-fade-slide-up [animation-delay:0.6s]">Food Security</h3>
              <InlineEditableText
                contentKey="food-security-description"
                defaultText="Ensuring reliable access to nutritious food through sustainable farming in kappea"
                className="text-gray-600 mb-4"
                pagePath="/"
              />
              <Link to="/what-we-do" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-emerald-500">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Capacity Building" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 animate-fade-slide-up [animation-delay:0.8s]">Capacity Building</h3>
              <p className="text-gray-600 mb-4">Emmy Lonyia (Program Manager) training farmers and communities in modern agricultural techniques</p>
              <Link to="/what-we-do" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture & Food Security Gallery */}
      <ImageGallery />

      {/* South Sudan Stories */}
      <SouthSudanStories />

      {/* Call to Action */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-slide-in-left">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating sustainable change in rural communities. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-emerald-500 hover:bg-emerald-400 px-8 py-3 rounded-lg font-semibold transition-colors">
              Volunteer Today
            </Link>
            <Link to="/contact" className="border border-white hover:bg-white hover:text-emerald-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;