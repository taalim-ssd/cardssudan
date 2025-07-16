
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-emerald-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div className="text-xl font-bold">CARD</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link to="/" className="px-4 py-2 hover:bg-emerald-700 rounded transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Who We Are
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <NavigationMenuLink asChild>
                        <Link to="/who-we-are" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          About CARD
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/who-we-are" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Our Mission & Vision
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/who-we-are" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Leadership Team
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/who-we-are" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Our History
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    What We Do
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <NavigationMenuLink asChild>
                        <Link to="/what-we-do" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Agricultural Development
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/what-we-do" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Food Security Programs
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/what-we-do" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Education & Training
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/what-we-do" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Community Development
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Where We Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <NavigationMenuLink asChild>
                        <Link to="/where-we-work" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          South Sudan Overview
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/where-we-work" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Regional Programs
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/where-we-work" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Community Partnerships
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/where-we-work" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Impact Areas
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Stories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <NavigationMenuLink asChild>
                        <Link to="/stories" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Success Stories
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/stories" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Community Testimonials
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/stories" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Photo Stories
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/stories" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Video Documentaries
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <NavigationMenuLink asChild>
                        <Link to="/blog" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Latest News
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/blog" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Research & Reports
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/blog" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Policy Updates
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/blog" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Expert Insights
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <NavigationMenuLink asChild>
                        <Link to="/get-involved" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Volunteer Opportunities
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/get-involved" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Donate Now
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/get-involved" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Corporate Partnerships
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/get-involved" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Join Our Team
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <NavigationMenuLink asChild>
                        <Link to="/contact" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Contact Information
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/contact" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Office Locations
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/contact" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Media Inquiries
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/contact" className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                          Partnership Requests
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-emerald-700 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-emerald-700">
            <div className="space-y-2">
              <Link to="/" className="block px-4 py-2 hover:bg-emerald-700 rounded">Home</Link>
              <Link to="/who-we-are" className="block px-4 py-2 hover:bg-emerald-700 rounded">Who We Are</Link>
              <Link to="/what-we-do" className="block px-4 py-2 hover:bg-emerald-700 rounded">What We Do</Link>
              <Link to="/where-we-work" className="block px-4 py-2 hover:bg-emerald-700 rounded">Where We Work</Link>
              <Link to="/stories" className="block px-4 py-2 hover:bg-emerald-700 rounded">Stories</Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-emerald-700 rounded">Blog</Link>
              <Link to="/get-involved" className="block px-4 py-2 hover:bg-emerald-700 rounded">Get Involved</Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-emerald-700 rounded">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
