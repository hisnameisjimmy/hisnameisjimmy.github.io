import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioSummary = ({ key, href, image, image_alt, title, summary, link_text }) => {

  return (
    <>
      <li key={key} className="sm:py-4">
        <Link
          to={href}
          className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-12 sm:space-y-0 sm:bg-gray-50 p-5 sm:p-10 rounded-2xl sm:hover:bg-blue-50"
        >
          <div className="!aspect-w-3 aspect-h-2 sm:!aspect-w-4 sm:aspect-h-3">
              {image ? (
                  <GatsbyImage alt={image_alt} image={image} className="object-cover shadow-lg rounded-lg" />
              ) : ""}
          </div>
          <div className="sm:col-span-2">
            <div className="space-y-4">
              <div className="text-2xl sm:text-4xl leading-10 font-medium space-y-1">
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
