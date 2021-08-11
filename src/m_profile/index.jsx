import React from 'react';
import Stack from "./stack";
import {Row,Col,Container} from "reactstrap";


const Index = () => {

    return ( 
        <>     
        <div className= "">
                    
            <Row style= {{background : "#000000da",}} >
                <Col md= {6} style= {{height: "100vh",zIndex: "1" }}>
                    <h1 className= "text-left pl-5" 
                        style= {
                                {fontSize:"4.5em", 
                                fontFamily: "Fredoka One", 
                                color:"white", 
                                // marginRight: "-100vh",
                                marginTop: "20vh",
                                
                                }}>

                            Welcome <br/> To A New World of <br/>Web Development

                    </h1>     
                </Col>
                
                <Col md = {6} className= "" style= {{background : "#000000cc"}}>
                    <Container  style= {{paddingLeft: "60vh", marginTop: "20vh"}}>
                        <Stack /> 
                    </Container>
                </Col>
            </Row>

        </div>
                                        
    </>
  );
}

 
export default Index;
