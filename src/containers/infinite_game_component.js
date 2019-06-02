import React from "react";
import "./../css/core.css";

class Infinite extends React.Component{
  constructor(props){
    super(props);
    // Initial State
    this.state = {
      count:0,
      limit:50,
      time:0,
      game:[
        {
          image:"images/booAttack1.png",
          damage:1,

        },
        {
          image:"images/booShy2.png",
          damage:0,
        },
        {
          image:"images/booAttack5.png",
          damage:2,
        },
        {
          image:"images/booAttack2.png",
          damage:2,
        },
        {
          image:"images/booAttack3.png",
          damage:3,
        },
        {
          image:"images/booAttack4.png",
          damage:4,
        },
        {
          image:"images/booAttack5.png",
          damage:5,
        },
      ],

      countShrink:4,
      boos:[],
      booKills:0
    }

  }

  //End of Constructor
//-----------------------------------------------------
  timer(){

    this.setState({timer:this.state.timer + 1});
  }
//---------------------------------------------
  renderBoos(){

    return this.state.boos.map((boo)=>{
      return boo;
    });
  }
//---------------------------------------------
  booLoop(ran){

    var arr= [];

    for(var i =0; i<Math.floor(Math.random () * 3)+1;i++){
      var randomCoordX = Math.random() * 90;
      var randomCoordY = Math.random() * 90;
      var styling = {right:randomCoordX+"%",position:"absolute",top:randomCoordY+"%"};
      arr.push(
         <img onClick={(e)=>{

           if(e.target.attributes.alive.value == 1){
             e.target.setAttribute("src","images/smoke.png");
             e.target.classList.add("disa");
             e.target.classList.remove("boo");
             var counter = parseInt(e.target.key);
             e.target.setAttribute("alive",-1);


             this.setState(
               {
                 time:this.state.time,
                 boos:this.state.boos.splice(counter),
                 booKills:this.state.booKills + 1,
                 limit:this.state.limit + this.state.game[ran].damage -1
              }
            );
          }
        }}
          key = {Math.random() * 7}
          id ={1}
          alive={1}
          damage = {this.state.game[ran].damage}
          src={this.state.game[ran].image}
          className="boo"
          style={styling} />);
      }
        return arr;
    }
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
    TimeUp(){
      if(this.state.count >= this.state.limit){
          clearInterval(this.interval);
          var comment = this.returnComment(this.state.booKills);
          var end = {
            title:comment,
            kills:this.state.booKills,
            time:this.state.time
          }
          clearInterval(this.minterval);
          this.props.pageChange("end",end);
        }
    }
//----------------------------------------------------------
  BooInterval(interval){

        this.TimeUp();

        var ran = Math.floor(Math.random() * 4);

        var booDamage = this.state.limit - this.state.game[ran].damage * Math.floor(Math.random() * 3 + 1);

        this.setState({limit:booDamage,boos:this.state.boos.concat(
          <div>
            <audio autoPlay>
              <source src = "images/Boo.wav"type="audio/wav"/>
            </audio>
            {this.booLoop(ran)}
          </div>
        )});
  }

  // End of custom Methods


//-------------------------------------------
  componentDidMount(){
    this.minterval=
      setInterval(()=>{
        this.BooInterval();
      },900 );

      this.timerInterval = setInterval(()=>{
          this.setState({time:this.state.time + 1})
      },1000)

  }

  returnLimit(limit){
      if(limit < 0){
        return 0
      }else{
        return limit;
      }
  }

//------------------------------------------------------------
  render(){
    var limit = this.returnLimit(this.state.limit);


    return (
      <div style={{background:"url('images/backgrounds/startmenu.jpg')"}}className="container-fluid">
      <div>  <img className="tIcon"  src="images/time.png"/><h1 className="scoreText">{this.state.time}</h1></div>
        <div className="booKillBox"> <img className="booIcon"  src="images/logo.png"/> <h1 className="booKillCount">{this.state.booKills}</h1>  </div>
      <a href="/">  <button  className="quit btn-danger btn fr" > Quit </button> </a>
        <div className="row">
          <div className="healthBar">
            <div className="blood"style={{width:this.state.countShrink * limit}}>{limit}</div>
          </div>

        </div>
        <div className="booContainer">
          {this.renderBoos()}
        </div>

      </div>
    )
  }


}


export default Infinite;
