import React, { Component } from 'react';
import {Container, Row, Col, Card, CardBody, Navbar} from 'reactstrap';

import Projects from './projects';
import Stack from "./my_stack";
import Topnav from "./navbar";

class Index extends Component {

    style= {
        background: "linear-gradient(#ccaff066, #000000dd)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: 700,
    }
    imgStyle= {
        background: "url(../image/my_pics.jpg) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
        width: "100%",
        backgroundAttachment: "fixed",
        boxShadow: "10px",
    };
    
    render() { 
        
        return ( 
            <>            
                <Navbar style={{ backgroundAttachment: "fixed"}}>
                    <Topnav/> 
                </Navbar>
                  <div style= {this.imgStyle}>              
                    <Container style={this.style}>
                        <div style={{padding: "20px", color: "white", fontSize: "2em"}}>
                            My Profile
                        </div>
                        <div style={{padding: '5px'}}>
                            <Stack/>
                        </div>
                        <div style={{paddingTop: "300px", paddingLeft: '20px', color: "#45ECAF", fontSize: "3em"}}>
                            "Programming shapes the world <br/>of 
                            today for a better tomorrow"<br/>
                        </div>
                        <div style= {{fontSize: "2em", color: "#45EFAF", paddingLeft: "30%"}}>
                                --Valentine Umeh
                        </div> 
                        
                        </Container>
                    </div>   
                    <div className="container-fluid">
                        <Row style={{background: "#000", height: "40vh" , paddingTop: "5vh", paddingBottom: "10vh"}}>
                            <Col md={12}>
                                <Projects/>
                            </Col>
                        </Row>
                    </div>
                <div>
                    <Card style={{background: "white", height: "10vh", boxShadow: "2px, 2px, 1px"}
                                    }>
                        <CardBody>
                        <div className= "mx-auto" >
                            Personal Details
                        </div>
                        </CardBody> 
                    </Card>
                </div>     
            </>
         );
    }
}
 
export default Index;
