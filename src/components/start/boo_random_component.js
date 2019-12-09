import React from "react";
import Boos from "./../../config/map_data.js";

class RandomBoos extends React.Component {

constructor(props){
  super(props);
  this.state = {
    coords:[
      {top:20 + "%",left:90 + "%"},
      {top:20 + "%",left:5 + "%"},
      {top:80 + "%",left:20 + "%"},
      {top:80 + "%",left:10 + "%"},
      {top:40 + "%",left:80 + "%"},
      {top:60 + "%",left:10 + "%"},
      {top:30 + "%",left:65 + "%"},
      {top:24 + "%",left:25 + "%"},
      {top:75 + "%",left:65 + "%"},
      {top:82 + "%",left:55 + "%"},
      {top:50 + "%",left:85 + "%"},
      {top:70 + "%",left:70 + "%"}

    ],
    num:10
  }
}

renderBoos(){
  var i = 0;

  return this.state.coords.map((coord)=>{
    i++;
    return(
      <img
      key = {i}
      style = {coord}
      src = {"images/booAttack"+Math.floor(Math.random() * 2 + 1).toString()+".png"}
      className="booPixel" />
    );
  });
}

 render(){
   return(
      <div>
        {this.renderBoos()}
      </div>
    )
 }

}
export default RandomBoos;
