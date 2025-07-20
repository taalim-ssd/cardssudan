
import React from 'react';
import LeafletMap from '../components/LeafletMap';
import { getStorageImageUrl } from "@/utils/imageUtils";

const WhereWeWork = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-emerald-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 animate-slide-in-left">Where We Work</h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl animate-slide-in-right [animation-delay:0.2s]">
            Our programs span across rural regions, bringing sustainable development to communities that need it most
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 animate-slide-in-left">Our Reach</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto animate-slide-in-right [animation-delay:0.3s]">
              We work in remote and underserved rural areas across multiple regions in South Sudan
            </p>
          </div>
          
          {/* Interactive Leaflet Map */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <LeafletMap 
              height="300px" 
              className="sm:h-96 lg:h-[500px] xl:h-[600px]" 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Eastern Equatoria</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Primary operational area focusing on agricultural development and water access programs
              </p>
              <div className="text-emerald-600 font-medium text-sm sm:text-base">
                <p>• 25 Active Communities</p>
                <p>• 12,000+ Beneficiaries</p>
                <p>• Water & Agriculture Focus</p>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Central Equatoria</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Supporting communities with livelihood diversification and food security programs
              </p>
              <div className="text-emerald-600 font-medium text-sm sm:text-base">
                <p>• 18 Active Communities</p>
                <p>• 8,500+ Beneficiaries</p>
                <p>• Food Security Focus</p>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Western Equatoria</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Enhancing agricultural productivity and market access for farming communities
              </p>
              <div className="text-emerald-600 font-medium text-sm sm:text-base">
                <p>• 35 Active Communities</p>
                <p>• 15,500+ Beneficiaries</p>
                <p>• Market Access Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12 lg:mb-16 animate-slide-in-left">Featured Locations</h2>
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Agricultural development training and community participation in Kapoeta East"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 animate-slide-in-right [animation-delay:0.2s]">Kapoeta East County</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed animate-fade-slide-up [animation-delay:0.4s]">
                  Active community participation in agricultural development and infrastructure projects in Kapoeta East County. 
                  Local community members engage in hands-on training and collaborative work sessions that build both 
                  technical skills and strengthen community bonds for sustainable development outcomes.
                </p>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-700">
                  <p><strong>Focus Areas:</strong> Water Distribution, Agriculture, Community Development</p>
                  <p><strong>Active Communities:</strong> 25 villages across the county</p>
                  <p><strong>Direct Beneficiaries:</strong> 12,000+ people</p>
                  <p><strong>Programs:</strong> Water access, seed distribution, training & capacity building</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="lg:order-2 space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 animate-slide-in-left [animation-delay:0.2s]">Central Equatoria Programs</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Expanding our reach to Central Equatoria State, focusing on food security and resilience building. 
                  We're working with local leaders to develop sustainable infrastructure and emergency response systems 
                  that can withstand environmental and economic challenges.
                </p>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-700">
                  <p><strong>Focus Areas:</strong> Food Security, Emergency Preparedness, Market Access</p>
                  <p><strong>Active Communities:</strong> 18 villages and towns</p>
                  <p><strong>Direct Beneficiaries:</strong> 8,500+ people</p>
                  <p><strong>Programs:</strong> Nutrition support, disaster preparedness, livelihood development</p>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg lg:order-1">
                <img 
                  src={getStorageImageUrl('media', 'community/community-meetings.png', '/placeholder.svg')} 
                  alt="Community meetings and engagement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
