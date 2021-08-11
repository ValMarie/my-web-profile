import React from 'react';
import Navigation from './navbar';
import Index from './index';
import About from "./about";
import MyStack from './my_stack';


 const MyApp = () => {
      return (
       <div classNmae= "container-fluid" style= {{ overflow: "hidden"}}>
          <Navigation />
          <Index />
          <About/>
          <MyStack/>
       </div>
      );
    }

export default MyApp;
