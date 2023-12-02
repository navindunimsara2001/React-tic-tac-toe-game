import React, { useRef, useState } from "react";
import "./ticTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock === true) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }
    //console.log("check " + num + " ||  data" + data[num]);
    checkWin();
  };

  // check win
  const checkWin = () => {
    // console.log("v1 : " + data[0]);
    // console.log("v2 : " + data[1]);
    // console.log("v3 : " + data[2]);
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      //console.log("success 1");
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
  };

  // winner action
  const won = (winner) => {
    setLock(true); // data can not be modify after win
    if (winner === "x") {
      titleRef.current.innerHTML = `Winner is : <img src=${cross_icon}>`;
    } else {
      titleRef.current.innerHTML = `Winner is : <img src=${circle_icon}>`;
    }
    console.log(winner);
  };

  // reset button
  const reset = () => {
    setLock(false); // unlock toggle
    data = ["", "", "", "", "", "", "", "", ""]; // reset array
    titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`;
    window.location.reload(false);
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};
