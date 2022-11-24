import { Link } from 'gatsby';
import React from 'react';
import { motion } from 'framer-motion';

const orangeMotion = {
  rest: {
    y: 0,
    x: 4,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    y: 10,
    x: 30,
    transition: {
      type: 'spring',
      stiffness: 200,
      duration: 0.1,
    },
  },
};

const whiteMotion = {
  rest: {
    y: 0,
    x: 8,
    transition: {
      duration: 0.05,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    y: -10,
    x: 50,
    transition: {
      type: 'spring',
      stiffness: 200,
      duration: 0.05,
    },
  },
};

const Header = () => {
  const menuItems = [
    { name: 'Writing', description: 'Jimmys writing', url: '/' },
    { name: 'About', description: 'Learn about Jimmy', url: '/about' },
    {
      name: 'Portfolio',
      description: 'Jimmy Hooker Portfolio',
      url: '/portfolio',
    },
  ];

  return (
    <>
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8 border-b border-gray-150">
        <motion.div
          className="sm:mr-auto grid grid-cols-1"
          initial="rest"
          whileTap="rest"
          animate="rest"
        >
          <Link className="col-start-1 row-start-1 logo blue z-20" to="/">
            Jimmy Hooker
          </Link>
          <motion.div
            variants={orangeMotion}
            className="col-start-1 row-start-1 logo orange z-10"
          >
            Jimmy Hooker
          </motion.div>
          <motion.div
            variants={whiteMotion}
            className="col-start-1 row-start-1 logo white"
          >
            Jimmy Hooker
          </motion.div>
        </motion.div>

        <div className="mt-5 sm:mt-0 md:flex md:items-center md:justify-between">
          <nav className="flex flex-1 flex-grow justify-between items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                to={item.url}
                key={item.name}
                alt={item.description}
                className="text-base font-bold text-burnt-orange inline-block border-b-2 border-transparent hover:border-b-2 hover:border-dark-blue transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
