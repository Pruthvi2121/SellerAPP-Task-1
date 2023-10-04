import logo from './logo.svg';
import './App.css';
// import { Card } from './Components/Card';
// import { SearchBar } from './Components/SearchBar';
// import { Pagination } from './Components/Pagination';
import Data from './Components/Data.json'
import { useState } from 'react';
import { CarList } from './Components/CarLists';
import { Pagination } from './Components/Pagination';


function App() {
  // paginaiton 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Data.slice(firstPostIndex, lastPostIndex);



  return (
<>
<CarList Data={currentPosts }/>
   <Pagination totalPosts={Data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/></>
  );
}

export default App;
