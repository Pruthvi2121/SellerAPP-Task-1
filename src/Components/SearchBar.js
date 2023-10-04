import React from "react";
import {BiSearch} from "react-icons/bi";
import {FiChevronDown} from "react-icons/fi";
import { useState } from "react";
export const  SearchBar = ({ onSearch }) =>{
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
      const newQuery = e.target.value;
      setQuery(newQuery);
      // Trigger search with the updated query
      onSearch(newQuery);
    };

    return <>
        <div className="h-16 w-full flex shadow-md bg-[#F1F5FC] rounded-2xl text-gray-600 ">
            <div className="flex items-center mx-2 my-3 rounded-full  bg-white">
                <input type="text"
                 className="focus:outline-none px-4 mx-2 font-semibold"
                 placeholder="Search.." 
                 value={query}
                 onChange={handleInputChange}
                />
                <BiSearch size={"24px"} className="mx-4 text-gray-600"/>
            </div>

            <div className="flex justify-center items-center mx-2 ">
                <span className="font-semibold text-sm">Relivance</span>
                <FiChevronDown className="text-gray-500"/>
            </div>
            <div className="flex justify-center items-center">
                <span  className="font-semibold  text-sm">All brands</span>
                <FiChevronDown />
            </div>
            
        </div>
    </>
}