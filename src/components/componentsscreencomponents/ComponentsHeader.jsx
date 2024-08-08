import React from 'react';
import { useParams } from 'react-router-dom';
import { componentsData } from '../../data/componentsData.js';

const ComponentsHeader = () => {
    const { category } = useParams()
    const component = componentsData.find(component => component.category === category);

    return (
        <div className="w-5/6 lg:w-3/4 bg-white mx-auto my-10 space-y-4 text-gray-900">
            <h1 className="text-5xl font-BowlbyOne">{component.category}</h1>
            <h2 className="text-xl">{component.categoryDescription}</h2>
        </div>
    );
};

export default ComponentsHeader;