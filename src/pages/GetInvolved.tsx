
const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl max-w-3xl">
            Join us in creating lasting change in rural communities. There are many ways you can make a difference.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 text-3xl font-bold">V</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your skills and time to directly impact communities. We have opportunities for 
                professionals, students, and anyone passionate about rural development.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• Field work opportunities</li>
                <li>• Virtual support roles</li>
                <li>• Skills-based volunteering</li>
                <li>• Short and long-term commitments</li>
              </ul>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors w-full">
                Apply to Volunteer
              </button>
            </div>

            {/* Donate */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 text-3xl font-bold">$</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Your financial support helps us reach more communities and expand our programs. 
                Every contribution, big or small, makes a real difference.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• One-time donations</li>
                <li>• Monthly giving programs</li>
                <li>• Corporate partnerships</li>
                <li>• Memorial and tribute gifts</li>
              </ul>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors w-full">
                Donate Now
              </button>
            </div>

            {/* Partner */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 text-3xl font-bold">P</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Partner</h3>
              <p className="text-gray-600 mb-6">
                Organizations and institutions can partner with us to amplify impact. 
                We collaborate with governments, businesses, and other NGOs.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• Corporate social responsibility</li>
                <li>• Research collaborations</li>
                <li>• Government partnerships</li>
                <li>• Resource sharing agreements</li>
              </ul>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors w-full">
                Explore Partnerships
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Support */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$25</div>
              <p className="text-gray-600">Provides school supplies for one child for a month</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$50</div>
              <p className="text-gray-600">Funds a week of community health worker training</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$100</div>
              <p className="text-gray-600">Supports a farmer through one growing season</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$500</div>
              <p className="text-gray-600">Establishes a community learning center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter and Updates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get updates on our programs and see the impact of your support
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
