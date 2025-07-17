
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-emerald-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div className="text-xl font-bold">CARD</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">{/* Navigation content stays the same */}
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
                    <div className="w-screen max-w-screen-xl mx-auto p-4 bg-white">
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
                    <div className="w-screen max-w-screen-xl mx-auto p-4 bg-white">
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
                    <div className="w-screen max-w-screen-xl mx-auto p-4 bg-white">
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
                    <div className="w-screen max-w-screen-xl mx-auto p-4 bg-white">
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
                    <div className="w-screen max-w-screen-xl mx-auto p-4 bg-white">
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
                    <div className="w-screen max-w-screen-xl mx-auto p-4 bg-white">
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
                    <div className="w-screen max-w-screen-xl mx-auto p-4 bg-white">
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
            className="lg:hidden p-2 hover:bg-emerald-700 rounded transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-emerald-700">
            <div className="space-y-2">
              <button onClick={() => handleMenuItemClick("/")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">Home</button>
              <button onClick={() => handleMenuItemClick("/who-we-are")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">Who We Are</button>
              <button onClick={() => handleMenuItemClick("/what-we-do")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">What We Do</button>
              <button onClick={() => handleMenuItemClick("/where-we-work")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">Where We Work</button>
              <button onClick={() => handleMenuItemClick("/stories")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">Stories</button>
              <button onClick={() => handleMenuItemClick("/blog")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">Blog</button>
              <button onClick={() => handleMenuItemClick("/get-involved")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">Get Involved</button>
              <button onClick={() => handleMenuItemClick("/contact")} className="block w-full text-left px-4 py-2 hover:bg-emerald-700 rounded">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
