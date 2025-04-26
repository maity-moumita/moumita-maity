"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const whatsappMessage = `Hello, I am ${name} (${email})%0A%0A${message}`;

    
    const phoneNumber = "917987011984"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
      <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Contact Me
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white/20 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white/20 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-white/20 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none"
        />

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          Send via WhatsApp <FaWhatsapp size={20} />
        </button>

        {sent && (
          <p className="text-green-400 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
