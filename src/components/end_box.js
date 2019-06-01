import React from "react";
import "./../css/rando.css"
class EndBox extends React.Component {


render(){
   return(

     <div className="finalSheet container-fluid" style={{background:"url('images/backgrounds/startmenu.jpg')"}}>
         <h1 className="end"style={{textAlign:"center",color:"red",fontSize:"40px",fontWeight:"bold",marginTop:"1%",fontFamily:"monospace"}}>{this.props.data.title}</h1>
         <div style={{marginTop:"5%"}}>


         <div className="scoreBox"style={{paddingBottom:"5%",marginLeft:"35%",width:"30%",border:"10px solid violet",borderRadius:"10px",background:"black"}}>
           <h3 className="scoreFinal lls"><img className="icoE ico2"src="images/time.png"/>Time:<strong> {this.props.data.time}</strong></h3>
           <h3 className="scoreFinal"><img className="icoE boE"src="images/logo.png"/>Kills:<strong> {this.props.data.kills}</strong></h3>


         </div>

         </div>
         <button className="backToMap btn"style={{width:"25%",fontWeight:"bold",background:"black",border:"3px solid red",color:"white",marginLeft:"37.5%",marginTop:"5%",fontFamily:"sans-serif",textAlign:"center",height:"40px"}}
            onClick = {()=>{this.props.pageChange("start",null)}}
            >Main Menu</button>
     </div>

   )
 }
}
export default EndBox;
