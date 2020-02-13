import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
// import Codepen from '../Codepen';
import what from "../../images/whatcss.png";
import why from "../../images/whycss.png";
// import doctype from "../../images/doctype.png";
const ACSS0 = () => {
  return (
    <div>
 <div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CJej18ePz-cCFRcWAQodm0sEBg"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1"> Rounded Corners</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_specificity.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_border_images.asp">Next ❯</a>
  </div>
  <hr />
  <div className="w3-theme-border" style={{borderWidth: 3, borderStyle: 'solid', marginTop: 20, fontSize: 15, padding: 25, borderRadius: 25}}>
    <h2>CSS Rounded Corners</h2>
    <p>With the CSS <code className="w3-codespan">border-radius</code> property, you can give any element "rounded corners".</p>
  </div>
  <hr />
  <h2>CSS border-radius Property</h2>
  <p>The CSS 
    <code className="w3-codespan">border-radius</code> property defines the radius of an 
    element's corners.</p>
  <p><strong>Tip:</strong> This property allows you to add rounded corners to 
    elements!</p>
  <p>Here are three examples:</p>
  <p>1. Rounded corners for an element with a specified background color:</p>
  <p id="rcorners1" className="w3-theme">Rounded corners!</p>
  <p>2. Rounded corners for an element with a border:</p>
  <p id="rcorners2" className="w3-theme-border">Rounded corners!</p>
  <p>3. Rounded corners for an element with a background image:</p>
  <p id="rcorners3">Rounded corners!</p>
  <p>Here is the code:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #rcorners1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#rcorners2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#rcorners3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(paper.gif)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left top<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-repeat<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_border-radius">Try it Yourself »</a>
  </div>
  <div className="w3-panel w3-note">
    <p><b>Tip:</b> The <code className="w3-codespan">border-radius</code> property is actually a shorthand property for the 
      <code className="w3-codespan">border-top-left-radius</code>, <code className="w3-codespan">border-top-right-radius</code>, <code className="w3-codespan">border-bottom-right-radius</code> 
      and <code className="w3-codespan">border-bottom-left-radius</code> properties.</p>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CKDmqsiPz-cCFQ07TwodwQsLjA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={5} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>CSS border-radius - Specify Each Corner</h2>
  <p>The <code className="w3-codespan">border-radius</code> property can have from one 
    to four values. Here are the rules:</p>
  <p><strong>Four values - border-radius: 15px 50px 30px 5px;</strong> (first 
    value applies to top-left corner, second value applies to top-right corner, 
    third value applies to bottom-right corner, and fourth value applies to 
    bottom-left corner):&nbsp;</p>
  <p id="rcorners4" className="w3-theme" />
  <p><strong>Three values - border-radius: 15px 50px 30px;</strong> (first value 
    applies to top-left corner, second value applies to top-right and bottom-left 
    corners, and third value applies to bottom-right corner):</p>
  <p id="rcorners5" className="w3-theme" />
  <p><strong>Two values - border-radius: 15px 50px;</strong> (first value applies 
    to top-left and bottom-right corners, and the second value applies to top-right 
    and bottom-left corners):</p>
  <p id="rcorners6" className="w3-theme" />
  <p><strong>One value - border-radius: 15px;</strong> (the value applies to all 
    four corners, which are rounded equally:</p>
  <p id="rcorners7" className="w3-theme" />
  <p>Here is the code:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #rcorners1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px 50px 30px 5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; 
          width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#rcorners2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px 50px 30px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#rcorners3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; 
          height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#rcorners4 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_border-radius2">Try it Yourself »</a>
  </div>
  <p>You could also create elliptical corners:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #rcorners1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50px / 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#rcorners2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px / 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />#rcorners3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; 
          border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_border-radius3">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_borders1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_borders2" target="_blank">Exercise 2 »</a>
    </div>
  </div>
  <hr />
  <h2>CSS Rounded Corners Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '30%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-radius.asp">border-radius</a></td>
        <td>A shorthand property for setting all the four border-*-*-radius properties</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-top-left-radius.asp">border-top-left-radius</a></td>
        <td>Defines the shape of the border of the top-left corner</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-top-right-radius.asp">border-top-right-radius</a></td>
        <td>Defines the shape of the border of the top-right corner</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-bottom-right-radius.asp">border-bottom-right-radius</a></td>
        <td>Defines the shape of the border of the bottom-right corner</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_border-bottom-left-radius.asp">border-bottom-left-radius</a></td>
        <td>Defines the shape of the border of the bottom-left corner</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_specificity.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_border_images.asp">Next ❯</a>
  </div>
</div>

    {/* <Codepen src={"https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"}/> */}
    </div>
  );
};
export default ACSS0;
