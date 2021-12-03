import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const BlogSummary = ({ id, href, image, image_alt, title, summary, link_text }) => {

  return (
    <>
      <li key={id} className="sm:py-4">
        <Link
          to={`/blog/${href}`}
          className=""
        >
          <div className="text-2xl sm:text-4xl leading-10 font-extrabold mb-5 sm:mb-10 max-w-2xl mx-auto">
            <h3>{title}</h3>
          </div>
          <div className="!aspect-w-3 aspect-h-1 sm:!aspect-w-4 sm:aspect-h-2">
              {image ? (
                  <GatsbyImage alt={image_alt} image={image} className="object-cover shadow-lg" />
              ) : ""}
          </div>
          <div className="max-w-2xl mx-auto">              
            <div className="text-lg text-gray-500 mt-5 sm:mt-10">
              {summary}
            </div>
            <div className="mt-5 mb-20">
              <div className="text-base font-bold text-dark-blue border-b-2 border-burnt-orange inline">
                  {link_text}
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default BlogSummary;
