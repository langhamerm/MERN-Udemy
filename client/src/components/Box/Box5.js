import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import box from "../../images/box.png";
import boxex from "../../images/boxex.png";
import Container from "react-bootstrap/Container";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const Box5 = () => {
  return (

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    <div id="div-gpt-ad-1422003450156-2" data-google-query-id="CLLG__G0zucCFcXBwAodI7oDdg">
      <div id="google_ads_iframe_/16833175/MainLeaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/16833175/MainLeaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={7} data-load-complete="true" /></div></div>
  </div>
  <h1>CSS <span className="color_h1">Height and Width</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_padding.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_boxmodel.asp">Next ❯</a>
  </div>
  <hr />
  <div className="w3-theme-border" style={{width: '100%', borderWidth: 1, borderStyle: 'solid', padding: 5}}>
    This element has a width of 100%.
  </div>
  <br />
  <a target="_blank" href="tryit.asp?filename=trycss_height_width_intro" className="w3-btn">Try it Yourself »</a>
  <hr />
  <h2>CSS Setting height and width</h2>
  <p>The <code className="w3-codespan">height</code> and <code className="w3-codespan">width</code> properties are used to set the 
    height and width of an element.</p>
  <p>The height and width properties do not include padding, borders, or margins. 
    It sets the height/width of the area inside the padding, border, and margin of 
    the element.</p>
  <hr />
  <h2>CSS height/width Values</h2>
  <p>The <code className="w3-codespan">height</code> and <code className="w3-codespan">width</code> properties 
    may have the following values:</p>
  <ul>
    <li><code className="w3-codespan">auto</code> - This is default. The browser 
      calculates the height and width</li>
    <li><code className="w3-codespan">length</code> - Defines the height/width in px, cm 
      etc.</li>
    <li><code className="w3-codespan">%</code> - Defines the height/width in percent of 
      the containing block</li>
    <li><code className="w3-codespan">initial</code> - Sets the height/width to its 
      default value</li>
    <li><code className="w3-codespan">inherit</code> - The height/width will be 
      inherited from its parent value</li>
  </ul>
  <hr />
  <h2>CSS height/width Examples</h2>
  <div className="w3-theme-border" style={{width: '50%', height: 200, padding: 10, backgroundColor: 'powderblue'}}>
    This element has a height of 200 pixels and a width of 50%</div>
  <div className="w3-example">
    <h3>Example</h3>
    <p>Set the height and width of a &lt;div&gt; element:</p>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> powderblue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <p>
      <a className="w3-btn" target="_blank" href="tryit.asp?filename=trycss_dim_height_width2">Try it Yourself »</a>
    </p>
  </div>
  <div className="w3-theme-border" style={{height: 100, width: 500, padding: 10, backgroundColor: 'powderblue'}}>
    This element has a height of 100 pixels and a width of 500 pixels.</div>
  <div className="w3-example">
    <h3>Example</h3>
    <p>Set the height and width of another &lt;div&gt; element:</p>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
          height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 500px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> powderblue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <p>
      <a className="w3-btn" target="_blank" href="tryit.asp?filename=trycss_dim_height_width">Try it Yourself »</a>
    </p>
  </div>
  <p><strong>Note:</strong> Remember that the <code className="w3-codespan">height</code> and <code className="w3-codespan">width</code> properties do not include padding, borders, 
    or margins! They set the height/width of the area inside the padding, border, 
    and margin of the element!</p>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    <div id="div-gpt-ad-1493883843099-0" style={{}} data-google-query-id="CITlgvK0zucCFVe-TwodLkMB8w">
      <div id="google_ads_iframe_/16833175/MidContent_0__container__" style={{border: '0pt none', display: 'inline-block', width: 300, height: 250}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/16833175/MidContent_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={300} height={250} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="a" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Setting max-width</h2>
  <p>The <code className="w3-codespan">max-width</code> property is used to set the maximum width of an element.</p>
  <p>The <code className="w3-codespan">max-width</code> can be specified in <em>length values</em>, like px, cm, etc., or in percent (%) of the 
    containing block, or set to none (this is 
    default. Means that there is no maximum width).</p>
  <p>The problem with the <code className="w3-codespan">&lt;div&gt;</code> above occurs when the browser window is smaller than the width of 
    the element (500px). The browser then adds a horizontal scrollbar to the page.</p>
  <p>Using <code className="w3-codespan">max-width</code> instead, in this situation, will improve the browser's handling of small windows.</p>
  <p><strong>Tip:</strong> Drag the browser window to smaller than 500px wide, to see the difference between 
    the two divs!</p>
  <div className="w3-theme-border" style={{padding: 10, backgroundColor: 'powderblue', height: 100, maxWidth: 500}}>
    This element has a height of 100 pixels and a max-width of 500 pixels.</div>
  <p><strong>Note:</strong> The value of the <code className="w3-codespan">max-width</code> property overrides <code className="w3-codespan">width</code>.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <p>This &lt;div&gt; element has a height of 100 pixels and a 
      max-width of 500 pixels:&nbsp;</p>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; max-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 500px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> powderblue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <p>
      <a className="w3-btn" target="_blank" href="tryit.asp?filename=trycss_dim_max_width">Try it Yourself »</a>
    </p>
  </div>
  <hr />
  <h2>Try it Yourself - Examples</h2>
  <p><a target="_blank" href="tryit.asp?filename=trycss_dim_height">Set the height and width of elements</a><br />
    This example demonstrates how to set the height and width of different elements.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_dim_height_percent">Set the height and width of an image using percent</a><br />
    This example demonstrates how to set the height and width of an image using a percent value.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_dim_max-width">Set min-width and max-width of an element</a><br />
    This example demonstrates how to set a minimum width and a maximum width of an element using a pixel value.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_dim_max-height">Set min-height and max-height of an element</a><br />
    This example demonstrates how to set a minimum height and a maximum height of an element using a pixel value.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_dimension1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_dimension2" target="_blank">Exercise 2 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Dimension Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_dim_height.asp">height</a></td>
        <td>Sets the height of an element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_dim_max-height.asp">max-height</a></td>
        <td>Sets the maximum height of an element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_dim_max-width.asp">max-width</a></td>
        <td>Sets the maximum width of an element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_dim_min-height.asp">min-height</a></td>
        <td>Sets the minimum height of an element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_dim_min-width.asp">min-width</a></td>
        <td>Sets the minimum width of an element</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_dim_width.asp">width</a></td>
        <td>Sets the width of an element</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_padding.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_boxmodel.asp">Next ❯</a>
  </div>





      <Codepen
        src={
            "https://codepen.io/langhamerm/embed/dyoYxxG?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
</div>
  );
};
export default Box5;

