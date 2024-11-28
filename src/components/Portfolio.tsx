import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'Digital Dreams',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1633218388467-539651dcf81a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Neon Futures',
    category: 'Creative Direction',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Abstract Reality',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Cyber Punk',
    category: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Virtual Spaces',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Future Vision',
    category: 'Creative Direction',
    image: 'https://images.unsplash.com/photo-1506259091721-347e791bab0f?auto=format&fit=crop&q=80&w=800',
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A showcase of our latest digital art and creative direction projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ project, index }: { project: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="relative h-0 pb-[100%]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.category}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;