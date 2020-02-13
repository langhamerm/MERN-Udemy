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
const Box2 = () => {
  return (
    <div>

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CKL277S1zucCFVW6TwodKlANNA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-forced-sandbox="true" style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id="1cb7d000cec0f998380b845f86f7a529" data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Outline</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_boxmodel.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_text.asp">Next ❯</a>
  </div>
  <hr />
  <div style={{width: '98%', border: '2px solid black', outline: '#4CAF50 solid 10px', padding: 20, margin: 'auto', textAlign: 'center'}}>
    This element has a black border and a green outline with a width of 10px.
  </div>
  <br />
  <a target="_blank" href="tryit.asp?filename=trycss_outline_intro" className="w3-btn">Try it Yourself »</a>
  <hr />
  <h2>CSS Outline</h2>
  <p>An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out". </p>
  <div className="w3-boxmodel">
    <div className="outline w3-theme">
      <div className="border">
        <div className="content" />
      </div>
    </div>
  </div>
  <p>CSS has the following outline properties:</p>
  <ul>
    <li> <code className="w3-codespan">outline-style</code></li>
    <li> <code className="w3-codespan">outline-color</code></li>
    <li> <code className="w3-codespan">outline-width</code></li>
    <li> <code className="w3-codespan">outline-offset</code></li>
    <li> <code className="w3-codespan">outline</code></li>
  </ul>
  <div className="w3-panel w3-note">
    <p><b>Note:</b> Outline differs from borders! Unlike border, the outline is 
      drawn outside the element's border, and may overlap other content. Also, the outline is 
      NOT a part of the element's dimensions; the element's total width and height
      is not affected by the width of the outline.</p>
  </div>
  <hr />
  <h2>CSS Outline Style</h2>
  <p>The <code className="w3-codespan">outline-style</code> property specifies the style of the outline, 
    and can have one of the following values:</p>
  <ul>
    <li><code className="w3-codespan">dotted</code> - Defines a dotted outline</li>
    <li><code className="w3-codespan">dashed</code> - Defines a dashed outline</li>
    <li><code className="w3-codespan">solid</code> - Defines a solid outline</li>
    <li><code className="w3-codespan">double</code> - Defines a double outline</li>
    <li><code className="w3-codespan">groove</code> - Defines a 3D grooved outline</li>
    <li><code className="w3-codespan">ridge</code> - Defines a 3D ridged outline</li>
    <li><code className="w3-codespan">inset</code> - Defines a 3D inset outline</li>
    <li><code className="w3-codespan">outset</code> - Defines a 3D outset outline</li>
    <li><code className="w3-codespan">none</code> - Defines no outline</li>
    <li><code className="w3-codespan">hidden</code> - Defines a hidden outline</li>
  </ul>
  <p>The following example shows the different <code className="w3-codespan">outline-style</code> values:</p>
  <p style={{outlineStyle: 'dotted'}}>A dotted outline.</p>
  <p style={{outlineStyle: 'dashed'}}>A dashed outline.</p>
  <p style={{outlineStyle: 'solid'}}>A solid outline.</p>
  <p style={{outlineStyle: 'double'}}>A double outline.</p>
  <p style={{outlineStyle: 'groove'}}>A groove outline. The effect depends on the outline-color value.</p>
  <p style={{outlineStyle: 'ridge'}}>A ridge outline. The effect depends on the outline-color value.</p>
  <p style={{outlineStyle: 'inset'}}>An inset outline. The effect depends on the outline-color value.</p>
  <p style={{outlineStyle: 'outset'}}>An outset outline. The effect depends on the outline-color value.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <p>Demonstration of the different outline styles:</p>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.dotted <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> dotted<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        p.dashed <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> dashed<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />p.solid <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> solid<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        p.double <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> double<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />p.groove <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> groove<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        p.ridge <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> ridge<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />p.inset <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inset<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        p.outset <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> outset<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_outline-style" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <div className="w3-panel w3-note">
    <p><b>Note:</b> None of the other outline properties will have any effect, unless the 
      <code className="w3-codespan">outline-style</code> property is set!</p>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CKT277S1zucCFVW6TwodKlANNA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-forced-sandbox="true" style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id="58b8aff792794139adf5bcf39e23565f" data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>CSS Outline Color</h2>
  <p>The <code className="w3-codespan">outline-color</code> property is used to set the color of the outline.</p>
  <p>The color can be set by:</p>
  <ul>
    <li>name - specify a color name, like "red"</li>
    <li>RGB - specify a RGB value, like "rgb(255,0,0)"</li>
    <li>Hex - specify a hex value, like "#ff0000"</li>
    <li>invert - performs a color inversion (which ensures that the outline is visible, regardless of color background)</li>
  </ul>
  <p>The following example shows some different outlines with different colors. 
    Also notice that these elements also have a thin black border inside the outline:</p>
  <p style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red'}}>A solid red outline.</p>
  <p style={{border: '1px solid black', outlineStyle: 'double', outlineColor: 'green'}}>A double green outline.</p>
  <p style={{border: '1px solid black', outlineStyle: 'outset', outlineColor: 'yellow'}}>An outset yellow outline.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.ex1
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;
          outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> solid<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />p.ex2
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;
          outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> double<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> green<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />p.ex3
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> outset<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_outline-color" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>The following example uses <code className="w3-codespan">outline-color: invert</code>, 
    which performs a color inversion. This ensures that the outline is visible, 
    regardless of color background:</p>
  <p style={{border: '1px solid yellow', outlineStyle: 'solid', outlineColor: 'invert'}}>A solid invert outline.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.ex1
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;
          outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> solid<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> invert<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_outline-color_invert" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS Outline Width</h2>
  <p>The <code className="w3-codespan">outline-width</code> property specifies the width of the outline, 
    and can have one of the following values:</p>
  <ul>
    <li>thin (typically 1px)</li>
    <li>medium (typically 3px)</li>
    <li>thick (typically 5px)</li>
    <li>A specific size (in px, pt, cm, em, etc)</li>
  </ul>
  <p>The following example shows some outlines with different widths:</p>
  <p style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: 'thin'}}>A thin outline.</p>
  <p style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: 'medium'}}>A medium outline.</p>
  <p style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: 'thick'}}>A thick outline.</p>
  <p style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: 4}}>A 4px thick outline.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.ex1
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> solid<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          outline-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> thin<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />p.ex2
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> solid<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;outline-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> medium<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />p.ex3
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> solid<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;outline-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> thick<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        p.ex4
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;outline-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> solid<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; outline-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          outline-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 4px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_outline-width" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS Outline - Shorthand property</h2>
  <p>The <code className="w3-codespan">outline</code> property is a shorthand property for 
    setting the following individual outline properties:</p>
  <ul>
    <li><code className="w3-codespan">outline-width</code></li>
    <li><code className="w3-codespan">outline-style</code> (required)</li>
    <li><code className="w3-codespan">outline-color</code></li>
  </ul>
  <p>The <code className="w3-codespan">outline</code> property is specified as one, 
    two, or three values from the list above. The order of the values does not 
    matter.</p>
  <p>The following example shows some outlines specified with the shorthand <code className="w3-codespan">outline</code> 
    property:</p>
  <p style={{outline: 'dashed'}}>A dashed outline.</p>
  <p style={{outline: 'dotted red'}}>A dotted red outline.</p>
  <p style={{outline: '5px solid yellow'}}>A 5px solid yellow outline.</p>
  <p style={{outline: 'ridge thick pink'}}>A thick ridge pink outline.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.ex1
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> dashed<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />p.ex2
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> dotted red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />p.ex3
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px solid yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />p.ex4
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>outline<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> thick ridge pink<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_outline" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS Outline Offset</h2>
  <p>The <code className="w3-codespan">outline-offset</code> property adds space 
    between an outline and the edge/border of an element. The space between an 
    element and its outline is transparent.</p>
  <p>The following example specifies an outline 15px outside the border edge:</p>
  <p style={{margin: 30, border: '1px solid black', outline: '1px solid red', outlineOffset: 15}}>
    This paragraph has an outline 15px outside the border edge.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 30px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; outline<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            1px solid red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          outline-offset<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_outline-offset" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>The following example shows that the space between an element and its outline 
    is transparent:</p>
  <p style={{margin: 30, background: 'yellow', border: '1px solid black', outline: '1px solid red', outlineOffset: 15}}>
    This paragraph has an outline of 15px outside the border edge.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 30px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; outline<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            1px solid red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          outline-offset<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_outline-offset2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_outline1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_outline2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_outline3" target="_blank">Exercise 3 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Outline Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_outline.asp">outline</a></td>
        <td>A shorthand property for setting outline-width, outline-style, and 
          outline-color in one declaration</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_outline-color.asp">outline-color</a></td>
        <td>Sets the color of an outline</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_outline-offset.asp">outline-offset</a></td>
        <td>Specifies the space between an outline and the edge or border of an element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_outline-style.asp">outline-style</a></td>
        <td>Sets the style of an outline</td>
      </tr>
      <tr>
        <td>
          <a href="/cssref/pr_outline-width.asp">outline-width</a></td>
        <td>Sets the width of an outline</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_boxmodel.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_text.asp">Next ❯</a>
  </div>
</div>


      <br></br>
      <Jumbotron>
        <h1>Practice with border types below!</h1>
      </Jumbotron>

      <Codepen
        src={
          "https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default Box2;
