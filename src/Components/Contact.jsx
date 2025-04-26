"use client";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#f23557] to-[#ede862] bg-clip-text text-transparent">
        Contact Me
      </h2>

      <ContactForm />
    </div>
  );
};

export default Contact;
