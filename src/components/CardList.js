import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import "./CardList.css";

function CardList() {
  return (
    <div className="container">
      <h1 className="heading_style"> List of top Netflix Series in 2020</h1>
      
      {Sdata.map((val,index)=>{
      return(
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
       );
      })}
    </div>
  );
}

export default CardList;
