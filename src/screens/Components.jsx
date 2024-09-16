import ComponentsListSection from "../components/homescreencomponents/ComponentsListSection.jsx";

const Components = () => {
    return(
        <>
            <div id="header">
                <header className="mx-10 lg:mx-40 py-32 lg:py-44 flex justify-between">
                    <div>
                        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Browse all</h1>
                        <h1 className="font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out inline text-transparent bg-clip-text pe-3">Components</h1>
                        <br/>
                        <p className="text-xl md:text-2xl xl:text-3xl tracking-tight mt-20 lg:w-3/4">
                            From accordions to cards, dynamic expanding sections to simple toggles, browse the range of clean components available below
                        </p>
                    </div>
                </header>
            </div>
            <ComponentsListSection/>
        </>
    );
};

export default Components;