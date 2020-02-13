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
const Text3 = () => {
  return (
<div>
<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CIHCtO3BzucCFQIWAQodm3wA6g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={7} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Icons</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_font.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_link.asp">Next ❯</a>
  </div>
  <hr />
  <div className="w3-row w3-center">
    <div className="w3-third">
      <i className="fa fa-cloud" style={{fontSize: 36}} />
      <i className="fa fa-cloud" style={{fontSize: 60}} />
      <i className="fa fa-cloud w3-text-red" style={{fontSize: 72}} />
    </div>
    <div className="w3-third">
      <i className="fa fa-car" style={{fontSize: 36}} />
      <i className="fa fa-car w3-text-dark-grey" style={{fontSize: 60}} />
      <i className="fa fa-car w3-text-grey" style={{fontSize: 72}} />
    </div>
    <div className="w3-third">
      <i className="fa fa-thumbs-o-up" style={{fontSize: 36}} />
      <i className="fa fa-thumbs-o-up" style={{fontSize: 60}} />
      <i className="fa fa-thumbs-o-up w3-text-indigo" style={{fontSize: 72}} />
    </div>
  </div>
  <hr />
  <h2>How To Add Icons</h2>
  <p>The simplest way to add an icon to your HTML page, is with an icon library, 
    such as Font Awesome.</p>
  <p>Add the name of the specified icon class to any inline HTML element (like <code className="w3-codespan">&lt;i&gt;</code> or 
    <code className="w3-codespan">&lt;span&gt;</code>).</p>
  <p>All the icons in the icon libraries below, are scalable vectors that can 
    be customized with CSS (size, color, shadow, etc.)</p>
  <hr />
  <h2>Font Awesome Icons</h2>
  <p>To use the Font Awesome icons, go to <a href="https://fontawesome.com">
      fontawesome.com</a>, sign in, and get a code to add in the <code className="w3-codespan">&lt;head&gt;</code> section of your HTML page:</p>
  <p><code className="w3-codespan">&lt;script src="https://kit.fontawesome.com/<em>yourcode</em>.js"&gt;&lt;/script&gt;</code></p>
  <p>Read more about how to get started with Font Awesome in our 
    <a href="/icons/fontawesome5_intro.asp">Font 
      Awesome 5 tutorial</a>.</p>
  <p><strong>Note:</strong> No downloading or installation is required!</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>!DOCTYPE<span className="attributecolor" style={{color: 'red'}}> html</span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>script<span className="attributecolor" style={{color: 'red'}}> src<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="https://kit.fontawesome.com/a076d05399.js"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="jscolor" style={{color: 'black'}} /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/script<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="fas fa-cloud"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}>  class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="fas fa-heart"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="fas fa-car"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="fas fa-file"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="fas fa-bars"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <p>Result:</p>
    <div className="w3-white w3-padding">
      <i className="fa fa-cloud" />
      <i className="fa fa-heart" />
      <i className="fa fa-car" />
      <i className="fa fa-file" />
      <i className="fa fa-bars" />
    </div>
    <a className="w3-btn w3-margin-bottom w3-margin-top" href="tryit.asp?filename=trycss_icons_fa" target="_blank">Try It Yourself »</a>
  </div>
  <div className="w3-note w3-panel">
    <p>For a complete reference of all Font Awesome icons, visit our <a href="/icons/icons_reference.asp">Icon Reference</a>.</p>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CIPCtO3BzucCFQIWAQodm3wA6g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={9} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Bootstrap Icons</h2>
  <p>To use the Bootstrap glyphicons, add the following line inside the <code className="w3-codespan">&lt;head&gt;</code> section of your HTML page:</p>
  <p><code className="w3-codespan">&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;</code></p>
  <p><strong>Note:</strong> No downloading or installation is required!</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>!DOCTYPE<span className="attributecolor" style={{color: 'red'}}> html</span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>link<span className="attributecolor" style={{color: 'red'}}> rel<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="stylesheet"</span> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="glyphicon glyphicon-cloud"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="glyphicon  glyphicon-remove"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="glyphicon glyphicon-user"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}>  class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="glyphicon glyphicon-envelope"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="glyphicon glyphicon-thumbs-up"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <p>Result:</p>
    <div className="w3-white w3-padding">
      <iframe src="trycss_icons_bs_ifr.htm" style={{width: '100%', border: 'none', height: 25, overflow: 'hidden', paddingTop: 5}} />
    </div>
    <a className="w3-btn w3-margin-bottom w3-margin-top" href="tryit.asp?filename=trycss_icons_bs" target="_blank">Try It Yourself »</a></div>
  <hr />
  <h2>Google Icons</h2>
  <p>To use the Google icons, add the following line inside the <code className="w3-codespan">&lt;head&gt;</code> section of your HTML page:</p>
  <p><code className="w3-codespan">&lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"&gt;</code></p>
  <p><strong>Note:</strong> No downloading or installation is required!</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>!DOCTYPE<span className="attributecolor" style={{color: 'red'}}> html</span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>link<span className="attributecolor" style={{color: 'red'}}> rel<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="stylesheet"</span> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="https://fonts.googleapis.com/icon?family=Material+Icons"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="material-icons"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>cloud<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}>  class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="material-icons"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>favorite<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}>  class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="material-icons"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>attachment<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}>  class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="material-icons"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>computer<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>i<span className="attributecolor" style={{color: 'red'}}>  class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="material-icons"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>traffic<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/i<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <p>Result:</p>
    <div className="w3-white">
      <iframe src="trycss_icons_google_ifr.htm" style={{width: '100%', border: 'none', height: 50, overflow: 'hidden', paddingLeft: 6, paddingTop: 6}} />
    </div>
    <a className="w3-btn w3-margin-bottom w3-margin-top" href="tryit.asp?filename=trycss_icons_google" target="_blank">Try It Yourself »</a>
  </div>
  <div className="w3-note w3-panel">
    <p>For a complete list of all icons, visit our
      <a href="/icons/default.asp">Icon Tutorial</a>.</p>
  </div>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_font.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_link.asp">Next ❯</a>
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
export default Text3;

