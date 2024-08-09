const TopNavBar = () => {
    return (
        <nav className="border-b-gray-200 bg-white">
            <div className="w-full flex flex-wrap items-center justify-between p-4">
                <a href="/">
                    <h1 className="font-BowlbyOne text-xl">ComposeLib</h1>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden md:block w-full md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <a href="/">
                            <li>
                                Home
                            </li>
                        </a>
                        <a href="/#components">
                            <li>
                                Components
                            </li>
                        </a>
                        <a href="/#screens">
                            <li>
                                Screens
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;