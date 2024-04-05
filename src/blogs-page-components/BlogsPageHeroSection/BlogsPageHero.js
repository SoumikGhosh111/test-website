import React from 'react';
import "./BlogsPageHero.css";

// import framer motions
import { motion } from 'framer-motion';
function BlogsPageHero() {
  return (
    <div className='blogs-page-hero-wrapper'>
      <div className='blogs-page-hero-section'>

        <motion.div className='blogs-page-hero-content'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
        >
          <h1>Insightful Narratives</h1>
          <p>An anthology of insightful narratives, strategic wins, and the <br /> evolution of businesses.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogsPageHero; 