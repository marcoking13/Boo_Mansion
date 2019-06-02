import React, { Component } from 'react';
import "./../css/chooser.css";

class  GameChoose extends Component {
  constructor(props){
    super(props);
    this.state = {
      boos:["images/booAttack1.png","images/booAttack2.png","images/booAttack3.png","images/booAttack4.png","images/booAttack5.png"],
      divs:[]
    }
  }
  componentDidMount(){
    this.lopinterval = setInterval(()=>{

        var ran = Math.floor(Math.random() * this.state.boos.length);
        var ranX =  Math.floor(Math.random() * 90);
        var ranY =  Math.floor(Math.random() * 90);
        var posY = ranY +"%";
        var posX = ranX + "%";
        this.setState({divs:this.state.divs.concat(<div><img className="littleBo"src={this.state.boos[ran]} style={{position:"absolute",width:"50px",height:"50px",top:posY,left:posX}}/></div>)
      });
    },500)
  }
  renderBoos(){
    if(window.innerWidth > 580){
    return this.state.divs.map((div)=>{

      return div;
    });
  }
  }
  renderChooser(){
    if(window.innerWidth < 590){
      return(
        <div className="row">
          <div className= "col-1"/>
        <div className="col-10 chooseCon">
          <div className="levelCon" onClick = {()=>{this.props.changeURL("map",null)}}>
              <img className="booChoice" src="images/booAttack1.png"/>
              <p className="levelTe">Levels</p>
          </div>
          <div className="levelCon" onClick = {()=>{this.props.changeURL("inf",null)}}>
              <img className="booChoice" src="images/booAttack3.png"/>
              <p className="levelTe">Random</p>
          </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="row">
          <div className= "col-5"/>
        <div className="col-6 chooseCon">
        <div className="levelCon" onClick = {()=>{clearInterval(this.lopinterval);this.props.changeURL("map",null)}}>
            <img className="booChoice" src="images/booAttack1.png"/>
            <p className="levelTe">Levels</p>
        </div>
        <div className="levelCon" onClick = {()=>{clearInterval(this.lopinterval);this.props.changeURL("inf",null)}}>
            <img className="booChoice" src="images/booAttack3.png"/>
            <p className="levelTe">Random</p>
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
           {this.renderBoos()}
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
