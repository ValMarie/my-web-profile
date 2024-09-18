import React from "react";
import { StackIcons } from "./assets/stack_icon";


const StackCircle = () => {
  const my_stack = StackIcons;

  return (
    <div>
      {my_stack.map((stk, index) => (
        <a href={stk}>
          <div className="stack-icons" key={index} id={`devicon-${index}`}>
            {stk}
          </div>
        </a>
      ))}
    </div>
  );
};

export default StackCircle;
