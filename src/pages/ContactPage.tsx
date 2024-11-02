import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about CloudPulse or need support? We're here to help. Fillout the form, and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
            <div className="space-y-6">
              <ContactInfo
                icon={<Mail className="h-6 w-6 text-green-500" />}
                title="Email"
                content="support@cloudpulse.com"
              />
              <ContactInfo
                icon={<Phone className="h-6 w-6 text-green-500" />}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<MapPin className="h-6 w-6 text-green-500" />}
                title="Address"
                content="123 Green Street, Eco City, EC 12345, United States"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default ContactPage;