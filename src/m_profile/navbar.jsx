import React, { Component } from 'react';
import {} from "reactstrap";

class Topnav extends Component {

    render() { 
        return ( 
            <>
                <div  style={{background: "linear-gradient(#000000cc, #ccaff0aa)", paddingBottom: "5px"}}>           
                      <img src="../image/my_pics.jpg" alt="my_pics"
                            style={{borderRadius: "30px", height: "6vh", float:"left"}}/>
                     <div style={{paddingRight:"25px", fontSize: "1.5em", color: "white"}}>
                         Valentine Umeh
                     </div>
                </div>
            </>
         );
    }
}
 
export default Topnav;