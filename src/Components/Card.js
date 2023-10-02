import React from "react";
import {GoPeople} from "react-icons/go";
import {AiOutlineHeart} from "react-icons/ai";
import {LuFuel} from "react-icons/lu";
import {IoMdSpeedometer} from "react-icons/io";
import {PiSteeringWheelBold} from "react-icons/pi";


export const Card = ()=>{
    return<>
    <div className="bg-[#F1F5FC] aspect-[3/4] border rounded-3xl shadow-md text-gray-500">
       <div className="flex flex-col">
      <div className="mx-2 my-2 ">  <img src="logo192.png"
            className=" w-full object-contain rounded-3xl  bg-slate-400 "
            alt="" />
            </div>
        <div>
            <div className="flex justify-between items-center mx-4">
                <h1 className="font-semibold ">Toyota RAVA4</h1>
                <h1 className="border px-1 text-xs border-dotted rounded-3xl font-semibold border-blue-400">2023</h1>
            </div>

            <div className="grid grid-cols-2 my-2 gap-1 mx-6  ">
                <div className="mt-1 flex  gap-x-2">
                    <GoPeople size={"16px"} className="text-blue-400 font-semibold" />
                    <h1 className="text-xs">4 People</h1>
                </div>
                <div className="mt-1 flex  items-center gap-x-2">
                    <LuFuel size={"16px"} className="text-blue-400 font-semibold" />
                    <h1 className="text-xs">Gasoline</h1>
                </div>
                <div className="mt-1 flex  gap-x-2">
                    <IoMdSpeedometer size={"16px"} className="text-blue-400 font-semibold" />
                    <h1 className="text-xs">8.1km / 1-liter</h1>
                </div>
                <div className="mt-1 flex  gap-x-2">
                    <PiSteeringWheelBold size={"16px"} className="text-blue-400 font-semibold" />
                    <h1 className="text-xs">Automatic</h1>
                </div>
               
               
            </div>


            <div className="flex justify-between mx-4 items-center my-4">
                <h1 className="font-semibold text-sm"><span className="text-xl">$440</span>/ month</h1>
                <div className="flex items-center">
                    <span className="bg-[#6c7ce12d] text-blue-400  px-2 py-2 mx-2 rounded-lg">
                       <AiOutlineHeart/>
                    </span>
                    <button className="bg-blue-500 hover:bg-blue-400 rounded-lg font-semibold text-white px-2 py-1">
                        Rent now
                    </button>
                  
                </div>

            </div>
          
        </div>
       </div>
      
    </div>
    </>
} 