import React, { useEffect } from "react";
import Navigation from "./components/navbar";
import Index from "./sections/index";
import About from "./sections/about";
import MyStack from "./sections/my_stack";
import "./styles/styles.css";

import WebFont from "webfontloader";

const App = (props) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Fredoka One", "Press Start 2P"],
      },
    });
  }, []);

  return (
    <div className="body">
      <div classNmae="container-fluid ">
        <Navigation />
        <Index />
        <About />
        <MyStack />
        {/* <Projects />
        <Contact /> */}
      </div>
    </div>
  );
};

export default App;
