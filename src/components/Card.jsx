import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({group}) => {

    // eslint-disable-next-line react/prop-types
    const title = group.category
    const thumbnailSrc = group.thumbnail ? group.thumbnail : 'https://t3.ftcdn.net/jpg/08/19/97/20/360_F_819972032_ww39Fur0hmIeS2UFAuWGl5xBqpOR5Eou.jpg';


    return (
        <a className="text-gray-900" href={`/component/${title}`}>
            <div className="h-52 md:h-64 bg-transparent rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-blue-100 group">
                <div
                    className="bg-gray-100 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-200 group-hover:border-gray-300">
                    <h1 className="font-semibold">{title}</h1>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                    </svg>

                </div>
                <div className="flex justify-center items-center h-5/6">
                    <img
                        src={thumbnailSrc}/>
                    {/*<div className="relative h-4/6 w-56">
                        <img
                            src={thumbnailSrc}
                            className="box-border block overflow-hidden"/>
                    </div>*/}
                </div>
            </div>
        </a>
    );
};

export default Card;