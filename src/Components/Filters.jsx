import React, { useContext, useState } from "react";
import { Data } from "../Data";
import { DataContext } from "../App";
import { IoArrowForward } from "react-icons/io5";

const Filters = () => {
  const ctx = useContext(DataContext);
  

  // const ctx = useContext(DataContext);
  const showBoo = (price) => {
    let filterPrice = ctx.filter.price;
    let boo = false;

    if (filterPrice == "0-3000") {
      boo = true;
    } else if (filterPrice == "500-1000") {
      if (price >= 500 && price <= 1000) {
        boo = true;
      } else {
        boo = false;
      }
    } else if (filterPrice == "1000-1500") {
      if (price >= 1000 && price <= 1500) {
        boo = true;
      } else {
        boo = false;
      }
    } else if (filterPrice == "1500-2000") {
      if (price >= 1500 && price <= 2000) {
        boo = true;
      } else {
        boo = false;
      }
    } else if (filterPrice == "2000 -2500") {
      if (price >= 2000 && price <= 2500) {
        boo = true;
      } else {
        boo = false;
      }
    } else if (filterPrice == "2500-3000") {
      if (price >= 2500 && price <= 3000) {
        boo = true;
      } else {
        boo = false;
      }
    } else {
    }

    return boo;
  };

  const handleFilter = () => {
    let priceLeft = 0;
    let priceRight = 7000;
    if (ctx.filter.price) {
      priceLeft = parseInt(ctx.filter.price.split("-")[0]);
      priceRight = parseInt(ctx.filter.price.split("-")[1]);
    }

    console.log(priceLeft, priceRight);

    let filtered = Data.filter((ele) => {
      console.log(ele.type, ctx.filter.city);
      return (
        ele.location.toLowerCase().includes(ctx.filter.city.toLowerCase()) &&
        ele.type.toLowerCase().includes(ctx.filter.type.toLowerCase()) &&
        ele.price >= priceLeft &&
        ele.price <= priceRight
      );
    });

    // console.log(filtered);
    

    ctx.setFiltered(filtered);
  };

  const handleCity = (val) => {
    let obj = {
      ...ctx.filter,
      city: val,
    };

    ctx.setFilter(obj);
  };

  const handleDate = (val) => {
    let obj = {
      ...ctx.filter,
      date: val,
    };

    ctx.setFilter(obj);
  };

  const handlePrice = (val) => {
    let obj = {
      ...ctx.filter,
      price: val,
    };

    ctx.setFilter(obj);
  };

  const handleType = (val) => {
    let obj = {
      ...ctx.filter,
      type: val,
    };
   console.log(obj , "filtered value");
   
    ctx.setFilter(obj);
  };

  // console.log(ctx.filter, "filter");
  // console.log(type, "filter");

  return (
    <section className="px-[2vw] text-[#212529] w-full  md:gap-0 lg:h-[13vh] mt-5 flex-col md:flex-row flex   items-center justify-center ">
      <div className="bg-[#F8F9FA] md:py-0 py-3 px-3 border-r-1 border-[#dedede] w-full md:w-[23%] h-full flex-col  flex items-start justify-center gap-1">
        <h1 className="text-md">Enter City</h1>
        <select
          onChange={(e) => handleCity(e.target.value)}
          value={ctx.filter.city}
          className="w-[96%] h-[5vh] border border-[#dedede] rounded px-3"
          name=""
          id=""
        >
          <option value="">All</option>
          {Data.map((ele, i) => {
            return (
              <option
                key={`${ele.location}_${i + Math.random()}_location`}
                value={ele.location}
              >
                {ele.location}
              </option>
            );
          })}
        </select>
      </div>
      <div className="bg-[#F8F9FA]  md:py-0 py-3 px-3 border-r-1 border-[#dedede] w-full md:w-[23%] h-full flex-col  flex items-start justify-center gap-1">
        <h1>Date</h1>
        <input
          onChange={(e) => handleDate(e.target.value)}
          className="w-[96%] h-[5vh] border border-[#dedede] rounded px-3"
          type="date"
          required
        />
      </div>
      <div className="bg-[#F8F9FA]  md:py-0 py-3 px-3 border-r-1 border-[#dedede] w-full md:w-[23%] h-full flex-col  flex items-start justify-center gap-1">
        <h1>Price</h1>
        <select
          onChange={(e) => handlePrice(e.target.value)}
          className="w-[96%] h-[5vh] border border-[#dedede] rounded px-3"
          name=""
          id=""
        >
          <option value="">Rs. 0-7000</option>
          <option value="1000-2000">Rs. 1000-2000</option>
          <option value=" 2000-3000">Rs. 2000-3000</option>
          <option value="3000-4000">Rs. 3000-4000</option>
          <option value="4000-5000">Rs. 4000-5000</option>
          <option value="5000-6000">Rs. 5000-6000</option>
          <option value="6000-7000">Rs. 6000-7000</option>
        </select>
      </div>
      <div className="bg-[#F8F9FA]  md:py-0 py-3 px-3 border-r-1 border-[#dedede] w-full md:w-[23%] h-full flex-col  flex items-start justify-center gap-1">
        <h1>Property Type</h1>
        <select
          onChange={(e) => handleType(e.target.value)}
          value={ctx.filter.type}
          className="w-[96%] h-[5vh] border border-[#dedede] rounded px-3"
          name=""
          id=""
        >
          <option value="">All</option>
          {removeDuplicates().map((ele, i) => {
            return (
              <option key={`${ele}_${i + Math.random()}_remove`} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <div className="bg-[#F8F9FA]  md:py-0 py-3 w-[25%] md:w-[8%] flex items-center justify-center gap-4 h-full">
        <button
          onClick={handleFilter}
          className="lg:w-[80px] lg:block w-[150px] md:hidden rounded h-[5vh] bg-[#0D6EFD] text-white"
        >
          Submit
        </button>
        <button
          onClick={handleFilter}
          className="lg:w-[80px] rounded-full w-[40px] h-[40px] lg:hidden md:grid place-items-center hidden lg:rounded lg:h-[5vh] bg-[#0D6EFD] text-white"
        >
          <IoArrowForward style={{fontSize : "1.5rem"}}/>
        </button>
      </div>
    </section>
  );
};

export default Filters;

const removeDuplicates = () => {
  let types = [];
  let n = types.length;

  Data.forEach((ele) => {
    types.push(ele.type);
  });

  types.sort();
  let uniqueTypes = [];
  let current = "";

  types.forEach((ele, i) => {
    if (ele != current) {
      uniqueTypes.push(ele);
      current = ele;
    }
  });

     console.log(uniqueTypes);
  return uniqueTypes;
};
