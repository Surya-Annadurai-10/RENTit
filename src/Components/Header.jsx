import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../App";
import { MdApartment } from "react-icons/md";
import { MdVilla } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { MdCabin } from "react-icons/md";
import { MdCottage } from "react-icons/md";
import { PiFarmFill } from "react-icons/pi";
import { SiGameloft } from "react-icons/si";
import { RiHome9Fill } from "react-icons/ri";
import { GiRanchGate } from "react-icons/gi";
import { SiAndroidstudio } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { TiHeartFullOutline } from "react-icons/ti";


const Header = () => {
  const ctx = useContext(DataContext);
  const [inputVal, setInputVal] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsVal, setShowOptionsVal] = useState([]);
  const inputRef = useRef("");
  const handleSearch = () => {
    console.log(inputVal);

    let val = inputVal;
    let fil = ctx.filtered.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(val.toLowerCase()) ||
        ele.location.toLowerCase().includes(val.toLowerCase()) ||
        ele.type.toLowerCase().includes(val.toLowerCase())
      );
    });
    console.log(fil, "fil");
    ctx.setFiltered(fil);
  };

  useEffect(() => {
    if (inputVal) {

      console.log(inputVal);
      let val = inputVal;
      let fil = ctx.filtered.filter((ele) => {
        return (
          ele.name.toLowerCase().includes(val.toLowerCase()) ||
          ele.location.toLowerCase().includes(val.toLowerCase()) ||
          ele.type.toLowerCase().includes(val.toLowerCase())
        );
      });
      console.log(fil, "fil");
      setShowOptionsVal([...fil]);
    }
  }, [inputVal]);

  const showIcon = (type) => {
    if (type.includes("apartment")) {
      return <MdApartment  style={{color:"#0D6EFD"}} />;
    } else if (type.includes("house")) {
      return <FaHouseUser  style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("villa")) {
      return <MdVilla style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("cabin")) {
      return <MdCabin  style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("cottage")) {
      return <MdCottage  style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("farm")) {
      return <PiFarmFill  style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("loft")) {
      return <SiGameloft  style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("ranch")) {
      return <GiRanchGate style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("studio")) {
      return <SiAndroidstudio  style={{color:"#0D6EFD"}}/>;
    } else if (type.includes("penthouse")) {
      return <SiAndroidstudio  style={{color:"#0D6EFD"}}/>;
    }

    // <RiHome9Fill />;
  };

  console.log("showOptionsVal", showOptionsVal);

  const handleShowSearch = (e) => {
    setInputVal(e.target.value);
    setShowOptions(true)

  };

  const handleOptionsClick = (id) =>{
    const val = showOptionsVal.find(ele => ele.id == id)
    console.log(val, "val");
  
    ctx.setFiltered([
        val
    ]);
    setShowOptions(false)
    
  }

  return (
    <header className="w-full h-[10vh] sticky top-0  bg-[#F8F9FA] flex justify-between items-center px-[2vw]">
      <div className="w-[20%] lg:w-[33%]">
        <h1
          onClick={() => ctx.setShowLiked(!ctx.showLiked)}
          className=" font-bold text-2xl lg:text-3xl text-[black] capitalize cursor-pointer"
        >
          RENTit
        </h1>
      </div>
      <div className="w-[60%] lg:w-[33%] flex items-center justify-center  font-bold lg:text-3xl text-[25px] text-[#4e4d4d] capitalize">
        <h1 className="text-center ">Search Properties to rent</h1>
      </div>
      <div className="w-[33%]  relative flex items-center justify-center gap-3">
        <div className="w-[10vw] bg-white h-[5vh] rounded pl-2 border border-gray-400 ">
          <input
            ref={inputRef}
            value={inputVal}
            onChange={(e) => handleShowSearch(e)}
            className="w-full outline-0 h-full"
            placeholder="Search"
            type="text"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-[80px] hidden  lg:block  cursor-pointer rounded h-[5vh] bg-[#0D6EFD] text-white"
        >
          Search
        </button>
        <button
          onClick={handleSearch}
          className="lg:w-[80px] w-[40px] h-[40px] rounded-full  grid place-items-center  lg:hidden  cursor-pointer lg:rounded lg:h-[5vh] bg-[#0D6EFD] text-white"
        >
       <FiSearch style={{fontSize:"1.8rem" , }}/>
        </button>
        <button
          onClick={() => ctx.setShowLiked(!ctx.showLiked)}
          className="w-[80px] hidden  lg:block cursor-pointer rounded h-[5vh] bg-[#0D6EFD] text-white"
        >
          Liked
        </button>
        <button
          onClick={() => ctx.setShowLiked(!ctx.showLiked)}
          className="lg:w-[80px] lg:hidden rounded-full h-[40px] w-[40px]  cursor-pointer grid place-items-center  lg:rounded lg:h-[5vh] bg-[#0D6EFD] text-white"
        >
         <TiHeartFullOutline style={{color:"white" , fontSize:"1.8rem"}}/>
        </button>
        {showOptions ? (
          <div className="absolute flex items-center justify-center flex-col left-[15%] py-4 right-0 top-[120%] rounded w-[70%]  bg-[#F8F9FA] shadow">
            {showOptionsVal.map((ele, i) => {
              return (
                <div key={`${ele.location}_${ele.id + Math.random()}`} onClick={() => handleOptionsClick(ele.id)} className="flex px-4 py-2.5 cursor-pointer hover:bg-[#ececec] items-center justify-start gap-2">
                  <div>{showIcon(ele.type.toLowerCase())}</div>
                  <p className="text-[13px] line-clamp-1">
                    {ele.name}, {ele.location}, {ele.type}
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      
    
    </header>
  );
};

export default Header;
