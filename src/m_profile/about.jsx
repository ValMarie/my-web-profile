import React from "react";
import{Row,Col} from "reactstrap";


const About  = () => {

  return (
    <div className="container-fluid">
        <Row className="py-3" style={{background: "#0f0000", }}>

            <Row className= "mx-auto" style= {{}}>
                <Col  md = {6} sm = {5} >
                    <img src= "../image/my_pics.jpg" alt= "img_pics.jpg" 
                        style= {{borderRadius: "150px", 
                        height: "250px", 
                        width: "250px", 
                        marginTop: "-15vh",
                    }}
                      />
                </Col>
            </Row>                    

            <Row>
                <Col md = {6} sm = {8} className="mx-auto">
                    <div className="text-center text-white py-5">
                        <h2 className=" "><strong> ABOUT ME </strong></h2>
                        <h3 className="">

                            I am a full stack programmer with main focus on Web and Apps Development
                            My stack strenght lies in several Javascript packages including React, Node, 
                            and VueJS. I love the backend logics and the frontend designs. My goal is to 
                            shape the world with the flexible tools of programming 

                        </h3>
                    </div>
                </Col>
            </Row>
                
        </Row>
   </div>

    );
  }


export default About;