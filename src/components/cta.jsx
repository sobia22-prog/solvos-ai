import { useState } from "react";
import DemoFormModal from "./demoForm";

const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false); 
  
    const toggleModal = () => setShowDemoModal(!showDemoModal);
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to take the next step?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Join Solvos AI today and unlock smarter solutions for your workflow.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={toggleModal} className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Get A Demo
          </button>
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
      </div>
      <DemoFormModal isOpen={showDemoModal} onClose={toggleModal} />
    </section>
  );
};

export default CTA;
