import React from "react";
import Person from "./person"

const People = ({persons}) => {

    return (
        <>
            {persons.map(person => (
                <Person name={person.name} title={person.title} description={person.description} />
            ))}
        </>
    );
};

export default People;