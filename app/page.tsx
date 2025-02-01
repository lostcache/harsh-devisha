{/* eslint-disable react/no-unescaped-entities */}
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNode, FaAws, FaGit, FaDocker, FaPython, FaJava, FaExternalLinkAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRust, SiZig, SiOcaml, SiC, SiCplusplus, SiExpress, SiFlask, SiDjango, SiMongodb, SiGooglecloud, SiNextdotjs } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import Image from 'next/image';
import { projects } from './constants';

export default function Home() {
  const programmingLanguages = [
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl sm:text-5xl lg:text-6xl text-yellow-400 group-hover:scale-110 transition-transform" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl sm:text-5xl lg:text-6xl text-blue-500 group-hover:scale-110 transition-transform" /> },
    { name: 'Python', icon: <FaPython className="text-4xl sm:text-5xl lg:text-6xl text-blue-500 group-hover:scale-110 transition-transform" /> },
    { name: 'Rust', icon: <SiRust className="text-4xl sm:text-5xl lg:text-6xl text-orange-600 group-hover:scale-110 transition-transform" /> },
    { name: 'Zig', icon: <SiZig className="text-4xl sm:text-5xl lg:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" /> },
    { name: 'OCaml', icon: <SiOcaml className="text-4xl sm:text-5xl lg:text-6xl text-orange-500 group-hover:scale-110 transition-transform" /> },
    { name: 'C', icon: <SiC className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 group-hover:scale-110 transition-transform" /> },
    { name: 'C++', icon: <SiCplusplus className="text-4xl sm:text-5xl lg:text-6xl text-blue-700 group-hover:scale-110 transition-transform" /> },
    { name: 'Java', icon: <FaJava className="text-4xl sm:text-5xl lg:text-6xl text-red-500 group-hover:scale-110 transition-transform" /> }
  ];

  const technologies = [
    { name: 'React', icon: <FaReact className="text-4xl sm:text-5xl lg:text-6xl text-blue-400 group-hover:scale-110 transition-transform" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl sm:text-5xl lg:text-6xl text-black group-hover:scale-110 transition-transform" /> },
    { name: 'Node.js', icon: <FaNode className="text-4xl sm:text-5xl lg:text-6xl text-green-600 group-hover:scale-110 transition-transform" /> },
    { name: 'Express', icon: <SiExpress className="text-4xl sm:text-5xl lg:text-6xl group-hover:scale-110 transition-transform" /> },
    { name: 'Flask', icon: <SiFlask className="text-4xl sm:text-5xl lg:text-6xl group-hover:scale-110 transition-transform" /> },
    { name: 'Django', icon: <SiDjango className="text-4xl sm:text-5xl lg:text-6xl text-green-800 group-hover:scale-110 transition-transform" /> },
    { name: 'SQL', icon: <TbSql className="text-4xl sm:text-5xl lg:text-6xl text-blue-500 group-hover:scale-110 transition-transform" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl sm:text-5xl lg:text-6xl text-green-500 group-hover:scale-110 transition-transform" /> },
    { name: 'Google Cloud', icon: <SiGooglecloud className="text-4xl sm:text-5xl lg:text-6xl text-blue-500 group-hover:scale-110 transition-transform" /> },
    { name: 'AWS', icon: <FaAws className="text-4xl sm:text-5xl lg:text-6xl text-orange-500 group-hover:scale-110 transition-transform" /> },
    { name: 'Git', icon: <FaGit className="text-4xl sm:text-5xl lg:text-6xl text-orange-600 group-hover:scale-110 transition-transform" /> },
    { name: 'Docker', icon: <FaDocker className="text-4xl sm:text-5xl lg:text-6xl text-blue-500 group-hover:scale-110 transition-transform" /> }
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-4 sm:px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <h1 className="text-xl sm:text-2xl font-bold mr-4">Harsh Devisha</h1>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:harshdevisha91@gmail.com" className="text-2xl hover:text-gray-300 transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-white" id="about">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">About Me</h2>
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Hi! I'm a <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Software Engineer</span> with 2 years of professional experience as a <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Full-Stack Developer</span>. My core interests lie in <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Distributed Systems</span>, <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Concurrency</span>, and <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Systems Programming</span>.
            </p>
            <p className="mb-4">
              I'm passionate about exploring new programming languages, currently learning <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Zig</span> and <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">OCaml</span>. My research interests focus on <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Federated Learning</span> and <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">Hybrid Federated Learning Systems</span>.
            </p>
          </div>
        </div>
      </section>

            {/* Projects Section */}
        <section className="py-16 sm:py-20 bg-white" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative h-full bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  {/* Card Content */}
                  <div className="relative flex flex-col h-full bg-white m-[2px] rounded-[10px] p-6 z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <div className="flex items-center gap-4 mt-2 sm:mt-0">
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                          >
                            <span className="mr-2">Visit</span>
                            <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform" />
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                          >
                            <FaGithub className="text-xl" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow">
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      {project.bulletPoints && (
                        <ul className="list-disc ml-5 space-y-1 text-gray-500 flex-grow">
                          {project.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 bg-gray-50" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">Skills</h2>
          
          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {programmingLanguages.map((lang) => (
                <div key={lang.name} className="group bg-white p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="mb-4">{lang.icon}</div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">{lang.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Tools */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="group bg-white p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="mb-4">{tech.icon}</div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-50" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              I'm always open to new opportunities and collaborations.
            </p>
            <a
              href="mailto:harshdevisha91@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm sm:text-base text-gray-600 bg-white">
        <p>© {new Date().getFullYear()} Harsh Devisha. All rights reserved.</p>
      </footer>
    </main>
  );
}
