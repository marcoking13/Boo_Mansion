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


              <div className="scoreBox"style={{paddingBottom:"5%",marginLeft:"35%",width:"30%",border:"10px solid violet",borderRadius:"10px",background:"black"}}>
                <h2 className="scoreFinal" >Score:<strong>{this.props.data.score}</strong></h2>
                <h2 className="scoreFinal">Kills:<strong>{this.props.data.kills}</strong></h2>
                <h2 className="scoreFinal" >Health:<strong>{this.props.data.health}</strong></h2>

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
