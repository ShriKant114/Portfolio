import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import About from "./components/About";
import { SocialMedia } from './components/SocialMedia';
import { Experience } from './components/Experience';
import { Contect } from './components/Contect';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <SocialMedia darkMode={darkMode} />

      {/* Skills with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: window.innerWidth < 768 ? 0.1 : 0.3 }}
        variants={sectionVariants}
      >
        <Experience darkMode={darkMode} />
      </motion.div>



      <Projects darkMode={darkMode} />


      {/* Contact with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Contect darkMode={darkMode} />
      </motion.div>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
