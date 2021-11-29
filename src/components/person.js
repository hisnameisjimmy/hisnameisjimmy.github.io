import React from "react";

const Person = ({key, name, title, description}) => {

    return (
      <>
        <div key={key}>
          <div className="space-y-4">
            <div className="text-lg leading-6 font-medium space-y-1">
              <h3 className="!mt-2">{name}</h3>
              <p className="text-gray-400">{title}</p>
            </div>
            <div className="text-lg">
              <p className="text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Person;