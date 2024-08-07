const Card = () => {
    return (
        <div>
            <div className="h-64 bg-white rounded-lg border border-gray-400 hover:border-white">
                <div className="bg-gray-500 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-400">
                    <h1>Text Title</h1>
                </div>
                <div className="flex justify-center items-center h-52">
                    <div className="relative h-4/6 w-56">
                        <img
                            src="https://t3.ftcdn.net/jpg/08/19/97/20/360_F_819972032_ww39Fur0hmIeS2UFAuWGl5xBqpOR5Eou.jpg"
                            className="box-border block overflow-hidden"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;