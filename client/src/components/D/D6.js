import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const D6 = () => {
  return (
    <div>
  


  <div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CPnWzf7KzucCFVewTwod2S8K1A"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={1} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Layout - display: inline-block</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_float.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_align.asp">Next ❯</a>
  </div>
  <hr />
  <h2>The display: inline-block Value</h2>
  <p>Compared to <code className="w3-codespan">display: inline</code>, the major 
    difference is that <code className="w3-codespan">display: inline-block</code> allows 
    to set a width and height on the element.</p>
  <p>Also, with <code className="w3-codespan">
      display: inline-block</code>, the top and bottom margins/paddings are respected, 
    but with <code className="w3-codespan">display: inline</code> they are not.</p>
  <p>Compared to <code className="w3-codespan">display: block</code>, the major 
    difference is that <code className="w3-codespan">display: inline-block</code> does 
    not add a line-break after the element, so the element can sit next to other 
    elements.</p>
  <p>The following example shows the different behavior of <code className="w3-codespan">display: inline</code>, <code className="w3-codespan">display: inline-block</code> 
    and <code className="w3-codespan">display: block</code>:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        span.a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inline<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* the default for span */</span><br />&nbsp; 
          width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />span.b <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            inline-block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px 
            solid blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        span.c <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_inline-block_span1" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Using inline-block to Create Navigation Links</h2>
  <p>One common use for <code className="w3-codespan">display: inline-block</code> 
    is to display list items horizontally instead of vertically. The following 
    example creates horizontal navigation links:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        .nav <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            center<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span>&nbsp;<br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.nav li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inline-block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_inline-block_nav" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  {/*
<hr>
<h2>Grid of Boxes</h2>
<p>It has been possible for a long time to create a grid of boxes that fills the 
browser width and wraps nicely (when the browser is resized), by using the <code class="w3-codespan">
float</code> property.</p>
<p>However, the <code class="w3-codespan">inline-block</code> value of the <code class="w3-codespan">display</code> 
property can make this easier (but it is not flawless - see more examples 
below).</p>
<h3>Examples</h3>
<p>Floating boxes - using <code class="w3-codespan">float</code> (notice that we also need to specify a 
<code class="w3-codespan">clear</code> property for the element after the floating boxes):</p>
<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate cssHigh">
.floating-box {<br>&nbsp;&nbsp;&nbsp; float: left;<br>&nbsp;&nbsp;&nbsp; 
width: 150px;<br>&nbsp;&nbsp;&nbsp; height: 75px;<br>&nbsp;&nbsp;&nbsp; 
margin: 10px;<br>&nbsp;&nbsp;&nbsp; border: 3px solid #73AD21; <br>}<br><br>
.after-box {<br>&nbsp;&nbsp;&nbsp; clear: left;<br>}</div>
<a target="_blank" href="tryit.asp?filename=trycss_inline-block_old" class="w3-btn w3-margin-bottom">Try it Yourself &raquo;</a>
</div>
<p>The same effect can be achieved by using the <code class="w3-codespan">inline-block</code> value 
of the <code class="w3-codespan">display</code> property (notice that no <code class="w3-codespan">clear</code> is needed):</p>
<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate cssHigh">
.floating-box {<br>&nbsp;&nbsp;&nbsp; display: inline-block;<br>&nbsp;&nbsp;&nbsp; 
width: 150px;<br>&nbsp;&nbsp;&nbsp; height: 75px;<br>&nbsp;&nbsp;&nbsp; 
margin: 10px;<br>&nbsp;&nbsp;&nbsp; border: 3px solid #73AD21; <br>}</div>
<a target="_blank" href="tryit.asp?filename=trycss_inline-block" class="w3-btn w3-margin-bottom">Try it Yourself &raquo;</a>
</div>
*/}
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_float.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_align.asp">Next ❯</a>
  </div>
</div>

<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default D6;
