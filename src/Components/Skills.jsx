"use client";

const Skills = () => {
  return (
    <div id="skills" className="py-10 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#f23557] to-[#ede862] bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 justify-center">
        {/* Skill Item */}
        <div className="skill-item bg-white/5">
          <span className="skill-text">React</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">Next.js</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">MongoDB</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">Express.js</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">Node.js</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">HTML5</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">CSS3</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">MySQL</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">JavaScript</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">GitHub</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">Git</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">Python</span>
        </div>

        <div className="skill-item bg-white/5">
          <span className="skill-text">Postman</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
