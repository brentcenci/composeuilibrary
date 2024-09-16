import ScreensListSection from "../components/homescreencomponents/ScreensListSection.jsx";

const Screens = () => {
    return(
        <>
            <div id="header">
                <header className="mx-10 lg:mx-40 py-32 lg:py-44 flex justify-between">
                    <div>
                        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Pre-made</h1>
                        <h1 className="font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out inline text-transparent bg-clip-text pe-3">Screens</h1>
                        <br/>
                        <p className="text-xl md:text-2xl xl:text-3xl tracking-tight mt-20 lg:w-3/4">
                            A quick prototype for your company’s android app or a starting point for any compose application, these ready-built screens will speed up any development process
                        </p>
                    </div>
                </header>
            </div>
            <ScreensListSection/>
        </>
    );
};

export default Screens;