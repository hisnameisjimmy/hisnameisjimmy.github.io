import { Link } from "gatsby";
import React from "react";

const Header = () => {

  const menuItems = [
    { name: 'Writing', description: 'Jimmys writing', url: '/'},
    { name: 'About', description: 'Learn about Jimmy', url: '/about'},
    { name: 'Portfolio', description: 'Jimmy Hooker Portfolio', url: '/portfolio'}
  ]

  return (
    <>
      <div className="relative bg-white">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8 border-b-2 border-gray-50">
          <div className="flex justify-start md:w-0 md:flex-1">
            <Link className="flex logo uppercase" to="/">
              Jimmy Hooker
            </Link>
          </div>
          
          <div className="mt-5 sm:mt-0 md:flex md:items-center md:justify-between">
            <nav className="flex flex-1 flex-grow justify-between items-center space-x-10">
            {menuItems.map(item => (
                <Link to={item.url} key={item.name} alt={item.description} className="text-base font-bold text-burnt-orange inline-block">
                {item.name}
                </Link>
            ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
