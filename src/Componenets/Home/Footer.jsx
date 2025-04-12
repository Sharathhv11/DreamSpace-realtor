import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Dreamspace Realtors</h2>
          <p>Your dream home awaits with Dreamspace Realtors. We offer the best real estate services to help you find the perfect property.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#11" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div id="contact">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: dreamspacerealtors@gmail.com</p>
          <p>Phone: +91 93806 06225</p>
          <p>Address: vijaynagar 2nd stage Hassan 573201</p>
          <div className="mt-4 flex space-x-4">
            {/* <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a> */}
            <a href="https://www.instagram.com/dreamspace_.realtors/?utm_source=ig_web_button_share_sheet" aria-label="Instagram" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
            {/* <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-gray-400"><FaLinkedin size={24} /></a> */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2025 Dreamspace Realtors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;