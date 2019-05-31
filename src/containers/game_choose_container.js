import React, { Component } from 'react';
import "./../css/chooser.css";

class  GameChoose extends Component {
  renderChooser(){
    if(window.innerWidth < 590){
      return(
        <div className="row">
          <div className= "col-1"/>
        <div className="col-10 chooseCon">
          <div className="levelCon" onClick = {()=>{this.props.changeURL("map")}}>
              <img className="booChoice" src="images/booAttack1.png"/>
              <p className="levelTe">Levels</p>
          </div>
          <div className="levelCon" onClick = {()=>{this.props.changeURL("start")}}>
              <img className="booChoice" src="images/booAttack3.png"/>
              <p className="levelTe">Infinite</p>
          </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="row">
          <div className= "col-5"/>
        <div className="col-6 chooseCon">
        <div className="levelCon" onClick = {()=>{this.props.changeURL("map")}}>
            <img className="booChoice" src="images/booAttack1.png"/>
            <p className="levelTe">Levels</p>
        </div>
        <div className="levelCon" onClick = {()=>{this.props.changeURL("start")}}>
            <img className="booChoice" src="images/booAttack3.png"/>
            <p className="levelTe">Infinite</p>
        </div>
        <div className= "col-1"/>
        </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="container-fluid">
          <h5 className="chooseTitle"> Choose Game Type</h5>
          <div className="row">

              {this.renderChooser()}
            <div className="col-3"/>
          </div>
      </div>
    );
  }
}

export default GameChoose;
