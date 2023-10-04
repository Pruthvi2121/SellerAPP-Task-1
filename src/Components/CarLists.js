import React from "react";

import { useState } from 'react';
import { SearchBar } from "./SearchBar";
import { Card } from "./Card";


export const CarList =({Data})=>{

    const [serach, setSearch] = useState('')
    const handleSearch = (query) => {
      console.log(`Searching for: ${query}`);
      setSearch(query)
    };
  
    return <div className='mt-4 min-h-screen w-full md:w-11/12 xl:w-8/12 mx-auto '>
      
    <SearchBar onSearch={handleSearch}/>

    
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4 mx-auto w-full '>

      {
        Data.filter((item)=>{
          return serach.toLowerCase() === '' ? item : item.name.toLowerCase().includes(serach.toLowerCase())
        })
        .map((item, i)=>(
          <Card data={item} key={i}/>
        ))
      }
          
    </div>
    {/* <Pagination/> */}
    
    </div>

    
}