import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SmoothTextReveal = ({ 
  text, 
  className = '', 
  delay = 0,
  staggerDelay = 0.03,
  duration = 0.8
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay,
        duration: 0.1
      }
    }
  };

  const wordVariant = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        mass: 0.5,
        duration: duration
      }
    },
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(4px)'
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

export default SmoothTextReveal;