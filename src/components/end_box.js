import React from "react";
import "./../css/endBox.css";
import "./../css/rando.css";
class EndBox extends React.Component {


render(){
   return(

     <div className="finalSheet container-fluid" style={{background:"url('images/backgrounds/startmenu.jpg')"}}>

         <h1 className="end mlop">{this.props.data.title}</h1>

         <div className="mt5">

         <div className="scoreBox">
           <h3 className="scoreFinal lls"><img className="icoE ico2"src="images/time.png"/>Time:<strong> {this.props.data.time}</strong></h3>
           <h3 className="scoreFinal"><img className="icoE boE"src="images/logo.png"/>Kills:<strong> {this.props.data.kills}</strong></h3>
         </div>

         </div>

         <button className="backToMap btn"  onClick = {()=>{this.props.pageChange("start",null)}}  >Main Menu</button>

     </div>

   )
 }
}
export default EndBox;
