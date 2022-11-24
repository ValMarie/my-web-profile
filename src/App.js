import React, { useEffect } from "react";
import Navigation from "./components/navbar";
import Index from "./m_profile/index";
import About from "./m_profile/about";
// import MyStack from "./m_profile/my_stack";
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
      <div classNmae="container-fluid">
        <Navigation />
        <Index />
        <About />
        {/* <MyStack /> */}
      </div>
    </div>
  );
};

export default App;
