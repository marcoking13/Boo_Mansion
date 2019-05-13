import React, { Component } from 'react';
import "./../css/start.css";
import RandomBoos from "./../components/boo_random_component.js";
class Starting extends Component {
  render() {
    return (
      <div className="startContainer container-fluid"style={{background:"url('images/Backgrounds/startmenu.jpg')"}}>
        <audio autoPlay>
          <source type="audio/mp3" src="http://66.90.93.122/ost/luigi-s-mansion-gc-rip/losyedrb/029%20-%20Mansion%20%28Exterior%29.mp3"/>
        </audio>
        <h1 className="title">Boo Tap </h1>

        <div className="row">
          <RandomBoos />
        </div>
        <div className="row rowMain">
          <div className="col-4"></div>
          <div className="col-4">
            <button className="btn startButton"style={{width:"100%"}} onClick = {()=>{this.props.pageChange("map")}}> Start Game </button>
          </div>
          <div className="col-4"></div>
        </div>

      </div>
    );
  }
}

export default Starting;
