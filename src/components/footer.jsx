import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaHome,
  FaStar,
  FaDollarSign,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Solvos AI</h2>
            <p className="text-gray-600">
              We automate your daily tasks so you save time, cut costs, and run your business with ease.
            </p>
          </div>
          <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-500" />
                <span>+92 309 1544445</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-500" />
                <span>abuzar@solvos.ai</span>
              </div>
            </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2 hover:text-black transition">
              <FaHome className="text-gray-500" />
              <a href="#">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:text-black transition">
              <FaStar className="text-gray-500" />
              <a href="#">Features</a>
            </li>
            <li className="flex items-center gap-2 hover:text-black transition">
              <FaDollarSign className="text-gray-500" />
              <a href="#">Pricing</a>
            </li>
            <li className="flex items-center gap-2 hover:text-black transition">
              <FaEnvelope className="text-gray-500" />
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Solvos AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
