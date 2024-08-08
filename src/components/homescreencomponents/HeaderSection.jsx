const HeaderSection = () => {
    return (
        <div className="text-center w-4/6 lg:w-1/2 bg-white mx-auto my-10 space-y-4 text-gray-900">
            <h1 className="text-5xl font-BowlbyOne">Ready-built Components for <span className="text-blue-700 hover:text-blue-500">Compose</span></h1>
            <h2 className="text-xl">Browse this free, open-source collection of reusable components and sample screen designs for any Android or Compose Multiplatform projects you are undertaking</h2>
            <div className="flex flex-row justify-center space-x-12 mx-auto pt-10">
                <div className="flex flex-row">
                    <h1 className="text-7xl font-BowlbyOne">1</h1>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Find Component</h1>
                        <h2>Small image / diagram</h2>
                    </div>
                </div>
                <div className="flex flex-row">
                    <h1 className="text-7xl font-BowlbyOne me-2">2</h1>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Test Demo</h1>
                        <h2>Small image / diagram</h2>
                    </div>
                </div>
                <div className="flex flex-row">
                    <h1 className="text-7xl font-BowlbyOne me-2">3</h1>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Copy Code</h1>
                        <h2>Small image / diagram</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderSection;