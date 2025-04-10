import React, { useContext, useState } from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { DataContext } from "../App";
import { Data } from "../Data";

const PropertiesCard = (props) => {
  const [fav, setFav] = useState(false);

  const ctx = useContext(DataContext);
//   console.log(ctx.favProperty);
 


  const addProperty = (id) => {

    if (!props.fav) {
      const find = ctx.filtered.find((ele) => ele.id == id);
      const findIndex = ctx.filtered.findIndex((ele) => ele.id == id);
      const findObj = {
        ...find,
        fav : !find.fav
      }

      const obj = [...ctx.favProperty, findObj];
      ctx.setFavProperty(obj);

      let copy = [
        ...ctx.filtered,
      ]

      copy.splice(findIndex , 1, findObj)

      ctx.setFiltered(copy);
    
    } else {
        //splicing in favProperty
      const findIndex = ctx.favProperty.findIndex((ele) => ele.id == id);
      const find = ctx.favProperty.find((ele) => ele.id == id);

    const copy = [
        ...ctx.favProperty
    ]

    copy.splice(findIndex , 1)
    ctx.setFavProperty(copy)

    //disliking in filtered

      const findIndex2 = ctx.filtered.findIndex((ele) => ele.id == id);
      const find2 = ctx.filtered.find((ele) => ele.id == id);
      const findObj2 = {
        ...find2,
        fav : !find2.fav
      }

    let Filterdcopy = [
        ...ctx.filtered,
      ]

      Filterdcopy.splice(findIndex2 , 1, findObj2)

    //   copy.splice(findIndex , 1 , findObj);
      
      ctx.setFiltered(Filterdcopy);
     
    }

   
  };
  return (
    <div className="w-[20vw]  h-[55vh] border border-[#cdcdcd]  rounded-md overflow-hidden ">
      <div className="w-[full] h-[60%] object-center ">
        <img className="w-full h-full" src={props.image} alt="property-img" />
      </div>
      <div className="p-4 text-[#212529]">
        <div className="flex items-center py-1 w-full h-[30%]  justify-between ">
          <h1 className="text-2xl text-[#0D6EFD] font-[500] ">
            ₹ {props.price} / day
          </h1>
          {props.fav ? (
            <TiHeartFullOutline
              onClick={() => addProperty(props.id)}
              style={{ fontSize: "1.5rem", color: "red",cursor:"pointer" }}
            />
          ) : (
            <TiHeartFullOutline
              onClick={() => addProperty(props.id)}
              style={{ fontSize: "1.5rem", color: "#6C757D",cursor:"pointer" }}
            />
          )}
        </div>
        <h1 className="text-2xl font-400 py-1">{props.name}</h1>
        <p className=" text-[#6C757D] ">{props.location}</p>
        <div className="w-[100%] mt-2 m-auto h-[1px] bg-[#dbdbdb]"></div>
        <div className="flex py-4 text-[#6C757D] items-center justify-between">
          <div className="flex  items-center justify-center gap-1">
            <FaBed />
            <p>{props.beds} Beds</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaBath />
            <p>{props.bathrooms} Bath</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <RxDimensions />
            <p>
              {" "}
              {props.beds + 2}
              {props.bathrooms + 3} x {props.beds + 3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
