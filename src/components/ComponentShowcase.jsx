import Iframe from "react-iframe";

const ComponentShowcase = ({url}) => {
    return (
        <>
            <Iframe
                className="w-full p-4 border border-gray-200 bg-white rounded-lg"
                url={url}/>
        </>
    );
};

export default ComponentShowcase;