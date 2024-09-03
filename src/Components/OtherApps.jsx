/* eslint-disable no-unused-vars */
import React from 'react';

function OtherApps(data) {  // Destructuring props to directly get `data`
    const appsData = data.data;
    console.log(appsData);
    return (
        <>
            <div className="container w-full h-fit grid grid-rows-3 grid-cols-3 gap-4 mt-4 items-center cursor-pointer ">
                {appsData.map((app, index) => {
                    return (
                        <div key={index} className="bg-white hover:bg-blue-100 rounded-lg border p-3 flex flex-col justify-center items-center gap-2">
                            <img src={app.appImage} className='rounded-xl w-9'></img>
                            <div className='text-xs text-gray-500'>{app.appName}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default OtherApps;
