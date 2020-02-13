import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import external from "../../images/external.png";
import internal from "../../images/internal.png";
import inline from "../../images/cssid.png";
import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const ACSS3 = () => {
  return (
    <div>
<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CMX1k4mqz-cCFZWAaQoduYgL2g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={1} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1"> Colors</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css3_backgrounds.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_gradients.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">CSS supports <a href="css_colors.asp">140+ color names, HEX values, RGB values</a>, RGBA 
    values, HSL values, HSLA values, and opacity.</p>
  <hr />
  <h2>RGBA Colors</h2>
  <p>RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity 
    for a color.</p>
  <p>An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 
    (fully transparent) and 1.0 (fully opaque).</p>
  <div style={{background: 'rgba(255, 0, 0, 0.2)', padding: 18}}>rgba(255, 0, 0, 0.2);</div>
  <div style={{background: 'rgba(255, 0, 0, 0.4)', padding: 18}}>rgba(255, 0, 0, 0.4);</div>
  <div style={{background: 'rgba(255, 0, 0, 0.6)', padding: 18}}>rgba(255, 0, 0, 0.6);</div>
  <div style={{background: 'rgba(255, 0, 0, 0.8)', padding: 18}}>rgba(255, 0, 0, 0.8);</div>
  <p className="w3-margin-top">The following example defines different RGBA colors:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #p1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> rgba(255, 0, 0, 0.3)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp; <span className="commentcolor" style={{color: 'green'}}>/* red 
          with opacity */</span><br />#p2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> rgba(0, 255, 0, 0.3)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* green with opacity */</span><br />#p3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> rgba(0, 0, 255, 0.3)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* blue 
          with opacity */</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss3_color_rgba" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CLL5oIqqz-cCFQR3AQodd58DiA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={4} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>HSL Colors</h2>
  <p>HSL stands for Hue, Saturation and Lightness.</p>
  <p>An HSL color value is specified with: hsl(hue, saturation, lightness).</p>
  <ol>
    <li>Hue is a degree on the color wheel (from 0 to 360):
      <ul>
        <li>0 (or 360) is red</li>
        <li>120 is green</li>
        <li>240 is blue</li>
      </ul>
    </li>
    <li>Saturation is a percentage value: 100% is the full color.</li>
    <li>Lightness is also a percentage; 0% is dark (black) and 100% is white.</li>
  </ol>
  <div style={{background: 'hsl(0, 100%, 30%)', padding: 18}}>hsl(0, 100%, 30%);</div>
  <div style={{background: 'hsl(0, 100%, 50%)', padding: 18}}>hsl(0, 100%, 50%);</div>
  <div style={{background: 'hsl(0, 100%, 70%)', padding: 18}}>hsl(0, 100%, 70%);</div>
  <div style={{background: 'hsl(0, 100%, 90%)', padding: 18}}>hsl(0, 100%, 90%);</div>
  <p className="w3-margin-top">The following example defines different HSL colors:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #p1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsl(120, 100%, 50%)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp; <span className="commentcolor" style={{color: 'green'}}>/* green */</span><br />#p2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsl(120, 100%, 75%)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* light green */</span><br />#p3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsl(120, 100%, 25%)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* dark 
          green */</span><br />#p4 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsl(120, 60%, 70%)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* pastel green */</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss3_color_hsl" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>HSLA Colors</h2>
  <p>HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity 
    for a color.</p>
  <p>An HSLA color value is specified with: hsla(hue, saturation, lightness, alpha), where the 
    alpha parameter defines the opacity. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
  <div style={{background: 'hsla(0, 100%, 30%, 0.3)', padding: 18}}>hsla(0, 100%, 30%, 0.3);</div>
  <div style={{background: 'hsla(0, 100%, 50%, 0.3)', padding: 18}}>hsla(0, 100%, 50%, 0.3);</div>
  <div style={{background: 'hsla(0, 100%, 70%, 0.3)', padding: 18}}>hsla(0, 100%, 70%, 0.3);</div>
  <div style={{background: 'hsla(0, 100%, 90%, 0.3)', padding: 18}}>hsla(0, 100%, 90%, 0.3);</div>
  <p className="w3-margin-top">The following example defines different HSLA colors:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #p1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsla(120, 100%, 50%, 0.3)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp; <span className="commentcolor" style={{color: 'green'}}>/* green with opacity */</span><br />#p2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsla(120, 100%, 75%, 0.3)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* light green with opacity */</span><br />#p3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsla(120, 100%, 25%, 0.3)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* dark 
          green with opacity */</span><br />#p4 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hsla(120, 60%, 70%, 0.3)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;&nbsp;&nbsp;<span className="commentcolor" style={{color: 'green'}}>/* pastel green 
          with opacity */</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss3_color_hsla" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Opacity</h2>
  <p>The CSS <code className="w3-codespan">opacity</code> property sets the opacity for 
    the whole element (both background color and text will be opaque/transparent).</p>
  <p>The <code className="w3-codespan">opacity</code> property value must be a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
  <div style={{background: 'rgb(255, 0, 0)', opacity: '0.2', padding: 18}}>rgb(255, 0, 0);opacity:0.2;</div>
  <div style={{background: 'rgb(255, 0, 0)', opacity: '0.4', padding: 18}}>rgb(255, 0, 0);opacity:0.4;</div>
  <div style={{background: 'rgb(255, 0, 0)', opacity: '0.6', padding: 18}}>rgb(255, 0, 0);opacity:0.6;</div>
  <div style={{background: 'rgb(255, 0, 0)', opacity: '0.8', padding: 18}}>rgb(255, 0, 0);opacity:0.8;</div>
  <p className="w3-margin-top">Notice that the text above will also be 
    transparent/opaque!</p>
  <p>The following example shows different elements with opacity:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #p1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>rgb(255,0,0)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span>opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>0.6<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp; <span className="commentcolor" style={{color: 'green'}}>/* red with opacity 
          */</span><br />#p2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>rgb(0,255,0)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span>opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>0.6<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp; <span className="commentcolor" style={{color: 'green'}}>/* green with 
          opacity */</span><br />#p3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>rgb(0,0,255)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span>opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>0.6<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp; <span className="commentcolor" style={{color: 'green'}}>/* blue 
          with opacity */</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss3_color_opacity" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_colors1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_colors2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_colors3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_colors4" target="_blank">Exercise 4 »</a>
    </div>
  </div>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css3_backgrounds.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_gradients.asp">Next ❯</a>
  </div>
</div>

     
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default ACSS3;
