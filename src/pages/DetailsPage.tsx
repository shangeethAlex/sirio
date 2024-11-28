import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Cpu, 
  Wand2, 
  Palette, 
  Brain, 
  Rocket,
  ArrowRight,
  Globe,
  MessageSquare,
  Mail,
  Instagram,
  Youtube
} from 'lucide-react';

const DetailsPage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-black text-white">
      <Helmet>
        <title>Details Page | Sirio Berati</title>
        <meta name="description" content="Explore detailed insights and creative projects by Sirio Berati." />
        <meta name="keywords" content="Sirio Berati, digital creativity, AI projects, portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sirioberati.com/explore" />
        <meta property="og:title" content="Details Page | Sirio Berati" />
        <meta property="og:description" content="Explore detailed insights and creative projects by Sirio Berati." />
        <meta property="og:image" content="https://i.ibb.co/6v8BcSF/Sirio.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sirioberati.com/explore" />
        <meta name="twitter:title" content="Details Page | Sirio Berati" />
        <meta name="twitter:description" content="Explore detailed insights and creative projects by Sirio Berati." />
        <meta name="twitter:image" content="https://i.ibb.co/6v8BcSF/Sirio.jpg" />
        <link rel="canonical" href="https://sirioberati.com/explore" />
      </Helmet>
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
              'radial-gradient(circle at 100% 100%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
              'radial-gradient(circle at 0% 100%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
              'radial-gradient(circle at 100% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
              'radial-gradient(circle at 0% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-2 text-sirio-yellow hover:text-sirio-yellow/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-sirio-yellow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-conic from-sirio-yellow via-sirio-blue to-sirio-yellow rounded-full animate-spin-slow opacity-20 blur-3xl" />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-[1.2] sm:leading-[1.2]">
              <span className="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow bg-clip-text text-transparent">
                Digital Creativity
                <br />
                Reimagined
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Where AI innovation meets artistic vision to create extraordinary digital experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-6 h-6 text-sirio-yellow rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sirio-yellow to-white bg-clip-text text-transparent">
                Bridging Art & Technology
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                As a digital creator and AI enthusiast, I'm passionate about exploring the intersection of creativity and artificial intelligence. My mission is to empower creators with cutting-edge tools and insights that push the boundaries of what's possible.
              </p>
              <div className="space-y-4">
                <Feature icon={Brain} title="AI Innovation" description="Leveraging artificial intelligence to enhance creative processes" />
                <Feature icon={Palette} title="Creative Direction" description="Guiding projects with a unique artistic vision" />
                <Feature icon={Globe} title="Global Impact" description="Empowering creators worldwide through technology" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sirio-yellow/20 to-sirio-blue/20 blur-2xl" />
              <img
                src="https://i.ibb.co/6v8BcSF/Sirio.jpg"
                alt="Sirio Berati"
                className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sirio-yellow to-white bg-clip-text text-transparent">
              Services & Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions at the intersection of AI and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sirio-yellow to-white bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of creative projects and collaborations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <PortfolioCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sirio-yellow to-white bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's create something extraordinary together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  info="sirio@visionreimagine.com"
                  href="mailto:sirio@visionreimagine.com"
                />
                <ContactInfo
                  icon={Youtube}
                  title="YouTube"
                  info="@sirioberati"
                  href="https://youtube.com/@sirioberati"
                />
                <ContactInfo
                  icon={Instagram}
                  title="Instagram"
                  info="@heysirio"
                  href="https://instagram.com/heysirio"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sirio-yellow"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sirio-yellow"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sirio-yellow"
                />
                <button
                  type="submit"
                  className="w-full bg-sirio-yellow text-black rounded-lg px-4 py-3 font-medium hover:bg-sirio-yellow/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-sirio-yellow" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const services = [
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Implementing cutting-edge AI solutions for creative workflows"
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Strategic guidance for digital art and design projects"
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Expert advice on leveraging AI in creative industries"
  },
  {
    icon: Rocket,
    title: "Innovation Strategy",
    description: "Future-focused approaches to digital creation"
  },
  {
    icon: Globe,
    title: "Digital Presence",
    description: "Building impactful online brand experiences"
  },
  {
    icon: MessageSquare,
    title: "Creator Community",
    description: "Fostering connections in the digital creative space"
  }
];

const portfolio = [
  {
    title: "AI Studio",
    category: "Digital Platform",
    image: "https://images.unsplash.com/photo-1633218388467-539651dcf81a?auto=format&fit=crop&q=80&w=800",
    url: "https://stan.store/heysirio"
  },
  {
    title: "Creative Direction",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    url: "#"
  },
  {
    title: "AI Resources",
    category: "Education",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800",
    url: "#"
  }
];

const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors"
  >
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-sirio-yellow" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const PortfolioCard = ({ title, category, image, url, index }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group relative aspect-square rounded-2xl overflow-hidden"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-300">{category}</p>
      </div>
    </div>
  </motion.a>
);

const ContactInfo = ({ icon: Icon, title, info, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-4 group"
  >
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
      <Icon className="w-6 h-6 text-sirio-yellow" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 group-hover:text-white transition-colors">{info}</p>
    </div>
  </a>
);

export default DetailsPage;