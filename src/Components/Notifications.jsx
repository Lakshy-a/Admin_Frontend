/* eslint-disable no-unused-vars */
import React from "react";

function Notifications(data) {
  console.log("Data prop:", data);
  const insideArray = data.data;
  console.log(insideArray);
  //   console.log("Type of data:", typeof data);

  if (Array.isArray(data)) {
    return <div>Data is not an array!</div>;
  }

  return (
    <>
      <>
        {insideArray.map((notification, index) => (
          <div key={index} className="flex mt-2 mb-2 gap-2 items-center cursor-pointer hover:bg-blue-100 rounded-md px-3 py-2">
            <div
              className="rounded-full p-2 text-2xl"
              style={{
                backgroundColor: notification.notificationBackgroundColor,
              }}
            >
              <span
                className="text-xl"
                style={{ color: notification.notificationIconColor }}
              >
                {notification.notificationIcon}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs font-semibold">
                {notification.noticationsHeading}
              </div>
              <div className="text-xs text-gray-500">
                {notification.notificationsContent}
              </div>
            </div>
          </div>
        ))}
      </>
    </>
  );
}

export default Notifications;
