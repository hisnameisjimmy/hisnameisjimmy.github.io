import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioSummary = ({ key, href, image, image_alt, title, summary, link_text }) => {

  return (
    <>
      <li key={key} className="sm:py-4">
        <Link
          to={href}
          className="space-y-0 grid grid-cols-3 items-center items-start sm:gap-12 sm:bg-gray-50 py-5 rounded-2xl sm:hover:bg-blue-50 sm:px-10"
        >
        {image ? (
            <GatsbyImage alt={image_alt} image={image} className="place-self-center" />
        ) : ""}
          <div className="col-span-2">
            <div className="space-y-4">
              <div className="text-2xl sm:text-4xl leading-10 font-extrabold space-y-1">
                <h3>{title}</h3>
              </div>
              <div className="text-lg text-gray-500">
                {summary}
              </div>
              <div className="mt-10">
                <div className="text-base font-medium text-blue-600">
                    {' '}
                    {link_text} <span aria-hidden="true">&rarr;</span>{' '}
                </div>
                </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PortfolioSummary;
