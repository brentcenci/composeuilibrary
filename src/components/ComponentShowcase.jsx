import Iframe from "react-iframe";

const ComponentShowcase = ({url, height}) => {
    return (
        <>
            <Iframe
                className="w-full h-[500px] p-4 bg-gray-200 rounded-lg"
                url={url}/>
        </>
    );
};

export default ComponentShowcase;