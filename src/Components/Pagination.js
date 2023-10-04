import React from "react";

import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const  Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage,}) =>{
  const navigate = useNavigate()
  let pages = []
  for(let i=1; i<= Math.ceil(totalPosts/ postsPerPage); i++){
    pages.push(i);
  }
    return <>
        <div className=" my-2 h-14 w-full text-sm flex bg-[#F1F5FC] rounded-2xl text-gray-600 ">
            <div className="flex items-center mx-2 my-3 justify-between w-full ">
              <h1 className="mx-2 font-semibold"> {currentPage} from {pages.length}</h1>  
              <div className="flex gap-x-2 font-semibold">
                <span className="bg-white px-3 py-1 rounded-xl  flex items-center"><FiArrowLeft /></span>

                {
                  pages.map((page, index)=>{
                   return <span key={index} onClick={()=>{setCurrentPage(page); navigate(`/page/${page}`)}} className={page==currentPage ? "bg-blue-400 text-white px-3 py-1 rounded-xl ": "bg-white px-3 py-1 rounded-xl "} >{page}</span>
})              
                }
                <span className="bg-white px-3 py-1 rounded-xl flex items-center"><FiArrowRight /></span>
              </div>
            </div>

            
        </div>
    </>
}