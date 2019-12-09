import React from "react";

class EndBox extends React.Component {


render(){
   return(

     <div className="container-fluid" style={{background:"url('images/bb.png')"}}>
        <br />
        <br />
         <h1 className="text-center cr bb monospacebold end mlop">{this.props.data.title}</h1>
          <br />
         <div className="mt5 row">


            <div className="col-1"/>
            <div className="col-10 bb mt10 b10px  pb20px">


                <div className="row">

                  <div className="col-6">

                    <div className="row">
                        <div className="col-6">
                          <img src = "images/boo1.png" className="w100"/>
                        </div>
                          <div className="col-6">
                            <br />
                            <h2 className="cy mt10 text-center">{0}</h2>
                          </div>

                    </div>

                  </div>

                  <div className="col-6">

                    <div className="row">
                        <div className="col-6">
                          <img src = "images/boo1.png" className="w100"/>
                        </div>
                          <div className="col-6">
                            <br />
                            <h2 className="cy mt10 text-center">{0}</h2>
                          </div>

                    </div>

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
