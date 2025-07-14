import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const Service_ID = import.meta.env.VITE_SERVICE_ID || "service_f8n0pzz";
  const Template_ID = import.meta.env.VITE_TEMPLATE_ID || "template_3gp71vi";
  const Public_Key = import.meta.env.VITE_PUBLIC_KEY || "RYm7ZUrD7dbufw7x7";

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: mail,
      message: message,
      to_name: "Shashi",
    };

    emailjs.send(Service_ID, Template_ID, templateParams, Public_Key).then(
      () => {
        setSuccess(true);
        setName("");
        setMail("");
        setMessage("");
        setTimeout(() => setSuccess(false), 3000);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
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
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-left font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={mail}
              required
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us what you're thinking..."
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
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
            title="Google Map - Hazaribag"
            className="w-full h-72 rounded-lg shadow-lg"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.308957679141!2d85.36417897504737!3d23.0073908164338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f482fd143c8c41%3A0x544b239dc58c8fc2!2sHazaribagh%2C%20Jharkhand%20825001!5e0!3m2!1sen!2sin!4v1720866016923!5m2!1sen!2sin"
          ></iframe>
        </div>

    </section>
  );
}
