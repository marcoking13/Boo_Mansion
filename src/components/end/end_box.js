import React from "react";
import "./../../css/rando.css";
class EndBox extends React.Component {


render(){
   return(

     <div className="finalSheet container-fluid" style={{background:"url('images/bb.png')"}}>

         <h1 className="end mlop">{this.props.data.title}</h1>
          <br />
         <div className="mt5">

         <div className="scoreBox">
           <h3 className="scoreFinal lls"><img className="icoE ico2"src="images/time.png"/>Time:<strong> {this.props.data.time}</strong></h3>
           <h3 className="scoreFinal"><img className="icoE boE"src="images/logo.png"/>Kills:<strong> {this.props.data.kills}</strong></h3>
         </div>

         </div>

         <h1 className="backToMapTxt text-center sigmoreFont cy "  onClick = {()=>{this.props.pageChange("start",null)}}  >Main Menu</h1>

     </div>

   )
 }
}
export default EndBox;
