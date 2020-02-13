import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
/* w3color.js ver.1.18 by w3schools.com (Do not remove this line)*/
// const w3color = require('../../../public/w3color');
import w3color from "../w3";
import hsl from '../../images/hsl.png';

function changeHsl(x) {
  var h = document.getElementById("slideHue").value;
  var s = document.getElementById("slideSat").value;
  var l = document.getElementById("slideLight").value;
  var col = w3color("hsl(" + h + "," + s / 100 + "," + l / 100 + ")");
  document.getElementById("valHue").innerHTML = col.toHsl().h;
  document.getElementById("valSat").innerHTML =
    Math.round(col.toHsl().s * 100) + "%";
  document.getElementById("valLight").innerHTML =
    Math.round(col.toHsl().l * 100) + "%";
  document.getElementById(
    "hslresult"
  ).style.backgroundColor = col.toHslString();
  document.getElementById("hslresulttext").innerHTML = col.toHslString();
  if (col.isDark(150)) {
    document.getElementById("hslresulttext").style.color = "#ffffff";
  } else {
    document.getElementById("hslresulttext").style.color = "#1f2d3d";
  }
}
const CSS7 = () => {
  return (
    
    <div>
       <img id="head" src={hsl} alt={"persevere"}/>
      <div className="w3-container xw3-light-grey">
        <div className="w3-row w3-container">
          <div className="w3-col m2 w3-container w3-center"></div>
          <div className="w3-col m8 w3-container w3-center">
            <div
              id="hslresult"
              style={{ lineHeight: 20, backgroundColor: "rgb(128, 128, 128)" }}
            >
              <p
                id="hslresulttext"
                style={{
                  fontSize: "120%",
                  fontWeight: "bold",
                  fontFamily: 'Consolas, "Courier New", Courier, monospace',
                  color: "rgb(255, 255, 255)"
                }}
              >
                hsl(0, 0%, 50%)
              </p>
            </div>
          </div>
          <div className="w3-col m2 w3-container w3-center"></div>
        </div>
        <div className="w3-row w3-container">
          <div className="w3-col m4 w3-container w3-center">
            <p>HUE</p>
            <input
              onChange={changeHsl}
              onInput={changeHsl}
              type="range"
              id="slideHue"
              name="slideHue"
              defaultValue={0}
              min={0}
              max={360}
            />
            <div
              id="valHue"
              style={{
                fontSize: "120%",
                fontFamily: 'Consolas, "Courier New", Courier, monospace'
              }}
            >
              0
            </div>
          </div>
          <div className="w3-col m4 w3-container w3-center">
            <p>SATURATION</p>
            <input
              onChange={changeHsl}
              onInput={changeHsl}
              type="range"
              id="slideSat"
              name="slideSat"
              defaultValue={100}
              min={0}
              max={100}
            />
            <div
              id="valSat"
              style={{
                fontSize: "120%",
                fontFamily: 'Consolas, "Courier New", Courier, monospace'
              }}
            >
              0%
            </div>
          </div>
          <div className="w3-col m4 w3-container w3-center">
            <p>LIGHTNESS</p>
            <input
              onChange={changeHsl}
              onInput={changeHsl}
              type="range"
              id="slideLight"
              name="slideLight"
              defaultValue={50}
              min={0}
              max={100}
            />
            <div
              id="valLight"
              style={{
                fontSize: "120%",
                fontFamily: 'Consolas, "Courier New", Courier, monospace'
              }}
            >
              50%
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
export default CSS7;
