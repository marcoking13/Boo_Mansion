import React from "react";

import "./../css/core.css";
import "./../css/util.css";

import Timer from "./../components/core/timer.js";
import Boos from "./../config/map_data.js";

class CoreGame extends React.Component{

  constructor(props){
    super(props);
    // Initial State
    this.state = {
      game:Boos,
      healthShrink:2,
      health: 200,
      time:0,
      boos:[],
      score:0,
      booKills:0
    }
    window.scrollTo(0,0);
  }
  // Looping through the boo array and rendering the html everytime state is updated
  booLoop(){
    // return jsx of each boo in array
    return this.state.boos.map((boo)=>{
      return boo;
    });
  }

  componentDidMount(){
      var k = 0;
      this.timerInterval = setInterval(()=>{
          this.setState({time:this.state.time + 1})
      },600)

      // If boo kills are equal or more than the number of boos in the game then stop the code after the if statement on line 29*
      //-------------------------------------------------------------------
      this.interval = setInterval(()=>{

          k++;
          var randoBoo = Math.floor(Math.random() * this.state.game.length);
          // Then create an img element with boo image and new coordinates and add the element to and array in the state called (boos)
          // Each element will have a on click function that will kill the boo and remove it from the array and also add 1 to the score and boo Kill
          for(var i =0;i<Math.floor(Math.random () * 3)+1;i++){
            // Random coords from 0 - 100
            var randomCoordY = Math.random() * 90;
            var randomCoordX = Math.random() * 90;
            // varibale of the coord in styling format
            var styling = {right:randomCoordX+"%",position:"absolute",top:randomCoordY+"%"};
            // Push jsx to array in state
            this.setState({boos:this.state.boos.concat(
              <div>
                <audio autoPlay>
                  <source src = "images/Boo.wav"type="audio/wav"/>
                </audio>
                <img
                  onClick={(e)=>{
                      // when boo is clicked, turn its image to smoke
                      // then add to the score, kill, and health of user
                    if(e.target.attributes.alive.value == 1){
                      e.target.setAttribute("src","images/smoke.png");
                      e.target.classList.add("disa");
                      e.target.classList.remove("boo");
                      var counter = parseInt(e.target.key);
                      e.target.setAttribute("alive",-1);
                      this.setState({boos:this.state.boos.splice(counter),health:this.state.health + Math.floor(Math.random() * 2) +1 ,score:this.state.score + this.state.game[randoBoo].points,booKills:this.state.booKills + 1});
                    }
                  }}
                  key = {k-1}
                  id ={(k-1)}
                  alive={1}
                  src={this.state.game[randoBoo].attackImage}
                  className="boo"
                  style={styling} />
                </div>
          )});
        }
          // If all the boos are out on the field then stop the interval
        }, 1000);
        // This interval will run at the same time as the other one
        // Every second the players health will be subtracted by the the number of boos * the amount of damage they do (ex: 800 -= (10 boos) * (2 damage));
        this.interval2 = setInterval(()=>{
          // If player still has health keep interval going
          if(this.state.health > 0 ){
            this.DamagePlayer();
        }else{
            // if player is out of health; end the game
            this.TimeUp();
        }
      },1000);

  }
  // If limit is under 0 return 0
  // If limit is above 0 return its value
  returnHealth(limit){
      if(limit < 0){
        return 0
      }else{
        return limit;
      }
  }
  //-------------------------Damaging player
  // Subracts the total length of boos from the dead boos and to get damaeg
  // then subracts player's health by damage var
  DamagePlayer(){
    var damage = this.state.boos.length - this.state.booKills;
    this.setState({health:this.state.health - damage});
  }
  // Clear all intervals
  // Then comment depending on how user did
  // set score, comment, and time to the state
  TimeUp(){
    clearInterval(this.interval2);
    clearInterval(this.interval);
    var comment = this.returnComment(this.state.booKills);

    var end = {
      title:comment,
      kills:this.state.booKills,
      time:this.state.time
    }
    // End Page redirect
   this.props.pageChange("end",end);
  }
  // Returns string depending on parameter
  returnComment(kills){

    if(kills <10){
      return "Horrible";
    }else if(kills < 25){
      return "Not Bad..";
    }else if(kills < 50){
      return "Very Nice!";
    }else if(kills < 75){
      return "Amazing!";
    }else if(kills < 100){
      return "You are a Master!";
    }

  }
  // Basic HTML for game
  render(){
    var background =` url("images/bb.png")`;
    var health = this.returnHealth(this.state.health);

    return (
      <div className="container-fluid pb200px"style={{background:background}}>

        <div className="scoreKillBox">
          <img className="posAb frr tIcon"  src="images/time.png"/>
          <h1 className="cy bold mono frr posAb scoreText">{this.state.time}</h1>
        </div>

        <div className="posAb booKillBox">
          <img className="fl booIcon"  src="images/logo.png"/>
          <h1 className=" cr monospace bold">{this.state.booKills}</h1>
        </div>

          <a href="/">
            <button  className="button ui inverted red posAb quit" > Quit </button>
          </a>

          <div className="row">
            <div className="mt2_5 fl br10px b26 bRR ml2_5 healthBar">
              <div className="blood br10px text-center cw br posRel"style={{width:this.state.health - this.state.healthShrink}}></div>
            </div>
          </div>

          <div className="ml10 pb30 booContainer">
            {this.booLoop()}
          </div>

        </div>
    );
  }

}

export default CoreGame;
