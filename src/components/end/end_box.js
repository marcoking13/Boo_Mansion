import React from "react";

class EndBox extends React.Component {


render(){
   return(

     <div className="container-fluid" style={{background:"url('images/bb.png')"}}>

         <h1 className="text-center cr bb monospacebold end mlop">{this.props.data.title}</h1>
          <br />
          <br />
          <br />
         <div className="mt5 row">


            <div className="col-1"/>
            <div className="col-10 bb mt10 b10px scoreBorder h100px pb20px">


                <div className="row">

                  <div className="col-6">
                  <br />
                  <br />
                    <div className="row">


                        <div className="col-6 mt10">
                          <img src = "images/booShy2.png" className="w100"/>
                        </div>
                          <div className="col-6">
                            <br />
                            <h2 className="cy mt10 text-center">{this.props.data.kills}</h2>
                          </div>
                          <br />
                          <br />

                    </div>

                  </div>

                  <div className="col-6">
                    <br />
                    <br />

                    <div className="row">
                        <div className="col-6 mt10">
                          <img src = "images/time.png" className="w100"/>
                        </div>
                          <div className="col-6">
                            <br />
                            <h2 className="cy mt10 text-center">{this.props.data.time}</h2>
                          </div>

                    </div>
                    <br />
                    <br />

                  </div>

                </div>

              </div>




        </div>
          <br />
          <br />
          <br />
          <h1 className="backToMapTxt text-center mt10 sigmoreFont cy "  onClick = {()=>{this.props.pageChange("start",null)}}>Main Menu</h1>
      </div>


   )
 }
}
export default EndBox;
