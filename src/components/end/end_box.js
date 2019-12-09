import React from "react";

class EndBox extends React.Component {


render(){
   return(

     <div className="finalSheet container-fluid" style={{background:"url('images/bb.png')"}}>

         <h1 className="text-center cr bb monospacebold end mlop">{this.props.data.title}</h1>
          <br />
         <div className="mt5 row">
         <div className="col-3"/>
         <div className="col-6 bb mt10 b10px ml35 pb5 scoreBox">
            <br />
            <br />
            <div className="row">
              <div className="col-6">

                <h3 className="text-center co bold  lls">
                  <img className="icoE ico2"src="images/time.png"/>
                  Time:
                    <strong  className="cy"> {this.props.data.time}</strong>
                </h3>
            <br />
          </div>
          <div className="col-6">
            <h3 className="text-center co bold ">
              <img className="posRel icoE boE"src="images/logo.png"/>
                Kills:
                <strong className="cy"> {this.props.data.kills}</strong>
              </h3>
            </div>
          </div>

          </div>
         <br />
         <br />
         <h1 className="backToMapTxt text-center sigmoreFont cy "  onClick = {()=>{this.props.pageChange("start",null)}}  >Main Menu</h1>

     </div>

   )
 }
}
export default EndBox;
