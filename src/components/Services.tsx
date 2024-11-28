import { motion } from 'framer-motion';
import { Palette, Wand2, Laptop, Camera, Lightbulb, PenTool } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Digital Art',
    description: 'Creating stunning digital artwork that captures imagination and emotion.',
  },
  {
    icon: Wand2,
    title: 'Creative Direction',
    description: 'Guiding projects from concept to completion with artistic vision and strategy.',
  },
  {
    icon: Laptop,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful digital experiences.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capturing moments and creating visual stories through the lens.',
  },
  {
    icon: Lightbulb,
    title: 'Brand Strategy',
    description: 'Developing unique brand identities that stand out in the digital age.',
  },
  {
    icon: PenTool,
    title: 'Illustration',
    description: 'Custom illustrations that bring ideas and concepts to life.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive creative solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
    </motion.div>
  );
};

export default Services;