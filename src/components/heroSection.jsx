import { useState } from "react";
import Button from "./button";
import DemoFormModal from "./demoForm";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false); 
  
    const toggleModal = () => setShowDemoModal(!showDemoModal);

  return (
    <div>
    <section className="bg-black py-16 relative z-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Get More Done Without Working More.
      </h1>
      <p className="text-lg text-gray-300">
        We automate your daily tasks so you save time, cut costs, and run your business with ease.
      </p>
      <Button
        text="Get a Demo"
        classes="bg-white !text-black"
       onClick={toggleModal}
      />
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

    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img
        src="/ai-agent.png"
        alt="Hero Image"
        className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
<DemoFormModal isOpen={showDemoModal} onClose={toggleModal} />
    </div>
    
  );
};

export default HeroSection;
