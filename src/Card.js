import React from "react";

function Card(props) {
  return (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
        
           <img  src={props.img} alt="avatar_img" />
          </div>
        </div>
       </div>   
      <div className="text-container">
        <h2>{props.name}</h2>
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
      
    </div>
  );
}

export default Card;
