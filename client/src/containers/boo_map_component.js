import React from "react";
import "./../css/map.css";

class BooMansion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      levels:[
        {
          level:"Easy",
          booCount:30,
          time:2,
          background:"images/Backgrounds/level1.png",
          bossTime:10,
          bossCount:1,
          health:90,
          boo:{
            image:"images/booAttack1.png",
            shyImage:"images/booShy1.png",
            attackImage:"images/booAttack1.png",
            attackDamage:3,
            taps:1,
            transformTime:3,
            shyDamage:1,
            move:false
          },
          boss:{
            shyImage:"images/kingBoo.png",
            attackImage:"images/kingBoo.png",
            attackDamage:10,
            taps:4,
            transformTime:5,
            shyDamage:2,
            move:false
          }
        },
        {
          level:"Normal",
          booCount:50,
          time:1.5,
          background:"images/Backgrounds/level2.jpg",
          bossTime:10,
          bossCount:2,
          health:150,
          boo:{
            image:"images/booAttack2.png",
            shyImage:"images/booShy2.png",
            attackImage:"images/booAttack2.png",
            attackDamage:4,
            taps:2,
            transformTime:3,
            shyDamage:2,
            move:false
          },
          boss:{
            shyImage:"images/kingBoo2.png",
            attackImage:"images/kingBoo2.png",
            attackDamage:13,
            taps:5,
            transformTime:5,
            shyDamage:2,
            move:false
          }
        },
        {
          level:"Hard",
          booCount:100,
          time:2,
          background:"images/Backgrounds/level3.jpg",
          bossTime:10,
          bossCount:5,
          health:90,
          boo:{
            image:"images/booAttack3.png",
            shyImage:"images/booShy3.png",
            attackImage:"images/booAttack3.png",
            attackDamage:3,
            taps:1,
            transformTime:3,
            shyDamage:1,
            move:false
          },
          boss:{
            shyImage:"images/kingBoo.png",
            attackImage:"images/kingBoo.png",
            attackDamage:40,
            taps:4,
            transformTime:5,
            shyDamage:2,
            move:false
          }
        },
        {
          level:'Very Hard',
          booCount:30,
          time:2,
          background:"images/Backgrounds/level4.jpg",
          bossTime:10,
          bossCount:1,
          health:90,
          boo:{
            image:"images/booAttack4.png",
            shyImage:"images/booShy4.png",
            attackImage:"images/booAttack4.png",
            attackDamage:9,
            taps:3,
            transformTime:3,
            shyDamage:2,
            move:false
          },
          boss:{
            shyImage:"images/kingBoo.png",
            attackImage:"images/kingBoo.png",
            attackDamage:10,
            taps:4,
            transformTime:5,
            shyDamage:2,
            move:false
          }
        },
        {
          level:"Impossible",
          booCount:200,
          time:1,
          background:"images/Backgrounds/level5.jpg",
          bossTime:20,
          bossCount:20,
          health:800,
          boo:{
            image:"images/booAttack5.png",
            shyImage:"images/booShy5.png",
            attackImage:"images/booAttack5.png",
            attackDamage:5,
            taps:2,
            transformTime:5,
            shyDamage:2,
            move:false
          },
          boss:{
            shyImage:"images/kingBoo.png",
            attackImage:"images/kingBoo.png",
            attackDamage:10,
            taps:4,
            transformTime:5,
            shyDamage:2,
            move:false
          }
        }
      ],
      counter:0
    }
  }
  counterChange(counter){
    if(this.state.counter >= 0){

      return this.setState({counter:this.state.counter + counter});

    } else if(this.state.counter === this.state.levels.length || this.state.counter <= 0){
      return this.setState({counter:0});
  }else{
      return this.setState({counter:0});
  }
  }
  render(){
    var backgroundURL = `url("${this.state.levels[this.state.counter].background}")`
    return(
      <div>
        <div className="navigator">

          <img className="icon" src="images/logo.png" />
            <p className="booTitle">Boo Tap</p>
          <a href="/">  <button className="btn exit" >Exit</button> </a>
        </div>

          <div className="container-fluid">
          <div className="row mapRow">
            <div className="col-1">
              <img src="images/Backgrounds/arrowR.png" className="arrL"onClick={(e)=>{this.counterChange(-1)}}/>

            </div>
            <div className="col-10 mapCon"style={{background:backgroundURL}}>

            </div>
            <div className="col-1">
                  <img src="images/Backgrounds/arrowL.png" className="arrR" onClick={(e)=>{this.counterChange(1)}}/>
            </div>
          </div>
          <div className="row row2">
          <div className="col-2"></div>
            <div className="col-5">
            <br />
              <ul>
                <li className="detail">Level: {this.state.levels[this.state.counter].level}</li>
                <li className="detail">Boo Count:  {this.state.levels[this.state.counter].booCount}</li>
                <li className="detail">Heath:  {this.state.levels[this.state.counter].health}</li>
              </ul>
            </div>
              <div className="col-4">
                <img className="booType" src={this.state.levels[this.state.counter].boo.image} />
                <button className="btn start">Start</button>
              </div>
          </div>
        </div>

      </div>

    )
  }
}


export default BooMansion;
