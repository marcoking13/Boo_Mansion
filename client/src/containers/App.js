import React, { Component } from 'react';
import Starting from "./starting_container.js";
import BooMansion from "./boo_map_component.js";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:"start",
      data:null
    }
    this.pageChange = this.pageChange.bind(this);
  }
  pageChange(url,data){
    this.setState({url:url,data:data})
  }
  render() {
    if(this.state.url === "start"){
      return (
        <div className="container-flui">
          <Starting pageChange = {this.pageChange} />
        </div>
      );
    }else if (this.state.url === "map"){
    return  <div className="container-flui">     <div className="sheet">   <BooMansion pageChange = {this.pageChange}/>  </div>  </div>
    }
  }
}

export default App;
