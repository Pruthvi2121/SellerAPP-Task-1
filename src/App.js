import logo from './logo.svg';
import './App.css';
import { Card } from './Components/Card';
import { SearchBar } from './Components/SearchBar';
import { Pagination } from './Components/Pagination';

function App() {
  return (
    <div className='mt-4 min-h-screen w-full md:w-11/12 xl:w-8/12 mx-auto '>
    <SearchBar/>
    <div className='grid grid-cols-3  gap-4 mt-4 mx-auto w-full '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
    </div>
    <Pagination/>
    
    </div>
  );
}

export default App;
