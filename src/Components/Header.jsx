import React, { useContext, useRef } from 'react'
import { DataContext } from '../App';

const Header = () => {

    const ctx = useContext(DataContext);
    const inputRef = useRef(null);
    const handleSearch = () =>{
        console.log(inputRef.current.value);
        let val  = (inputRef.current.value);
        let fil = ctx.filtered.filter(ele => {
            return (ele.name.toLowerCase().includes(val.toLowerCase())) ||
            (ele.location.toLowerCase().includes(val.toLowerCase())) ||
            (ele.type.toLowerCase().includes(val.toLowerCase()))
        })
        console.log(fil , "fil");
        ctx.setFiltered(fil);
        
    }
  return (
    
    <header className='w-full h-[10vh] sticky top-0  bg-[#F8F9FA] flex justify-between items-center px-[2vw]'>
        <div className="w-[33%]">
            <h1 onClick={() => ctx.setShowLiked(!ctx.showLiked)} className=' font-bold text-3xl text-[black] capitalize cursor-pointer'>RENTit</h1>
        </div>
        <div className="w-[33%] flex items-center justify-center font-bold text-3xl text-[#4e4d4d] capitalize">
            <h1>Search Properties to rent</h1>
        </div>
        <div className="w-[33%] flex items-center justify-center gap-3">
            <div className="w-[10vw] bg-white h-[5vh] rounded pl-2 border border-gray-400 ">
                <input ref={inputRef} className='w-full outline-0 h-full' placeholder='Search' type="text" />
            </div>
            <button onClick={handleSearch} className="w-[80px] cursor-pointer rounded h-[5vh] bg-[#0D6EFD] text-white">Search</button>
            <button onClick={() => ctx.setShowLiked(!ctx.showLiked)} className="w-[80px] cursor-pointer rounded h-[5vh] bg-[#0D6EFD] text-white">Liked</button>
        </div>
    </header>
  )
}

export default Header