import React from 'react';
import { motion } from 'framer-motion';
import wildace_logo from '../../assets/WildAceLogo.png';

const LoaderWithLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={styles.backdrop}
    >
      <motion.div
        style={styles.glowOrb}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
          rotateY: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
      />
      <motion.img
        src={wildace_logo}
        alt="Loading"
        style={styles.logo}
        animate={{
          y: [0, -6, 0],
          scale: [1, 1.03, 1],
          rotateY: [0, 360],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          scale: {
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotateY: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />
    </motion.div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    overflow: 'hidden',
  },
  logo: {
    width: 70,
    height: 70,
    objectFit: 'contain',
    position: 'relative',
    zIndex: 2,
  },
  glowOrb: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: '50%',
    background:
      'radial-gradient(circle at center, rgba(0, 191, 255, 0.3), transparent 70%)',
    filter: 'blur(40px)',
    zIndex: 1,
  },
};

export default LoaderWithLogo;
