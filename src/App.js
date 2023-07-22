import React from 'react';
import {Route, Link, Routes} from 'react-router-dom'; // Import components from 'react-router-dom'



const App = () => {
  return (
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<h1>Home </h1>} />
          <Route path="/about" element={<h1>About </h1>} />
          <Route path="*" element={<h1>ggfjghjh </h1>} /> {/* This will handle 404 routes */}
        </Routes>
      </div>
   
  );
};

export default App;
