const HeaderSection = () => {
    return (
        <>
            <div className="text-center w-4/6 lg:w-1/2 bg-white mx-auto my-40 space-y-4 text-gray-900">
                <h1 className="text-4xl md:text-5xl font-BowlbyOne">Ready-built Components for <span
                    className="text-blue-700 hover:text-blue-500">Compose</span></h1>
                <h2 className="text-xl">Browse this free, open-source library of reusable components and sample screen
                    designs for any Android or Compose Multiplatform projects you are undertaking</h2>
            </div>
            <div className="flex flex-row justify-center text-sm md:text-base space-x-4 md:space-x-12 mx-auto md:mx-20 pb-20 text-gray-900">
                <div className="flex flex-row max-w-80">
                    <h1 className="text-5xl md:text-7xl font-BowlbyOne text-blue-700">1</h1>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Find Component</h1>
                        <h2>Browse the collection of free components to find what you're looking for.</h2>

                    </div>
                </div>
                <div className="flex flex-row max-w-80">
                <h1 className="text-5xl md:text-7xl font-BowlbyOne me-1 text-blue-700">2</h1>
                    <div className="flex flex-col">
                        <h1 className="font-bold">View Demo</h1>
                        <h2>See a real and live demonstration of the component right in your browser.</h2>


                    </div>
                </div>
                <div className="flex flex-row max-w-80">
                    <h1 className="text-5xl md:text-7xl font-BowlbyOne me-1 text-blue-700">3</h1>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Copy Code</h1>
                        <h2>Take the code straight into your project and modify however you please!</h2>


                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default HeaderSection;