import Iframe from "react-iframe";

const ComponentShowcase = ({url, size = 500}) => {
    return (
        <>
            <Iframe
                className="w-full p-4 bg-gray-200 rounded-lg"
                styles = {{height: `${size}px`}}
                url={url}/>
        </>
    );
};

export default ComponentShowcase;