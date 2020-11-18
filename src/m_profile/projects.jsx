import React, { Component } from 'react';
import {} from 'reactstrap';

class  Projects extends Component {
   
    render() { 
        return (
            <div align="center" style={{fontSize: "1.25em", fontWeight: "800", color: "white"}}>
                <div>
                    PERSONAL DETAILS
                </div>
                {/* align="center" style={{fontSize: "1em", fontWeight: "500", color: "white", }} */}
                <div  align="left">
                    <ul className= "p-5" style= {{listStyleType: "none", wordSpacing: "50px"}}>
                        <li> Name<br/>  Valentine Umeh</li>
                        <li> </li>
                    </ul>
                </div>
            </div>
          );
    }
}
 
export default Projects;