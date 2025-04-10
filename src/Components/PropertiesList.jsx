import React, { useCallback, useContext } from "react";
import { Data } from "../Data.js";
import PropertiesCard from "./PropertiesCard.jsx";
import { DataContext } from "../App.jsx";

const PropertiesList = () => {
  const ctx = useContext(DataContext);
  // console.log("filterd----------------" , filtered);

  const likedFn = () => {
    if (!ctx.favProperty.length == 0) {
      return (
        <>
          {ctx.favProperty.map((ele) => {
            return <PropertiesCard {...ele} />;
          })}
        </>
      );
    } else {
      return (
        <>
          <div className="w-full grid place-items-center">
            <h1 className="text-3xl font-bold text-[#4f4f4f]">No Data....</h1>
          </div>
        </>
      );
    }
  };

  const filterFn = () => {
    if (!ctx.filtered.length == 0) {
      return (
        <>
          {ctx.filtered.map((ele) => {
            return <PropertiesCard {...ele} />;
          })}
        </>
      );
    } else {
      return (
        <>
          <div className="w-full grid place-items-center">
            <h1 className="text-3xl font-bold text-[#4f4f4f]">No Data....</h1>
          </div>
        </>
      );
    }
  };


  return (
    <main className="flex items-center w-[85%] min-h-[60vh] my-10 m-auto justify-start flex-wrap gap-4">
      {ctx.showLiked ? (
        likedFn()
      ) : (
        filterFn()
      )}
    </main>
  );
};

export default PropertiesList;
