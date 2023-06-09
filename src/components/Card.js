import React  from "react";
import "./CardList.css";
import Image from "./Image";

function Card(props){
return(
    <>
    <div className="cards">
        <div className="card">
           <Image imgsrc={props.imgsrc}/>
            <div className="card_info">
                <span className="card_catagory">
                  {props.sname}
                </span>
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                <button> watch now</button>
                </a>
            </div>
        </div>
    </div>
    </>
)
}

export default Card;