/* eslint-disable no-unused-vars */
import React from "react";

function Messages(data) {
  const insideData = data.data;
  console.log(insideData);
  return (
    <>
      {insideData.map((item, index) => (
        <div key={index} className="flex mt-6 mb-4 gap-4 justify-between">
          <div className="flex gap-3 cursor-pointer">
            <span>
              <img
                src={item.senderImage}
                className="w-10 h-10 rounded-full"
              ></img>
            </span>
            <div>
              <div>
                <div className="font-bold text-base hover:text-blue-600">{item.senderName}</div>
                <div className="text-xs text-gray-600">{item.message}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs">{item.messageTime}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Messages;
