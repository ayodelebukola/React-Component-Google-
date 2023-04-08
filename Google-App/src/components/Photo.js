import React from "react";
import Food from "../images/food.jpg";

export default function Photo(){
    return(
        <img src={Food} alt="food" className="food-photo"/>
    );
};
