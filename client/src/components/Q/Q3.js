import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import './W3.css';
import './style.css';

const Q3 = () => {
  return (
    <div>

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CJOosL2Bz-cCFUU_TwodveUIww"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={6} style={{border: 0, verticalAlign: 'bottom'}} data-integralas-id-2b2321f5-8a37-62d4-c78d-858419b1e1dc data-load-complete="true">&lt;div style="position: absolute; width: 0px; height: 0px; border: 0px; padding: 0px; margin: 0px; overflow: hidden;"&gt;&lt;button&gt;&lt;/button&gt;&lt;a href="https://yahoo.com"&gt;&lt;/a&gt;&lt;input&gt;&lt;/div&gt;</iframe></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Image Gallery</span></h1>
  <hr />
  <div className="w3-clear">
    <p className="intro">CSS can be used to create an image gallery.</p>
    <div className="responsive">
      <div className="img">
        <a target="_blank" href="img_5terre.jpg">
          <img src="img_5terre.jpg" alt="Cinque Terre" width={300} height={200} />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>
    </div>
    <div className="responsive">
      <div className="img">
        <a target="_blank" href="img_forest.jpg">
          <img src="img_forest.jpg" alt="Forest" width={300} height={200} />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>
    </div>
    <div className="responsive">
      <div className="img">
        <a target="_blank" href="img_lights.jpg">
          <img src="img_lights.jpg" alt="Northern Lights" width={300} height={200} />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>
    </div>
    <div className="responsive">
      <div className="img">
        <a target="_blank" href="img_mountains.jpg">
          <img src="img_mountains.jpg" alt="Mountains" width={300} height={200} />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>
    </div>
    <div className="clearfix" />
  </div>
  <hr />
  <h2>Image Gallery</h2>
  <p>The following image gallery is created with CSS:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>style<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><span className="cssselectorcolor" style={{color: 'brown'}}><br />
        div.gallery <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid #ccc<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 180px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />
        div.gallery:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid #777<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />
        div.gallery img <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />
        div.desc <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp; text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> center<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
      </span><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/style<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/head<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="gallery"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> target<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="_blank"</span> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_5terre.jpg"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>img<span className="attributecolor" style={{color: 'red'}}> src<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_5terre.jpg"</span> alt<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="Cinque Terre"</span> width<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="600"</span> height<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="400"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="desc"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Add a description of the image here<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="gallery"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> target<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="_blank"</span> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_forest.jpg"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>img<span className="attributecolor" style={{color: 'red'}}> src<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_forest.jpg"</span> alt<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="Forest"</span> width<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="600"</span> height<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="400"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="desc"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Add a description of the image here<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="gallery"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> target<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="_blank"</span> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_lights.jpg"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>img<span className="attributecolor" style={{color: 'red'}}> src<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_lights.jpg"</span> alt<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="Northern Lights"</span> width<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="600"</span> height<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="400"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="desc"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Add a description of the image here<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="gallery"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>a<span className="attributecolor" style={{color: 'red'}}> target<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="_blank"</span> href<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_mountains.jpg"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp;&nbsp;&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>img<span className="attributecolor" style={{color: 'red'}}> src<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="img_mountains.jpg"</span> alt<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="Mountains"</span> width<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="600"</span> height<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="400"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; 
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/a<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />&nbsp; <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> class<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="desc"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Add a description of the image here<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/body<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/html<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <a target="_blank" href="tryit.asp?filename=trycss_image_gallery" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <div className="w3-example">
    <h3>Responsive Image Gallery</h3>
    <p>How to use CSS media queries to create a responsive image gallery that will 
      look good on desktops, tablets and smart phones.</p>
    <div className="w3-white">
      <img src="responsiveImgGallery.jpg" style={{width: '100%'}} />
    </div>
    <a target="_blank" className="w3-btn w3-margin-top w3-margin-bottom" href="tryit.asp?filename=trycss_image_gallery_responsive">Try it Yourself »</a>
  </div>
  {/*
<div class="w3-example">
<h3>Advanced: 
Clickable Modal Images (JS)</h3>
<p>An example of how to use JavaScript together with CSS to display clicked images 
in a modal box.</p>
<div class="w3-white">
<iframe src="trycss_image_gallery_ifr.htm" style="padding:0;width:100%;height:700px;border:none;"></iframe>
</div>
<a target="_blank" class="w3-btn w3-margin-top w3-margin-bottom" href="tryit.asp?filename=trycss_image_gallery_responsive_js">Try it Yourself &raquo;</a>
</div>
*/}
  <br />

</div>




<Codepen
        src={
          "https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default Q3;

