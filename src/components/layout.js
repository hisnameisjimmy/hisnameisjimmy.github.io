import * as React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className="max-w-7xl sm:max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 mx-auto selection:bg-burnt-orange selection:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
