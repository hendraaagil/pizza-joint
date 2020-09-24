import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hover: {
    backgroundColor: '#444',
    color: '#fff',
    scale: 0.9,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Modal = ({ showModal, setPizza }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                onClick={() => setPizza({ base: '', toppings: [] })}
              >
                Start Again
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
