import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { toast } from 'react-hot-toast';

const DemoFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Request submitted!');
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          company: '',
          details: '',
        });
        onClose(); 
      } else {
        toast.error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center px-4 py-6 sm:py-10">
        <Dialog.Panel className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 sm:p-10 relative max-h-150 overflow-y-auto">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">Request a Demo</h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {['full_name', 'email', 'phone', 'company'].map((field) => (
              <div key={field} className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  {field === 'full_name'
                    ? 'Full Name'
                    : field === 'email'
                    ? 'Email Address'
                    : field === 'phone'
                    ? 'Phone Number'
                    : 'Company / Website'}
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder={`Enter your ${field.replace('_', ' ')}`}
                  required
                />
              </div>
            ))}

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Additional Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Tell us about your requirements"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-all"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>

          <button
            onClick={onClose}
            className="absolute top-4 right-5 text-gray-500 hover:text-black text-2xl"
          >
            &times;
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DemoFormModal;
