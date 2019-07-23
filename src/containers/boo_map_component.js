import React from "react";
import "./../css/map.css";
import Levels from "./../config/map_data.js"
class BooMansion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      levels:Levels,
      counter:0
    }
  }

  counterChange(counter){
       this.setState({counter:this.state.counter + counter});
  }

  render(){
    var backgroundURL = `url("${this.state.levels[this.state.counter].background}")`
    return(
      <div>

        <div className="navigator">
          <img className="icon" src="images/logo.png" />
          <p className="booTitle">Boo Tap</p>
          <a href="/">  <button className="btn exit" >Exit</button> </a>
        </div>

        <div className="container-fluid">
          <div className="row mapRow">

            <div className="col-1">
              <img src="images/Backgrounds/arrowR.png" className="arrL"onClick={(e)=>{
                if(this.state.counter > 0){
                  this.counterChange(-1)
                }
            }}/>

          </div>
            <div className="col-10 mapCon"style={{background:backgroundURL}}></div>

            <div className="col-1">
              <img src="images/Backgrounds/arrowL.png" className="arrR" onClick={(e)=>{
                  if(this.state.counter < this.state.levels.length - 1){
                    this.counterChange(1)
                  }
              }}/>
            </div>

          </div>

            <div className="row row2">
              <div className="col-1"></div>
              <div className="col-5">
              <br />

              <ul>
                <li className="detail klop"><strong>Level</strong> {this.state.levels[this.state.counter].level}</li>
                <li className="detail klop klopLL"><strong>Health </strong> {this.state.levels[this.state.counter].health}</li>
              </ul>

            </div>

              <div className="col-4">
                <img className="booType" src={this.state.levels[this.state.counter].boo.image} />
                <button className="btn start"onClick={()=>{this.props.pageChange({url:"core",data:this.state.levels[this.state.counter]})}}>Start</button>
              </div>

          </div>

        </div>

      </div>

    )
  }
}


export default BooMansion;
