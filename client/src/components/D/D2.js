import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const D2 = () => {
  return (
    <div>
  <div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CKTwluLJzucCFUuRaQodTSUM7w"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={5} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Layout - width and max-width</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_display_visibility.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_positioning.asp">Next ❯</a>
  </div>
  <hr />
  <h2>Using width, max-width and margin: auto;</h2>
  <p>As mentioned in the previous chapter; a block-level element always takes up the full width available 
    (stretches out to the left and right as far as it can).</p>
  <p>Setting the <code className="w3-codespan">width</code> of a block-level element will prevent it from stretching 
    out to the edges of its container. Then, you can set the 
    margins to auto, to horizontally center the element within its container. The 
    element will take up the specified width, and the remaining space will be split 
    equally between the two margins:</p>
  <div className="w3-theme-border" style={{borderWidth: 3, borderStyle: 'solid', width: 500, margin: 'auto'}}>
    This &lt;div&gt; element has a width of 500px, and margin set to auto.</div>
  <br />
  <p><strong>Note:</strong> The problem with the <code className="w3-codespan">&lt;div&gt;</code> above occurs when the browser window is 
    smaller than the width of 
    the element. The browser then adds a horizontal scrollbar to the page.</p>
  <p>Using <code className="w3-codespan">max-width</code> instead, in this situation, will improve the 
    browser's handling of small windows. This is important when making a site usable 
    on small devices:</p>
  <div className="w3-theme-border" style={{borderWidth: 3, borderStyle: 'solid', maxWidth: 500, margin: 'auto'}}>
    This &lt;div&gt; element has a max-width of 500px, and margin set to auto.</div>
  <br />
  <p><strong>Tip:</strong> Resize the browser window to less than 500px wide, to see the difference between 
    the two divs!</p>
  <p>Here is an example of the two divs above:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div.ex1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 500px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />div.ex2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; max-width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 500px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #73AD21<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_max-width" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_display_visibility.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_positioning.asp">Next ❯</a>
  </div>
</div>




<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default D2;
