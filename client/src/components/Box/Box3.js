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
const Box3 = () => {
  return (
      <div>
    <div className="w3-col l10 m12" id="main">
    <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
      {/* MainLeaderboard*/}
      {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
      <div id="snhb-main_leaderboard-0" data-google-query-id="COz4pdewzucCFYwEaQodFEEOig"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-forced-sandbox="true" style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={7} data-load-complete="true" /></div></div>
      {/* adspace leaderboard */}
    </div>
    <h1>CSS <span className="color_h1">Margins</span></h1>
    <div className="w3-clear nextprev">
      <a className="w3-left w3-btn" href="css_border.asp">❮ Previous</a>
      <a className="w3-right w3-btn" href="css_padding.asp">Next ❯</a>
    </div>
    <hr />
    <div className="w3-theme-border" style={{borderWidth: 1, borderStyle: 'solid', margin: 70, padding: 5}}>
      This element has a margin of 70px.
    </div>
    <a target="_blank" href="tryit.asp?filename=trycss_margin_intro" className="w3-btn">Try it Yourself »</a>
    <hr />
    <h2>CSS Margins</h2>
    <p>The CSS <code className="w3-codespan">margin</code> properties are used to create space around elements, 
      outside of any defined borders.</p>
    <p>With CSS, you have full control over the margins. There are properties 
      for setting the margin for each side of an element (top, right, bottom, and left).</p>
    <hr />
    <h2>Margin - Individual Sides</h2>
    <p>CSS has properties for specifying the margin for each 
      side of an element:</p>
    <ul>
      <li><code className="w3-codespan">margin-top</code></li>
      <li><code className="w3-codespan">margin-right</code></li>
      <li><code className="w3-codespan">margin-bottom</code></li>
      <li><code className="w3-codespan">margin-left</code></li>
    </ul>
    <p>All the margin properties can have the following values:</p>
    <ul>
      <li>auto - the browser calculates the margin</li>
      <li><em>length</em> - specifies a margin in px, pt, cm, etc.</li>
      <li><em>%</em> - specifies a margin in % of the width of the containing element</li>
      <li>inherit - specifies that the margin should be inherited from the parent element</li>
    </ul>
    <p><b>Tip:</b> Negative values are allowed.</p>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Set different margins for all four sides of a &lt;p&gt; element:</p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;margin-top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;&nbsp;margin-bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;&nbsp;margin-right<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp;&nbsp;margin-left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 80px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_margin_sides" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
      {/* MidContent */}
      {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
      <div id="snhb-mid_content-0" data-google-query-id="CO74pdewzucCFYwEaQodFEEOig"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none', display: 'inline-block', width: 300, height: 250}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={300} height={250} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={9} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    </div>
    <hr />
    <h2>Margin - Shorthand Property</h2>
    <p>To shorten the code, it is possible to specify all the margin properties in 
      one property.</p>
    <p>The <code className="w3-codespan">margin</code> property is a shorthand property for the following individual margin properties:</p>
    <ul>
      <li><code className="w3-codespan">margin-top</code></li>
      <li><code className="w3-codespan">margin-right</code></li>
      <li><code className="w3-codespan">margin-bottom</code></li>
      <li><code className="w3-codespan">margin-left</code></li>
    </ul>
    <p>So, here is how it works:</p>
    <p>If the <code className="w3-codespan">margin</code> property has four values:</p>
    <ul>
      <li><b>margin: 25px 50px 75px 100px; </b>
        <ul><li>top margin is 25px</li>
          <li>right margin is 50px</li>
          <li>bottom margin is 75px</li>
          <li>left margin is 100px</li></ul>
      </li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Use the margin shorthand property with four values:</p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px 50px 75px 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_margin_shorthand_4val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <p>If the <code className="w3-codespan">margin</code> property has three values:</p>
    <ul>
      <li><b>margin: 25px 50px 75px;</b><ul>
          <li>top margin is 25px</li>
          <li>right and left margins are 50px</li>
          <li>bottom margin is 75px</li></ul>
      </li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Use the margin shorthand property with three values:&nbsp;</p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;
            margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px 50px 75px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_margin_shorthand_3val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <p>If the <code className="w3-codespan">margin</code> property has two values:</p>
    <ul>
      <li><b>margin: 25px 50px;</b><ul><li>top and bottom margins are 25px</li>
          <li>right and left margins are 50px</li></ul>
      </li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Use the margin shorthand property with two values:&nbsp;</p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;
            margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_margin_shorthand_2val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <p>If the <code className="w3-codespan">margin</code> property has one value:</p>
    <ul>
      <li><b>margin: 25px;</b><ul><li>all four margins are 25px</li></ul>
      </li>
    </ul>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Use the margin shorthand property with one value:&nbsp;</p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_margin_shorthand_1val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>The auto Value</h2>
    <p>You can set the margin property to <code className="w3-codespan">auto</code> to horizontally center the element within its container.</p>
    <p>The element will then take up the specified width, and the remaining space 
      will be split equally between the left and right margins.</p>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Use margin: auto:</p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 300px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_margin_auto" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>The inherit Value</h2>
    <p>This example lets the left margin of the &lt;p class="ex1"&gt; element be inherited from the parent element 
      (&lt;div&gt;):</p>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Use of the inherit value:</p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;margin-left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />p.ex1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
            &nbsp; margin-left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              inherit<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_margin-left_inherit" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>Margin Collapse</h2>
    <p>Top and bottom margins of elements are sometimes collapsed into a single 
      margin that is equal to the largest of the two margins.</p>
    <p>This does not happen on left and right margins! Only top and bottom margins!</p>
    <p>Look at the following example:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <p>Demonstration of margin collapse: </p>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0 0 50px 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px 0 0 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_margin_collapse" target="_blank">Try it Yourself »</a>
    </div>
    <p>In the example above, the &lt;h1&gt; element has a bottom margin of 50px and 
      the &lt;h2&gt; 
      element has a top margin set to 20px.</p>
    <p>Common sense would seem to suggest that the vertical margin between the &lt;h1&gt; 
      and the &lt;h2&gt; would be a total of 70px (50px + 20px). But due to margin collapse, 
      the actual margin ends up being 50px.</p>
    <hr />
    <div className="w3-container w3-dark-grey w3-padding">
      <h2>Test Yourself with Exercises!</h2>
      <div className="w3-bar w3-margin-bottom">
        <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_margin1" target="_blank">Exercise 1 »</a>
        <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_margin2" target="_blank">Exercise 2 »</a>
        <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_margin3" target="_blank">Exercise 3 »</a>
        <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_margin4" target="_blank">Exercise 4 »</a>
      </div>
    </div>
    <hr />
    <h2>All CSS Margin Properties</h2>
    <table className="w3-table-all notranslate">
      <tbody><tr>
          <th style={{width: '20%'}}>Property</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><a href="/cssref/pr_margin.asp">margin</a></td>
          <td>A shorthand property for setting the margin properties in one declaration</td>
        </tr>
        <tr>
          <td><a href="/cssref/pr_margin-bottom.asp">margin-bottom</a></td>
          <td>Sets the bottom margin of an element</td>
        </tr>
        <tr>
          <td><a href="/cssref/pr_margin-left.asp">margin-left</a></td>
          <td>Sets the left margin of an element</td>
        </tr>
        <tr>
          <td><a href="/cssref/pr_margin-right.asp">margin-right</a></td>
          <td>Sets the right margin of an element</td>
        </tr>
        <tr>
          <td><a href="/cssref/pr_margin-top.asp">margin-top</a></td>
          <td>Sets the top margin of an element</td>
        </tr>
      </tbody></table>
    <br />
    <div className="w3-clear nextprev">
      <a className="w3-left w3-btn" href="css_border.asp">❮ Previous</a>
      <a className="w3-right w3-btn" href="css_padding.asp">Next ❯</a>
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
export default Box3;

