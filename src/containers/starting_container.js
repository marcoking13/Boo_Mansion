import React, { Component } from 'react';

import "./../css/util.css";

import RandomBoos from "./../components/start/boo_random_component.js";

class Starting extends Component {
  render() {
      var background = `url("images/bb.png")`;

    return (
        <div className="container-fluid bb "style={{background:background}}>
          <br/>
          <h1 className="gameTitle text-center audioFont cy">Boo Tap</h1>
          <RandomBoos />

          <div className="row mt5">
            <div className="col-4"/>
            <div className="col-4">
              <img src="images/booPix.png" className="floating w50 ml25 kingBooPix" />
            </div>
            <div className="col-4"/>
          </div>

          <div className="mt5 row">
            <div className="col-3"/>
            <div className="col-6  moveDownSm">
              <h1 onClick  = {()=>{this.props.pageChange("core")}} className="co text-center startTitle sigmoreFont">Start</h1>
            </div>
            <div className="col-3"/>

          </div>

        </div>
    );
  }
}

export default Starting;
