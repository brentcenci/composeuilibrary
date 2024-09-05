import {screensData} from "../../data/screensData.js";
import Card from "../Card.jsx";

const ScreensListSection = () => {
    return (
        <div id="screens" className="w-full bg-gray-50">
            <div className="w-5/6 lg:w-3/4 xl:w-1/2 mx-auto text-gray-900 py-10">
                <h1 className="font-bold text-2xl">Sample Screens »</h1>
                <div className="grid grid-cols-2">
                    {screensData.map((group, index) => (
                        <div key={index} className="p-4">
                            <Card group={group}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScreensListSection;