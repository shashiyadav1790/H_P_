import React, { useState } from 'react';

export default function ContactSection() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.email && data.message) {
      setSuccess(true);
      setData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccess(false), 3000); // Reset message
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you. Fill out the form and we’ll respond shortly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-left font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={data.name}
              required
              onChange={e => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={data.email}
              required
              onChange={e => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Tell us what you're thinking..."
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={data.message}
              required
              onChange={e => setData({ ...data, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {success && (
          <div className="text-green-600 font-medium text-center animate-pulse">
            ✅ Message sent! We'll get back to you soon.
          </div>
        )}
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <iframe
          title="Google Map"
          className="w-full h-72 rounded-lg shadow-lg"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9527628077536!2d90.39018341538534!3d23.789086193248438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf35e64724f19f4f4!2sPhotography%20Studio!5e0!3m2!1sen!2sin!4v1647192851994!5m2!1sen!2sin"
        ></iframe>
      </div>
    </section>
  );
}
