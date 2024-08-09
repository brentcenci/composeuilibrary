import Iframe from "react-iframe";

const ComponentShowcase = ({url}) => {
    return (
        <>
            <Iframe
                className="w-full"
                url={url}/>
        </>
    );
};

export default ComponentShowcase;