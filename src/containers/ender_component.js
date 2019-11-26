import React from "react";
import "./../css/ender.css";
import EndBox from "./../components/end/end_box"
class Ender extends React.Component {
    render(){
        return  <EndBox data = {this.props.data} pageChange = {this.props.pageChange}/>
    }
  }


export default Ender;
