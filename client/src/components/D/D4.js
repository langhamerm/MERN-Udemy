import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const D4 = () => {
  return (
    <div>
  
  <div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    <div id="div-gpt-ad-1422003450156-2" data-google-query-id="CPGkvMDKzucCFVCEaQod3EcJ4Q">
      <div id="google_ads_iframe_/16833175/MainLeaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/16833175/MainLeaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <h1>CSS <span className="color_h1">Layout - Overflow</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_positioning.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_float.asp">Next ❯</a>
  </div>
  <hr />
  <p>The CSS <code className="w3-codespan">overflow</code> property controls what 
    happens to content that is too big to fit into an area.</p>
  <div id="overflowTest">This text is really long and the height of its container is only 100 pixels. Therefore, a scrollbar is added to help the reader to scroll the content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</div>
  <br />
  <a target="_blank" href="tryit.asp?filename=trycss_overflow_intro" className="w3-btn">Try it Yourself »</a>
  <hr />
  <h2>CSS Overflow</h2>
  <p>The <code className="w3-codespan">overflow</code> property specifies whether to clip 
    the content or 
    to add scrollbars when the content of an element is too big to fit in the specified 
    area.</p>
  <p>The <code className="w3-codespan">overflow</code> property has the following values:</p>
  <ul>
    <li><code className="w3-codespan">visible</code> - Default. The overflow is not clipped. 
      The content renders outside the element's box</li>
    <li><code className="w3-codespan">hidden</code> - The overflow is clipped, and the rest of the content will be invisible</li>
    <li><code className="w3-codespan">scroll</code> - The overflow is clipped, and a scrollbar is added to see the rest of the content</li>
    <li><code className="w3-codespan">auto</code> - Similar to <code className="w3-codespan">scroll</code>, 
      but it adds scrollbars only when necessary</li>
  </ul>
  <div className="w3-note w3-panel">
    <p><strong>Note:</strong> The <code className="w3-codespan">overflow</code> property only works for block elements with a specified height.</p>
    <p><strong>Note:</strong> In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).</p>
  </div>
  <hr />
  <h2>overflow: visible</h2>
  <p>By default, the overflow is <code className="w3-codespan">visible</code>, meaning that it is not clipped and it 
    renders outside the element's box:</p>
  <div className="visible">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  <div className="w3-example" style={{marginTop: 98}}>
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 200px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #eee<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          overflow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> visible<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_overflow_visible" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    <div id="div-gpt-ad-1493883843099-0" style={{}} data-google-query-id="CPSkvMDKzucCFVCEaQod3EcJ4Q">
      <div id="google_ads_iframe_/16833175/MidContent_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/16833175/MidContent_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={4} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>overflow: hidden</h2>
  <p>With the <code className="w3-codespan">hidden</code> value, the overflow is clipped, and the rest of the content is hidden:</p>
  <div className="hidden">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;overflow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hidden<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_overflow_hidden" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>overflow: scroll</h2>
  <p>Setting the value to <code className="w3-codespan">scroll</code>, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):</p>
  <div className="scroll">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;overflow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> scroll<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_overflow_scroll" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>overflow: auto</h2>
  <p>The <code className="w3-codespan">auto</code> value is similar to <code className="w3-codespan">scroll</code>, 
    but it adds scrollbars only when necessary:</p>
  <div className="auto">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;overflow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_overflow_auto" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>overflow-x and overflow-y</h2>
  <p>The <code className="w3-codespan">overflow-x</code> and <code className="w3-codespan">overflow-y</code> properties specifies 
    whether to change the overflow of content just horizontally or vertically (or 
    both):</p>
  <p><code className="w3-codespan">overflow-x</code> specifies what to do with the left/right edges of the 
    content.<br />
    <code className="w3-codespan">overflow-y</code> specifies what to do with the top/bottom edges of the 
    content.</p>
  <div className="scrollx">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; overflow-x<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> hidden<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* Hide horizontal scrollbar 
            */</span><br />&nbsp;&nbsp;overflow-y<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> scroll<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* Add vertical scrollbar */</span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_overflow_xy" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_overflow1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_overflow2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_overflow3" target="_blank">Exercise 3 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Overflow Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Property</th>
        <th style={{width: '55%'}}>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_pos_overflow.asp">overflow</a></td>
        <td>Specifies what happens if content overflows an element's box</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_overflow-x.asp">overflow-x</a></td>
        <td>Specifies what to do with the left/right edges of the content if it overflows the element's content area</td>
      </tr>
      <tr>
        <td><a href="/cssref/css3_pr_overflow-y.asp">overflow-y</a></td>
        <td>Specifies what to do with the top/bottom edges of the content if it overflows the element's content area</td>
      </tr>
    </tbody></table>
  <br />
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_positioning.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_float.asp">Next ❯</a>
  </div>
</div>




<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default D4;
