import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  // hidden / initial
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  // visible / animate
  // transition is inside visible. So don't write on your element
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren', // beforeChildren or afterChildren
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="order container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>
        Thank you for your order{' '}
        <span role="img" aria-label="love">
          😍
        </span>
      </h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with :
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
