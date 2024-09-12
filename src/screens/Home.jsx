const Home = () => {
    return (
        <>
            <div id="header">
                <header className="mx-10 lg:mx-40 py-60 lg:py-80 flex justify-between">
                    <div>
                        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Ready-built <br/> components for</h1>
                        <h1 className="font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter bg-blue-gradient inline text-transparent bg-clip-text pe-3">Compose</h1>
                        <br/>
                        <button
                            className="mt-40 bg-blue-gradient py-2 md:py-3 lg:py-5 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10 rounded-full text-white tracking-tight font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">View
                            Components »
                        </button>
                    </div>
                    <div className="hidden md:block md:w-1/4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBTCc9BJD4etINP-HjM93fek4LOt-MWCHRw&s"
                            alt="Header Image"
                            className="w-full h-auto"
                        />
                    </div>

                </header>
            </div>

            <div id="summary">
                <section className="relative bg-gray-100 -skew-y-2">
                    <div className="skew-y-2 py-24 px-24 md:px-32 lg:px-48 xl:px-96">
                        <p className="text-2xl md:text-3xl xl:text-4xl text-center">
                            Browse this free, open-source library of reusable components and sample screen designs for any Android or Compose Multiplatform projects you are undertaking.
                        </p>
                    </div>
                </section>
            </div>

            <div id="steps">

            </div>

        </>
    );
};

export default Home;