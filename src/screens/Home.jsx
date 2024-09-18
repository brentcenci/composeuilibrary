const Home = () => {
    return (
        <>
            <div id="header">
                <header className="mx-10 lg:mx-40 py-60 lg:py-80 flex justify-between">
                    <div>
                        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Ready-built <br/> components
                            for</h1>
                        <h1 className="font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out inline text-transparent bg-clip-text pe-3">Compose</h1>
                        <br/>
                        <div className="flex flex-col md:flex-row space-x-4">
                            <a
                                href="/"
                                className="mt-40 bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out py-2 md:py-3 lg:py-5 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10 rounded-full text-white tracking-tight font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                Get Access »
                            </a>
                            <a
                                href="/components"
                                className="md:mt-40 bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out py-2 md:py-3 lg:py-5 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10 rounded-full text-transparent bg-clip-text tracking-tight font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                View Components »
                            </a>
                        </div>

                    </div>
                    <div className="hidden md:flex justify-center items-start md:w-1/3">
                        <img
                            src="./src/assets/ComponentsImage.png"
                            alt="Header Image"
                            className="w-full h-auto"
                        />
                    </div>

                </header>
            </div>

            <div id="summary">
                <section className="relative bg-gray-100 -skew-y-2 mb-20">
                    <div className="skew-y-2 py-32 px-24 md:px-32 lg:px-48 xl:px-96">
                        <p className="text-2xl md:text-3xl xl:text-4xl text-center tracking-tight">
                            Browse this free, open-source library of reusable components and sample screen designs for
                            any Android or Compose Multiplatform projects you are undertaking.
                        </p>
                        <div className="flex space-x-10 my-10 justify-center">
                            <svg viewBox="0 0 128 128" width="64" height="64">
                                <path fill="#a3a3a3"
                                      d="M21.005 43.003c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736a7.338 7.338 0 007.342 7.343 7.33 7.33 0 007.338-7.342V50.34a7.345 7.345 0 00-7.346-7.337m59.193-27.602l5.123-9.355a1.023 1.023 0 00-.401-1.388 1.022 1.022 0 00-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005L44.45 5.075a1.01 1.01 0 00-1.378-.406 1.007 1.007 0 00-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.002-11.351-6.79-21.221-16.845-26.427M48.942 29.858a2.772 2.772 0 01.003-5.545 2.78 2.78 0 012.775 2.774 2.776 2.776 0 01-2.778 2.771m30.106-.005a2.77 2.77 0 01-2.772-2.771 2.793 2.793 0 012.773-2.778 2.79 2.79 0 012.767 2.779 2.767 2.767 0 01-2.768 2.77M31.195 44.39l.011 47.635a7.822 7.822 0 007.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004a7.835 7.835 0 007.836-7.834l-.009-47.635-65.624.011zm83.134 5.943a7.338 7.338 0 00-7.341-7.339c-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738a7.334 7.334 0 007.339 7.339 7.337 7.337 0 007.338-7.343l-.005-30.737z"></path>
                            </svg>
                            <svg viewBox="0 0 128 128" width="64" height="64">
                                <path
                                    fill="#a3a3a3"
                                    stroke="none"
                                    strokeWidth="1.699"
                                    strokeDasharray="none"
                                    d="M63.353.759c-2.022-.048-3.83.515-5.604 1.486L14.737 27.521l-1.716 1.01-.808.555c-1.067.628-2.21 2.15-2.97 3.175l4.168 2.324 2.82 1.55 9.592 5.4 2.454 1.36c1.237-1.491 1.306-1.596 2.472-2.566l26.833-15.884c1.554-.85 3.964-1.976 5.736-1.936 1.769.041 4.04.556 5.552 1.476l23.485 13.342 2.944 1.637a26.544 26.544 0 0 1 3.825 3.052l18.723-11.19-1.666-1.624c-1.893-1.528-2.544-1.815-3.864-2.497L69.664 2.637C67.932 1.582 65.38.807 63.353.759Zm.276 23.845c-.95 0-3.036.411-3.86.884l-27.905 16.57c-.823.472-1.655 1.983-2.13 2.801-.475.818-.837 2.452-.839 3.303l-.055 33.254c-.002.946.421 2.006.896 2.824.476.819 1.268 1.581 2.091 2.054l28.68 16.194c1.07.493 2.69.787 3.64.787.95 0 2.174-.147 3.709-.777l27.42-16.173c.824-.474 2.1-1.772 2.575-2.59.475-.819 1.498-2.895 1.493-3.841l-.146-32.52c-.001-.945-.832-2.85-1.307-3.667-.475-.82-2.284-2.36-3.108-2.833L67.623 25.58c-.824-.473-3.043-.977-3.994-.977Zm55.2 7.65-1.163.725-17.474 10.441c.42 1 .891 3.278.946 4.363l.002.01.008.312v31.3a10.085 10.085 0 0 1-4.963 8.786l-25.434 15.315c-.922.545-3.108 1.394-5.452 1.841l.002 1.516-.037 7.825-.006 3.775.043 8.781c1.255-.01 3.339-.766 4.423-1.36l.317-.182.009-.004 44.498-26.253a11.538 11.538 0 0 0 5.666-10.048V37.734c-.014-1.458-.72-4.093-1.385-5.48zM8.47 33.817l-.415 1.949c-.352 2.928-.29 3.223-.202 4.705l-.012 49.185c-.02 2.027-.099 4.84.899 6.606.993 1.762 2.916 2.799 4.657 3.827l45.2 25.602.008.004.318.179c1.399.644 2.986 1.145 4.592 1.241l.012-4.872.004-3.748-.006-11.404-.006-1.81c-1.809-.118-3.218-.654-4.14-1.199l-27.041-15.14c-1.527-.9-3.437-1.913-4.308-3.455-.87-1.543-1.252-3.886-1.235-5.658l.017-29.064.008-2.096c.061-1.414.277-2.403.687-4.15zm55.323 4.77c.612 0 2.044.327 2.575.632l17.503 9.854c.531.304 1.698 1.3 2.004 1.826.306.528.84 1.754.84 2.363l.096 20.959c.002.609-.655 1.948-.963 2.476-.306.528-1.127 1.363-1.657 1.668L66.52 88.79c-.99.406-1.78.505-2.394.505-.612 0-1.653-.192-2.342-.51L43.297 78.349a3.816 3.816 0 0 1-1.348-1.324c-.306-.528-.579-1.212-.578-1.82l.035-21.431c0-.548.235-1.602.54-2.13.307-.528.844-1.5 1.374-1.804l17.985-10.68c.531-.305 1.877-.57 2.489-.57z"
                                />
                            </svg>
                            <svg viewBox="0 0 128 128" width="64" height="64">
                                <path fill="#a3a3a3" d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0"></path>
                            </svg>
                        </div>
                    </div>
                </section>
            </div>

            <div id="steps">
                <p className="text-center text-2xl mb-40">As easy as...</p>
                <div className="flex-col w-3/4 xl:w-1/2 mx-auto space-y-36">
                    <div className="flex">
                        <div className="flex flex-row w-full md:w-3/5">
                            <h1 className="font-black text-9xl bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out inline text-transparent bg-clip-text px-5">
                                1
                            </h1>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                                    Find Component
                                </h1>
                                <h1 className="text-xl md:text-2xl xl:text-3xl">
                                    Browse the collection of free components to find what you're looking for.
                                </h1>
                            </div>
                        </div>
                        <div className="content-center hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" height="128px" viewBox="0 -960 960 960"
                                 width="128px"
                                 fill="#b8b8b8">
                                <path
                                    d="m618-358 44-42-84-84q11-17 16.5-36t5.5-40q0-59-41.5-99.5T460-700q-57 0-98.5 40.5T320-560q0 59 41.5 99.5T460-420q21 0 39.5-5.5T536-442l82 84ZM460-480q-33 0-56.5-23.5T380-560q0-33 23.5-56.5T460-640q32 0 56 23.5t24 56.5q0 33-23.5 56.5T460-480ZM160-240q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440ZM40-120v-80h880v80H40Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex-row-reverse flex">
                        <div className="flex flex-row-reverse w-full md:w-3/5">
                            <h1 className="font-black text-9xl bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out inline text-transparent bg-clip-text px-5">
                                2
                            </h1>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl text-end">
                                    View Demo
                                </h1>
                                <h1 className="text-xl md:text-2xl xl:text-3xl text-end">
                                    See a live demonstration of the component right in your browser.
                                </h1>
                            </div>
                        </div>
                        <div className="content-center hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" height="128px" viewBox="0 -960 960 960"
                                 width="128px"
                                 fill="#b8b8b8">
                                <path
                                    d="M80-480v-80h120v80H80Zm136 222-56-58 84-84 58 56-86 86Zm28-382-84-84 56-58 86 86-58 56Zm476 480L530-350l-50 150-120-400 400 120-148 52 188 188-80 80ZM400-720v-120h80v120h-80Zm236 80-58-56 86-86 56 56-84 86Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-row w-full md:w-3/5">
                            <h1 className="font-black text-9xl bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out inline text-transparent bg-clip-text px-5">
                                3
                            </h1>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                                    Copy Code
                                </h1>
                                <h1 className="text-xl md:text-2xl xl:text-3xl">
                                    Take the code straight into your project and modify however you please!
                                </h1>
                            </div>
                        </div>
                        <div className="content-center hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" height="128px" viewBox="0 -960 960 960"
                                 width="128px"
                                 fill="#b8b8b8">
                                <path
                                    d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div id="components">
                <section className="relative bg-gray-100 -skew-y-2 mt-36 mb-10">
                    <div className="skew-y-2 py-32 flex flex-row w-full">
                        <div className="ps-10 lg:ps-40 w-3/4 lg:w-1/2">
                            <h1 className="font-bold text-4xl md:text-5xl mb-4">30+ Components</h1>
                            <h2 className="text-xl md:text-2xl mb-16">
                                With complete access to each <span
                                className="font-mono text-yellow-400">@Composable</span>’s
                                code, you have full freedom to customize and
                                build on each and every component however you see fit! Change the color scheme, sizes,
                                add
                                or remove any padding - make it yours.
                            </h2>
                            <a
                                href="/components"
                                className="bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out py-2 md:py-3 lg:py-5 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10 rounded-full text-white tracking-tight font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                Browse Components »
                            </a>
                        </div>
                        <div className="w-1/4 lg:w-1/2 hidden lg:flex justify-center items-center">
                            <img src="./src/assets/ComponentsImage.png" className="max-w-md max-h-72" />
                        </div>

                    </div>
                </section>
            </div>
            <div id="screens">
                <section className="relative bg-gray-100 -skew-y-2 mt-10 mb-10">
                    <div className="skew-y-2 py-32 px-10 lg:px-40">
                        <h1 className="font-bold text-4xl md:text-5xl mb-4">Ready-to-ship Screens</h1>
                        <h2 className="text-xl md:text-2xl w-3/4 xl:w-1/2 mb-16">
                            We’ve taken on the task of designing several screens ready to make their home in your
                            applications! From authentication screens to profiles, perfect for prototyping or final
                            product. Let us streamline your application development process.
                        </h2>
                        <a
                            href="/screens"
                            className="bg-blue-gradient bg-left bg-[length:200%_200%] hover:bg-right transition-all duration-700 ease-in-out py-2 md:py-3 lg:py-5 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10 rounded-full text-white tracking-tight font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Browse Screens »
                        </a>
                    </div>
                </section>
            </div>

        </>
    );
};

export default Home;