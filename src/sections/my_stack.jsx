import React, { useState } from "react";
import ImageSlider from "../components/assets/slider";
import StackInfo from "../components/stack_description";
import { StackIcons } from "../components/assets/stack_icon";

const MyStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // To do
  // 1. Equate or link each current or active icon with corresponding detail
  // 2. n change of each image triggers a change in corresponding detail
  // 3. only one detail is viewed with its corresponding image

  const iconInfo = [
    // html
    {
      id: 1,
      stack_name: "html 5",
      detail: "This is html 5",
    },

    // cdd3
    {
      id: 2,
      stack_name: "css 3",
      detail: "This is css 3",
    },

    // js
    {
      id: 3,
      stack_name: "javascript",
      detail: "This is javascript",
    },

    // jquery
    {
      id: 4,
      stack_name: "jquery",
      detail: "This is jquery",
    },

    // react
    {
      id: 5,
      stack_name: "react",
      detail: "This is react",
    },

    // nodejs
    {
      id: 6,
      stack_name: "nodejs",
      detail: "This is nodejs",
    },

    // php
    {
      id: 7,
      stack_name: "php",
      detail: "This is php",
    },

    // python
    {
      id: 8,
      stack_name: "python",
      detail: "This is python",
    },

    // java
    {
      id: 9,
      stack_name: "java",
      detail: "This is java",
    },
  ];

  
  return (
    <div id="stack" className="p-5 mask2">
      <div className="mt-2 p-abt text-center text-white">
        <strong className="p-title ">MY STACK</strong>
      </div>
      <div className="row my-5 ">
        <div className="col-md-4 col-sm-* p-5">
          <ImageSlider images={StackIcons} setActiveIndex={setActiveIndex} />
        </div>

        <div className="col-md-7 col-sm-* ">
          <StackInfo iconInfo={iconInfo} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
};

export default MyStack;
