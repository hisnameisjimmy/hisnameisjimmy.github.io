import React from "react";

const Headline = ({headline, subhead, headlineFontsize}) => {

    const fontSize = headlineFontsize ? headlineFontsize : "font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-900"

    return (
        <>
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className={`${fontSize} tracking-tight`}>
                {headline}
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {subhead}
              </p>
            </div>
          </div>
        </>
    );
};

export default Headline;