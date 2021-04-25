import React from "react";
import DataListUi from "./DataListUi";

const LoadingTemp = ({ loadingType }) => {
  const LoadingItem = () => {
    return (
      <div
        className="animate-loading mb-3 flex-0 mr-3 bg-600 w-52 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 h-80 rounded-lg "
      ></div>
    );
  };
  return (
    <div className="max-w-screen-lg mt-6 mx-auto px-4 ">
      {loadingType === "Home" || loadingType === "Search" ? (
        <>
          <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-8 bg-gray-100 rounded-lg"></div>
          <DataListUi>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
          </DataListUi>
        </>
      ) : (
        <div className="max-w-screen-lg mx-auto pt-6 px-3 sm:px-4 md:flex  justify-start ">
          <LoadingItem />
          <div>
          <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-2 bg-gray-100 rounded-lg"></div>
            <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-2 bg-gray-100 rounded-lg"></div>
            <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-2 bg-gray-100 rounded-lg"></div>
            <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-2 bg-gray-100 rounded-lg"></div>
            <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-2 bg-gray-100 rounded-lg"></div>
            <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-2 bg-gray-100 rounded-lg"></div>
            <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-2 bg-gray-100 rounded-lg"></div>
            <DataListUi>
              <LoadingItem />
              <LoadingItem />
              <LoadingItem />
              <LoadingItem />
            </DataListUi>
            <div className="animate-loading  bg-600 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-24 h-8 mb-8 bg-gray-100 rounded-lg"></div>
            <DataListUi>
              <LoadingItem />
              <LoadingItem />
              <LoadingItem />
              <LoadingItem />
            </DataListUi>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingTemp;
