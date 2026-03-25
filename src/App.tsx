import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Server,
  Terminal,
  Cpu,
  Layers,
  Download,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'API', href: '#api' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <Terminal className="w-6 h-6 text-accent" />
          <span>ASWIN</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-1.5 px-4 text-sm">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            AVAILABLE FOR HIRE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Robust <br />
            <span className="text-accent">Backend</span> Architectures.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Hi, I'm <span className="text-white font-medium">Aswin</span>. A Junior Backend Developer
            with a solid foundation in Node.js, Javascript, and MongoDB. I specialize in building APIs,
            managing databases, and implementing secure authentication systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aswin-roy-553735336" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:aswinroyrocks@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 glass p-8 rounded-2xl border-accent/20 shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs font-mono text-gray-500 ml-4">aswin_profile.json</div>
            </div>
            <pre className="font-mono text-sm leading-relaxed text-blue-400">
              <code>{`{
  "name": "Aswin",
  "role": "Junior Backend Developer",
  "location": "Tamil Nadu, India",
  "specialization": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs"
  ],
  "passion": "Building scalable systems",
  "status": "Ready to code"
}`}</code>
            </pre>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-400">
              Motivated Junior Backend Developer with a solid foundation in <span className="text-white">Node.js</span>,
              <span className="text-white">Javascript</span>, and <span className="text-white">MongoDB</span>.
              Experienced in creating APIs, managing databases, and implementing essential features like
              authentication, CRUD operations, and pagination.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Passionate about back-end programming, with a commitment to enhancing my expertise
              through problem-solving and continuous learning.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-accent font-bold text-3xl mb-1">2+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-accent font-bold text-3xl mb-1">10+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass p-6 rounded-xl">
              <Code2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-gray-500">Writing maintainable and readable code following best practices.</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <Database className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Database Design</h3>
              <p className="text-sm text-gray-500">Designing efficient schemas and optimizing queries for performance.</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <Server className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">API Dev</h3>
              <p className="text-sm text-gray-500">Building robust RESTful APIs with secure authentication.</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <Layers className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scalability</h3>
              <p className="text-sm text-gray-500">Focusing on systems that can grow with user demand.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["JavaScript (ES6+)", "Node.js", "Express.js"],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MongoDB Atlas", "SQL Basics"],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Backend Tools",
      skills: ["REST API Development", "JWT Authentication", "SMTP / EmailJS"],
      icon: <Terminal className="w-5 h-5" />
    },
    {
      title: "Dev Tools",
      skills: ["Git & GitHub", "Postman", "VS Code"],
      icon: <Github className="w-5 h-5" />
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl group hover:border-accent/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Experience & Education</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Layers className="text-accent" /> Work Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="text-sm font-mono text-accent mb-1">Jan 2025 - Mar 2025</div>
                <h4 className="text-xl font-bold">Back-End Development Intern</h4>
                <div className="text-gray-400 mb-2">Alo Educational Hub, Nagercoil</div>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Focused on backend development, exploring Node.js and database management architectures.
                </p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="text-sm font-mono text-accent mb-1">Jun 2025 - Jul 2025</div>
                <h4 className="text-xl font-bold">Java Development Intern</h4>
                <div className="text-gray-400 mb-2">Feather Softwares, Nagercoil</div>
              </div>
              <div className="relative pl-12 opacity-80">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent/50" />
                </div>
                <div className="text-sm font-mono text-gray-500 mb-1">Previous</div>
                <h4 className="text-lg font-bold">Team Lead / Manager</h4>
                <div className="text-gray-400 mb-1">Shibani Fashion (2 Years)</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Terminal className="text-accent" /> Education
            </h3>
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="text-sm font-mono text-accent mb-1">2023 - 2026</div>
                <h4 className="text-xl font-bold">B.E. Computer Science & Engineering</h4>
                <div className="text-gray-400 mb-2">Rohini College of Engineering, Palkulam</div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="text-sm font-mono text-accent mb-1">2019 - 2022</div>
                <h4 className="text-xl font-bold">Diploma in Mechanical</h4>
                <div className="text-gray-400 mb-2">Maria Polytechnic College, Kumarkankudi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Back-end Development", issuer: "Alo Educational Hub" },
              { title: "Java Training", issuer: "Chrysalis, Srishti Innovative" },
              { title: "Digital Productivity", issuer: "Infispark" }
            ].map((cert, idx) => (
              <div key={idx} className="glass p-6 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">{cert.title}</div>
                  <div className="text-sm text-gray-500">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const media = project?.media || [];

  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
  }, [isOpen]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % media.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + media.length) % media.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white z-50 bg-black/20 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Section */}
            <div className="w-full md:w-2/3 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
              {media.length > 0 ? (
                <>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full"
                    >
                      {media[currentSlide].type === 'video' ? (
                        <video
                          src={media[currentSlide].url}
                          controls
                          className="w-full h-full object-contain"
                          autoPlay
                          muted
                        />
                      ) : (
                        <img
                          src={media[currentSlide].url}
                          alt={project.title}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {media.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-95 z-10"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-95 z-10"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {media.map((_: any, i: number) => (
                          <div
                            key={i}
                            className={cn(
                              "w-2 h-2 rounded-full transition-all",
                              i === currentSlide ? "bg-accent w-6" : "bg-white/20"
                            )}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 text-gray-600">
                  <Terminal className="w-20 h-20 opacity-20" />
                  <p className="font-mono text-sm uppercase tracking-widest">No Media Available</p>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-card/30">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                      <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-accent/10 border border-accent/20 text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="https://www.linkedin.com/in/aswin-roy-553735336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center gap-2 bg-[#0077b5] hover:bg-[#006396] border-none"
                >
                  <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                </a>
                <div className="grid grid-cols-2 gap-3 mt-4 w-full">
                  <a
                    href={project.github}
                    className="btn-secondary px-3 py-1.5 flex items-center justify-center gap-1.5 text-[11px] whitespace-nowrap"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="btn-secondary px-3 py-1.5 flex items-center justify-center gap-1.5 text-[11px] whitespace-nowrap"
                  >
                    <Mail className="w-3.5 h-3.5" /> Work with me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Blood Donation System",
      description: "A web app connecting donors and recipients. Features authentication, real-time requests, and email notifications.",
      longDescription: "A full-stack application designed to bridge the gap between blood donors and those in urgent need. It implements a real-time notification system and a robust matching algorithm based on location and blood type compatibility.",
      tech: ["Node.js", "Express", "MongoDB", "SMTP", "Socket.io"],
      features: ["User Authentication", "Real-time Notifications", "Donor Search", "Request Management"],
      media: [
        { type: 'image', url: '/projects/blood-donation.png' }
      ],
      link: "#",
      github: "#"
    },
    {
      title: "Boutique Management SaaS",
      description: "A comprehensive SaaS product for boutique owners. Includes customer management, billing, and role-based access.",
      longDescription: "A multi-tenant SaaS platform built to streamline boutique operations. It handles everything from inventory tracking to automated billing and customer relationship management, with a dedicated dashboard for different staff roles.",
      tech: ["Node.js", "React", "MongoDB", "JWT", "Redux"],
      features: ["Inventory Management", "Automated Billing", "Customer CRM", "RBAC Security"],
      media: [
        { type: 'image', url: '/projects/boutique-saas.png' }
      ],
      link: "#",
      github: "#"
    },
    {
      title: "AI Dynamic Pricing System",
      description: "An intelligent system that adjusts product pricing based on demand, inventory levels, and market trends.",
      longDescription: "An advanced pricing engine that uses machine learning principles to analyze market data and inventory turnover. It automatically adjusts prices in real-time to maximize profit margins while maintaining competitiveness.",
      tech: ["Node.js", "Python", "MongoDB", "Express", "TensorFlow.js"],
      features: ["Market Trend Analysis", "Automated Price Adjustment", "Inventory Monitoring", "Data Visualization"],
      media: [
        { type: 'image', url: '/projects/ai-pricing.png' }
      ],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden group hover:border-accent/50 transition-all cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Content */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-blue-900/20 flex items-center justify-center relative overflow-hidden">
                <Terminal className="w-16 h-16 text-accent/30 group-hover:scale-110 transition-transform duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-white font-medium mb-4">Click to view details</p>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Code2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-accent transition-colors" />
                </div>
                <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-border text-gray-400">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-border text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

const APIShowcase = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/donors",
      desc: "Retrieve blood donors with pagination",
      params: "page=1&limit=10",
      role: "Public",
      response: `{ "success": true, "count": 45, "data": [...] }`
    },
    {
      method: "POST",
      path: "/api/v1/auth/register",
      desc: "New user registration with JWT",
      role: "Public",
      response: `{ "message": "User created", "id": "u92" }`
    },
    {
      method: "POST",
      path: "/api/v1/profile/avatar",
      desc: "Upload user profile image",
      type: "Multipart/Form-Data",
      role: "User",
      response: `{ "url": "https://cdn.aswin.dev/a.jpg" }`
    },
    {
      method: "PUT",
      path: "/api/v1/inventory/:id",
      desc: "Update stock levels (Boutique SaaS)",
      role: "Staff",
      response: `{ "status": "Updated", "sku": "BT-01" }`
    },
    {
      method: "DELETE",
      path: "/api/v1/requests/:id",
      desc: "Cancel a blood donation request",
      role: "User/Admin",
      response: `{ "success": true }`
    },
    {
      method: "GET",
      path: "/api/v1/admin/analytics",
      desc: "System-wide performance metrics",
      role: "Admin Only",
      response: `{ "cpuLoad": "14%", "activeUsers": 1240 }`
    }
  ];

  return (
    <section id="api" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-xl">
            <h2 className="section-title">Backend API Ecosystem</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              A robust collection of RESTful endpoints powering my full-stack applications.
              Features secure authentication, role-based access control (RBAC), and optimized data handling.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono text-gray-500 glass px-3 py-1.5 rounded-full">
            <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Active</div>
            <div className="w-[1px] h-3 bg-border" />
            <div className="flex items-center gap-1.5"><Cpu className="w-2.5 h-2.5" /> v1.4.2</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {endpoints.map((ep, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="glass p-5 rounded-xl group hover:border-accent/40 transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[9px] font-bold tracking-widest",
                    ep.method === "GET" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                      ep.method === "POST" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                        ep.method === "PUT" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                          "bg-red-500/10 text-red-400 border border-red-500/20"
                  )}>
                    {ep.method}
                  </span>
                  {ep.role && (
                    <span className="text-[9px] font-mono text-gray-500 flex items-center gap-1">
                      <Layers className="w-2.5 h-2.5 text-accent/40" /> {ep.role}
                    </span>
                  )}
                </div>
                <div className="text-gray-600 group-hover:text-accent/70 transition-colors">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="mb-4">
                <div className="text-white font-mono text-xs mb-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide py-0.5">
                  {ep.path}
                  {ep.params && <span className="text-accent/80 underline decoration-accent/20 decoration-dotted underline-offset-4">?{ep.params}</span>}
                </div>
                <div className="text-[11px] text-gray-500 leading-normal font-medium">{ep.desc}</div>
              </div>

              {ep.type && (
                <div className="mb-3 flex items-center gap-2">
                  <div className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-gray-500 font-mono">
                    {ep.type}
                  </div>
                </div>
              )}

              <div className="relative group/code">
                <div className="text-[9px] font-mono text-gray-600 mb-1.5 uppercase tracking-widest flex items-center justify-between">
                  Response Body
                  <span className="opacity-0 group-hover/code:opacity-100 transition-opacity text-accent/70">200 OK</span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-border text-[10px] font-mono text-gray-500 group-hover:text-gray-400 transition-colors overflow-x-auto whitespace-pre">
                  {ep.response}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    requirement: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'missing_keys'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS Integration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing in environment variables. Please check your .env file or Vite configuration.");
      setStatus('missing_keys');
      setTimeout(() => setStatus('idle'), 6000);
      return;
    }

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current!,
      publicKey
    ).then(() => {
      setStatus('success');
      setFormData({ name: '', company: '', requirement: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }).catch((err) => {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Let's build something <span className="text-accent">amazing</span> together.</h3>
            <p className="text-gray-400 text-lg mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">aswinroyrocks@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">+91 6383661428</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">Kanyakumari, Tamil Nadu</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl relative">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('user_company')?.focus();
                    }
                  }}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-white focus:border-accent outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="user_company" className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
                <input
                  type="text"
                  id="user_company"
                  name="user_company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('message')?.focus();
                    }
                  }}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-white focus:border-accent outline-none transition-colors"
                  placeholder="Tech Corp"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Work Requirement</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-white focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm justify-center mt-4"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-2 text-red-400 text-sm justify-center mt-4"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> Failed to send. Please check your network or EmailJS status.
                    </div>
                  </motion.div>
                )}
                {status === 'missing_keys' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-2 text-amber-400 text-sm justify-center mt-4 text-center border border-amber-500/30 p-4 rounded-lg bg-amber-500/5 shadow-inner"
                  >
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <AlertCircle className="w-4 h-4" /> Credentials Required
                    </div>
                    <p className="text-[11px] leading-tight text-gray-400 max-w-[250px]">
                      Your EmailJS keys are missing from the <code>.env</code> file. Check the <code>README.md</code> for setup instructions.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Note about EmailJS */}
            <div className="mt-6 text-[10px] text-gray-600 text-center uppercase tracking-widest">
              Securely powered by EmailJS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <Terminal className="w-6 h-6 text-accent" />
            <span>ASWIN</span>
          </a>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Aswin. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-gray-500 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <APIShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
