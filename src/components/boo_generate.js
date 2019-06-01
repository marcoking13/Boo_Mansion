import React from "react";
import "./../css/rando.css"
class RandomBoos extends React.Component {

constructor(props){
  super(props);
  this.state = {
    boos:["images/booAttack1.png","images/booAttack2.png","images/booAttack3.png","images/booAttack4.png","images/booAttack5.png"],
    divs:[]
  }
}
componentDidMount(){
  this.interval = setInterval(()=>{
      var ran = Math.floor(Math.random() * this.state.boos.length);
      var ranX =  Math.floor(Math.random() * 90);
      var ranY =  Math.floor(Math.random() * 90);
      var posY = ranY +"%";
      var posX = ranX + "%";
      this.setState({boos:this.state.boos.concat(<div><img className="littleBo"src={this.state.boos[ran]} style={{position:"absolute",width:"50px",height:"50px",top:posY,left:posX}}/></div>)
    });
    })
}
renderBoos(){
  return this.state.divs.map((div)=>{
    console.log("L");
    return div;
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
