import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div className="text-xl font-bold">CARD</div>
            </div>
            <p className="text-emerald-200 mb-4">
              Community Agency for Rural Development - Empowering communities through sustainable development initiatives.
            </p>
            <div className="text-emerald-300">
              <p>123 Rural Development A</p>
              <p>Private Bag Narus</p>
              <p>Phone: +211929968020,+211923031681</p>
              <p>Email: info@cardss.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><Link to="/who-we-are" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/what-we-do" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/where-we-work" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link to="/stories" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><Link to="/get-involved" className="hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/get-involved" className="hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/get-involved" className="hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-emerald-200 mb-4">Subscribe to our newsletter for updates on our impact.</p>
            <div className="space-y-2">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 bg-emerald-800 border border-emerald-700 rounded text-white placeholder-emerald-300 focus:outline-none focus:border-emerald-500" />
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-300">
          <p>&copy; 2024 Community Agency for Rural Development (CARD). All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;