import React from "react";
import "./../css/ender.css";
class Ender extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      end:true
    }
  }
    render(){

        return(
          <div className="finalSheet container-fluid" style={{background:"url('images/backgrounds/startmenu.jpg')"}}>
              <h1 className="end"style={{textAlign:"center",color:"red",fontSize:"50px",fontWeight:"bold",marginTop:"1%",fontFamily:"monospace"}}>{this.props.data.title}</h1>
              <div style={{marginTop:"5%"}}>


              <div className="scoreBox"style={{paddingBottom:"5%",marginLeft:"40%",width:"20%",border:"10px solid violet",borderRadius:"10px",background:"black"}}>
                <h1 className="scoreFinal" style={{textAlgin:"right",marginLeft:"10%",marginTop:"5%",color:"orange",fontSize:"50px",fontWeight:"bold"}}>Score:<strong>{this.props.data.score}</strong></h1>
                <h1 className="scoreFinal" style={{textAlgin:"center",marginLeft:"10%",marginTop:"5%",color:"orange",fontSize:"50px",fontWeight:"bold"}}>Kills:<strong>{this.props.data.kills}</strong></h1>
                <h1 className="scoreFinal" style={{textAlgin:"center",marginLeft:"10%",marginTop:"5%",color:"orange",fontSize:"50px",fontWeight:"bold"}}>Health:<strong>{this.props.data.health}</strong></h1>
                <div className="hpBar"style={{width:"150px",height:"30px",marginLeft:"22.5%",borderRadius:"10px",marginTop:"5%"}}>
                  <div className="bloodF"style={{borderRadius:"10px",width:"150px",height:"30px",background:"red"}}></div>
                </div>
              </div>

              </div>
              <button className="backToMap btn"style={{width:"25%",fontWeight:"bold",background:"black",border:"3px solid red",color:"white",marginLeft:"37.5%",marginTop:"5%",fontFamily:"sans-serif",textAlign:"center",height:"40px"}}
              onClick = {()=>{this.props.pageChange("map",null)}}
              >Back To Map</button>
          </div>
        )

    }

}


export default Ender;
