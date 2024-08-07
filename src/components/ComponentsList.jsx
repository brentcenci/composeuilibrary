import {componentsData} from "../data/componentsData.js";

const ComponentsList = () => {
    return (
        <div>
            {componentsData.map((group, index) => (
                <div key={index}>
                    <h2>{group.category}</h2>
                    {group.components.map((component, indx) => (
                        <div key={indx}>
                            <h3><strong>{component.title}</strong></h3>
                            <p>{component.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ComponentsList;