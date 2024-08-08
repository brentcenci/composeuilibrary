import React from 'react';
import { useParams } from 'react-router-dom';
import { componentsData } from "../data/componentsData.js";

const ComponentsScreen = () => {
    const { category } = useParams()
    const component = componentsData.find(component => component.category === category);

    return (
        <div className="w-4/6 lg:w-1/2 bg-white mx-auto my-10 space-y-4 text-gray-900">
            <h1 className="text-2xl font-BowlbyOne">{component.category}</h1>
            {component.components.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
        </div>
    );
};

export default ComponentsScreen;