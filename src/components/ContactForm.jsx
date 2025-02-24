import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function ContactForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [status, setStatus] = useState({ sending: false, sent: false, error: null });

  const serviceTypes = [
    { id: 'general', label: 'General Maintenance' },
    { id: 'repairs', label: 'Repairs' },
    { id: 'renovations', label: 'Renovations' },
    { id: 'emergency', label: 'Emergency Service' },
    { id: 'estimate', label: 'Free Estimate' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    // Simulate sending
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus({ sending: false, sent: true, error: null });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`${theme.text} block mb-2 text-sm font-medium`}>
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#004d00] focus:ring-1 focus:ring-[#004d00] outline-none transition"
          />
        </div>
        <div>
          <label className={`${theme.text} block mb-2 text-sm font-medium`}>
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#004d00] focus:ring-1 focus:ring-[#004d00] outline-none transition"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`${theme.text} block mb-2 text-sm font-medium`}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#004d00] focus:ring-1 focus:ring-[#004d00] outline-none transition"
          />
        </div>
        <div>
          <label className={`${theme.text} block mb-2 text-sm font-medium`}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#004d00] focus:ring-1 focus:ring-[#004d00] outline-none transition"
          />
        </div>
      </div>

      {/* Service Type */}
      <div>
        <label className={`${theme.text} block mb-2 text-sm font-medium`}>
          Service Needed
        </label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#004d00] focus:ring-1 focus:ring-[#004d00] outline-none transition"
        >
          <option value="">Select a service</option>
          {serviceTypes.map(type => (
            <option key={type.id} value={type.id}>{type.label}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className={`${theme.text} block mb-2 text-sm font-medium`}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#004d00] focus:ring-1 focus:ring-[#004d00] outline-none transition"
          placeholder="Please describe your maintenance needs..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.sending}
        className={`w-full btn btn-primary ${
          status.sending ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status.sending ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {status.sent && (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {status.error && (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg text-center">
          {status.error}
        </div>
      )}
    </form>
  );
}

export default ContactForm; 