// pages/products.tsx
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const mockProducts = [
  { name: 'Lab Record without graph', price: 65, stock_quantity: 10, image_url: '/images/lab_record_no_graph.jpg', description: 'A4 size, 120 pages.' },
  { name: 'Lab Record with graph', price: 65, stock_quantity: 10, image_url: '/images/lab_record_graph.jpg', description: 'A4 size with graph sheets.' },
  { name: 'Rough Record with graph', price: 35, stock_quantity: 10, image_url: '/images/rough_record_graph.jpg', description: 'Handy A5 with graph.' },
  { name: 'Rough Record without graph', price: 35, stock_quantity: 10, image_url: '/images/rough_record_no_graph.jpg', description: 'Handy A5 without graph.' },
  { name: 'Tutorial', price: 25, stock_quantity: 10, image_url: '/images/tutorial.jpg', description: 'Reference guide.' },
  { name: 'Note Book', price: 45, stock_quantity: 10, image_url: '/images/notebook.jpg', description: 'Durable hardcover notebook.' },
  { name: 'Pinpoint (Blue, Black)', price: 10, stock_quantity: 50, image_url: '/images/pinpoint_pen.jpg', description: 'Fine tip for precision.' },
  { name: 'Scale Small', price: 5, stock_quantity: 20, image_url: '/images/scale_small.jpg', description: '15cm small scale.' },
  { name: 'Pencil, HB, 2HB', price: 10, stock_quantity: 40, image_url: '/images/pencil.jpg', description: 'High-quality pencils.' },
  { name: 'Compass', price: 20, stock_quantity: 15, image_url: '/images/compass.jpg', description: 'Drawing compass.' },
  { name: 'Protractor', price: 10, stock_quantity: 15, image_url: '/images/protractor.jpg', description: '180° protractor.' },
  { name: 'Eraser', price: 3, stock_quantity: 40, image_url: '/images/eraser.jpg', description: 'Soft eraser.' },
  { name: 'Sharpener', price: 5, stock_quantity: 30, image_url: '/images/sharpener.jpg', description: 'Durable sharpener.' },
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

function ProductsPage() {
  return (
    <>
      <Head>
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="p-6 bg-white min-h-screen">
        <h1
          className="text-4xl font-bold text-center mb-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: '#000000',
          }}
        >
          ASIET-CART
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
    </>
  );
}

export default ProductsPage;
