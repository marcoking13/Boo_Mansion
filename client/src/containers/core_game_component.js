import React from "react";
import "./../css/core.css";
import Timer from "./../components/timer.js";
class CoreGame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      game:this.props.data,
      healthShrink: 200 / this.props.data.health,
      health: this.props.data.health,
      boos:[],
      score:0,
      booKills:0
    }
    this.addToScore = this.addToScore(this);

  }
  booLoop(){

    return this.state.boos.map((boo)=>{
      return boo;
    });
  }
  componentDidMount(){
      var k = 0;

      this.interval = setInterval(()=>{
        if(k <= this.state.game.booCount){

          var randomCoord = Math.random() * 90;
          var randomCoord2 = Math.random() * 90;
          var styling = {right:randomCoord2+"%",position:"absolute",top:randomCoord+"%"};
          k++;

          this.setState({boos:this.state.boos.concat(
            <div>
              <audio autoPlay>
                <source src = "http://www.mariomayhem.com/downloads/sounds/NSMBWiiSoundEffects/nsmbwiiBoo5.wav"type="audio/wav"/>
              </audio>
              <img
              onClick={(e)=>{
                console.log(this.state.booKills);
                if(e.target.attributes.alive.value == 1){
                e.target.setAttribute("src","images/smoke.png");
                var counter = parseInt(e.target.key);
                e.target.setAttribute("alive",-1);
                console.log(  this.state.boos[counter]);

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

        }else{
          console.log("Boo Count Exceeded");
          return clearInterval(this.interval);
        }
      },this.state.game.time * 1000);
        this.interval2 = setInterval(()=>{
          if(this.state.health > 0 ){
            var damage = this.state.boos.length - this.state.booKills;
            console.log(this.state.health);
            this.setState({health:this.state.health - damage});
        }else{
            console.log("Game Has Ended");
            return clearInterval(this.interval2);
        }
      },1000);
  }
  addToScore(score){
    this.setState({score:score});
  }

  render(){


    return (
      <div className="container-fluid"style={{background:"url('images/Backgrounds/startmenu.jpg')"}}>
        <h1 className="scoreText">{this.state.score}</h1>
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
