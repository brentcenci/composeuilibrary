const FooterSection = ( ) => {
    return (
        <>


            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/"
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span
                                className="self-center font-BowlbyOne text-xl whitespace-nowrap dark:text-white">ComposeLib</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Components</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Screens</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                        href="/"
                        className="hover:underline">ComposeLib™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    );
};

export default FooterSection;