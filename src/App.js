import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import JavaScript from './pages/JavaScript';
import Physics from './pages/Physics';
import Mathematics from './pages/Mathematics';
import Python from './pages/Python';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import MainTitle from './components/MainTitle';
import TitleAddition from './components/TitleAddition';
import Blog from './components/Blog';
import data from './blogData.json';


function App(props) {
  const javascriptPosts = data[0].javascript;
  const pythonPosts = data[0].python;

  const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value.toLowerCase());
    };
  
  return (
    <div className="App" id='App'>
      <Router>
      
      <Header />
      <section id='home' className='simple'>
        
        <MainTitle />
        <TitleAddition />
      </section>
        <Routes>
          <Route index element= {<Home />}/>
          <Route path='/home' element = {<Home />} />
          <Route path='/javascript' element = {<JavaScript />} />
          <Route path='/physics' element = {<Physics />} />
          <Route path='/python' element = {<Python />} />
          <Route path='/mathematics' element={<Mathematics/>} />
          <Route path='*' element = {<NoPage/>} />
        </Routes>
      
        <section id="blog">
        <div className="search-main-container">
          <div className="search-container">
          <div className="search-header" >
              <h4 id="search-title">Search this Page</h4>
              <input type="text" 
              id="search" 
              placeholder="Search Something..."
              onChange={handleChange}
              value={searchInput}/>
            </div>    
            <div>Mock Lines
              
            </div> 
            <Routes>
              <Route path='/javascript' element = {<Blog input={searchInput} posts={javascriptPosts}/>}/>
              <Route path='/python' element = { <Blog input={searchInput} posts={pythonPosts}/> } />
            </Routes>
            
          </div>

        </div>
      </section>
      </Router>
    </div>
  );
}

export default App;
