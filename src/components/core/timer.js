import React from "react";

class Timer extends React.Component{


  componentDidMount(){
    this.interval = setInterval(()=>{
      this.props.damage(0);
    },this.props.intervalTime);
  }

  render(){
    return null
  }

}

export default Timer;
