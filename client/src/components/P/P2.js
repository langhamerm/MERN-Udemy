import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const P2
 = () => {
  return (
    <div>

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="COfRvoDuzucCFQiSaQodTeQJ6A"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={1} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Pseudo-classes</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_combinators.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_pseudo_elements.asp">Next ❯</a>
  </div>
  <hr />
  <h2>What are Pseudo-classes?</h2>
  <p>A pseudo-class is used to define a special state 
    of an element.</p>
  <p>For example, it can be used to:</p>
  <ul>
    <li>Style an element when a user mouses over it</li>
    <li>Style visited and unvisited links differently</li>
    <li>Style an element when it gets focus</li>
  </ul>
  <div className="w3-row">
    <div className="w3-half">
      <div className="mouseover">
        <p>Mouse Over Me</p>
      </div>
    </div>
    <div className="w3-half">
      <input className="focus" type="text" name="fname" placeholder="Click Me To Get Focus" />
    </div>
  </div>
  <p style={{clear: 'both'}} />
  <hr />
  <h2>Syntax</h2>
  <p>The syntax of pseudo-classes:</p>
  <div className="w3-example">
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        selector:pseudo-class <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;property<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>value<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
  </div>
  <hr />
  <h2>Anchor Pseudo-classes</h2>
  <p>Links can be displayed in different ways:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        <span className="commentcolor" style={{color: 'green'}}>/* unvisited link */</span><br />a:link <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #FF0000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* visited 
          link */</span><br />a:visited <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #00FF00<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* mouse over link */</span><br />
        a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #FF00FF<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* selected link */</span><br />a:active <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #0000FF<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_link" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    <br />
  </div>
  <div className="w3-panel w3-note">
    <p><b>Note:</b> <code className="w3-codespan">a:hover</code> MUST come after <code className="w3-codespan">a:link</code> and 
      <code className="w3-codespan">a:visited</code> in the CSS definition in order to be effective! <code className="w3-codespan">a:active</code> MUST come after 
      <code className="w3-codespan">a:hover</code> in the CSS definition in order to be effective!
      Pseudo-class names are not case-sensitive.</p>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CMCum4LuzucCFQs_Twod3dQAww"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={300} height={250} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={4} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Pseudo-classes and CSS Classes</h2>
  <p>Pseudo-classes can be combined with CSS classes:</p>
  <p>When you hover over the link in the example, it will change color:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a.highlight:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #ff0000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_pseudo-class" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Hover on &lt;div&gt;</h2>
  <p>An example of using the <code className="w3-codespan">:hover</code> pseudo-class on a &lt;div&gt; element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_pseudo-class_hover_div" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    <br />
  </div>
  <hr />
  <h2>Simple Tooltip Hover</h2>
  <p>Hover over a &lt;div&gt; element to show a &lt;p&gt; element (like a tooltip):</p>
  <div className="tooltip-container w3-text-red"><b>Hover over me to show the &lt;p&gt; element.</b>
    <p className="tooltiptext w3-text-black">Tada! Here I am!</p>
  </div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        div:hover p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_pseudo-class_hover_tooltip" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    <br />
  </div>
  <hr />
  <h2>CSS - The :first-child Pseudo-class</h2>
  <p>The <code className="w3-codespan">:first-child</code> pseudo-class matches a specified element that is the first child of another element.</p>
  <h2>Match the first &lt;p&gt; element</h2>
  <p>In the following example, the selector matches any &lt;p&gt; element that is the first child of any element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p:first-child
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_first-child1" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Match the first &lt;i&gt; element in all &lt;p&gt; elements</h2>
  <p>In the following example, the selector matches the first &lt;i&gt; element in all &lt;p&gt; elements:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p i:first-child
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_first-child2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Match all &lt;i&gt; elements in all first child &lt;p&gt; elements</h2>
  <p>In the following example, the selector matches all &lt;i&gt; elements in &lt;p&gt; elements that are the first child of another element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p:first-child i
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_first-child3" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS - The :lang Pseudo-class</h2>
  <p>The <code className="w3-codespan">:lang</code> pseudo-class allows you to define special rules for different languages.</p>
  <p>In the example below, <code className="w3-codespan">:lang</code> defines the quotation marks for &lt;q&gt; elements with lang="no":</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>style<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="cssselectorcolor" style={{color: 'brown'}}><br />
        q:lang(no) <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; quotes<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> "~" "~"<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
      </span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/style<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>p<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Some text <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>q<span className="attributecolor" style={{color: 'red'}}> lang<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="no"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>A quote in a paragraph<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/q<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span> 
      Some text.<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/p<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <a target="_blank" href="tryit.asp?filename=trycss_lang" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <p><a target="_blank" href="tryit.asp?filename=trycss_link2">Add different styles to hyperlinks</a><br />
    This example demonstrates how to add other styles to hyperlinks.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_link_focus">Use of :focus</a><br />
    This example demonstrates how to use the :focus pseudo-class.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_pseudo_classes1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_pseudo_classes2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_pseudo_classes3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_pseudo_classes4" target="_blank">Exercise 4 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Pseudo Classes</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Selector</th>
        <th style={{width: '20%'}}>Example</th>
        <th>Example description</th>
      </tr>
      <tr>
        <td><a href="/cssref/sel_active.asp">:active</a></td>
        <td className="notranslate">a:active</td>
        <td>Selects the active link</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_checked.asp">:checked</a></td>
        <td className="notranslate">input:checked</td>
        <td>Selects every checked &lt;input&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_disabled.asp">:disabled</a></td>
        <td className="notranslate">input:disabled</td>
        <td>Selects every disabled &lt;input&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_empty.asp">:empty</a></td>
        <td className="notranslate">p:empty</td>
        <td>Selects every &lt;p&gt; element that has no children</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_enabled.asp">:enabled</a></td>
        <td className="notranslate">input:enabled</td>
        <td>Selects every enabled &lt;input&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_firstchild.asp">:first-child</a></td>
        <td className="notranslate">p:first-child</td>
        <td>Selects every &lt;p&gt; elements that is the first child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_first-of-type.asp">:first-of-type</a></td>
        <td className="notranslate">p:first-of-type</td>
        <td>Selects every &lt;p&gt; element that is the first &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_focus.asp">:focus</a></td>
        <td className="notranslate">input:focus</td>
        <td>Selects the &lt;input&gt; element that has focus</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_hover.asp">:hover</a></td>
        <td className="notranslate">a:hover</td>
        <td>Selects links on mouse over</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_in-range.asp">:in-range</a></td>
        <td className="notranslate">input:in-range</td>
        <td>Selects &lt;input&gt; elements with a value within a specified range</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_invalid.asp">:invalid</a></td>
        <td className="notranslate">input:invalid</td>
        <td>Selects all &lt;input&gt; elements with an invalid value</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_lang.asp">:lang(<i>language</i>)</a></td>
        <td className="notranslate">p:lang(it)</td>
        <td>Selects every &lt;p&gt; element with a lang attribute value starting with "it"</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_last-child.asp">:last-child</a></td>
        <td className="notranslate">p:last-child</td>
        <td>Selects every &lt;p&gt; elements that is the last child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_last-of-type.asp">:last-of-type</a></td>
        <td className="notranslate">p:last-of-type</td>
        <td>Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_link.asp">:link</a></td>
        <td className="notranslate">a:link</td>
        <td>Selects all unvisited links</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_not.asp">:not(selector)</a></td>
        <td className="notranslate">:not(p)</td>
        <td>Selects every element that is not a &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-child.asp">:nth-child(n)</a></td>
        <td className="notranslate">p:nth-child(2)</td>
        <td>Selects every &lt;p&gt; element that is the second child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-last-child.asp">:nth-last-child(n)</a></td>
        <td className="notranslate">p:nth-last-child(2)</td>
        <td>Selects every &lt;p&gt; element that is the second child of its parent, counting from the last child</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-last-of-type.asp">:nth-last-of-type(n)</a></td>
        <td className="notranslate">p:nth-last-of-type(2)</td>
        <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting from the last child</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-of-type.asp">:nth-of-type(n)</a></td>
        <td className="notranslate">p:nth-of-type(2)</td>
        <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_only-of-type.asp">:only-of-type</a></td>
        <td className="notranslate">p:only-of-type</td>
        <td>Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_only-child.asp">:only-child</a></td>
        <td className="notranslate">p:only-child</td>
        <td>Selects every &lt;p&gt; element that is the only child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_optional.asp">:optional</a></td>
        <td className="notranslate">input:optional</td>
        <td>Selects &lt;input&gt; elements with no "required" attribute</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_out-of-range.asp">:out-of-range</a></td>
        <td className="notranslate">input:out-of-range</td>
        <td>Selects &lt;input&gt; elements with a value outside a specified range</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_read-only.asp">:read-only</a></td>
        <td className="notranslate">input:read-only</td>
        <td>Selects &lt;input&gt; elements with a "readonly" attribute specified</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_read-write.asp">:read-write</a></td>
        <td className="notranslate">input:read-write</td>
        <td>Selects &lt;input&gt; elements with no "readonly" attribute</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_required.asp">:required</a></td>
        <td className="notranslate">input:required</td>
        <td>Selects &lt;input&gt; elements with a "required" attribute specified</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_root.asp">:root</a></td>
        <td className="notranslate">root</td>
        <td>Selects the document's root element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_target.asp">:target</a></td>
        <td className="notranslate">#news:target</td>
        <td>Selects the current active #news element (clicked on a URL containing that anchor name)</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_valid.asp">:valid</a></td>
        <td className="notranslate">input:valid</td>
        <td>Selects all &lt;input&gt; elements with a valid value</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_visited.asp">:visited</a></td>
        <td className="notranslate">a:visited</td>
        <td>Selects all visited links</td>
      </tr>
    </tbody></table>
  <h2>All CSS Pseudo Elements</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Selector</th>
        <th style={{width: '20%'}}>Example</th>
        <th>Example description</th>
      </tr>
      <tr>
        <td><a href="/cssref/sel_after.asp">::after</a></td>
        <td className="notranslate">p::after</td>
        <td>Insert content after every &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_before.asp">::before</a></td>
        <td className="notranslate">p::before</td>
        <td>Insert content before every &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_firstletter.asp">::first-letter</a></td>
        <td className="notranslate">p::first-letter</td>
        <td>Selects the first letter of every &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_firstline.asp">::first-line</a></td>
        <td className="notranslate">p::first-line</td>
        <td>Selects the first line of every &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_selection.asp">::selection</a></td>
        <td className="notranslate">p::selection</td>
        <td>Selects the portion of an element that is selected by a user</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_combinators.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_pseudo_elements.asp">Next ❯</a>
  </div>
</div>




<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default P2
;
