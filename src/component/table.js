import React, { useState } from "react";
import "./css/table.css"

const DataTable = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState({});

  const handleRowExpand = (rowKey) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [rowKey]: !prevState[rowKey],
    }));
  };
  const Childrenitem = (item, value) => {
    return Object.keys(item).map((key) => {
      const item2 = item[key];
      if (
        value === "account_name" &&
        item2.children &&
        Object.keys(item2.children).length > 0
      ) {
        return (
          <tr key={key}>
            <button onClick={() => handleRowExpand(key)}>
              {expandedRows[key] ? "-" : "+"}
            </button>
            {item2[value]}
            {expandedRows[key] &&
              item2.children &&
              Object.keys(item2.children).length > 0 &&
              Childrenitem(item2.children, "account_name")}
          </tr>
        );
      }
      return <tr key={key}>{item2[value]}</tr>;
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Account Name</th>
          <th>Current</th>
          <th>Previous</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key) => {
          const item = data[key];
          return (
            <tr key={key}>
              <td>
                <button onClick={() => handleRowExpand(key)}>
                  {expandedRows[key] ? "-" : "+"}
                </button>
                {item.account_name}
                {expandedRows[key] &&
                  item.children &&
                  Object.keys(item.children).length > 0 &&
                  Childrenitem(item.children, "account_name")}
              </td>
              <td>
                {item.current}
                {expandedRows[key] &&
                  item.children &&
                  Object.keys(item.children).length > 0 &&
                  Childrenitem(item.children, "current")}
              </td>
              <td>
                {item.previous}
                {expandedRows[key] &&
                  item.children &&
                  Object.keys(item.children).length > 0 &&
                  Childrenitem(item.children, "previous")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
