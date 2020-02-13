import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const D3 = () => {
  return (
    <div>
  


  <div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    <div id="div-gpt-ad-1422003450156-2" data-google-query-id="CPv0ia7KzucCFcbYwAodAmkIHQ">
      <div id="google_ads_iframe_/16833175/MainLeaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/16833175/MainLeaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <h1>CSS <span className="color_h1">Layout - The position</span> Property</h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_max-width.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_overflow.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">The <code className="w3-codespan">position</code> property specifies the type of 
    positioning method used for an element (static, relative, fixed, absolute or 
    sticky).</p>
  <hr />
  <h2>The position Property</h2>
  <p>The <code className="w3-codespan">position</code> property specifies the type of positioning method used for an element.</p>
  <p>There are five different position values: </p>
  <ul>
    <li><code className="w3-codespan">static</code></li>
    <li><code className="w3-codespan">relative</code></li>
    <li><code className="w3-codespan">fixed</code></li>
    <li><code className="w3-codespan">absolute</code></li>
    <li><code className="w3-codespan">sticky</code></li>
  </ul>
  <p>Elements are then positioned using the top, bottom, left, and right 
    properties. However, these properties will not work unless the <code className="w3-codespan">position</code> 
    property is set first. They also work differently depending on the position 
    value.</p>
  <hr />
  <h2>position: static;</h2>
  <p>HTML elements are positioned static by default.</p>
  <p>Static positioned elements are not affected by the top, bottom, left, and right properties.</p>
  <p>An element with <code className="w3-codespan">position: static;</code> is not positioned in any special way; it is 
    always positioned according to the normal flow of the page:</p>
  <div className="w3-theme-border w3-margin-bottom" style={{borderWidth: 3, borderStyle: 'solid', position: 'static'}}>
    This &lt;div&gt; element has position: static;</div>
  <p>Here is the CSS that is used:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div.static <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> static<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_position_static" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>position: relative;</h2>
  <p>An element with <code className="w3-codespan">position: relative;</code> is positioned relative to its normal position.</p>
  <p>Setting the top, right, bottom, and left properties of a relatively-positioned element will cause
    it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the 
    element.</p>
  <div className="w3-theme-border w3-margin-bottom" style={{borderWidth: 3, borderStyle: 'solid', position: 'relative', left: 30}}>
    This &lt;div&gt; element has position: relative;
  </div>
  <p>Here is the CSS that is used:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div.relative <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> relative<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 30px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_position_relative" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    <div id="div-gpt-ad-1493883843099-0" style={{}} data-google-query-id="CP70ia7KzucCFcbYwAodAmkIHQ">
      <div id="google_ads_iframe_/16833175/MidContent_0__container__" style={{border: '0pt none', display: 'inline-block', width: 300, height: 250}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/16833175/MidContent_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={300} height={250} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={4} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>position: fixed;</h2>
  <p>An element with <code className="w3-codespan">position: fixed;</code> is positioned relative to the viewport, which means it always 
    stays in the same place even if the page is scrolled. The top, 
    right, bottom, and left properties are used to position the element.</p>
  <p>A fixed element does not leave a gap in the page where it would normally have been located.</p>
  <p>Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div.fixed <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> fixed<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; right<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            300px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_position_fixed" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <div className="w3-theme-border" style={{borderWidth: 3, backgroundColor: '#cae8ca', borderStyle: 'solid', position: 'fixed', padding: 7, bottom: 0, right: 0, maxWidth: 450, zIndex: 999}}>
    This &lt;div&gt; element has <code className="w3-codespan">position: fixed;</code></div>
  <hr />
  <h2>position: absolute;</h2>
  <p>An element with <code className="w3-codespan">position: absolute;</code> is positioned relative to the nearest positioned ancestor 
    (instead of positioned relative to the viewport, like fixed).</p>
  <p>However; if an absolute positioned element has no positioned ancestors, 
    it uses the document body, and moves along with page scrolling.</p>
  <p><strong>Note:</strong> A "positioned" element is one whose position is anything except 
    <code className="w3-codespan">static</code>.</p>
  <p>Here is a simple example:</p>
  <div className="w3-theme-border" style={{borderWidth: 3, borderStyle: 'solid', position: 'relative', width: 400, height: 200}}>
    This &lt;div&gt; element has position: relative;
    <div className="w3-theme-border w3-margin-bottom" style={{borderWidth: 3, borderStyle: 'solid', position: 'absolute', top: 80, right: 0, width: 200, height: 100}}>
      This &lt;div&gt; element has position: absolute;
    </div>
  </div>
  <p>Here is the CSS that is used:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div.relative <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> relative<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 400px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
        <br /><br />
        div.absolute <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> absolute<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;
          top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 80px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; right<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_position_absolute" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>position: sticky;</h2>
  <p>An element with <code className="w3-codespan">position: sticky;</code> is positioned based on the user's scroll position.</p>
  <p>A sticky element toggles between <code className="w3-codespan">relative</code> and <code className="w3-codespan">fixed</code>, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).</p>
  <iframe src="trycss_position_sticky_ifr.htm" style={{width: '100%', border: '4px solid #e5e5e5'}} className="w3-padding" />
  <div className="w3-note w3-panel">
    <p><strong>Note: </strong>Internet Explorer, Edge 15 and earlier versions do not support sticky positioning. Safari requires a -webkit- 
      prefix (see example below). You must also specify at least one of <code className="w3-codespan">top</code>, <code className="w3-codespan">right</code>, <code className="w3-codespan">bottom</code> or <code className="w3-codespan">left</code> for 
      sticky positioning to work.</p>
  </div><p>In this example, the sticky element sticks to the top of the page (<code className="w3-codespan">top: 0</code>), when you reach its scroll position.</p><div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div.sticky <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> -webkit-sticky<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* Safari */</span><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            sticky<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> green<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2px solid #4CAF50<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_position_sticky" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Overlapping Elements</h2>
  <p>When elements are positioned, they can overlap other elements.</p>
  <p>The <code className="w3-codespan">z-index</code> property specifies the stack order of an element (which element should be placed in front of, or behind, the others).</p>
  <p>An element can have a positive or negative stack order:</p>
  <div className="w3-example w3-white" style={{position: 'relative', padding: 80}}>
    <h1 style={{position: 'absolute', left: 35, top: 15, zIndex: 2}}>This is a heading</h1>
    <img style={{position: 'absolute', left: 30, top: 15, zIndex: 1}} src="w3css.gif" width={100} height={140} />
    <p style={{position: 'absolute', left: 35, top: 65, zIndex: 2}}>Because the image has a z-index of -1, it will be placed behind the text.</p>
  </div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        img
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> absolute<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          z-index<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> -1<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_zindex" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>An element with greater stack order is always in front of an element with a lower stack order.</p>
  <div className="w3-panel w3-note">
    <p><strong>Note:</strong> If two positioned elements overlap without a <code className="w3-codespan">z-index</code> 
      specified, the element positioned last in the HTML code will be shown on top.</p>
  </div>
  <hr />
  <h2>Positioning Text In an Image</h2>
  <p>How to position text over an image:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="notranslate">
      <div style={{position: 'relative', textAlign: 'center'}}>
        <img src="img_5terre_wide.jpg" alt="Cinque Terre" style={{width: '100%', height: 'auto', opacity: '0.3'}} />
        <div style={{position: 'absolute', bottom: 8, left: 16, fontSize: 18}}>Bottom Left</div>
        <div style={{position: 'absolute', top: 8, left: 16, fontSize: 18}}>Top Left</div>
        <div style={{position: 'absolute', top: 8, right: 16, fontSize: 18}}>Top Right</div>
        <div style={{position: 'absolute', bottom: 8, right: 16, fontSize: 18}}>Bottom Right</div>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 18}}>Centered</div>
      </div>
    </div>
    <p style={{fontSize: 17}}>Try it Yourself:</p>
    <a target="_blank" href="tryit.asp?filename=trycss_image_text_top_left" className="w3-btn w3-margin-bottom">Top Left »</a>
    <a target="_blank" href="tryit.asp?filename=trycss_image_text_top_right" className="w3-btn w3-margin-bottom">Top Right »</a>
    <a target="_blank" href="tryit.asp?filename=trycss_image_text_bottom_left" className="w3-btn w3-margin-bottom">Bottom Left »</a>
    <a target="_blank" href="tryit.asp?filename=trycss_image_text_bottom_right" className="w3-btn w3-margin-bottom">Bottom Right »</a>
    <a target="_blank" href="tryit.asp?filename=trycss_image_text_center" className="w3-btn w3-margin-bottom">Centered »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <p><a target="_blank" href="tryit.asp?filename=trycss_clip">Set the shape of an element</a><br />
    This example demonstrates how to set the shape of an element. The element is clipped into this shape, and displayed.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_positioning1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_positioning2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_positioning3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_positioning4" target="_blank">Exercise 4 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_positioning5" target="_blank">Exercise 5 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Positioning Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Property</th>
        <th style={{width: '55%'}}>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_pos_bottom.asp">bottom</a></td>
        <td>Sets the bottom margin edge for a positioned box</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_pos_clip.asp">clip</a></td>
        <td>Clips an absolutely positioned element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_pos_left.asp">left</a></td>
        <td>Sets the left margin edge for a positioned box</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_class_position.asp">position</a></td>
        <td>Specifies the type of positioning for an element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_pos_right.asp">right</a></td>
        <td>Sets the right margin edge for a positioned box</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_pos_top.asp">top</a></td>
        <td>Sets the top margin edge for a positioned box</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_pos_z-index.asp">z-index</a></td>
        <td>Sets the stack order of an element</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_max-width.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_overflow.asp">Next ❯</a>
  </div>
</div>


<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default D3;
