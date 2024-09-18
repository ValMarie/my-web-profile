import React from "react";
import Stack from "../components/stack_circle";

const Index = (props) => {
  //     const solution = (A, K) => {
  //         if (A.length == 0) return [];
  //         for (i = 0; i < K; i++) {
  //             A.unshift(A.pop());
  //         }

  //        return A
  // //     }

  // let n_stk = props.my_stack.length;
  // let mid_item = 0;
  // let no_on_stk = n_stk - mid_item;
  // let stack_position = Math.tan(Math.PI / no_on_stk);

  //   .container(style=`--m: ${m}; --tan: ${+tan.toFixed(2)}`)
  // 	 for(let i = 0; i < n_stk; i++){
  //         a(style=i - has_mid >= 0 ? `--i: ${i}` : null): img(src=imgs[i].src alt=imgs[i].alt)

  //     }

  return (
    <div className="mask">
      <div className="row">
        <div className="col-md-5 col-sm-*">
          <p className="intro-text mx-5">
            <strong>
              <p className="p1"> I'm </p>
              <p className="p2">Valentine-Marie Umeh</p>
              <p className="p3"> Full Stack Developer</p>
            </strong>
          </p>
        </div>

        <div className="col-md-4 "> </div>

        <div className="col-md-3 col-sm-4 circle-container">
          <Stack />
        </div>
      </div>
    </div>
  );
};

export default Index;
