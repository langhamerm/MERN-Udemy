import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
// import Codepen from '../Codepen';
// import what from "../../images/whatcss.png";
// import why from "../../images/whycss.png";
// import doctype from "../../images/doctype.png";
import "./style.css";
const CSS5 = () => {
  return (
    <div>

<div className="w3-row w3-white">
  <div className="w3-col l10 m12" id="main">
    <div id="colornamestable" className="w3-row">
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box1" style={{backgroundColor: 'rgb(240, 248, 255)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=AliceBlue">AliceBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F0F8FF">#F0F8FF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer1">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer1"><a href="/colors/colors_mixer.asp?colorbottom=F0F8FF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker1"><a href="/colors/colors_picker.asp?colorhex=F0F8FF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box2" style={{backgroundColor: 'rgb(250, 235, 215)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=AntiqueWhite">AntiqueWhite</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FAEBD7">#FAEBD7</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer2">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer2"><a href="/colors/colors_mixer.asp?colorbottom=FAEBD7&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker2"><a href="/colors/colors_picker.asp?colorhex=FAEBD7"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box3" style={{backgroundColor: 'rgb(0, 255, 255)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Aqua">Aqua</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00FFFF">#00FFFF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer3">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer3"><a href="/colors/colors_mixer.asp?colorbottom=00FFFF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker3"><a href="/colors/colors_picker.asp?colorhex=00FFFF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box4" style={{backgroundColor: 'rgb(127, 255, 212)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Aquamarine">Aquamarine</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=7FFFD4">#7FFFD4</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer4">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer4"><a href="/colors/colors_mixer.asp?colorbottom=7FFFD4&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker4"><a href="/colors/colors_picker.asp?colorhex=7FFFD4"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box5" style={{backgroundColor: 'rgb(240, 255, 255)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Azure">Azure</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F0FFFF">#F0FFFF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer5">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer5"><a href="/colors/colors_mixer.asp?colorbottom=F0FFFF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker5"><a href="/colors/colors_picker.asp?colorhex=F0FFFF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box6" style={{backgroundColor: 'rgb(245, 245, 220)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Beige">Beige</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F5F5DC">#F5F5DC</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer6">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer6"><a href="/colors/colors_mixer.asp?colorbottom=F5F5DC&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker6"><a href="/colors/colors_picker.asp?colorhex=F5F5DC"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box7" style={{backgroundColor: 'rgb(255, 228, 196)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Bisque">Bisque</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFE4C4">#FFE4C4</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer7">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer7"><a href="/colors/colors_mixer.asp?colorbottom=FFE4C4&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker7"><a href="/colors/colors_picker.asp?colorhex=FFE4C4"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box8" style={{backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Black">Black</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=000000">#000000</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer8">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer8"><a href="/colors/colors_mixer.asp?colorbottom=000000&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker8"><a href="/colors/colors_picker.asp?colorhex=000000"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box9" style={{backgroundColor: 'rgb(255, 235, 205)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=BlanchedAlmond">BlanchedAlmond</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFEBCD">#FFEBCD</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer9">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer9"><a href="/colors/colors_mixer.asp?colorbottom=FFEBCD&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker9"><a href="/colors/colors_picker.asp?colorhex=FFEBCD"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box10" style={{backgroundColor: 'rgb(0, 0, 255)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Blue">Blue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=0000FF">#0000FF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer10">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer10"><a href="/colors/colors_mixer.asp?colorbottom=0000FF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker10"><a href="/colors/colors_picker.asp?colorhex=0000FF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box11" style={{backgroundColor: 'rgb(138, 43, 226)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=BlueViolet">BlueViolet</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=8A2BE2">#8A2BE2</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer11">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer11"><a href="/colors/colors_mixer.asp?colorbottom=8A2BE2&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker11"><a href="/colors/colors_picker.asp?colorhex=8A2BE2"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box12" style={{backgroundColor: 'rgb(165, 42, 42)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Brown">Brown</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=A52A2A">#A52A2A</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer12">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer12"><a href="/colors/colors_mixer.asp?colorbottom=A52A2A&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker12"><a href="/colors/colors_picker.asp?colorhex=A52A2A"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box13" style={{backgroundColor: 'rgb(222, 184, 135)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=BurlyWood">BurlyWood</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=DEB887">#DEB887</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer13">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer13"><a href="/colors/colors_mixer.asp?colorbottom=DEB887&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker13"><a href="/colors/colors_picker.asp?colorhex=DEB887"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box14" style={{backgroundColor: 'rgb(95, 158, 160)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=CadetBlue">CadetBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=5F9EA0">#5F9EA0</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer14">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer14"><a href="/colors/colors_mixer.asp?colorbottom=5F9EA0&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker14"><a href="/colors/colors_picker.asp?colorhex=5F9EA0"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box15" style={{backgroundColor: 'rgb(127, 255, 0)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Chartreuse">Chartreuse</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=7FFF00">#7FFF00</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer15">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer15"><a href="/colors/colors_mixer.asp?colorbottom=7FFF00&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker15"><a href="/colors/colors_picker.asp?colorhex=7FFF00"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box16" style={{backgroundColor: 'rgb(210, 105, 30)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Chocolate">Chocolate</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=D2691E">#D2691E</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer16">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer16"><a href="/colors/colors_mixer.asp?colorbottom=D2691E&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker16"><a href="/colors/colors_picker.asp?colorhex=D2691E"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box17" style={{backgroundColor: 'rgb(255, 127, 80)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Coral">Coral</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF7F50">#FF7F50</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer17">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer17"><a href="/colors/colors_mixer.asp?colorbottom=FF7F50&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker17"><a href="/colors/colors_picker.asp?colorhex=FF7F50"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box18" style={{backgroundColor: 'rgb(100, 149, 237)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=CornflowerBlue">CornflowerBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=6495ED">#6495ED</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer18">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer18"><a href="/colors/colors_mixer.asp?colorbottom=6495ED&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker18"><a href="/colors/colors_picker.asp?colorhex=6495ED"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box19" style={{backgroundColor: 'rgb(255, 248, 220)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Cornsilk">Cornsilk</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFF8DC">#FFF8DC</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer19">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer19"><a href="/colors/colors_mixer.asp?colorbottom=FFF8DC&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker19"><a href="/colors/colors_picker.asp?colorhex=FFF8DC"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box20" style={{backgroundColor: 'rgb(220, 20, 60)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Crimson">Crimson</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=DC143C">#DC143C</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer20">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer20"><a href="/colors/colors_mixer.asp?colorbottom=DC143C&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker20"><a href="/colors/colors_picker.asp?colorhex=DC143C"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box21" style={{backgroundColor: 'rgb(0, 255, 255)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Cyan">Cyan</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00FFFF">#00FFFF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer21">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer21"><a href="/colors/colors_mixer.asp?colorbottom=00FFFF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker21"><a href="/colors/colors_picker.asp?colorhex=00FFFF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box22" style={{backgroundColor: 'rgb(0, 0, 139)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkBlue">DarkBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00008B">#00008B</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer22">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer22"><a href="/colors/colors_mixer.asp?colorbottom=00008B&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker22"><a href="/colors/colors_picker.asp?colorhex=00008B"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box23" style={{backgroundColor: 'rgb(0, 139, 139)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkCyan">DarkCyan</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=008B8B">#008B8B</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer23">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer23"><a href="/colors/colors_mixer.asp?colorbottom=008B8B&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker23"><a href="/colors/colors_picker.asp?colorhex=008B8B"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box24" style={{backgroundColor: 'rgb(184, 134, 11)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkGoldenRod">DarkGoldenRod</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=B8860B">#B8860B</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer24">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer24"><a href="/colors/colors_mixer.asp?colorbottom=B8860B&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker24"><a href="/colors/colors_picker.asp?colorhex=B8860B"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box25" style={{backgroundColor: 'rgb(169, 169, 169)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkGray">DarkGray</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=A9A9A9">#A9A9A9</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer25">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer25"><a href="/colors/colors_mixer.asp?colorbottom=A9A9A9&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker25"><a href="/colors/colors_picker.asp?colorhex=A9A9A9"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box26" style={{backgroundColor: 'rgb(169, 169, 169)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkGrey">DarkGrey</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=A9A9A9">#A9A9A9</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer26">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer26"><a href="/colors/colors_mixer.asp?colorbottom=A9A9A9&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker26"><a href="/colors/colors_picker.asp?colorhex=A9A9A9"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box27" style={{backgroundColor: 'rgb(0, 100, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkGreen">DarkGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=006400">#006400</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer27">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer27"><a href="/colors/colors_mixer.asp?colorbottom=006400&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker27"><a href="/colors/colors_picker.asp?colorhex=006400"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box28" style={{backgroundColor: 'rgb(189, 183, 107)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkKhaki">DarkKhaki</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=BDB76B">#BDB76B</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer28">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer28"><a href="/colors/colors_mixer.asp?colorbottom=BDB76B&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker28"><a href="/colors/colors_picker.asp?colorhex=BDB76B"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box29" style={{backgroundColor: 'rgb(139, 0, 139)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkMagenta">DarkMagenta</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=8B008B">#8B008B</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer29">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer29"><a href="/colors/colors_mixer.asp?colorbottom=8B008B&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker29"><a href="/colors/colors_picker.asp?colorhex=8B008B"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box30" style={{backgroundColor: 'rgb(85, 107, 47)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkOliveGreen">DarkOliveGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=556B2F">#556B2F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer30">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer30"><a href="/colors/colors_mixer.asp?colorbottom=556B2F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker30"><a href="/colors/colors_picker.asp?colorhex=556B2F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box31" style={{backgroundColor: 'rgb(255, 140, 0)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkOrange">DarkOrange</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF8C00">#FF8C00</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer31">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer31"><a href="/colors/colors_mixer.asp?colorbottom=FF8C00&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker31"><a href="/colors/colors_picker.asp?colorhex=FF8C00"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box32" style={{backgroundColor: 'rgb(153, 50, 204)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkOrchid">DarkOrchid</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=9932CC">#9932CC</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer32">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer32"><a href="/colors/colors_mixer.asp?colorbottom=9932CC&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker32"><a href="/colors/colors_picker.asp?colorhex=9932CC"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box33" style={{backgroundColor: 'rgb(139, 0, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkRed">DarkRed</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=8B0000">#8B0000</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer33">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer33"><a href="/colors/colors_mixer.asp?colorbottom=8B0000&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker33"><a href="/colors/colors_picker.asp?colorhex=8B0000"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box34" style={{backgroundColor: 'rgb(233, 150, 122)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkSalmon">DarkSalmon</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=E9967A">#E9967A</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer34">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer34"><a href="/colors/colors_mixer.asp?colorbottom=E9967A&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker34"><a href="/colors/colors_picker.asp?colorhex=E9967A"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box35" style={{backgroundColor: 'rgb(143, 188, 143)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkSeaGreen">DarkSeaGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=8FBC8F">#8FBC8F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer35">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer35"><a href="/colors/colors_mixer.asp?colorbottom=8FBC8F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker35"><a href="/colors/colors_picker.asp?colorhex=8FBC8F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box36" style={{backgroundColor: 'rgb(72, 61, 139)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkSlateBlue">DarkSlateBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=483D8B">#483D8B</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer36">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer36"><a href="/colors/colors_mixer.asp?colorbottom=483D8B&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker36"><a href="/colors/colors_picker.asp?colorhex=483D8B"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box37" style={{backgroundColor: 'rgb(47, 79, 79)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkSlateGray">DarkSlateGray</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=2F4F4F">#2F4F4F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer37">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer37"><a href="/colors/colors_mixer.asp?colorbottom=2F4F4F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker37"><a href="/colors/colors_picker.asp?colorhex=2F4F4F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box38" style={{backgroundColor: 'rgb(47, 79, 79)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkSlateGrey">DarkSlateGrey</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=2F4F4F">#2F4F4F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer38">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer38"><a href="/colors/colors_mixer.asp?colorbottom=2F4F4F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker38"><a href="/colors/colors_picker.asp?colorhex=2F4F4F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box39" style={{backgroundColor: 'rgb(0, 206, 209)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkTurquoise">DarkTurquoise</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00CED1">#00CED1</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer39">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer39"><a href="/colors/colors_mixer.asp?colorbottom=00CED1&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker39"><a href="/colors/colors_picker.asp?colorhex=00CED1"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box40" style={{backgroundColor: 'rgb(148, 0, 211)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DarkViolet">DarkViolet</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=9400D3">#9400D3</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer40">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer40"><a href="/colors/colors_mixer.asp?colorbottom=9400D3&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker40"><a href="/colors/colors_picker.asp?colorhex=9400D3"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box41" style={{backgroundColor: 'rgb(255, 20, 147)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DeepPink">DeepPink</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF1493">#FF1493</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer41">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer41"><a href="/colors/colors_mixer.asp?colorbottom=FF1493&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker41"><a href="/colors/colors_picker.asp?colorhex=FF1493"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box42" style={{backgroundColor: 'rgb(0, 191, 255)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DeepSkyBlue">DeepSkyBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00BFFF">#00BFFF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer42">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer42"><a href="/colors/colors_mixer.asp?colorbottom=00BFFF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker42"><a href="/colors/colors_picker.asp?colorhex=00BFFF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box43" style={{backgroundColor: 'rgb(105, 105, 105)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DimGray">DimGray</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=696969">#696969</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer43">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer43"><a href="/colors/colors_mixer.asp?colorbottom=696969&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker43"><a href="/colors/colors_picker.asp?colorhex=696969"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box44" style={{backgroundColor: 'rgb(105, 105, 105)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DimGrey">DimGrey</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=696969">#696969</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer44">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer44"><a href="/colors/colors_mixer.asp?colorbottom=696969&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker44"><a href="/colors/colors_picker.asp?colorhex=696969"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box45" style={{backgroundColor: 'rgb(30, 144, 255)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=DodgerBlue">DodgerBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=1E90FF">#1E90FF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer45">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer45"><a href="/colors/colors_mixer.asp?colorbottom=1E90FF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker45"><a href="/colors/colors_picker.asp?colorhex=1E90FF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box46" style={{backgroundColor: 'rgb(178, 34, 34)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=FireBrick">FireBrick</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=B22222">#B22222</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer46">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer46"><a href="/colors/colors_mixer.asp?colorbottom=B22222&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker46"><a href="/colors/colors_picker.asp?colorhex=B22222"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box47" style={{backgroundColor: 'rgb(255, 250, 240)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=FloralWhite">FloralWhite</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFFAF0">#FFFAF0</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer47">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer47"><a href="/colors/colors_mixer.asp?colorbottom=FFFAF0&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker47"><a href="/colors/colors_picker.asp?colorhex=FFFAF0"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box48" style={{backgroundColor: 'rgb(34, 139, 34)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=ForestGreen">ForestGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=228B22">#228B22</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer48">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer48"><a href="/colors/colors_mixer.asp?colorbottom=228B22&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker48"><a href="/colors/colors_picker.asp?colorhex=228B22"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box49" style={{backgroundColor: 'rgb(255, 0, 255)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Fuchsia">Fuchsia</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF00FF">#FF00FF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer49">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer49"><a href="/colors/colors_mixer.asp?colorbottom=FF00FF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker49"><a href="/colors/colors_picker.asp?colorhex=FF00FF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box50" style={{backgroundColor: 'rgb(220, 220, 220)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Gainsboro">Gainsboro</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=DCDCDC">#DCDCDC</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer50">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer50"><a href="/colors/colors_mixer.asp?colorbottom=DCDCDC&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker50"><a href="/colors/colors_picker.asp?colorhex=DCDCDC"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box51" style={{backgroundColor: 'rgb(248, 248, 255)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=GhostWhite">GhostWhite</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F8F8FF">#F8F8FF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer51">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer51"><a href="/colors/colors_mixer.asp?colorbottom=F8F8FF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker51"><a href="/colors/colors_picker.asp?colorhex=F8F8FF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box52" style={{backgroundColor: 'rgb(255, 215, 0)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Gold">Gold</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFD700">#FFD700</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer52">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer52"><a href="/colors/colors_mixer.asp?colorbottom=FFD700&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker52"><a href="/colors/colors_picker.asp?colorhex=FFD700"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box53" style={{backgroundColor: 'rgb(218, 165, 32)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=GoldenRod">GoldenRod</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=DAA520">#DAA520</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer53">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer53"><a href="/colors/colors_mixer.asp?colorbottom=DAA520&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker53"><a href="/colors/colors_picker.asp?colorhex=DAA520"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box54" style={{backgroundColor: 'rgb(128, 128, 128)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Gray">Gray</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=808080">#808080</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer54">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer54"><a href="/colors/colors_mixer.asp?colorbottom=808080&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker54"><a href="/colors/colors_picker.asp?colorhex=808080"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box55" style={{backgroundColor: 'rgb(128, 128, 128)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Grey">Grey</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=808080">#808080</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer55">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer55"><a href="/colors/colors_mixer.asp?colorbottom=808080&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker55"><a href="/colors/colors_picker.asp?colorhex=808080"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box56" style={{backgroundColor: 'rgb(0, 128, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Green">Green</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=008000">#008000</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer56">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer56"><a href="/colors/colors_mixer.asp?colorbottom=008000&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker56"><a href="/colors/colors_picker.asp?colorhex=008000"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box57" style={{backgroundColor: 'rgb(173, 255, 47)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=GreenYellow">GreenYellow</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=ADFF2F">#ADFF2F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer57">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer57"><a href="/colors/colors_mixer.asp?colorbottom=ADFF2F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker57"><a href="/colors/colors_picker.asp?colorhex=ADFF2F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box58" style={{backgroundColor: 'rgb(240, 255, 240)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=HoneyDew">HoneyDew</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F0FFF0">#F0FFF0</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer58">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer58"><a href="/colors/colors_mixer.asp?colorbottom=F0FFF0&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker58"><a href="/colors/colors_picker.asp?colorhex=F0FFF0"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box59" style={{backgroundColor: 'rgb(255, 105, 180)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=HotPink">HotPink</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF69B4">#FF69B4</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer59">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer59"><a href="/colors/colors_mixer.asp?colorbottom=FF69B4&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker59"><a href="/colors/colors_picker.asp?colorhex=FF69B4"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box60" style={{backgroundColor: 'rgb(205, 92, 92)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=IndianRed ">IndianRed </a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=CD5C5C">#CD5C5C</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer60">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer60"><a href="/colors/colors_mixer.asp?colorbottom=CD5C5C&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker60"><a href="/colors/colors_picker.asp?colorhex=CD5C5C"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box61" style={{backgroundColor: 'rgb(75, 0, 130)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Indigo  ">Indigo</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=4B0082">#4B0082</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer61">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer61"><a href="/colors/colors_mixer.asp?colorbottom=4B0082&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker61"><a href="/colors/colors_picker.asp?colorhex=4B0082"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box62" style={{backgroundColor: 'rgb(255, 255, 240)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Ivory">Ivory</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFFFF0">#FFFFF0</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer62">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer62"><a href="/colors/colors_mixer.asp?colorbottom=FFFFF0&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker62"><a href="/colors/colors_picker.asp?colorhex=FFFFF0"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box63" style={{backgroundColor: 'rgb(240, 230, 140)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Khaki">Khaki</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F0E68C">#F0E68C</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer63">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer63"><a href="/colors/colors_mixer.asp?colorbottom=F0E68C&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker63"><a href="/colors/colors_picker.asp?colorhex=F0E68C"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box64" style={{backgroundColor: 'rgb(230, 230, 250)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Lavender">Lavender</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=E6E6FA">#E6E6FA</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer64">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer64"><a href="/colors/colors_mixer.asp?colorbottom=E6E6FA&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker64"><a href="/colors/colors_picker.asp?colorhex=E6E6FA"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box65" style={{backgroundColor: 'rgb(255, 240, 245)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LavenderBlush">LavenderBlush</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFF0F5">#FFF0F5</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer65">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer65"><a href="/colors/colors_mixer.asp?colorbottom=FFF0F5&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker65"><a href="/colors/colors_picker.asp?colorhex=FFF0F5"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box66" style={{backgroundColor: 'rgb(124, 252, 0)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LawnGreen">LawnGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=7CFC00">#7CFC00</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer66">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer66"><a href="/colors/colors_mixer.asp?colorbottom=7CFC00&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker66"><a href="/colors/colors_picker.asp?colorhex=7CFC00"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box67" style={{backgroundColor: 'rgb(255, 250, 205)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LemonChiffon">LemonChiffon</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFFACD">#FFFACD</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer67">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer67"><a href="/colors/colors_mixer.asp?colorbottom=FFFACD&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker67"><a href="/colors/colors_picker.asp?colorhex=FFFACD"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box68" style={{backgroundColor: 'rgb(173, 216, 230)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightBlue">LightBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=ADD8E6">#ADD8E6</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer68">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer68"><a href="/colors/colors_mixer.asp?colorbottom=ADD8E6&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker68"><a href="/colors/colors_picker.asp?colorhex=ADD8E6"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box69" style={{backgroundColor: 'rgb(240, 128, 128)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightCoral">LightCoral</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F08080">#F08080</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer69">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer69"><a href="/colors/colors_mixer.asp?colorbottom=F08080&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker69"><a href="/colors/colors_picker.asp?colorhex=F08080"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box70" style={{backgroundColor: 'rgb(224, 255, 255)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightCyan">LightCyan</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=E0FFFF">#E0FFFF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer70">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer70"><a href="/colors/colors_mixer.asp?colorbottom=E0FFFF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker70"><a href="/colors/colors_picker.asp?colorhex=E0FFFF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box71" style={{backgroundColor: 'rgb(250, 250, 210)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightGoldenRodYellow">LightGoldenRodYellow</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FAFAD2">#FAFAD2</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer71">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer71"><a href="/colors/colors_mixer.asp?colorbottom=FAFAD2&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker71"><a href="/colors/colors_picker.asp?colorhex=FAFAD2"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box72" style={{backgroundColor: 'rgb(211, 211, 211)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightGray">LightGray</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=D3D3D3">#D3D3D3</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer72">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer72"><a href="/colors/colors_mixer.asp?colorbottom=D3D3D3&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker72"><a href="/colors/colors_picker.asp?colorhex=D3D3D3"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box73" style={{backgroundColor: 'rgb(211, 211, 211)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightGrey">LightGrey</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=D3D3D3">#D3D3D3</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer73">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer73"><a href="/colors/colors_mixer.asp?colorbottom=D3D3D3&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker73"><a href="/colors/colors_picker.asp?colorhex=D3D3D3"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box74" style={{backgroundColor: 'rgb(144, 238, 144)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightGreen">LightGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=90EE90">#90EE90</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer74">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer74"><a href="/colors/colors_mixer.asp?colorbottom=90EE90&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker74"><a href="/colors/colors_picker.asp?colorhex=90EE90"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box75" style={{backgroundColor: 'rgb(255, 182, 193)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightPink">LightPink</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFB6C1">#FFB6C1</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer75">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer75"><a href="/colors/colors_mixer.asp?colorbottom=FFB6C1&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker75"><a href="/colors/colors_picker.asp?colorhex=FFB6C1"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box76" style={{backgroundColor: 'rgb(255, 160, 122)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightSalmon">LightSalmon</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFA07A">#FFA07A</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer76">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer76"><a href="/colors/colors_mixer.asp?colorbottom=FFA07A&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker76"><a href="/colors/colors_picker.asp?colorhex=FFA07A"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box77" style={{backgroundColor: 'rgb(32, 178, 170)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightSeaGreen">LightSeaGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=20B2AA">#20B2AA</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer77">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer77"><a href="/colors/colors_mixer.asp?colorbottom=20B2AA&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker77"><a href="/colors/colors_picker.asp?colorhex=20B2AA"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box78" style={{backgroundColor: 'rgb(135, 206, 250)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightSkyBlue">LightSkyBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=87CEFA">#87CEFA</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer78">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer78"><a href="/colors/colors_mixer.asp?colorbottom=87CEFA&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker78"><a href="/colors/colors_picker.asp?colorhex=87CEFA"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box79" style={{backgroundColor: 'rgb(119, 136, 153)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightSlateGray">LightSlateGray</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=778899">#778899</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer79">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer79"><a href="/colors/colors_mixer.asp?colorbottom=778899&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker79"><a href="/colors/colors_picker.asp?colorhex=778899"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box80" style={{backgroundColor: 'rgb(119, 136, 153)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightSlateGrey">LightSlateGrey</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=778899">#778899</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer80">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer80"><a href="/colors/colors_mixer.asp?colorbottom=778899&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker80"><a href="/colors/colors_picker.asp?colorhex=778899"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box81" style={{backgroundColor: 'rgb(176, 196, 222)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightSteelBlue">LightSteelBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=B0C4DE">#B0C4DE</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer81">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer81"><a href="/colors/colors_mixer.asp?colorbottom=B0C4DE&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker81"><a href="/colors/colors_picker.asp?colorhex=B0C4DE"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box82" style={{backgroundColor: 'rgb(255, 255, 224)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LightYellow">LightYellow</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFFFE0">#FFFFE0</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer82">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer82"><a href="/colors/colors_mixer.asp?colorbottom=FFFFE0&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker82"><a href="/colors/colors_picker.asp?colorhex=FFFFE0"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box83" style={{backgroundColor: 'rgb(0, 255, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Lime">Lime</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00FF00">#00FF00</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer83">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer83"><a href="/colors/colors_mixer.asp?colorbottom=00FF00&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker83"><a href="/colors/colors_picker.asp?colorhex=00FF00"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box84" style={{backgroundColor: 'rgb(50, 205, 50)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=LimeGreen">LimeGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=32CD32">#32CD32</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer84">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer84"><a href="/colors/colors_mixer.asp?colorbottom=32CD32&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker84"><a href="/colors/colors_picker.asp?colorhex=32CD32"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box85" style={{backgroundColor: 'rgb(250, 240, 230)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Linen">Linen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FAF0E6">#FAF0E6</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer85">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer85"><a href="/colors/colors_mixer.asp?colorbottom=FAF0E6&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker85"><a href="/colors/colors_picker.asp?colorhex=FAF0E6"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box86" style={{backgroundColor: 'rgb(255, 0, 255)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Magenta">Magenta</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF00FF">#FF00FF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer86">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer86"><a href="/colors/colors_mixer.asp?colorbottom=FF00FF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker86"><a href="/colors/colors_picker.asp?colorhex=FF00FF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box87" style={{backgroundColor: 'rgb(128, 0, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Maroon">Maroon</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=800000">#800000</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer87">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer87"><a href="/colors/colors_mixer.asp?colorbottom=800000&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker87"><a href="/colors/colors_picker.asp?colorhex=800000"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box88" style={{backgroundColor: 'rgb(102, 205, 170)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumAquaMarine">MediumAquaMarine</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=66CDAA">#66CDAA</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer88">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer88"><a href="/colors/colors_mixer.asp?colorbottom=66CDAA&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker88"><a href="/colors/colors_picker.asp?colorhex=66CDAA"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box89" style={{backgroundColor: 'rgb(0, 0, 205)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumBlue">MediumBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=0000CD">#0000CD</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer89">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer89"><a href="/colors/colors_mixer.asp?colorbottom=0000CD&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker89"><a href="/colors/colors_picker.asp?colorhex=0000CD"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box90" style={{backgroundColor: 'rgb(186, 85, 211)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumOrchid">MediumOrchid</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=BA55D3">#BA55D3</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer90">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer90"><a href="/colors/colors_mixer.asp?colorbottom=BA55D3&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker90"><a href="/colors/colors_picker.asp?colorhex=BA55D3"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box91" style={{backgroundColor: 'rgb(147, 112, 219)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumPurple">MediumPurple</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=9370DB">#9370DB</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer91">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer91"><a href="/colors/colors_mixer.asp?colorbottom=9370DB&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker91"><a href="/colors/colors_picker.asp?colorhex=9370DB"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box92" style={{backgroundColor: 'rgb(60, 179, 113)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumSeaGreen">MediumSeaGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=3CB371">#3CB371</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer92">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer92"><a href="/colors/colors_mixer.asp?colorbottom=3CB371&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker92"><a href="/colors/colors_picker.asp?colorhex=3CB371"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box93" style={{backgroundColor: 'rgb(123, 104, 238)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumSlateBlue">MediumSlateBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=7B68EE">#7B68EE</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer93">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer93"><a href="/colors/colors_mixer.asp?colorbottom=7B68EE&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker93"><a href="/colors/colors_picker.asp?colorhex=7B68EE"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box94" style={{backgroundColor: 'rgb(0, 250, 154)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumSpringGreen">MediumSpringGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00FA9A">#00FA9A</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer94">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer94"><a href="/colors/colors_mixer.asp?colorbottom=00FA9A&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker94"><a href="/colors/colors_picker.asp?colorhex=00FA9A"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box95" style={{backgroundColor: 'rgb(72, 209, 204)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumTurquoise">MediumTurquoise</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=48D1CC">#48D1CC</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer95">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer95"><a href="/colors/colors_mixer.asp?colorbottom=48D1CC&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker95"><a href="/colors/colors_picker.asp?colorhex=48D1CC"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box96" style={{backgroundColor: 'rgb(199, 21, 133)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MediumVioletRed">MediumVioletRed</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=C71585">#C71585</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer96">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer96"><a href="/colors/colors_mixer.asp?colorbottom=C71585&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker96"><a href="/colors/colors_picker.asp?colorhex=C71585"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box97" style={{backgroundColor: 'rgb(25, 25, 112)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MidnightBlue">MidnightBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=191970">#191970</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer97">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer97"><a href="/colors/colors_mixer.asp?colorbottom=191970&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker97"><a href="/colors/colors_picker.asp?colorhex=191970"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box98" style={{backgroundColor: 'rgb(245, 255, 250)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MintCream">MintCream</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F5FFFA">#F5FFFA</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer98">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer98"><a href="/colors/colors_mixer.asp?colorbottom=F5FFFA&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker98"><a href="/colors/colors_picker.asp?colorhex=F5FFFA"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box99" style={{backgroundColor: 'rgb(255, 228, 225)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=MistyRose">MistyRose</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFE4E1">#FFE4E1</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer99">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer99"><a href="/colors/colors_mixer.asp?colorbottom=FFE4E1&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker99"><a href="/colors/colors_picker.asp?colorhex=FFE4E1"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box100" style={{backgroundColor: 'rgb(255, 228, 181)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Moccasin">Moccasin</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFE4B5">#FFE4B5</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer100">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer100"><a href="/colors/colors_mixer.asp?colorbottom=FFE4B5&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker100"><a href="/colors/colors_picker.asp?colorhex=FFE4B5"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box101" style={{backgroundColor: 'rgb(255, 222, 173)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=NavajoWhite">NavajoWhite</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFDEAD">#FFDEAD</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer101">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer101"><a href="/colors/colors_mixer.asp?colorbottom=FFDEAD&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker101"><a href="/colors/colors_picker.asp?colorhex=FFDEAD"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box102" style={{backgroundColor: 'rgb(0, 0, 128)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Navy">Navy</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=000080">#000080</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer102">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer102"><a href="/colors/colors_mixer.asp?colorbottom=000080&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker102"><a href="/colors/colors_picker.asp?colorhex=000080"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box103" style={{backgroundColor: 'rgb(253, 245, 230)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=OldLace">OldLace</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FDF5E6">#FDF5E6</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer103">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer103"><a href="/colors/colors_mixer.asp?colorbottom=FDF5E6&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker103"><a href="/colors/colors_picker.asp?colorhex=FDF5E6"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box104" style={{backgroundColor: 'rgb(128, 128, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Olive">Olive</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=808000">#808000</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer104">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer104"><a href="/colors/colors_mixer.asp?colorbottom=808000&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker104"><a href="/colors/colors_picker.asp?colorhex=808000"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box105" style={{backgroundColor: 'rgb(107, 142, 35)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=OliveDrab">OliveDrab</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=6B8E23">#6B8E23</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer105">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer105"><a href="/colors/colors_mixer.asp?colorbottom=6B8E23&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker105"><a href="/colors/colors_picker.asp?colorhex=6B8E23"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box106" style={{backgroundColor: 'rgb(255, 165, 0)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Orange">Orange</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFA500">#FFA500</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer106">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer106"><a href="/colors/colors_mixer.asp?colorbottom=FFA500&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker106"><a href="/colors/colors_picker.asp?colorhex=FFA500"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box107" style={{backgroundColor: 'rgb(255, 69, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=OrangeRed">OrangeRed</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF4500">#FF4500</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer107">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer107"><a href="/colors/colors_mixer.asp?colorbottom=FF4500&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker107"><a href="/colors/colors_picker.asp?colorhex=FF4500"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box108" style={{backgroundColor: 'rgb(218, 112, 214)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Orchid">Orchid</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=DA70D6">#DA70D6</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer108">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer108"><a href="/colors/colors_mixer.asp?colorbottom=DA70D6&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker108"><a href="/colors/colors_picker.asp?colorhex=DA70D6"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box109" style={{backgroundColor: 'rgb(238, 232, 170)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=PaleGoldenRod">PaleGoldenRod</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=EEE8AA">#EEE8AA</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer109">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer109"><a href="/colors/colors_mixer.asp?colorbottom=EEE8AA&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker109"><a href="/colors/colors_picker.asp?colorhex=EEE8AA"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box110" style={{backgroundColor: 'rgb(152, 251, 152)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=PaleGreen">PaleGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=98FB98">#98FB98</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer110">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer110"><a href="/colors/colors_mixer.asp?colorbottom=98FB98&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker110"><a href="/colors/colors_picker.asp?colorhex=98FB98"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box111" style={{backgroundColor: 'rgb(175, 238, 238)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=PaleTurquoise">PaleTurquoise</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=AFEEEE">#AFEEEE</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer111">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer111"><a href="/colors/colors_mixer.asp?colorbottom=AFEEEE&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker111"><a href="/colors/colors_picker.asp?colorhex=AFEEEE"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box112" style={{backgroundColor: 'rgb(219, 112, 147)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=PaleVioletRed">PaleVioletRed</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=DB7093">#DB7093</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer112">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer112"><a href="/colors/colors_mixer.asp?colorbottom=DB7093&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker112"><a href="/colors/colors_picker.asp?colorhex=DB7093"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box113" style={{backgroundColor: 'rgb(255, 239, 213)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=PapayaWhip">PapayaWhip</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFEFD5">#FFEFD5</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer113">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer113"><a href="/colors/colors_mixer.asp?colorbottom=FFEFD5&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker113"><a href="/colors/colors_picker.asp?colorhex=FFEFD5"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box114" style={{backgroundColor: 'rgb(255, 218, 185)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=PeachPuff">PeachPuff</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFDAB9">#FFDAB9</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer114">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer114"><a href="/colors/colors_mixer.asp?colorbottom=FFDAB9&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker114"><a href="/colors/colors_picker.asp?colorhex=FFDAB9"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box115" style={{backgroundColor: 'rgb(205, 133, 63)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Peru">Peru</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=CD853F">#CD853F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer115">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer115"><a href="/colors/colors_mixer.asp?colorbottom=CD853F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker115"><a href="/colors/colors_picker.asp?colorhex=CD853F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box116" style={{backgroundColor: 'rgb(255, 192, 203)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Pink">Pink</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFC0CB">#FFC0CB</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer116">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer116"><a href="/colors/colors_mixer.asp?colorbottom=FFC0CB&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker116"><a href="/colors/colors_picker.asp?colorhex=FFC0CB"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box117" style={{backgroundColor: 'rgb(221, 160, 221)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Plum">Plum</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=DDA0DD">#DDA0DD</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer117">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer117"><a href="/colors/colors_mixer.asp?colorbottom=DDA0DD&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker117"><a href="/colors/colors_picker.asp?colorhex=DDA0DD"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box118" style={{backgroundColor: 'rgb(176, 224, 230)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=PowderBlue">PowderBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=B0E0E6">#B0E0E6</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer118">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer118"><a href="/colors/colors_mixer.asp?colorbottom=B0E0E6&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker118"><a href="/colors/colors_picker.asp?colorhex=B0E0E6"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box119" style={{backgroundColor: 'rgb(128, 0, 128)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Purple">Purple</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=800080">#800080</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer119">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer119"><a href="/colors/colors_mixer.asp?colorbottom=800080&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker119"><a href="/colors/colors_picker.asp?colorhex=800080"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box120" style={{backgroundColor: 'rgb(102, 51, 153)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=RebeccaPurple">RebeccaPurple</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=663399">#663399</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer120">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer120"><a href="/colors/colors_mixer.asp?colorbottom=663399&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker120"><a href="/colors/colors_picker.asp?colorhex=663399"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box121" style={{backgroundColor: 'rgb(255, 0, 0)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Red">Red</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF0000">#FF0000</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer121">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer121"><a href="/colors/colors_mixer.asp?colorbottom=FF0000&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker121"><a href="/colors/colors_picker.asp?colorhex=FF0000"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box122" style={{backgroundColor: 'rgb(188, 143, 143)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=RosyBrown">RosyBrown</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=BC8F8F">#BC8F8F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer122">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer122"><a href="/colors/colors_mixer.asp?colorbottom=BC8F8F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker122"><a href="/colors/colors_picker.asp?colorhex=BC8F8F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box123" style={{backgroundColor: 'rgb(65, 105, 225)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=RoyalBlue">RoyalBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=4169E1">#4169E1</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer123">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer123"><a href="/colors/colors_mixer.asp?colorbottom=4169E1&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker123"><a href="/colors/colors_picker.asp?colorhex=4169E1"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box124" style={{backgroundColor: 'rgb(139, 69, 19)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SaddleBrown">SaddleBrown</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=8B4513">#8B4513</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer124">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer124"><a href="/colors/colors_mixer.asp?colorbottom=8B4513&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker124"><a href="/colors/colors_picker.asp?colorhex=8B4513"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box125" style={{backgroundColor: 'rgb(250, 128, 114)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Salmon">Salmon</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FA8072">#FA8072</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer125">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer125"><a href="/colors/colors_mixer.asp?colorbottom=FA8072&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker125"><a href="/colors/colors_picker.asp?colorhex=FA8072"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box126" style={{backgroundColor: 'rgb(244, 164, 96)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SandyBrown">SandyBrown</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F4A460">#F4A460</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer126">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer126"><a href="/colors/colors_mixer.asp?colorbottom=F4A460&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker126"><a href="/colors/colors_picker.asp?colorhex=F4A460"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box127" style={{backgroundColor: 'rgb(46, 139, 87)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SeaGreen">SeaGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=2E8B57">#2E8B57</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer127">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer127"><a href="/colors/colors_mixer.asp?colorbottom=2E8B57&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker127"><a href="/colors/colors_picker.asp?colorhex=2E8B57"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box128" style={{backgroundColor: 'rgb(255, 245, 238)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SeaShell">SeaShell</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFF5EE">#FFF5EE</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer128">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer128"><a href="/colors/colors_mixer.asp?colorbottom=FFF5EE&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker128"><a href="/colors/colors_picker.asp?colorhex=FFF5EE"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box129" style={{backgroundColor: 'rgb(160, 82, 45)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Sienna">Sienna</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=A0522D">#A0522D</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer129">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer129"><a href="/colors/colors_mixer.asp?colorbottom=A0522D&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker129"><a href="/colors/colors_picker.asp?colorhex=A0522D"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box130" style={{backgroundColor: 'rgb(192, 192, 192)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Silver">Silver</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=C0C0C0">#C0C0C0</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer130">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer130"><a href="/colors/colors_mixer.asp?colorbottom=C0C0C0&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker130"><a href="/colors/colors_picker.asp?colorhex=C0C0C0"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box131" style={{backgroundColor: 'rgb(135, 206, 235)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SkyBlue">SkyBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=87CEEB">#87CEEB</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer131">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer131"><a href="/colors/colors_mixer.asp?colorbottom=87CEEB&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker131"><a href="/colors/colors_picker.asp?colorhex=87CEEB"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box132" style={{backgroundColor: 'rgb(106, 90, 205)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SlateBlue">SlateBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=6A5ACD">#6A5ACD</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer132">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer132"><a href="/colors/colors_mixer.asp?colorbottom=6A5ACD&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker132"><a href="/colors/colors_picker.asp?colorhex=6A5ACD"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box133" style={{backgroundColor: 'rgb(112, 128, 144)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SlateGray">SlateGray</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=708090">#708090</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer133">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer133"><a href="/colors/colors_mixer.asp?colorbottom=708090&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker133"><a href="/colors/colors_picker.asp?colorhex=708090"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box134" style={{backgroundColor: 'rgb(112, 128, 144)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SlateGrey">SlateGrey</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=708090">#708090</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer134">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer134"><a href="/colors/colors_mixer.asp?colorbottom=708090&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker134"><a href="/colors/colors_picker.asp?colorhex=708090"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box135" style={{backgroundColor: 'rgb(255, 250, 250)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Snow">Snow</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFFAFA">#FFFAFA</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer135">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer135"><a href="/colors/colors_mixer.asp?colorbottom=FFFAFA&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker135"><a href="/colors/colors_picker.asp?colorhex=FFFAFA"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box136" style={{backgroundColor: 'rgb(0, 255, 127)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SpringGreen">SpringGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=00FF7F">#00FF7F</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer136">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer136"><a href="/colors/colors_mixer.asp?colorbottom=00FF7F&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker136"><a href="/colors/colors_picker.asp?colorhex=00FF7F"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box137" style={{backgroundColor: 'rgb(70, 130, 180)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=SteelBlue">SteelBlue</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=4682B4">#4682B4</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer137">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer137"><a href="/colors/colors_mixer.asp?colorbottom=4682B4&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker137"><a href="/colors/colors_picker.asp?colorhex=4682B4"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box138" style={{backgroundColor: 'rgb(210, 180, 140)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Tan">Tan</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=D2B48C">#D2B48C</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer138">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer138"><a href="/colors/colors_mixer.asp?colorbottom=D2B48C&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker138"><a href="/colors/colors_picker.asp?colorhex=D2B48C"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box139" style={{backgroundColor: 'rgb(0, 128, 128)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Teal">Teal</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=008080">#008080</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer139">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer139"><a href="/colors/colors_mixer.asp?colorbottom=008080&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker139"><a href="/colors/colors_picker.asp?colorhex=008080"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box140" style={{backgroundColor: 'rgb(216, 191, 216)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Thistle">Thistle</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=D8BFD8">#D8BFD8</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer140">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer140"><a href="/colors/colors_mixer.asp?colorbottom=D8BFD8&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker140"><a href="/colors/colors_picker.asp?colorhex=D8BFD8"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box141" style={{backgroundColor: 'rgb(255, 99, 71)', color: 'rgb(255, 255, 255)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Tomato">Tomato</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FF6347">#FF6347</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer141">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer141"><a href="/colors/colors_mixer.asp?colorbottom=FF6347&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker141"><a href="/colors/colors_picker.asp?colorhex=FF6347"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box142" style={{backgroundColor: 'rgb(64, 224, 208)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Turquoise">Turquoise</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=40E0D0">#40E0D0</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer142">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer142"><a href="/colors/colors_mixer.asp?colorbottom=40E0D0&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker142"><a href="/colors/colors_picker.asp?colorhex=40E0D0"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box143" style={{backgroundColor: 'rgb(238, 130, 238)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Violet">Violet</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=EE82EE">#EE82EE</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer143">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer143"><a href="/colors/colors_mixer.asp?colorbottom=EE82EE&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker143"><a href="/colors/colors_picker.asp?colorhex=EE82EE"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box144" style={{backgroundColor: 'rgb(245, 222, 179)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Wheat">Wheat</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F5DEB3">#F5DEB3</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer144">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer144"><a href="/colors/colors_mixer.asp?colorbottom=F5DEB3&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker144"><a href="/colors/colors_picker.asp?colorhex=F5DEB3"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box145" style={{backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=White">White</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFFFFF">#FFFFFF</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer145">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer145"><a href="/colors/colors_mixer.asp?colorbottom=FFFFFF&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker145"><a href="/colors/colors_picker.asp?colorhex=FFFFFF"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box146" style={{backgroundColor: 'rgb(245, 245, 245)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=WhiteSmoke">WhiteSmoke</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=F5F5F5">#F5F5F5</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer146">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer146"><a href="/colors/colors_mixer.asp?colorbottom=F5F5F5&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker146"><a href="/colors/colors_picker.asp?colorhex=F5F5F5"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box147" style={{backgroundColor: 'rgb(255, 255, 0)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=Yellow">Yellow</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=FFFF00">#FFFF00</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer147">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer147"><a href="/colors/colors_mixer.asp?colorbottom=FFFF00&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker147"><a href="/colors/colors_picker.asp?colorhex=FFFF00"></a></div></div>
          </div>
        </div>
      </div>
      <div className="w3-col l4 m6 w3-center colorbox">
        <div className="innerbox" id="box148" style={{backgroundColor: 'rgb(154, 205, 50)', color: 'rgb(31, 45, 61)'}}>
          <span className="colornamespan"><a target="_blank" href="/colors/color_tryit.asp?color=YellowGreen">YellowGreen</a></span><br />
          <div><span className="colorhexspan"><a target="_blank" href="/colors/color_tryit.asp?hex=9ACD32">#9ACD32</a></span></div>
          <div className="w3-row colorlinkcontainer" id="colorlinkcontainer148">
            <div style={{float: 'left', width: '50%'}}><div className="linktocolormixerdiv" id="linktomixer148"><a href="/colors/colors_mixer.asp?colorbottom=9ACD32&colortop=FFFFFF"></a></div></div>
            <div style={{float: 'left', width: '50%'}}><div className="linktocolorpickerdiv" id="linktopicker148"><a href="/colors/colors_picker.asp?colorhex=9ACD32"></a></div></div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</div>



    {/* <Codepen src={"https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"}/> */}
    </div>
  );
};
export default CSS5;


