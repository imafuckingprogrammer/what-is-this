import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TextReveal = ({ 
  text, 
  className = '', 
  delay = 0,
  staggerDelay = 0.02 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay * i 
      }
    })
  };

  const wordVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${className} flex flex-wrap`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={wordVariant}
          key={index}
          className="inline-block mr-2 whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;