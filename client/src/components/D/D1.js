import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import './d.css';

const D1 = () => {
  function removeElement() {
    document.getElementById("imgbox1").style.display = "none";
}

function changeVisibility() {
    document.getElementById("imgbox2").style.visibility = "hidden";
}

function resetElement() {
    document.getElementById("imgbox1").style.display = "block";
    document.getElementById("imgbox2").style.visibility = "visible";
}
  return (
    <div>
  <div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CN2Qz9bFzucCFYHRwAod91QACA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={7} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Layout - The display</span> Property</h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_table.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_max-width.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">The <code className="w3-codespan">display</code> property is the most important CSS property for controlling layout.</p>
  <hr />
  <h2>The display Property</h2>
  <p>The <code className="w3-codespan">display</code> property specifies if/how an element is displayed.</p>
  <p>Every HTML element has a default display value depending on what type 
    of element it is. The default display value for most elements is <code className="w3-codespan">block</code> or 
    <code className="w3-codespan">inline</code>.</p>
  <p className="flip" onClick="myShowFunction()">Click to show panel</p>
  <div id="panel">
    <p>This panel contains a &lt;div&gt; element, which is hidden by default (<code className="w3-codespan">display: none</code>).</p>
    <p>It is styled with CSS, and we use JavaScript to show it (change it to (<code className="w3-codespan">display: block</code>).</p>
  </div>
  <hr />
  <h2>Block-level Elements</h2>
  <p>A block-level element always starts on a new line and takes up the full width available 
    (stretches out to the left and right as far as it can).</p>
  <div className="w3-theme-border" style={{borderWidth: 3, borderStyle: 'solid'}}>
    The &lt;div&gt; element is a block-level element.</div>
  <p>Examples of block-level elements:</p>
  <ul>
    <li>&lt;div&gt;</li>
    <li>&lt;h1&gt; - &lt;h6&gt;</li>
    <li>&lt;p&gt;</li>
    <li>&lt;form&gt;</li>
    <li>&lt;header&gt;</li>
    <li>&lt;footer&gt;</li>
    <li>&lt;section&gt;</li>
  </ul>
  <hr />
  <h2>Inline Elements</h2>
  <p>An inline element does not start on a new line and only takes up as much width as necessary.</p>
  <p>This is <span className="w3-theme-border" style={{borderWidth: 3, borderStyle: 'solid'}}>an inline &lt;span&gt; element 
      inside</span> a paragraph.</p>
  <p>Examples of inline elements:</p>
  <ul>
    <li>&lt;span&gt;</li>
    <li>&lt;a&gt;</li>
    <li>&lt;img&gt;</li>
  </ul>
  <hr />
  <h2>Display: none;</h2>
  <p><code className="w3-codespan">display: none;</code> is commonly used with JavaScript to hide 
    and show elements without deleting and recreating them. Take a look at our last 
    example on this page if you want to know how this can be achieved.</p>
  <p>The <code className="w3-codespan">&lt;script&gt;</code> element uses <code className="w3-codespan">display: none;</code> 
    as default.&nbsp;</p>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CN-Qz9bFzucCFYHRwAod91QACA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={9} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Override The Default Display Value</h2>
  <p>As mentioned, every element has a default display value. However, you can 
    override this.</p>
  <p>Changing an inline element to a block element, or vice versa, can be useful for 
    making the page look a specific way, and still follow the web standards.</p>
  <p>A common example is making inline <code className="w3-codespan">&lt;li&gt;</code> elements for horizontal menus:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inline<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="https://www.w3schools.com/css/tryit.asp?filename=trycss_display_inline_list" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <div className="w3-panel w3-note">
    <p><strong>Note:</strong> Setting the display property of an element only changes <strong>how the element is displayed</strong>, 
      NOT what kind of element it is. So, an inline element with <code className="w3-codespan">display: block;</code> is not allowed
      to have other block elements inside it.</p>
  </div>
  <p>The following example displays &lt;span&gt; elements as block elements:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        span <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="https://www.w3schools.com/css/tryit.asp?filename=trycss_display_block" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>The following example displays &lt;a&gt; elements as block elements:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="https://www.w3schools.com/css/tryit.asp?filename=trycss_display_block_a" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Hide an Element - display:none or visibility:hidden?</h2>
  <div className="w3-content test" style={{maxWidth: 1000}}>
    <div className="w3-row-padding w3-center" style={{margin: '0 -16px'}}>
      <div className="w3-col w3-border" id="imgbox1" style={{width: '30%'}}><p style={{wordWrap: 'break-word'}}><code className="w3-codespan" style={{}}>display:none</code></p>
        <img src="https://www.w3schools.com/css/img_5terre.jpg" style={{width: '100%'}} alt="Italy" />
        <p><button className="w3-button w3-block w3-green" onClick={removeElement}>Remove</button></p>
      </div>
      <div className="w3-col w3-border" style={{width: '30%'}} id="imgbox2"><p style={{wordWrap: 'break-word'}}><code className="w3-codespan">visibility:hidden</code></p>
        <img src="https://www.w3schools.com/css/img_forest.jpg" style={{height: '100% !important'}} alt="Forest" id='forest' />
        <p><button className="w3-button w3-block w3-green" onClick={changeVisibility}>Hide</button></p>
      </div>
      <div className="w3-col w3-border" style={{width: '30%'}}><p>Reset</p>
        <img src="https://www.w3schools.com/css/img_lights.jpg" style={{width: '100%'}} alt="Lights" />
        <p><button className="w3-button w3-block w3-green" onClick={resetElement}>Reset All</button></p>
      </div>
    </div>
  </div>
  <p>Hiding an element can be done by setting the <code className="w3-codespan">display</code> property to 
    <code className="w3-codespan">none</code>. 
    The element will be hidden, and the page will be displayed as if the element is not 
    there:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        h1.hidden <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="https://www.w3schools.com/css/tryit.asp?filename=trycss_display_none" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p><code className="w3-codespan">visibility:hidden;</code> also hides an element.</p>
  <p>However, the element will still take up the same space 
    as before. The element will be hidden, but still affect the layout:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        h1.hidden <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;visibility<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hidden<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="https://www.w3schools.com/css/tryit.asp?filename=trycss_visibility_hidden" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <p><a href="tryit.asp?filename=trycss_display" target="_blank">Differences between display: none; and visibility: hidden;</a><br />
    This example demonstrates display: none; versus visibility: hidden;</p>
  <p><a href="tryit.asp?filename=trycss_display_js" target="_blank">Using CSS together with JavaScript to show content</a><br />
    This example demonstrates how to use CSS and JavaScript to show an element on 
    click.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_display_visibility1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_display_visibility2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_display_visibility3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_display_visibility4" target="_blank">Exercise 4 »</a>
    </div>
  </div>
  <hr />
  <h2>CSS Display/Visibility Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '28%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_class_display.asp">display</a></td>
        <td>Specifies how an element should be displayed</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_class_visibility.asp">visibility</a></td>
        <td>Specifies whether or not an element should be visible</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_table.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_max-width.asp">Next ❯</a>
  </div>
</div>





    <Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default D1;
