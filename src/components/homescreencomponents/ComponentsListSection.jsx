import {componentsData} from "../../data/componentsData.js";
import Card from "../Card.jsx";

const ComponentsListSection = () => {
    return (
        <div id="components" className="w-full bg-gray-50">
            <div className="w-5/6 lg:w-3/4 xl:w-1/2 mx-auto text-gray-900 py-10">
                <h1 className="font-bold text-2xl">Compose Components »</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {componentsData
                        .sort((a, b) => a.category.localeCompare(b.category))
                        .filter(component => Object.prototype.hasOwnProperty.call(component, 'display'))
                        .map((group, index) => (
                        <div key={index} className="p-3 md:p-4">
                            <Card group={group}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComponentsListSection;