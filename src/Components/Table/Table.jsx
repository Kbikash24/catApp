import React from "react";
import "./Table.css";

const Table = ({ cat }) => {
  return (
    <div className="table">
      <div className="table-box">
        <div className="basic">
          <p>Cat Details</p>
        </div>

       <div className="table-layout-1">
        <p>Name</p>
        <p>Origin</p>
        <p>Life Span</p>
        <p>Temperament</p>
        <p>Weight</p>
        

       </div>
       <div className="table-layout">
        <p>{cat.breeds[0]?.name}</p>
    <p>{cat.breeds[0]?.origin}</p>
       <p>{cat.breeds[0]?.life_span}</p>
       <p>{cat.breeds[0]?.temperament}</p>
       <p>{cat.breeds[0]?.weight.metric}</p>
       </div>
      
      </div>
    </div>
  );
};

export default Table;
