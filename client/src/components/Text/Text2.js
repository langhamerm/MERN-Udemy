import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import border1 from "../../images/border1.png";
import border2 from "../../images/border2.png";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const Text2 = () => {
  return (
    <div>
<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CLPV-PC9zucCFYUWAQod1AkM9A"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id="b" data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Fonts</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_text.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_icons.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">The CSS font properties define the font family, boldness, size, and the style of a text.</p>
  <hr />
  <h2>Difference Between Serif and Sans-serif Fonts</h2>
  <img alt="Serif vs. Sans-serif" src="serif.gif" width={398} height={142} style={{maxWidth: '100%', height: 'auto'}} />
  <hr />
  <h2>CSS Font Families</h2>
  <p>In CSS, there are two types of font family names:</p>
  <ul>
    <li><b>generic family</b> - a group of font families with a 
      similar look (like "Serif" or "Monospace")</li>
    <li><b>font family</b> - a specific font family (like "Times New Roman" 
      or "Arial")</li>
  </ul>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Generic family</th>
        <th style={{width: '30%'}}>Font family</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>Serif</td>
        <td><span style={{fontSize: '150%', fontFamily: 'Times New Roman'}}>Times New Roman</span><br />
          <span style={{fontSize: '150%', fontFamily: 'Georgia'}}>Georgia</span></td>
        <td>Serif fonts have small lines at the ends on some characters</td>
      </tr>
      <tr>
        <td>Sans-serif</td>
        <td><span style={{fontSize: '150%', fontFamily: 'Arial'}}>Arial</span><br />
          <span style={{fontSize: '150%', fontFamily: 'Verdana'}}>Verdana</span></td>
        <td>"Sans" means without - these fonts do not have the 
          lines at the ends of characters</td>
      </tr>
      <tr>
        <td>Monospace</td>
        <td><span style={{fontSize: '150%', fontFamily: 'Courier New'}}>Courier New</span><br />
          <span style={{fontSize: '150%', fontFamily: 'Lucida Console'}}>Lucida Console</span></td>
        <td>All monospace characters have the same width</td>
      </tr>
    </tbody></table>
  <div className="w3-panel w3-note">
    <p><strong>Note:</strong> On computer screens, sans-serif fonts are considered easier to read than serif fonts.</p>
  </div>
  <hr />
  <h2>Font Family</h2>
  <p>The font family of a text is set with the <code className="w3-codespan">font-family</code> property.</p>
  <p>The <code className="w3-codespan">font-family</code> property should hold several font names as a "fallback" system. 
    If the browser does not support the first font, it tries the next font, and so 
    on.</p>
  <p>Start with the font you want, and end with a generic family, to let the 
    browser pick a similar font in the generic family, if no other fonts are 
    available. </p>
  <p><b>Note</b>: If the name of a font family is more than one word, it must be in 
    quotation marks, like: "Times New Roman".</p>
  <p>More than one font family is specified in a comma-separated list:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-family<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> "Times New Roman", Times, serif<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_font-family" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>For commonly used font combinations, look at our <a href="/cssref/css_websafe_fonts.asp">Web Safe Font Combinations</a>.</p>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CJz49fC9zucCFYUWAQod1AkM9A"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={300} height={250} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id="d" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Font Style</h2>
  <p>The <code className="w3-codespan">font-style</code> property is mostly used to specify italic text.</p>
  <p>This property has three values:</p>
  <ul>
    <li>normal - The text is shown normally</li>
    <li>italic - The text is shown in italics</li>
    <li>oblique - The text is "leaning"
      (oblique is very similar to italic, but less supported)</li>
  </ul>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.normal <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> normal<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />p.italic <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> italic<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />p.oblique <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> oblique<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_font-style" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Font Size</h2>
  <p>The <code className="w3-codespan">font-size</code> property sets the size of the text.</p>
  <p>Being able to manage the text size is important in web design. However, you 
    should not use font size adjustments to make paragraphs look like headings, or 
    headings look like paragraphs.</p>
  <p>Always use the proper HTML tags, like &lt;h1&gt; - &lt;h6&gt; for headings and &lt;p&gt; for 
    paragraphs.</p>
  <p>The font-size value can be  
    an absolute, or relative size.</p>
  <p>Absolute size:</p>
  <ul>
    <li>Sets the text to a specified size</li>
    <li>Does not allow a user to change the text size in all browsers (bad for accessibility reasons)</li>
    <li>Absolute size is useful when the physical size of the output is known</li>
  </ul>
  <p>Relative size:</p>
  <ul>
    <li>Sets the size relative to surrounding elements</li>
    <li>Allows a user to change the text size in browsers</li>
  </ul>
  <div className="w3-panel w3-note">
    <p><strong>Note:</strong> If you do not specify a font size, the default size for normal text, like paragraphs, is 16px (16px=1em).</p>
  </div>
  <hr />
  <h2>Set Font Size With Pixels</h2>
  <p>Setting the text size with pixels gives you full control over the text size:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 40px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 30px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 14px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_font-size_px" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p><strong>Tip:</strong> If you use pixels, you can still use the zoom tool to resize the entire page.</p>
  <hr />
  <h2>Set Font Size With Em</h2>
  <p>To allow users to resize the text (in the browser menu), many 
    developers use em instead of pixels.</p>
  <p>The em size unit is recommended by the W3C.</p>
  <p>1em is equal to the current font size. The default text size in browsers is 
    16px. So, the default size of 1em is 16px.</p>
  <p>The size can be calculated from pixels to em using this formula: <i>pixels</i>/16=<i>em</i></p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2.5em<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* 40px/16=2.5em */</span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1.875em<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* 30px/16=1.875em */</span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.875em<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* 14px/16=0.875em */</span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_font-size_em" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>In the example above, the text size in em is the same as the previous example 
    in pixels. However, with the em size, it is possible to adjust the text size 
    in all browsers.</p><p>Unfortunately, there is still a problem with older versions 
    of IE. 
    The text becomes larger than it should 
    when made larger, and smaller than it should when made smaller.</p>
  <hr />
  <h2>Use a Combination of Percent and Em</h2>
  <p>The solution that works in all browsers, is to set a default font-size in 
    percent for the &lt;body&gt; element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        body <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2.5em<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1.875em<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.875em<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_font-size_percent_em" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>Our code now works great! It shows the same text size in 
    all browsers, and allows all browsers to zoom or resize the text!</p>
  <hr />
  <h2>Font Weight</h2>
  <p>The <code className="w3-codespan">font-weight</code> property specifies the weight of a font:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.normal <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-weight<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> normal<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />p.thick <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-weight<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> bold<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_font-weight" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Responsive Font Size</h2>
  <p>The text size can be set with a <code className="w3-codespan">vw</code> unit, which means the "viewport width".</p>
  <p>That way the text size will follow the size of the browser window:</p>
  <div className="w3-light-grey w3-padding w3-round">
    <h1 style={{fontSize: '8vw'}}>Hello World</h1>
    <p style={{fontSize: '2vw'}}>Resize the browser window to see how the font size scales.</p>
  </div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>h1<span className="attributecolor" style={{color: 'red'}}> style<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="<strong>font-size:10vw</strong>"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>Hello World<span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/h1<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_font_responsive" target="_blank">Try it Yourself »</a>
  </div>
  <div className="w3-note w3-panel">
    <p>Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.</p>
  </div>
  <hr />
  <h2>Font Variant</h2>
  <p>The <code className="w3-codespan">font-variant</code> property specifies whether or not a text should 
    be displayed in a small-caps font.</p>
  <p>In a small-caps font, all lowercase letters are converted to uppercase 
    letters. However, the converted uppercase letters appears in a smaller font size 
    than the original uppercase letters in the text.</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.normal <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;font-variant<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> normal<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />p.small <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; font-variant<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> small-caps<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_font-variant" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <p><a target="_blank" href="tryit.asp?filename=trycss_font">All the font properties in one
      declaration</a><br />
    This example demonstrates how to use the shorthand property for setting all of
    the font properties in one declaration.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_font1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_font2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_font3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_font4" target="_blank">Exercise 4 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_font5" target="_blank">Exercise 5 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Font Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '25%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_font_font.asp">font</a></td>
        <td>Sets all the font properties in one declaration</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_font_font-family.asp">font-family</a></td>
        <td>Specifies the font family for text</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_font_font-size.asp">font-size</a></td>
        <td>Specifies the font size of text</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_font_font-style.asp">font-style</a></td>
        <td>Specifies the font style for text</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_font_font-variant.asp">font-variant</a></td>
        <td>Specifies whether or not a text should be displayed in a small-caps font</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_font_weight.asp">font-weight</a></td>
        <td>Specifies the weight of a font</td>
      </tr>
    </tbody></table>
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
export default Text2;
