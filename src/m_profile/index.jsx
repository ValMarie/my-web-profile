import React from "react";
import Stack from "../components/stack";
import { Row, Col, Container, Jumbotron, Card } from "reactstrap";

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
            <p className="intro-text ml-5">
              <strong>
                <p className="p1"> Hi !</p>
                <p className="p2">I'm Valentine-Marie Umeh</p>
                <p className="p3"> Full Stack Developer</p>
              </strong>
            </p>
          </div>

          <div className="col-4 col-sm-0"></div>

          <div className="col-3  col-sm-3 circle-container">
            <Stack />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6 col-sm-* mx-auto">
            <div className=" card drop-card">
              <div className="card-header">huhijijljj</div>
              <div className="card-body">guhuhdijsijijfa</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Index;
