import React from "react";

class Timer extends React.Component{


  componentDidMount(){
    this.interval = setInterval(()=>{
      console.log(this.props.health);
      this.props.damage(0);
    },this.props.intervalTime);
  }

  render(){
    return null
  }

}

export default Timer;
