import { useState } from 'react';
import DemoFormModal from './demoForm'; 

const Contact = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const toggleModal = () => setShowDemoModal((prev) => !prev);

  return (
    <div className="flex flex-col justify-between px-6 py-12 bg-black">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6 px-10">
          <div>
            <h2 className="text-xl font-semibold">📧 Email</h2>
            <p className="text-gray-600">abuzar@solvos.ai</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">📞 Phone</h2>
            <p className="text-gray-600">+92 309 1544445</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">📍 Address</h2>
            <p className="text-gray-600">Office 1, Bahria Town, Lahore</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <p className="text-gray-600 mb-4">Click below to make your demo request now!</p>
          <button
            onClick={toggleModal}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-primary transition"
          >
            Contact
          </button>
        </div>
      </div>

      <DemoFormModal isOpen={showDemoModal} onClose={toggleModal} />

      <div className="w-full h-64">
        <iframe
          className="w-full h-full rounded-xl border"
          src="https://maps.google.com/maps?q=lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
