import React from "react";
import { Route, Link, Routes } from "react-router-dom"; // Import components from 'react-router-dom'
import tabledata from "./data/table.json";
import DataTable from "./component/table"

const App = () => {
  return (
    <div>
      <nav>
        <ul>
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
        <Route path="/about" element={<h1>About </h1>} />
        <Route path="*" element={<h1>ggfjghjh </h1>} />{" "}
        {/* This will handle 404 routes */}
      </Routes>
    </div>
  );
};

export default App;
