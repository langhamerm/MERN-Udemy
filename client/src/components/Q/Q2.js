import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import './W3.css';
import './style.css';

const Q2 = () => {
  return (
    <div>

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CMCI1Nr3zucCFU6vTwodBxQNPA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Dropdowns</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_navbar.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_image_gallery.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">Create a hoverable dropdown with CSS.</p>
  <hr />
  <h2>Demo: Dropdown Examples</h2>
  <p>Move the mouse over the examples below:</p>
  <div className="w3-row" style={{marginTop: 35, marginBottom: 35}}>
    <div className="w3-third">
      <div className="dropdown dropdown2" style={{position: 'relative', top: 15}}>
        <span className="dropspan">Dropdown Text</span>
        <div className="dropdown-content" style={{padding: '8px 16px', minWidth: 150, textAlign: 'center'}}>
          <p>Hello World!</p>
        </div>
      </div>
    </div>
    <div className="w3-third">
      <div className="dropdown dropdown2">
        <button className="dropbtn">Dropdown Menu</button>
        <div className="dropdown-content">
          <a href="javascript:void(0)">Link 1</a>
          <a href="javascript:void(0)">Link 2</a>
          <a href="javascript:void(0)">Link 3</a>
        </div>
      </div>
    </div>
    <div className="w3-third">
      <div className="dropdown dropdown2">
        <span style={{position: 'relative', bottom: 15}}>Other: </span><img className="dropimg" src="img_5terre.jpg" alt="Cinque Terre" width={100} height={50} />
        <div className="dropdown-content right">
          <div className="img">
            <img src="img_5terre.jpg" alt="Cinque Terre" width={300} height={200} />
            <div style={{padding: 15, textAlign: 'center'}}>Beautiful Cinque Terre</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p style={{clear: 'both'}} />
  <hr />
  <h2>Basic Dropdown</h2>
  <p>Create a dropdown box that appears when the user moves the mouse over an 
    element.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        &lt;style&gt;<br />.dropdown <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> relative<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inline-block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.dropdown-content <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> absolute<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f9f9f9<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; min-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 160px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;box-shadow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0px 8px 16px 0px rgba(0,0,0,0.2)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            12px 16px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; z-index<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.dropdown:hover 
        .dropdown-content <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />&lt;/style&gt;<br /><br /><span className="htmlHigh"><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="dropdown"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
          &nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>span<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span style={{color: 'black'}}>Mouse over me</span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/span<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; 
          <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="dropdown-content"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>p<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span style={{color: 'black'}}>Hello World!</span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/p<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span> </span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_dropdown_text" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <h3>Example Explained</h3>
  <p><strong>HTML)</strong> Use any element to open the dropdown content, e.g. a 
    &lt;span&gt;, or a &lt;button&gt; element.</p>
  <p>Use a container element (like &lt;div&gt;) to create the dropdown content and add 
    whatever you want inside of it.</p>
  <p>Wrap a &lt;div&gt; element around the elements to position the dropdown content 
    correctly with CSS.</p>
  <p><strong>CSS)</strong> The <code className="w3-codespan">.dropdown</code> class uses <code className="w3-codespan">position:relative</code>, which is needed when we want the 
    dropdown content to be placed right below the dropdown button (using <code className="w3-codespan">position:absolute</code>).</p>
  <p>The <code className="w3-codespan">.dropdown-content</code> class holds the actual dropdown content. It is hidden by 
    default, and will be displayed on hover (see below). Note the <code className="w3-codespan">min-width</code> is set to 160px. Feel free to change 
    this. <strong>Tip:</strong> If you want the width of the dropdown content to be 
    as wide as the dropdown button, set the <code className="w3-codespan">width</code> to 100% (and <code className="w3-codespan">overflow:auto</code> to 
    enable scroll on small screens).</p>
  <p>Instead of using a border, we have used the CSS <code className="w3-codespan">box-shadow</code> property to make the 
    dropdown menu look like a "card".</p>
  <p>The <code className="w3-codespan">:hover</code> selector is used to show the dropdown menu when the user moves the 
    mouse over the dropdown button.</p>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CMKI1Nr3zucCFU6vTwodBxQNPA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}></div></div>
  </div>
  <hr />
  <h2>Dropdown Menu</h2>
  <p>Create a dropdown menu that allows the user to choose an option from a list:</p>
  <div className="dropdown dropdown2">
    <button className="dropbtn dropbtn2">Dropdown Menu</button>
    <div className="dropdown-content">
      <a href="javascript:void(0)">Link 1</a>
      <a href="javascript:void(0)">Link 2</a>
      <a href="javascript:void(0)">Link 3</a>
    </div>
  </div>
  <p>This example is similar to the previous one, except that we add links inside the dropdown box and style them to fit a styled dropdown button:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        &lt;style&gt;<br /><span className="commentcolor" style={{color: 'green'}}>/* Style The Dropdown Button */</span><br />.dropbtn <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
          background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #4CAF50<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 16px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 16px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; cursor<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> pointer<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* The 
          container &lt;div&gt; - needed to position the dropdown content */</span><br />.dropdown <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> relative<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            inline-block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* Dropdown Content (Hidden by Default) */</span><br />
        .dropdown-content <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            absolute<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f9f9f9<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          min-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 160px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; box-shadow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            0px 8px 16px 0px rgba(0,0,0,0.2)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; z-index<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* Links inside the dropdown */</span><br />
        .dropdown-content a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 12px 16px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; 
          display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* Change color of dropdown links on hover */</span><br />
        .dropdown-content a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f1f1f1</span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* Show the 
          dropdown menu on hover */</span><br />.dropdown:hover .dropdown-content <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
          display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* Change the background color of the dropdown 
          button when the dropdown content is shown */</span><br />.dropdown:hover .dropbtn <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #3e8e41<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />&lt;/style&gt;<br /><br /><span className="htmlHigh"><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="dropdown"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>button<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="dropbtn"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span style={{color: 'black'}}>Dropdown</span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/button<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; 
          <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="dropdown-content"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="#"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span style={{color: 'black'}}>Link 
            1</span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; 
          <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="#"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span style={{color: 'black'}}>Link 2</span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="#"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span style={{color: 'black'}}>Link 3</span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span> </span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_dropdown_button" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Right-aligned Dropdown Content</h2>
  <div className="dropdown dropdown2" style={{float: 'left'}}>
    <button className="dropbtn dropbtn2">Left</button>
    <div className="dropdown-content" style={{minWidth: 160}}>
      <a href="javascript:void(0)">Link 1</a>
      <a href="javascript:void(0)">Link 2</a>
      <a href="javascript:void(0)">Link 3</a>
    </div>
  </div>
  <div className="dropdown dropdown2" style={{float: 'right'}}>
    <button className="dropbtn dropbtn2">Right</button>
    <div className="dropdown-content" style={{minWidth: 160, right: 0}}>
      <a href="javascript:void(0)">Link 1</a>
      <a href="javascript:void(0)">Link 2</a>
      <a href="javascript:void(0)">Link 3</a>
    </div>
  </div>
  <p style={{clear: 'both'}} />
  <p style={{marginTop: 30}}>If you want the dropdown menu to go from right to left, instead of left to right, add <code className="w3-codespan">right: 0;</code></p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        .dropdown-content <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; right<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_dropdown_right" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <div className="w3-example">
    <h3>Dropdown Image</h3>
    <p>How to add an image and other content inside the dropdown box.</p>
    <div className="w3-white w3-padding">
      <p>Hover over the image:</p>
      <div className="dropdownimg" style={{paddingBottom: 15}}>
        <img src="img_5terre.jpg" alt="Cinque Terre" width={100} height={50} />
        <div className="dropdown-contentimg">
          <img src="img_5terre.jpg" alt="Cinque Terre" width={300} height={200} />
          <div className="descimg">Beautiful Cinque Terre</div>
        </div><br />
      </div><br />
    </div>
    <a target="_blank" className="w3-btn w3-margin-top w3-margin-bottom" href="tryit.asp?filename=trycss_dropdown_image">Try it Yourself »</a>
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
    <a className="w3-left w3-btn" href="css_navbar.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_image_gallery.asp">Next ❯</a>
  </div>
</div>




<Codepen
        src={"https://codepen.io/langhamerm/embed/WNvrwYP?height=265&theme-id=dark&default-tab=css,result&editable=true"}
      />
    </div>
  );
};
export default Q2;

