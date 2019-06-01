import React from "react";
import "./../css/core.css";

class Infinite extends React.Component{
  constructor(props){
    super(props);
    // Initial State
    this.state = {
      limit:50,
      count:0,
      time:0,
      diff:1,
      game:[

        {
          image:"images/booAttack1.png",
          damage:1,

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
      score:0,
      booKills:0
    }



  }

  timer(){

    this.setState({timer:this.state.timer + 1});
  }
  // Looping through the boo array and rendering the html everytime state is updated
  renderBoos(){

    return this.state.boos.map((boo)=>{
      return boo;
    });
  }

  booLoop(ran,k){

    var arr= [];
    var diff = this.state.diff;

    for(var i =0; i<Math.floor(Math.random () * 3)+1;i++){
      var randomCoord = Math.random() * 90;


      var randomCoord2 = Math.random() * 90;
      var styling = {right:randomCoord2+"%",position:"absolute",top:randomCoord+"%"};
    arr.push(  <img
      onClick={(e)=>{


        if(e.target.attributes.alive.value == 1){
        e.target.setAttribute("src","images/smoke.png");
        e.target.classList.add("disa");
        e.target.classList.remove("boo");
        var counter = parseInt(e.target.key);
        e.target.setAttribute("alive",-1);


        this.setState({diff:diff,time:this.state.time,boos:this.state.boos.splice(counter),booKills:this.state.booKills + 1,limit:this.state.limit + this.state.game[ran].damage -1});
      }
    }}
      key = {k-1}
      id ={(k-1)}
      alive={1}
      damage = {this.state.game[ran].damage}
      src={this.state.game[ran].image}
      className="boo"
      style={styling} />);
    }
    return arr;
  }

  BooInterval(interval){
    var k=0;
          if(this.state.count >= this.state.limit){
            clearInterval(this.interval);
            var end = {
              title:"You Lost!",
              kills:this.state.booKills,

              time:this.state.time
            }
            clearInterval(this.minterval);
            this.props.pageChange("end",end);
          }
        k++;
        var ran = Math.floor(Math.random() * 4);

        this.setState({limit:this.state.limit - this.state.game[ran].damage * Math.floor(Math.random() * 3 + 1),boos:this.state.boos.concat(
          <div>
            <audio autoPlay>
              <source src = "images/Boo.wav"type="audio/wav"/>
            </audio>
            {this.booLoop(ran)}
          </div>
        )});
  }


  componentDidMount(){
    this.minterval=
      setInterval(()=>{

        this.BooInterval();
      },900 );

      this.timerInterval = setInterval(()=>{
          this.setState({time:this.state.time + 1})
      },1000)

  }

  render(){
    return (
      <div className="container-fluid"style={{background:"black", backgroundSize: "cover"}}>
      <div>  <img className="tIcon"  src="images/time.png"/><h1 className="scoreText">{this.state.time}</h1></div>
        <div className="booKillBox"> <img className="booIcon"  src="images/logo.png"/> <h1 className="booKillCount">{this.state.booKills}</h1>  </div>
      <a href="/">  <button  className="quit btn-danger btn fr" > Quit </button> </a>
        <div className="row">
          <div className="healthBar">
            <div className="blood"style={{width:this.state.countShrink * this.state.limit}}>{this.state.limit}</div>
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
