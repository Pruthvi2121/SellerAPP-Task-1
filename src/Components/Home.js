
import React from 'react';
// import { Card } from './Components/Card';
// import { SearchBar } from './Components/SearchBar';
// import { Pagination } from './Components/Pagination';
import Data from './Data.json'
import { useState } from 'react';
import { CarList } from './CarLists';
import { Pagination } from './Pagination';
import { useParams } from 'react-router-dom';


export const Home = ()=> {
  // paginaiton 
  const { pageNumber } = useParams();
  const isPageNumberPresent = !!pageNumber;
  const page = isPageNumberPresent ? pageNumber : 1
  const [currentPage, setCurrentPage] = useState(page);
  const [postsPerPage, setpostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Data.slice(firstPostIndex, lastPostIndex);

  

  return (
<>

<CarList Data={Data} currentPosts={currentPosts}  />
   <Pagination totalPosts={Data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
   

   </>
  );

  
}


