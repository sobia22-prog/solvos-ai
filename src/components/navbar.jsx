import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import DemoFormModal from "./demoForm"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false); 

  const toggleModal = () => setShowDemoModal(!showDemoModal);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary font-poppins">
            <img src="/logo.png" className="w-8" />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Button text="Get a Demo" onClick={toggleModal} />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center justify-end px-4 pb-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Button text="Get a Demo" onClick={toggleModal} />
          </div>
        )}
      </nav>

      <DemoFormModal isOpen={showDemoModal} onClose={toggleModal} />
    </>
  );
};

export default Navbar;
