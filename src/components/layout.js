import * as React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto selection:bg-burnt-orange selection:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
