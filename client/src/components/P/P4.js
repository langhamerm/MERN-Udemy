import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";

const P4 = () => {
  return (
    <div>


<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CMfGo5btzucCFUKtaQod6EkBPQ"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id="a" data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Opacity / Transparency</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_pseudo_elements.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_navbar.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">The <code className="w3-codespan">opacity</code> property specifies the opacity/transparency of an element.</p>
  <hr />
  <h2>Transparent Image</h2>
  <p>The <code className="w3-codespan">opacity</code> property can take a value from 0.0 - 1.0. The lower value, the more transparent:</p>
  <div className="w3-row-padding" style={{margin: '0 -16px'}}>
    <div className="w3-third w3-center">
      <img src="img_forest.jpg" alt="Forest" style={{width: '100%', opacity: '0.2'}} />
      <p>opacity 0.2</p>
    </div>
    <div className="w3-third w3-center">
      <img src="img_forest.jpg" alt="Forest" style={{width: '100%', opacity: '0.5'}} />
      <p>opacity 0.5</p>
    </div>
    <div className="w3-third w3-center">
      <img src="img_forest.jpg" alt="Forest" style={{width: '100%'}} />
      <p>opacity 1<br />(default)</p>
    </div>
  </div>
  <p><strong>Note:</strong> IE8 and earlier use <code className="w3-codespan">filter:alpha(opacity=x)</code>. The x can take a value from 0 - 100. A lower value makes the element more transparent.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        img <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.5<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_image_opacity" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Transparent Hover Effect</h2>
  <p>The <code className="w3-codespan">opacity</code> property is often used together with the <code className="w3-codespan">:hover</code> 
    selector to change the opacity on mouse-over:</p>
  <div className="w3-row-padding" style={{margin: '0 -16px'}}>
    <div className="w3-third w3-center">
      <img src="img_lights.jpg" alt="Northern Lights" style={{width: '100%'}} className="imgopac2" />
    </div>
    <div className="w3-third w3-center">
      <img src="img_mountains.jpg" alt="Mountains" style={{width: '100%'}} className="imgopac2" />
    </div>
    <div className="w3-third w3-center">
      <img src="img_5terre.jpg" alt="Italy" style={{width: '100%'}} className="imgopac2" />
    </div>
  </div>
  <div className="w3-example" style={{marginBottom: 24}}>
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        img <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.5<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />img:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1.0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_image_transparency" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <h3>Example explained</h3>
  <p>The first CSS block is similar to the code in Example 1. In addition, we have added what should happen when a user hovers over one of the images. In this case we want the image to NOT be transparent when the user hovers over it. The CSS for this is <code className="w3-codespan">opacity:1;</code>.</p>
  <p>When the mouse pointer moves away from the image, the image will be transparent again.</p>
  <p>An example of reversed hover effect:</p>
  <div className="w3-row-padding" style={{margin: '0 -16px'}}>
    <div className="w3-third w3-center">
      <img src="img_lights.jpg" alt="Northern Lights" style={{width: '100%'}} className="imgopac" />
    </div>
    <div className="w3-third w3-center">
      <img src="img_mountains.jpg" alt="Mountains" style={{width: '100%'}} className="imgopac" />
    </div>
    <div className="w3-third w3-center">
      <img src="img_5terre.jpg" alt="Italy" style={{width: '100%'}} className="imgopac" />
    </div>
  </div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        img:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.5<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_image_transparency2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CMnGo5btzucCFUKtaQod6EkBPQ"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id="c" data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Transparent Box</h2>
  <p>When using the <code className="w3-codespan">opacity</code> property to add transparency to the background of an element, all of its child elements 
    inherit the same transparency. This can make the text inside a fully transparent element hard to read:</p>
  <div className="w3-cell-row">
    <div className="w3-cell w3-mobile w3-center">
      <div style={{backgroundColor: '#4CAF50', opacity: 1, padding: 50, color: 'black'}}><p>opacity 1</p></div>
    </div>
    <div className="w3-cell w3-mobile w3-center">
      <div style={{backgroundColor: '#4CAF50', opacity: '0.6', padding: 50, color: 'black'}}><p>opacity 0.6</p></div>
    </div>
    <div className="w3-cell w3-mobile w3-center">
      <div style={{backgroundColor: '#4CAF50', opacity: '0.3', padding: 50, color: 'black'}}><p>opacity 0.3</p></div>
    </div>
    <div className="w3-cell w3-mobile w3-center">
      <div style={{backgroundColor: '#4CAF50', opacity: '0.1', padding: 50, color: 'black'}}><p>opacity 0.1</p></div>
    </div>
  </div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.3<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_opacity_box" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Transparency using RGBA</h2>
  <p>If you do not want to apply opacity to child elements, like in our example above, use <strong>RGBA</strong> color values. 
    The following example sets the opacity for the background color and not the text:</p>
  <div className="w3-cell-row">
    <div className="w3-cell w3-mobile w3-center">
      <div style={{background: 'rgb(76, 175, 80)', padding: 50, color: 'black'}}><p>100% opacity</p></div>
    </div>
    <div className="w3-cell w3-mobile w3-center">
      <div style={{background: 'rgba(76, 175, 80,0.6)', padding: 50, color: 'black'}}><p>60% opacity</p></div>
    </div>
    <div className="w3-cell w3-mobile w3-center">
      <div style={{background: 'rgba(76, 175, 80,0.3)', padding: 50, color: 'black'}}><p>30% opacity</p></div>
    </div>
    <div className="w3-cell w3-mobile w3-center">
      <div style={{background: 'rgba(76, 175, 80,0.1)', padding: 50, color: 'black'}}><p>10% opacity</p></div>
    </div>
  </div>
  <p>You learned from our <a href="css_colors.asp">CSS Colors Chapter</a>, that you can use RGB as a color value. In addition to RGB, 
    you can use an RGB color value with an alpha channel (RGBA) - which specifies the opacity for a color.</p>
  <p>An RGBA color value is specified with: rgba(red, green, blue, <em>alpha</em>). The 
    <em>alpha</em> parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
  <p><strong>Tip:</strong> You will learn more about RGBA Colors in our <a href="css3_colors.asp">CSS Colors Chapter</a>.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> rgba(76, 175, 80, 0.3) <span className="commentcolor" style={{color: 'green'}}>/* Green background with 30% 
              opacity */</span><br /></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_opacity_box2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Text in Transparent Box</h2>
  <div className="background">
    <div className="transbox">
      <p>This is some text that is placed in the transparent box.</p>
    </div>
  </div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>style<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="cssselectorcolor" style={{color: 'brown'}}><br />
        div.background <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(klematis.jpg) repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />
        div.transbox <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 30px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #ffffff<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;opacity<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.6<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />
        div.transbox p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;font-weight<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> bold<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #000000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
      </span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/style<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="background"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      &nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="transbox"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      &nbsp;&nbsp;&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>p<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>This is some text that is placed in the transparent box.<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/p<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      &nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <a target="_blank" href="tryit.asp?filename=trycss_transparency" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <h2>Example explained</h2>
  <p>First, we create a &lt;div&gt; element (class="background") with a background image, and a border.
  </p>
  <p>hen we create another &lt;div&gt; (class="transbox") inside the first &lt;div&gt;. </p>
  <p>The 
    &lt;div class="transbox"&gt; have a background color, and a border - 
    the div is transparent. </p>
  <p>Inside the transparent 
    &lt;div&gt;, we add some text inside a &lt;p&gt; element.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_image_transparency1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_image_transparency2" target="_blank">Exercise 2 »</a>
    </div>
  </div>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_pseudo_elements.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_navbar.asp">Next ❯</a>
  </div>
</div>

      <Codepen
        src={
          "https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default P4;
