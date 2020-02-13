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
const Box4 = () => {
  return (
    <div>
 
 <div className="w3-main w3-light-grey" id="belowtopnav" style={{marginLeft: 220, paddingTop: 44}}>
  <div className="w3-row w3-white">
    <div className="w3-col l10 m12" id="main">
      <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
        {/* MainLeaderboard*/}
        {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-main_leaderboard-0" data-google-query-id="CJrcn5CzzucCFVGZAQodvykA9Q"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={7} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
        {/* adspace leaderboard */}
      </div>
      <h1>CSS <span className="color_h1">Padding</span></h1>
      <div className="w3-clear nextprev">
        <a className="w3-left w3-btn" href="css_margin.asp">❮ Previous</a>
        <a className="w3-right w3-btn" href="css_dimension.asp">Next ❯</a>
      </div>
      <hr />
      <div className="w3-theme-border" style={{width: '100%', padding: 70, borderWidth: 1, borderStyle: 'solid'}}>
        This element has a padding of 70px.
      </div>
      <br />
      <a target="_blank" href="tryit.asp?filename=trycss_padding_intro" className="w3-btn">Try it Yourself »</a>
      <hr />
      <h2>CSS Padding</h2>
      <p>The CSS <code className="w3-codespan">padding</code> properties are used to generate space around 
        an element's content, inside of any defined borders.</p>
      <p>With CSS, you have full control over the padding. There are properties 
        for setting the padding for each side of an element (top, right, bottom, and left).</p>
      <hr />
      <h2>Padding - Individual Sides</h2>
      <p>CSS has properties for specifying the padding for each 
        side of an element:</p>
      <ul>
        <li><code className="w3-codespan">padding-top</code></li>
        <li><code className="w3-codespan">padding-right</code></li>
        <li><code className="w3-codespan">padding-bottom</code></li>
        <li><code className="w3-codespan">padding-left</code></li>
      </ul>
      <p>All the padding properties can have the following values:</p>
      <ul>
        <li><em>length</em> - specifies a padding in px, pt, cm, etc.</li>
        <li><em>%</em> - specifies a padding in % of the width of the containing element</li>
        <li>inherit - specifies that the padding should be inherited from the parent element</li>
      </ul>
      <p><b>Note:</b> Negative values are not allowed.</p>
      <div className="w3-example">
        <h3>Example</h3>
        <p>Set different padding for all four sides of a &lt;div&gt; element:&nbsp;&nbsp;</p>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;
              padding-top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;&nbsp;padding-right<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 30px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;&nbsp;padding-bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;&nbsp;padding-left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 80px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_padding_sides" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
        {/* MidContent */}
        {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-mid_content-0" data-google-query-id="CJzcn5CzzucCFVGZAQodvykA9Q"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-forced-sandbox="true" style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={9} data-load-complete="true" /></div></div>
      </div>
      <hr />
      <h2>Padding - Shorthand Property</h2>
      <p>To shorten the code, it is possible to specify all the padding properties in 
        one property.</p>
      <p>The <code className="w3-codespan">padding</code> property is a shorthand property for the following individual 
        padding properties:</p>
      <ul>
        <li><code className="w3-codespan">padding-top</code></li>
        <li><code className="w3-codespan">padding-right</code></li>
        <li><code className="w3-codespan">padding-bottom</code></li>
        <li><code className="w3-codespan">padding-left</code></li>
      </ul>
      <p>So, here is how it works:</p>
      <p>If the <code className="w3-codespan">padding</code> property has four values:</p>
      <ul>
        <li><b>padding: 25px 50px 75px 100px; </b>
          <ul><li>top padding is 25px</li>
            <li>right padding is 50px</li>
            <li>bottom padding is 75px</li>
            <li>left padding is 100px</li></ul>
        </li>
      </ul>
      <div className="w3-example">
        <h3>Example</h3>
        <p>Use the padding shorthand property with four values:</p>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;
              padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px 50px 75px 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_padding_shorthand_4val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p>If the <code className="w3-codespan">padding</code> property has three values:</p>
      <ul>
        <li><b>padding: 25px 50px 75px;</b><ul>
            <li>top padding is 25px</li>
            <li>right and left paddings are 50px</li>
            <li>bottom padding is 75px</li></ul>
        </li>
      </ul>
      <div className="w3-example">
        <h3>Example</h3>
        <p>Use the padding shorthand property with three values:&nbsp;</p>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;
              padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px 50px 75px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_padding_shorthand_3val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p>If the <code className="w3-codespan">padding</code> property has two values:</p>
      <ul>
        <li><b>padding: 25px 50px;</b><ul><li>top and bottom paddings are 25px</li>
            <li>right and left paddings are 50px</li></ul>
        </li>
      </ul>
      <div className="w3-example">
        <h3>Example</h3>
        <p>Use the padding shorthand property with two values:&nbsp;</p>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;
              padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_padding_shorthand_2val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p>If the <code className="w3-codespan">padding</code> property has one value:</p>
      <ul>
        <li><b>padding: 25px;</b><ul><li>all four paddings are 25px</li></ul>
        </li>
      </ul>
      <div className="w3-example">
        <h3>Example</h3>
        <p>Use the padding shorthand property with one value:&nbsp;</p>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;
              padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_padding_shorthand_1val" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Padding and Element Width</h2>
      <p>The CSS <code className="w3-codespan">width</code> property specifies the width of the element's content area. The 
        content area is the portion inside the padding, border, and margin of an element 
        (<a href="css_boxmodel.asp">the box model</a>).</p>
      <p>So, if an element has a specified width, the padding added to that element will 
        be added to the total width of the element. This is often an undesirable result.</p>
      <div className="w3-example">
        <h3>Example</h3>
        <p>Here, the &lt;div&gt; element is given a width of 300px. 
          However, the actual width of the &lt;div&gt; element will be 350px (300px + 
          25px of left padding + 25px of right padding):</p>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 300px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_padding_width" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p>To keep the width at 300px, no matter the amount of padding, you can use the <code className="w3-codespan">
          box-sizing</code> property. This causes the element to maintain its width; if 
        you increase the padding, the available content space will decrease.</p>
      <div className="w3-example">
        <h3>Example</h3>
        <p>Use the box-sizing property to keep the width at 300px, no matter the 
          amount of padding:</p>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 300px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;box-sizing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> border-box<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_padding_width2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>More Examples</h2>
      <p><a target="_blank" href="tryit.asp?filename=trycss_padding-left">Set the left padding</a><br />
        This example demonstrates how to set the left padding of a &lt;p&gt; element.</p>
      <p><a target="_blank" href="tryit.asp?filename=trycss_padding-right">Set the right padding</a><br />
        This example demonstrates how to set the right padding of a &lt;p&gt; element.</p>
      <p><a target="_blank" href="tryit.asp?filename=trycss_padding-top">Set the top padding</a><br />
        This example demonstrates how to set the top padding of a &lt;p&gt; element.</p>
      <p><a target="_blank" href="tryit.asp?filename=trycss_padding-bottom">Set the bottom padding</a><br />
        This example demonstrates how to set the bottom padding of a &lt;p&gt; element.</p>
      <hr />
      <div className="w3-container w3-dark-grey w3-padding">
        <h2>Test Yourself with Exercises!</h2>
        <div className="w3-bar w3-margin-bottom">
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_padding1" target="_blank">Exercise 1 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_padding2" target="_blank">Exercise 2 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_padding3" target="_blank">Exercise 3 »</a>
        </div>
      </div>
      <hr />
      <h2>All CSS Padding Properties</h2>
      <table className="w3-table-all notranslate">
        <tbody><tr>
            <th style={{width: '30%'}}>Property</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><a href="/cssref/pr_padding.asp">padding</a></td>
            <td>A shorthand property for setting all the padding properties in one declaration</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_padding-bottom.asp">padding-bottom</a></td>
            <td>Sets the bottom padding of an element</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_padding-left.asp">padding-left</a></td>
            <td>Sets the left padding of an element</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_padding-right.asp">padding-right</a></td>
            <td>Sets the right padding of an element</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_padding-top.asp">padding-top</a></td>
            <td>Sets the top padding of an element</td>
          </tr>
        </tbody></table>
      <br />
     
    </div>
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
export default Box4;
