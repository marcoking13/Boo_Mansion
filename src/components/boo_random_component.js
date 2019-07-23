import React from "react";
import "./../css/rando.css"
class RandomBoos extends React.Component {

 render(){
   return(
     <div>

      <div  className="booMove">
        <img className="smallboo" src="images/boo1.png"/>
     </div>

      <img className="kingboo" src="images/kingboo2.png"/>
      <img className="booShy" src="images/booShy3.png"/>
      <img className="booAttack" src="images/booAttack3.png"/>
      <img className="ghosts" src="images/ghost.png"/>
      <img className="ghostsMobile1" src="images/ghost.png"/>
      <img className="ghostsMobile2" src="images/ghost.png"/>
      <img className="ghosts2" src="images/booShy4.png" onMouseOver={(e)=>{
        e.target.src = "images/booAttack5.png";
      }}
      />

      <img className="ghosts3" src="images/booShy4.png" onMouseOver={(e)=>{
        e.target.src = "images/booAttack4.png";
      }}/>

      <img className="ghosts4" src="images/booShy5.png" onMouseOver={(e)=>{
        e.target.src = "images/booAttack5.png";
      }}/>

      <img className="ghosts5" src="images/booShy5.png" onMouseOver={(e)=>{
          e.target.src = "images/booAttack5.png";
      }}/>

     </div>
   )
 }
 
}
export default RandomBoos;
