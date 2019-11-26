import React from "react";
import "./../../css/rando.css";
import Boos from "./../../config/map_data.js";

class RandomBoos extends React.Component {

constructor(props){
  super(props);
  this.state = {

    num:10
  }
}

 render(){
   return(
      <div>
        <img style = {{top:10 + "%",left:90 + "%"}}src = "images/ghost.gif" className="booPixel" />
        <img style = {{top:10 + "%",left:5 + "%"}}src = "images/ghost.gif" className="booPixel" />
        <img style = {{top:80 + "%",left:5 + "%"}}src = "images/ghost.gif" className="booPixel" />
        <img style = {{top:80 + "%",left:90 + "%"}}src = "images/ghost.gif" className="booPixel" />


      </div>
    )
 }

}
export default RandomBoos;
