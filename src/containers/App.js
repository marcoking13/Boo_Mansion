import React, { Component } from 'react';
import Starting from "./starting_container.js";
import BooMap from "./boo_map_component.js";
import  CoreGame from "./core_game_component.js";
import  Ender from "./ender_component.js";
import  GameChoose from "./game_choose_container.js";
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
    console.log(this.state.url,this.state.data);
    if(this.state.url === "start"){
      return (
        <div className="container-flui">
          <Starting pageChange = {this.pageChange} />
        </div>
      );
    }
    else if(this.state.url === "choose"){
        return <GameChoose changeURL = {this.pageChange} />
    }
    else if (this.state.url === "map"){
      return  <div className="container-flui">     <div className="sheet">   <BooMap pageChange = {this.pageChange}/>  </div>  </div>
    }
    else if (this.state.url === "core" || this.state.url.url == "core"){
      return  <div> <CoreGame pageChange = {this.pageChange} data ={this.state.url.data}/> </div>
    }
    else if (this.state.url.url === "end" || this.state.url ==="end"){
      return  <div> <Ender pageChange = {this.pageChange} data ={this.state.data} meta = {this.state.data }/> </div>
    }
  }
}

export default App;
