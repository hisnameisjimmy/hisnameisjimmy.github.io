import React from "react";

const ThreeColumn = ({children}) => {

    return (
        <>
            <div className="sm:-mx-40">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                    <div className="lg:col-span-3">
                        <div className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThreeColumn;