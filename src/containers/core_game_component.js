import React from "react";
import "./../css/core.css";
import Timer from "./../components/timer.js";
class CoreGame extends React.Component{
  constructor(props){
    super(props);
    // Initial State
    this.state = {
      game:this.props.data,
      healthShrink: 200 / this.props.data.health,
      health: this.props.data.health,
      time:0,
      boos:[],
      score:0,
      booKills:0
    }
    // Binding Score to this state
    this.addToScore = this.addToScore(this);

  }

  // Looping through the boo array and rendering the html everytime state is updated
  booLoop(){

    return this.state.boos.map((boo)=>{
      return boo;
    });
  }

  componentDidUpdate(){

    if(this.state.booKills >= this.state.game.booCount){
        var end = {
          title:"You Won!",
          kills:this.state.booKills,
          time:this.state.time

        }
        return this.props.pageChange("end",end);
      }
  }

  break;

  componentDidMount(){
      var k = 0;
      this.timerInterval = setInterval(()=>{
          this.setState({time:this.state.time + 1})
      },1000)



      // If boo kills are equal or more than the number of boos in the game then stop the code after the if statement on line 29*
      //-------------------------------------------------------------------




      this.interval = setInterval(()=>{

        if(k <= this.state.game.booCount){
          // Every second create a new coordinate for the top and right positions

          var randomCoord = Math.random() * 90;
          var randomCoord2 = Math.random() * 90;
          var styling = {right:randomCoord2+"%",position:"absolute",top:randomCoord+"%"};
          k++;
          // Then create an img element with boo image and new coordinates and add the element to and array in the state called (boos)
          // Each element will have a on click function that will kill the boo and remove it from the array and also add 1 to the score and boo Kill
          this.setState({boos:this.state.boos.concat(
            <div>
              <audio autoPlay>
                <source src = "images/Boo.wav"type="audio/wav"/>
              </audio>
              <img
              onClick={(e)=>{

                if(e.target.attributes.alive.value == 1){
                e.target.setAttribute("src","images/smoke.png");
                e.target.classList.add("disa");
                e.target.classList.remove("boo");
                var counter = parseInt(e.target.key);
                e.target.setAttribute("alive",-1);


                this.setState({boos:this.state.boos.splice(counter),score:this.state.score + this.state.game.boo.points,booKills:this.state.booKills + 1});
              }
            }}
              key = {k-1}
              id ={(k-1)}
              alive={1}
              src={this.state.game.boo.attackImage}
              className="boo"
              style={styling} />


            </div>

          )});
          // If all the boos are out on the field then stop the interval
        }else{
          console.log("Boo Count Exceeded");
          return clearInterval(this.interval);
        }
      },this.state.game.time * 1000);
        // This interval will run at the same time as the other one
        // Every second the players health will be subtracted by the the number of boos * the amount of damage they do (ex: 800 -= (10 boos) * (2 damage));
        this.interval2 = setInterval(()=>{
          // If player still has health keep interval going
          if(this.state.health > 0 ){
            var damage = this.state.boos.length - this.state.booKills;
            console.log(this.state.health);
            this.setState({health:this.state.health - damage});
        }else{
            // if player is out of health; end the game

            clearInterval(this.interval2);
            var end = {
              title:"You Lost!",
              kills:this.state.booKills,
              score:this.state.score,
              health:this.state.health
            }
            this.props.pageChange("end",end);
        }
      },1000);

  }
  // Adds to the players' score
  addToScore(score){
    this.setState({score:score});
  }
  // Basic HTML for game
  render(){
    var background =` url(${this.props.data.background})`;
    console.log(background);
    console.log(this.state.booKills,this.props.booCount);


    return (
      <div className="container-fluid"style={{background:background, backgroundSize: "cover"}}>
        <div className="scoreKillBox"><img className="tIcon"  src="images/time.png"/><h1 className="scoreText">{this.state.time}</h1></div>
        <div className="booKillBox"> <img className="booIcon"  src="images/logo.png"/> <h1 className="booKillCount">{this.state.booKills}</h1>  </div>
      <a href="/">  <button  className="quit btn-danger btn fr" > Quit </button> </a>
        <div className="row">
          <div className="healthBar">
            <div className="blood"style={{width:this.state.healthShrink * this.state.health}}>{this.state.health}</div>
          </div>

        </div>
        <div className="booContainer">
          {this.booLoop()}
        </div>

      </div>
    )
  }


}


export default CoreGame;
