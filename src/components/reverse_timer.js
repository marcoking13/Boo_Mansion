import React from "react";



class Timer extends React.Component{


  componentDidMount(){
    this.interval = setInterval(()=>{
      console.log(this.props.health);
      this.props.timer();
    },this.props.intervalTime);
  }
  render(){
    return null
  }
}




export default Timer;
