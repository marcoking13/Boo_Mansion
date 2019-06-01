import React from "react";
import "./../css/ender.css";
import EndBox from "./../components/end_box"
class Ender extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      end:true
    }
  }

    render(){

        return(
          <EndBox data = {this.props.data} pageChange = {this.props.pageChange}/>
        )

    }

}


export default Ender;
