import React from "react";
import { Route, Link, Routes } from "react-router-dom"; // Import components from 'react-router-dom'
import tabledata from "./data/table.json";
import graphdata from "./data/graph.json";
import DataTable from "./component/table";
import SalesChart from "./component/graph"


const App = () => {
  return (
    <div>
      <nav className="header">
      <h1>My Sales App</h1>
        <ul className="nav-links">
          <li>
            <button>
              <Link to="/table">Go to table</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/about">Go to graph</Link>
            </button>
          </li>
        </ul>
      </nav>

      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="//table" element={<DataTable data={tabledata}/>} />
        <Route path="/about" element={<SalesChart data={graphdata}/>} />
        {" "}
        {/* This will handle 404 routes */}
      </Routes>
    </div>
  );
};

export default App;
