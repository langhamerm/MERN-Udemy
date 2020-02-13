import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import './W3.css';
import './style.css';
const Q1 = () => {
  return (
    <div>



<div className="w3-row w3-white">
  <div className="w3-col l10 m12" id="main">
    <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
      {/* MainLeaderboard*/}
      {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
      <div id="snhb-main_leaderboard-0" data-google-query-id="CJWmif7xzucCFcHHwAod-BIB7g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
      {/* adspace leaderboard */}
    </div>
    <h1>CSS <span className="color_h1">Navigation Bar</span></h1>
    <div className="w3-clear nextprev">
      <a className="w3-left w3-btn" href="css_image_transparency.asp">❮ Previous</a>
      <a className="w3-right w3-btn" href="css_dropdowns.asp">Next ❯</a>
    </div>
    <hr />
    <h2>Demo: Navigation Bars</h2>
    <div className="w3-row">
      <div className="w3-col m4">
        <p>Vertical</p>
        <ul className="vertical ex">
          <li><a className="active" href="javascript:void(0)">Home</a></li>
          <li><a href="javascript:void(0)">News</a></li>
          <li><a href="javascript:void(0)">Contact</a></li>
          <li><a href="javascript:void(0)">About</a></li>
        </ul>
      </div>
      <div className="w3-col m8">
        <p>Horizontal</p>
        <ul className="horizontal">
          <li><a className="active" href="javascript:void(0)">Home</a></li>
          <li><a href="javascript:void(0)">News</a></li>
          <li><a href="javascript:void(0)">Contact</a></li>
          <li className="rightli" style={{float: 'right'}}><a href="javascript:void(0)">About</a></li>
        </ul>
        <br />
        <ul className="horizontal gray">
          <li><a href="javascript:void(0)">Home</a></li>
          <li><a href="javascript:void(0)">News</a></li>
          <li><a className="active" href="javascript:void(0)">Contact</a></li>
          <li className="rightli" style={{float: 'right'}}><a href="javascript:void(0)">About</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <h2>Navigation Bars</h2>
    <p>Having easy-to-use navigation is important for any web site.</p>
    <p>With CSS you can transform boring HTML menus into good-looking navigation bars.</p>
    <hr />
    <h2>Navigation Bar = List of Links</h2>
    <p>A navigation bar needs standard HTML as a base.</p>
    <p>In our examples we will build the navigation bar from a standard HTML list.</p>
    <p>A navigation bar is basically a list of links, so using the &lt;ul&gt; and &lt;li&gt; elements makes perfect 
      sense:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate htmlHigh">
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>ul<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
        &nbsp;
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="default.asp"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Home<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
        &nbsp;
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="news.asp"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>News<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
        &nbsp;
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="contact.asp"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Contact<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
        &nbsp;
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="about.asp"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>About<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/ul<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
      </div><a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_basic_html">Try it Yourself »</a>
    </div>
    <p>Now let's remove the bullets and the margins and padding from the list:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;&nbsp;list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;
            margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;
            padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
        </span></div><a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_basic_css">Try it Yourself »</a>
    </div>
    <p>Example explained:</p>
    <ul>
      <li><code className="w3-codespan">list-style-type: none;</code> - Removes the bullets. A navigation bar 
        does not need list markers</li>
      <li>Set <code className="w3-codespan">margin: 0;</code> and <code className="w3-codespan">padding: 0;</code> 
        to remove browser default settings</li>
    </ul>
    <p>The code in the example above is the standard code used in both vertical, and horizontal navigation bars.</p>
    <hr />
    <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
      {/* MidContent */}
      {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
      <div id="snhb-mid_content-0" data-google-query-id="CMTjqf_xzucCFUaXAQodHyINyA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}></div></div>
    </div>
    <hr />
    <h2>Vertical Navigation Bar</h2>
    <p>To build a vertical navigation bar, you can style the &lt;a&gt; elements 
      inside the list, in addition to the code above:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          li a
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;
            display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;
            width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 60px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_vertical">Try it Yourself »</a>
    </div>
    <p>Example explained:</p>
    <ul>
      <li><code className="w3-codespan">display: block;</code> - Displaying the links as block elements makes the whole 
        link area clickable (not just the text), and it allows us to specify the width 
        (and padding, margin, height, etc. if you want)</li>
      <li><code className="w3-codespan">width: 60px;</code> - Block elements take up the full width available by default. We want to specify a 60 pixels width</li>
    </ul>
    <p>You can also set the width of &lt;ul&gt;, and remove the width of &lt;a&gt;, 
      as they will take up the full width available when displayed as block elements. 
      This will produce the same result as our previous example:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;
            list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;
            margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;
            padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 60px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
          <br /><br />li
          a
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;
            display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_vertical2">Try it Yourself »</a>
    </div>
    <hr />
    <h2>Vertical Navigation Bar Examples</h2>
    <p>Create a basic vertical navigation bar with a gray background color and 
      change the background color of the links when the user moves the mouse over 
      them:</p>
    <ul className="vertical">
      <li><a href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li><a href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
            margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f1f1f1<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />li a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 8px 16px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* 
            Change the link color on hover */</span><br />li a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
            background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #555<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_vertical_gray">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 35}}>Active/Current Navigation Link</h3>
    <p>Add an "active" class to the current link to let the user know which page he/she is on:</p>
    <ul className="vertical">
      <li><a className="active" href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li><a href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          .active <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #4CAF50<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
            color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_vertical_active">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 35}}>Center Links &amp; Add Borders</h3>
    <p>Add <code className="w3-codespan">text-align:center</code> to &lt;li&gt; or &lt;a&gt; to center the links.</p>
    <p>Add the <code className="w3-codespan">border</code> property to &lt;ul&gt; add a border around the navbar. If you also want 
      borders inside the navbar, add a <code className="w3-codespan">border-bottom</code> to all &lt;li&gt; elements, except for the 
      last one:</p>
    <ul className="vertical border">
      <li><a className="active" href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li><a href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid #555<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> center<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp; 
            border-bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid #555<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />li:last-child <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
            border-bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_vertical_borders">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 35}}>Full-height Fixed Vertical Navbar</h3>
    <p>Create a full-height, "sticky" side navigation:</p>
    
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
            margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              25%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f1f1f1<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* Full height */</span><br />
            &nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> fixed<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* 
              Make it stick, even on scroll */</span><br />&nbsp; 
            overflow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* Enable scrolling if the sidenav has too much content */</span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_vertical_fixed">Try it Yourself »</a>
    </div>
    <p><strong>Note:</strong> This example might not work properly on mobile devices.</p>
    <hr />
    <h2>Horizontal Navigation Bar</h2>
    <p>There are two ways to create a horizontal navigation bar. Using <b>
        inline</b> or <b>floating</b> list items.</p>
    <h3>Inline List Items</h3>
    <p>One way to build a horizontal navigation bar is to specify the &lt;li&gt; elements 
      as inline, in addition to the "standard" code above:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          li
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;
            display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inline<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal">Try it Yourself »</a>
    </div>
    <p>Example explained:</p>
    <ul>
      <li><code className="w3-codespan">display: inline;</code> - By default, &lt;li&gt; elements are block elements. Here, we 
        remove the line breaks before and after each list item, to display them on one line</li>
    </ul>
    <h3>Floating List Items</h3>
    <p>Another way of creating a horizontal navigation bar is to float the &lt;li&gt; 
      elements, and specify a layout for the navigation links:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          li
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;&nbsp;float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
          a
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;
            display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 8px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              #dddddd<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_float">Try it Yourself »</a>
    </div>
    <p>Example explained:</p>
    <ul>
      <li><code className="w3-codespan">float: left;</code> - use float to get block elements to slide next to each other</li>
      <li><code className="w3-codespan">display: block;</code> -  
        Displaying the links as block elements makes the whole link area 
        clickable (not just the text), and it allows us to specify padding (and 
        height, width, margins, etc. if you want)</li>
      <li><code className="w3-codespan">padding: 8px;</code> - Since block elements take up the full width available, they 
        cannot float next to each other. Therefore, specify some padding to make 
        them look good</li>
      <li><code className="w3-codespan">background-color: #dddddd;</code> - Add a gray background-color to each a element</li>
    </ul>
    <p><strong>Tip:</strong> Add the background-color to &lt;ul&gt; instead of each &lt;a&gt; element if you want 
      a full-width background color:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul
          <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #dddddd<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_float2">Try it Yourself »</a>
    </div>
    <hr />
    <h2>Horizontal Navigation Bar Examples</h2>
    <p>Create a basic horizontal navigation bar with a dark background color and 
      change the background color of the links when the user moves the mouse over 
      them:</p>
    <ul className="horizontal">
      <li><a href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li><a href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp; overflow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              hidden<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #333<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
            float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
          <br />li a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
            color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> center<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
            padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 14px 16px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
          <br /><span className="commentcolor" style={{color: 'green'}}>/* Change the link color to #111 (black) on hover */</span><br />li a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              #111<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_black">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 35}}>Active/Current Navigation Link</h3>
    <p>Add an "active" class to the current link to let the user know which page he/she is on:</p>
    <ul className="horizontal">
      <li><a className="active" href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li><a href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          .active <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #4CAF50<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_black_active">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 35}}>Right-Align Links</h3>
    <p>Right-align links by floating the list items to the right (<code className="w3-codespan">float:right;</code>):</p>
    <ul className="horizontal">
      <li><a href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li style={{float: 'right'}}><a className="active" href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate htmlHigh">
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>ul<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="#home"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Home<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; 
        <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="#news"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>News<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="#contact"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Contact<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
        &nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>li<span className="attributecolor" style={{color: 'red'}}> style<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="float:right"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> 
            class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="active"</span> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="#about"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>About<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/li<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/ul<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span> </div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_black_right">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 35}}>Border Dividers</h3>
    <p>Add the <code className="w3-codespan">border-right</code> property to &lt;li&gt; to create link dividers:</p>
    <ul className="horizontal divider">
      <li><a className="active" href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li style={{float: 'right'}}><a href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          <span className="commentcolor" style={{color: 'green'}}>/* Add a gray right border to all list items, except the last item 
            (last-child) */</span><br />li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border-right<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid #bbb<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
          li:last-child <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border-right<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_dividers">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 35}}>Fixed Navigation Bar</h3>
    <p>Make the navigation bar stay at the top or the bottom of the page, even when the user scrolls the page:</p>
    <div className="w3-row">
      <div className="w3-half">
        <div className="width94">
         
          <div className="w3-example">
            <h3>Fixed Top</h3>
            <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
                ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> fixed<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
            <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_black_fixed">Try it Yourself »</a>
          </div>
        </div>
      </div>
      <div className="w3-half">
        <div className="width94">
          
          <div className="w3-example">
            <h3>Fixed Bottom</h3>
            <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
                ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> fixed<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
            <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_black_fixed2">Try it Yourself »</a>
          </div>
        </div>
      </div>
    </div>
    <div className="w3-note w3-panel" style={{marginTop: 0}}>
      <p><strong>Note:</strong> Fixed position might not work properly on mobile devices.</p>
    </div>
    <h3 style={{marginTop: 30}}>Gray Horizontal Navbar</h3>
    <p>An example of a gray horizontal navigation bar with a thin gray border:</p>
    <ul className="horizontal2">
      <li><a className="active" href="javascript:void(0)">Home</a></li>
      <li><a href="javascript:void(0)">News</a></li>
      <li><a href="javascript:void(0)">Contact</a></li>
      <li><a href="javascript:void(0)">About</a></li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid #e7e7e7<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
            background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f3f3f3<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />li a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              #666<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_gray">Try it Yourself »</a>
    </div>
    <h3 style={{marginTop: 30}}>Sticky Navbar</h3>
    <p>Add <code className="w3-codespan">position: sticky;</code> to &lt;ul&gt; to create a sticky navbar.</p>
    <p>A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> -webkit-sticky<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* Safari */</span><br />&nbsp; 
            position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> sticky<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_sticky">Try it Yourself »</a>
    </div>
    <div className="w3-note w3-panel">
      <p><strong>Note: </strong>Internet Explorer, Edge 15 and earlier versions do not support sticky positioning. Safari requires a -webkit- 
        prefix (see example above). You must also specify at least one of <code className="w3-codespan">top</code>, <code className="w3-codespan">right</code>, <code className="w3-codespan">bottom</code> or <code className="w3-codespan">left</code> for 
        sticky positioning to work.</p>
    </div>
    <hr />
    <h2>More Examples</h2>
    <div className="w3-example">
      <h3>Responsive Topnav</h3>
      <p>How to use CSS media queries to create a responsive top navigation.</p>
      <div className="w3-white">
        <img src="navbar_responsive_hor.jpg" style={{width: '100%'}} />
      </div>
      <a target="_blank" className="w3-btn w3-margin-top w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_horizontal_responsive">Try it Yourself »</a>
    </div>
    <div className="w3-example">
      <h3>Responsive Sidenav</h3>
      <p>How to use CSS media queries to create a responsive side navigation.</p>
      <div className="w3-white">
        <img src="navbar_responsive_ver.jpg" style={{width: '100%'}} />
      </div>
      <a target="_blank" className="w3-btn w3-margin-top w3-margin-bottom" href="tryit.asp?filename=trycss_navbar_vertical_responsive">Try it Yourself »</a>
    </div>
    <div className="w3-example">
      <h3>Dropdown Navbar</h3>
      <p>How to add a dropdown menu inside a navigation bar.</p>
      <div className="w3-white">
 
      </div>
      <a target="_blank" className="w3-btn w3-margin-top w3-margin-bottom" href="tryit.asp?filename=trycss_dropdown_navbar">Try it Yourself »</a>
    </div>
    <br />
    <div className="w3-clear nextprev">
      <a className="w3-left w3-btn" href="css_image_transparency.asp">❮ Previous</a>
      <a className="w3-right w3-btn" href="css_dropdowns.asp">Next ❯</a>
    </div>
  </div>
  <div className="w3-col l2 m12" id="right">
    <div className="sidesection">
      <div id="skyscraper">
        {/*<pre>wide_skyscraper, all: [160,600][300,600][320,50][120,600][300,1050]</pre>*/}
        <div id="snhb-wide_skyscraper-0" style={{minHeight: 0}} data-google-query-id="CPyphv7xzucCFcHHwAod-BIB7g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0" title="3rd party ad content" width={320} height={50} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={2} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
        {/* adspace wide*/}
      </div>
    </div>
    <div className="sidesection">
      <h4><a href="/colors/colors_picker.asp">COLOR PICKER</a></h4>
      <a href="/colors/colors_picker.asp">
        <img src="/images/colorpicker.gif" alt="colorpicker" /></a>
    </div>
    <div className="sidesection" id="moreAboutSubject">
    </div>
    {/*
<div id="sidesection_exercise" class="sidesection" style="background-color:#555555;max-width:200px;margin:auto;margin-bottom:32px">
  <div class="w3-container w3-text-white">
    <h4>Exercises</h4>
  </div>
  <div>
    <div class="w3-light-grey">
<a target="_blank" href="/html/exercise.asp" style="padding-top:8px">HTML</a>
<a target="_blank" href="/css/exercise.asp">CSS</a>
<a target="_blank" href="/js/exercise_js.asp">JavaScript</a>
<a target="_blank" href="/sql/exercise.asp">SQL</a>
<a target="_blank" href="/php/exercise.asp">PHP</a>
<a target="_blank" href="/python/exercise.asp">Python</a>
<a target="_blank" href="/bootstrap/exercise_bs3.asp">Bootstrap</a>
<a target="_blank" href="/jquery/exercise_jq.asp" style="padding-bottom:8px">jQuery</a>
    </div>
  </div>
</div>
*/}


  </div>
</div>


<Codepen
        src={
          "https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default Q1;

