import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import box from "../../images/box.png";
import boxex from "../../images/boxex.png";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const Text4 = () => {
  return (
 
<div>

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CIaX3ZrCzucCFRNgAQodWJ0C_Q"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id="5968baec806a1aac0a42e0d816081d02" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Links</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_icons.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_list.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">With CSS, links can be styled in different ways.</p>
  <a href="javascript:void(0)" className="txtlink2">Text Link</a>
  <a href="javascript:void(0)" className="txtlink">Text Link</a>
  <a href="javascript:void(0)" className="button button1">Link Button</a> 
  <a href="javascript:void(0)" className="btn">Link Button</a>
  <hr />
  <h2>Styling Links</h2>
  <p>Links can be styled with any CSS property (e.g. <code className="w3-codespan">color</code>, <code className="w3-codespan">font-family</code>, 
    <code className="w3-codespan">background</code>, etc.).</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hotpink<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_link_all" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>In addition, links can be styled 
    differently depending on what <strong>state</strong> they are in.</p>
  <p>The four links states are: </p>
  <ul>
    <li><code className="w3-codespan">a:link</code> - a normal, unvisited link</li>
    <li><code className="w3-codespan">a:visited</code> - a link the user has visited</li>
    <li><code className="w3-codespan">a:hover</code> - a link when the user mouses over it</li>
    <li><code className="w3-codespan">a:active</code> - a link the moment it is clicked</li>
  </ul>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        <span className="commentcolor" style={{color: 'green'}}>/* unvisited link */</span><br />a:link <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* visited 
          link */</span><br />a:visited <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> green<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* mouse over link */</span><br />
        a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hotpink<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* selected link */</span><br />a:active <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_link" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>When setting the style for several link states, there are some order rules:</p>
  <ul>
    <li>a:hover MUST come after a:link and a:visited</li>
    <li>a:active MUST come after a:hover</li>
  </ul>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="COz2_JvCzucCFU0rTwodhEMGJg"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="dca63e0ee47993ca016a7ee99d1a19dc" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Text Decoration</h2>
  <p>The <code className="w3-codespan">text-decoration</code> property is mostly used to remove underlines from links:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a:link <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />a:visited <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> underline<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />a:active <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> underline<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_link_decoration">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Background Color</h2>
  <p>The <code className="w3-codespan">background-color</code> property can be used to specify a background color for links:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a:link <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        a:visited <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> cyan<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> lightgreen<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        a:active <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hotpink<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>&nbsp;
      </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_link_background">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Advanced - Link Buttons</h2>
  <p>This example demonstrates a more advanced example where we combine several CSS 
    properties to display links as boxes/buttons:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a:link, a:visited <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f44336<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 14px 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> center<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inline-block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />a:hover, a:active <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_link_advanced">Try it Yourself »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <p><a target="_blank" href="tryit.asp?filename=trycss_link2">Add different 
      styles to hyperlinks</a><br />
    This example demonstrates how to add other styles to hyperlinks.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_link_advanced2">Advanced - 
      Create a link button with borders</a><br />
    Another example of how to create link boxes/buttons.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_cursor">Change the cursor</a><br />
    The cursor property specifies the type of cursor to display.
    This example demonstrates the different types of cursors (can be useful for links).</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_link1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_link2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_link3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_link4" target="_blank">Exercise 4 »</a>
    </div>
  </div>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_icons.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_list.asp">Next ❯</a>
  </div>
</div>


      <Codepen
        src={
            "https://codepen.io/langhamerm/embed/dyoYxxG?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
   </div>
  );
};
export default Text4;
