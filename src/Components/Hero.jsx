"use client";

import { useEffect, useState } from "react";
import { FiFolder } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const texts = [
    "Next.js Developer",
    "Computer Science & Engg. Student",
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Problem Solver",
    "Backend Architect",
    "Future Software Engineer",
    "Tech Enthusiast",
  ];
  
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentText((prev) => prev + texts[textIndex].charAt(charIndex));
      setCharIndex((prev) => prev + 1);
    }, 80);

    if (charIndex === texts[textIndex].length) {
      clearTimeout(timeout);
      setTimeout(() => {
        setCharIndex(0);
        setCurrentText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Wait before switching to next text
    }

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    linkedin: 'https://www.linkedin.com/in/maity-moumita/',
    github: 'https://github.com/maity-moumita',
    instagram: 'https://www.instagram.com/_maity_moumita_',
  };

  return (
    <div id="hero">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <div className="my-5">
            <span className="p-2 border border-[#f23557] rounded-full bg-[#380e16] bg-gradient-to-r from-[#ede862] to-[#f23557] bg-clip-text text-transparent shadow-[0_0_15px_#f23557] hover:shadow-[0_0_25px_#f23557] transition-all duration-300">
              ✨Ready to Innovate
            </span>
          </div>
          <h1 className="text-6xl uppercase font-bold">Full Stack</h1>
          <h1 className="text-6xl uppercase font-bold pt-2 bg-gradient-to-r from-[#f23557] to-[#ede862] bg-clip-text text-transparent">
            Developer
          </h1>

          <div className="py-5 text-white text-xl font-semibold">
            {currentText}
            <span className="text-[#f23557]"> |</span>
          </div>

          <p className="text-white/70 text-lg">
            Building modern web solutions that are fast, flexible, and future-ready.
          </p>

          <div className="flex flex-wrap gap-4 my-4">
            {["JavaScript", "MERN", "Next.js", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="border border-white/50 text-white bg-white/20 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 mt-8">
            <button
              onClick={() => handleScroll('projects')}
              className="flex items-center gap-2 text-white px-8 py-2 rounded-xl shadow-[0_0_10px_#f23557] bg-black border border-black hover:shadow-[0_0_20px_#f23557] transition-all duration-300"
            >
              Projects
              <FiFolder />
            </button>

            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center gap-2 text-white px-8 py-2 rounded-xl shadow-[0_0_10px_#f23557] bg-black border border-black hover:shadow-[0_0_20px_#f23557] transition-all duration-300"
            >
              Contact
              <MdOutlineContactMail />
            </button>
          </div>

          <div className="flex gap-6 mt-8">
            <span
              onClick={() => window.open(links.linkedin, "_blank")}
              className="cursor-pointer flex items-center justify-center p-3 rounded-xl bg-[#f23557]/40 hover:bg-[#f23557]/70 text-white transition-all duration-300"
            >
              <FaLinkedin />
            </span>
            <span
              onClick={() => window.open(links.github, "_blank")}
              className="cursor-pointer flex items-center justify-center p-3 rounded-xl bg-[#f23557]/40 hover:bg-[#f23557]/70 text-white transition-all duration-300"
            >
              <FaGithub />
            </span>
            <span
              onClick={() => window.open(links.instagram, "_blank")}
              className="cursor-pointer flex items-center justify-center p-3 rounded-xl bg-[#f23557]/40 hover:bg-[#f23557]/70 text-white transition-all duration-300"
            >
              <FaInstagram />
            </span>
          </div>
        </div>

        {/* Image Section (hidden on small screens) */}
        <div className="hidden lg:flex lg:w-1/2 justify-center">
          <div className="w-full max-w-[500px] p-4">
            <img
              src="/Girl.jpeg" // Replace with your image path
              alt="Technical Illustration"
              className="w-full h-auto rounded-xl shadow-xl bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
