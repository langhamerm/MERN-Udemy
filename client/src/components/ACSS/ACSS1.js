import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import css from "../../images/css.png";
import why from "../../images/whycss.png";
// import doctype from "../../images/doctype.png";
const ACSS1 = () => {
  return (
    <div>
<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CLb8npunz-cCFdJxAQodaxID9g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="c" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Border Images</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css3_borders.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_backgrounds.asp">Next ❯</a>
  </div>
  <hr />
  <div id="border_image_top">
    <h2>CSS Border Images</h2>
    <p>With the CSS <code className="w3-codespan">border-image</code> property, you can set an image to be used as the border around an element.</p>
  </div>
  <hr />
  <h2>CSS border-image Property</h2>
  <p>The CSS <code className="w3-codespan">border-image</code> property allows you to specify an image to be used instead of the normal border around an element.</p>
  <p>The property has three parts:</p>
  <ol>
    <li>The image to use as the border</li>
    <li>Where to slice the image</li>
    <li>Define whether the middle sections should be repeated or stretched</li>
  </ol>
  <p>We will use the following image (called "border.png"):</p>
  <p><img src="border.png" alt="Border" style={{width: 81, height: 81}} /></p>
  <p>The <code className="w3-codespan">border-image</code> property takes the image and slices it into nine sections, 
    like a tic-tac-toe board. It then places the corners at the corners, and the 
    middle sections are repeated or stretched as you specify.</p>
  <p><strong>Note:</strong> For <code className="w3-codespan">border-image</code> to work, the element also needs the 
    <code className="w3-codespan">border</code> property set!</p>
  <p>Here, the middle sections of the image are repeated to create the border:</p>
  <p id="border_image">An image as a border!</p>
  <p>Here is the code:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #borderimg
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px solid transparent<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(border.png) 
            30 round<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_border-image">Try it Yourself »</a>
  </div>
  <p>Here, the middle sections of the image are stretched to create the border:</p>
  <p id="border_image2">An image as a border!</p>
  <p>Here is the code:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #borderimg
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px solid transparent<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(border.png) 
            30 stretch<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_border-image2">Try it Yourself »</a>
  </div>
  <div className="w3-panel w3-note">
    <p><b>Tip:</b> The <code className="w3-codespan">border-image</code> property is actually a shorthand property for the 
      <code className="w3-codespan">border-image-source</code>, <code className="w3-codespan">border-image-slice</code>, <code className="w3-codespan">border-image-width</code>, 
      <code className="w3-codespan">border-image-outset</code> 
      and <code className="w3-codespan">border-image-repeat</code> properties.</p>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CLn8npunz-cCFdJxAQodaxID9g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id="e" data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>CSS border-image - Different Slice Values</h2>
  <p>Different slice values completely changes the look of the border:</p>
  <p>Example 1:</p>
  <p id="border_image3">border-image: url(border.png) 50 round;</p>
  <p>Example 2:</p>
  <p id="border_image4">border-image: url(border.png) 20% round;</p>
  <p>Example 3:</p>
  <p id="border_image5">border-image: url(border.png) 30% round;</p>
  <p>Here is the code:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #borderimg1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px solid transparent<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(border.png) 
            50 round<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#borderimg2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
          border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px solid transparent<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(border.png) 20% round<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        #borderimg3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px solid transparent<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;border-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(border.png) 
            30% round<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_border-image3">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_border_images1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_border_images2" target="_blank">Exercise 2 »</a>
    </div>
  </div>
  <hr />
  <h2>CSS Border Image Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '30%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-image.asp">border-image</a></td>
        <td>A shorthand property for setting all the border-image-* properties</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-image-source.asp">border-image-source</a></td>
        <td>Specifies the path to the image to be used as a border</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-image-slice.asp">border-image-slice</a></td>
        <td>Specifies how to slice the border image</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-image-width.asp">border-image-width</a></td>
        <td>Specifies the widths of the border image</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-image-outset.asp">border-image-outset</a></td>
        <td>Specifies the amount by which the border image area extends beyond the border box</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-image-repeat.asp">border-image-repeat</a></td>
        <td>Specifies whether the border image should be repeated, rounded or stretched</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css3_borders.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_backgrounds.asp">Next ❯</a>
  </div>
</div>

 
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default ACSS1;
