"use client";

const About = () => {
    return (
        <div id="about" className="flex flex-col items-center px-4 md:pb-5 py-16">
            <h2 className="text-4xl bg-gradient-to-r from-[#f23557] to-[#ede862] bg-clip-text text-transparent text-center mb-8 font-bold">
                About Me
            </h2>
            <p className="text-white/80 text-lg max-w-3xl leading-relaxed text-center tracking-wide backdrop-blur-sm px-4 md:px-6 py-4 rounded-lg bg-white/5 shadow-md transition-all duration-500">
                I'm a passionate Full Stack Web Developer skilled in MERN stack, Next.js, MySQL, and proficient in Core Java and Data Structures. Currently pursuing my engineering degree at Acropolis Institute of Technology, I thrive on building seamless digital experiences and robust backend systems.
                <br /><br />
                With a strong foundation in both frontend and backend development, I enjoy turning complex problems into clean, scalable solutions. Whether it's crafting dynamic UIs or optimizing server logic, I’m always eager to learn, improve, and stay updated with the latest in tech. My goal is to create applications that not only function flawlessly but also leave a lasting impression.
            </p>
        </div>

    )
}

export default About;