import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1E1917] text-white">

      <div className="max-w-[90%] mx-auto px-6 py-12 md:py-16">
      <hr className="my-8 border-[#D2BEA5]" />
        {/* Top section with logo and link groups */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo & Contact */}
          <div className="mb-8 md:mb-0 md:max-w-xs">
            {/* Replace with your logo if available */}
            <h2 className="text-2xl font-bold">My Blog</h2>
            <p className="mt-4 text-sm">
              Reach out to me at <a href="mailto:formasitf@gmail.com" className="text-[#D2BEA5] hover:underline">formasitf@gmail.com</a>
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className="hover:text-[#D2BEA5] transition-colors" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="hover:text-[#D2BEA5] transition-colors" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} className="hover:text-[#D2BEA5] transition-colors" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="hover:text-[#D2BEA5] transition-colors" />
              </a>
            </div>
          </div>

          {/* Link Groups */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#D2BEA5] transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#D2BEA5]" />

        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mr-4 hover:text-[#D2BEA5] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D2BEA5] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
