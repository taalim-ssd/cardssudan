
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
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <img 
              src="/lovable-uploads/b6c0b34a-9d58-4849-82bf-aeb359fe8bb1.png" 
              alt="CARD Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block ml-8">{/* Navigation content stays the same */}
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
                    <div className="left-0 w-screen p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">About Us</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Our Story
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Mission & Vision
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Core Values
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Leadership</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Board of Directors
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Executive Team
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Advisory Council
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Governance</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Annual Reports
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Financial Transparency
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/who-we-are" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Partners & Donors
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    What We Do
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="left-0 w-screen p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-4 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Agriculture</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Crop Production
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Sustainable Farming
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Irrigation Systems
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Food Security</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Nutrition Programs
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Emergency Relief
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Food Distribution
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Capacity Building</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Skills Training
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Leadership Development
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Youth Programs
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Community</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Women's Empowerment
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Health & Wellness
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/what-we-do" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Infrastructure
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Where We Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="left-0 w-screen p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">South Sudan</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Central Equatoria
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Eastern Equatoria
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Western Equatoria
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Communities</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Rural Villages
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Farming Cooperatives
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Market Centers
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Impact</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Project Locations
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Success Metrics
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/where-we-work" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Future Expansion
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Stories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="left-0 w-screen p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Impact Stories</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Success Stories
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Personal Testimonials
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Case Studies
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Media</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Photo Gallery
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Video Documentaries
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Audio Stories
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Features</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Featured Stories
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Community Voices
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/stories" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Before & After
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="left-0 w-screen p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">News & Updates</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Latest News
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Program Updates
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Event Announcements
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Research</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Research Reports
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Impact Studies
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Best Practices
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Insights</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Expert Opinions
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Policy Analysis
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/blog" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Thought Leadership
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="left-0 w-screen p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Volunteer</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Volunteer Opportunities
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Skills-Based Volunteering
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Group Volunteering
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Support</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Donate Now
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Monthly Giving
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Corporate Sponsorship
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Careers</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Job Opportunities
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Internships
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/get-involved" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Consultant Roles
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-700 data-[state=open]:bg-emerald-700">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="left-0 w-screen p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Get in Touch</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Contact Information
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Send a Message
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Schedule a Meeting
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Locations</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Main Office
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Field Offices
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Regional Centers
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-emerald-800 mb-3 pb-2 border-b-2 border-emerald-200">Inquiries</h3>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Media Inquiries
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              Partnership Requests
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded text-gray-700">
                              General Support
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
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
