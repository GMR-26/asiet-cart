// pages/products.tsx
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

const mockProducts = [
  {
    name: 'Lab Fair Record',
    price: 65,
    stock_quantity: 12,
    image_url: '/images/lab_fair.jpg',
    description: 'A4 size, 120 pages. Perfect for physics and chemistry lab reports.',
  },
  {
    name: 'Lab Fair Record with Graph',
    price: 65,
    stock_quantity: 0,
    image_url: '/images/lab_fair_graph.jpg',
    description: 'Includes 20 graph sheets. Ideal for detailed experimental data.',
  },
  {
    name: 'Lab Rough Record',
    price: 35,
    stock_quantity: 25,
    image_url: '/images/lab_rough.jpg',
    description: 'A handy A5 size record for jotting down observations and rough work.',
  },
  {
    name: 'Pen (Blue Ink)',
    price: 10,
    stock_quantity: 100,
    image_url: '/images/pen.jpg',
    description: "Smooth-flowing blue ink pen. A student's best friend.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ProductsPage = () => {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-red-500 text-center mb-10">
        Tailwind is working
      </h1>
      <motion.div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {mockProducts.map((product) => (
          <motion.div
            key={product.name}
            variants={cardVariants}
            className="flex justify-center"
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default ProductsPage;
