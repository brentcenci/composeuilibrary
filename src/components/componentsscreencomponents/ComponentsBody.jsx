import React from "react";
import { useParams } from 'react-router-dom';
import { componentsData } from '../../data/componentsData.js';
import CodeSnippet from "../CodeSnippet.jsx";

const ComponentsBody = () => {
    const { category } = useParams()
    const component = componentsData.find(component => component.category === category);

    return (
        <div className="w-full bg-gray-50 py-10">
            <div className="w-5/6 lg:w-3/4 mx-auto space-y-16 text-gray-900">
                {component.components.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <h1 className="text-2xl font-semibold">{item.title}</h1>
                        <h2 className="text-lg">{item.description}</h2>
                        <CodeSnippet code={item.code} />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ComponentsBody;