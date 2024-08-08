import {componentsData} from "../../data/componentsData.js";
import Card from "../Card.jsx";

const ComponentsListSection = () => {
    return (
        <div className="w-full bg-gray-50">
            <div className="w-5/6 mx-auto text-gray-900 py-10">
                <h1 className="font-bold text-2xl">Compose Components ></h1>
                <div className="grid grid-cols-2">
                    {componentsData.map((group, index) => (
                        <div key={index} className="p-4">
                            <Card title={group.category}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComponentsListSection;