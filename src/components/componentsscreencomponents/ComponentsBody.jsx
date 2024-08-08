import React from "react";
import { useParams } from 'react-router-dom';
import { componentsData } from '../../data/componentsData.js';

const ComponentsBody = () => {
    const { category } = useParams()
    const component = componentsData.find(component => component.category === category);

    return (
        <div className="w-full bg-gray-50 py-10">
            <div className="w-5/6 lg:w-3/4 mx-auto my-10 space-y-4 text-gray-900">
                {component.components.map((item, index) => (
                    <p key={index}>{item.title}</p>
                ))}
            </div>
        </div>

    );
};

export default ComponentsBody;