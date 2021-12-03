import { Link } from "gatsby";
import React from "react";

const Footer = () => {

    const navigation = {
        main: [
            { name: 'Writing', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Portfolio', href: '/portfolio' },
        ],
    }

    return (
        <>
            <footer>
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                    </nav>
                    <p className="mt-8 text-center text-base text-gray-400">&copy; {(new Date().getFullYear())} Jimmy Hooker, All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;