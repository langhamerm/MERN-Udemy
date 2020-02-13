import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
/* w3color.js ver.1.18 by w3schools.com (Do not remove this line)*/
// const w3color = require('../../../public/w3color');
import w3color from "../w3";
import rgb from "../../images/rgb.png";
function changeRGB(x) {
  var col;
  var r;
  var g;
  var b;
  r = document.getElementById("slideRed").value;
  g = document.getElementById("slideGreen").value;
  b = document.getElementById("slideBlue").value;
  col = w3color("rgb(" + r + "," + g + "," + b + ")");
  document.getElementById("valRed2").innerHTML = r;
  document.getElementById("valGreen2").innerHTML = g;
  document.getElementById("valBlue2").innerHTML = b;
  document.getElementById(
    "rgbresult"
  ).style.backgroundColor = col.toRgbString();
  document.getElementById("rgbresulttext").innerHTML = col.toRgbString();
  if (col.isDark(150)) {
    document.getElementById("rgbresulttext").style.color = "#ffffff";
  } else {
    document.getElementById("rgbresulttext").style.color = "#1f2d3d";
  }
}
const CSS6 = () => {

  return (
    <div>
<img id="head" src={rgb} alt={"persevere"}/>
<div className="w3-container xw3-light-grey">
  <div className="w3-row w3-container">
    <div className="w3-col m2 w3-container w3-center" />
    <div className="w3-col m8 w3-container w3-center">
      <div id="rgbresult" style={{lineHeight: 20, backgroundColor: 'rgb(60, 194, 255)'}}>
        <p id="rgbresulttext" style={{fontSize: '200%', fontWeight: 'bold', fontFamily: 'Consolas, "Courier New", Courier, monospace', color: 'rgb(31, 45, 61)'}}>
          rgb(60, 194, 255)
        </p>
      </div>
    </div>
    <div className="w3-col m2 w3-container w3-center" />
  </div>
  <div className="w3-row w3-container">
    <div className="w3-col m4 w3-container w3-center">
      <p>RED</p>
      <input onChange={changeRGB} onInput={changeRGB} type="range" id="slideRed" name="slideRed" defaultValue={255} min={0} max={255} />
      <div id="valRed2" xstyle="background-color:red;border-radius:5px;color:white;opacity:0.8">
        60
      </div>
    </div>
    <div className="w3-col m4 w3-container w3-center">
      <p>GREEN</p>
      <input onChange={changeRGB} onInput={changeRGB} type="range" id="slideGreen" name="slideGreen" defaultValue={99} min={0} max={255} />
      <div id="valGreen2" xstyle="background-color:#00ff00;border-radius:5px;opacity:0.8">
        194
      </div>
    </div>
    <div className="w3-col m4 w3-container w3-center">
      <p>BLUE</p>
      <input onChange={changeRGB} onInput={changeRGB} type="range" id="slideBlue" name="slideBlue" defaultValue={71} min={0} max={255} />
      <div id="valBlue2" xstyle="background-color:blue;border-radius:5px;color:white;opacity:0.8">
        255
      </div>
    </div>
  </div>
</div>

      {/* <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/> */}
    </div>
  );
};
export default CSS6;
