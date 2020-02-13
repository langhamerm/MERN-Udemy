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
const Text1 = () => {
  return (
    <div>
<div className="w3-main w3-light-grey" id="belowtopnav" style={{marginLeft: 220, paddingTop: 0}}>
  <div className="w3-row w3-white">
    <div className="w3-col l10 m12" id="main">
      <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
        {/* MainLeaderboard*/}
        {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-main_leaderboard-0" data-google-query-id="CJrngLu8zucCFRQbAQodIq0IQA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={7} data-load-complete="true" /></div></div>
        {/* adspace leaderboard */}
      </div>
      <h1>CSS <span className="color_h1">Text</span></h1>
      <div className="w3-clear nextprev">
        <a className="w3-left w3-btn" href="css_outline.asp">❮ Previous</a>
        <a className="w3-right w3-btn" href="css_font.asp">Next ❯</a>
      </div>
      <br />
      <div style={{margin: 'auto', border: '1px solid gray', padding: 8}}>
        <h1 style={{textAlign: 'center', textTransform: 'uppercase', color: '#4CAF50'}}>text formatting</h1>
        <p style={{textIndent: 50, textAlign: 'justify', letterSpacing: 3}}>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
          The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored
          <a style={{textDecoration: 'none', color: '#008CBA'}} target="_blank" href="tryit.asp?filename=trycss_text">"Try it Yourself"</a> link.</p>
      </div>
      <br />
      <a target="_blank" href="tryit.asp?filename=trycss_text" className="w3-btn">Try it Yourself »</a>
      <hr />
      <h2>Text Color</h2>
      <p>The <code className="w3-codespan">color</code> property is used to set the color of the text. 
        The color is specified by:</p>
      <ul>
        <li>a color name - like "red"</li>
        <li>a HEX value - like "#ff0000"</li>
        <li>an RGB value - like "rgb(255,0,0)"</li>
      </ul>
      <p>Look at <a href="/cssref/css_colors_legal.asp">CSS Color Values</a> for a complete list of possible color values.</p>
      <p>The default text color for a page is defined in the body selector.</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            body <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> blue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> green<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_color" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <div className="w3-panel w3-note">
        <p><strong>Note:</strong> For W3C compliant CSS: If you define the <code className="w3-codespan">color</code> property, you must also define the <code className="w3-codespan">background-color</code>.</p>
      </div>
      <hr />
      <h2>Text Alignment</h2>
      <p>The <code className="w3-codespan">text-align</code> property is used to set the horizontal alignment of a text.</p>
      <p>A text can be left or right aligned, centered, or justified.</p>
      <p>The following example shows center aligned, and left and right aligned text 
        (left alignment is default if text direction is left-to-right, and right 
        alignment is default if text direction is right-to-left):</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> center<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> right<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text-align" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p>When the <code className="w3-codespan">text-align</code> property is set to "justify", each line is 
        stretched so that every line has equal width, and the left and right margins are 
        straight (like in magazines and newspapers):</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> justify<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text-align_all" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
        {/* MidContent */}
        {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-mid_content-0" data-google-query-id="CJzngLu8zucCFRQbAQodIq0IQA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={9} data-load-complete="true" /></div></div>
      </div>
      <hr />
      <h2>Text Decoration</h2>
      <p>The <code className="w3-codespan">text-decoration</code> property is used to set or remove decorations from text.</p>
      <p>The value <code className="w3-codespan">text-decoration: none;</code> is often used to remove underlines from links:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
          </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text-decoration_link" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p>The other <code className="w3-codespan">text-decoration</code> values are used to decorate text:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> overline<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> line-through<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />h3 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> underline<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text-decoration" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <div className="w3-panel w3-note">
        <p><strong>Note:</strong> It is not recommended to underline text that is not a link, as this often confuses 
          the reader.</p>
      </div>
      <hr />
      <h2>Text Transformation</h2>
      <p>The <code className="w3-codespan">text-transform</code> property is used to specify uppercase and lowercase letters in a text.</p>
      <p>It can be used to turn everything into uppercase or lowercase letters, or 
        capitalize the first letter of each word:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            p.uppercase <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-transform<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> uppercase<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />p.lowercase <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-transform<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> lowercase<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />p.capitalize <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;text-transform<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> capitalize<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text-transform" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Text Indentation</h2>
      <p>The <code className="w3-codespan">text-indent</code> property is used to specify the indentation of the first line of a text:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-indent<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text-indent" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Letter Spacing</h2>
      <p>The <code className="w3-codespan">letter-spacing</code> property is used to specify the space between the characters in a text.</p>
      <p>The following example demonstrates how to increase or decrease the space between characters:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; letter-spacing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;letter-spacing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> -3px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_letter-spacing" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Line Height</h2>
      <p>The <code className="w3-codespan">line-height</code> property is used to specify the space between lines:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            p.small <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; line-height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0.8<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />p.big <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
              line-height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1.8<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_line-height" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Text Direction</h2>
      <p>The <code className="w3-codespan">direction</code> property is used to change the text direction of an element:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;direction<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> rtl<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text_direction" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Word Spacing</h2>
      <p>The <code className="w3-codespan">word-spacing</code> property is used to specify the space between 
        the words in a text.</p>
      <p>The following example demonstrates how to increase or decrease the space between 
        words:&nbsp;</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;word-spacing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;word-spacing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> -5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text_word-spacing" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Text Shadow</h2>
      <p>The <code className="w3-codespan">text-shadow</code> property adds shadow to text.</p>
      <p>The following example specifies the position of the horizontal shadow (3px), the position of the vertical shadow (2px) and the color of the shadow (red):</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; text-shadow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px 2px red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_text-shadow" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <hr />
      <h2>More Examples</h2>
      <p><a target="_blank" href="tryit.asp?filename=trycss_text_white-space">Disable text wrapping inside an element</a><br />
        This example demonstrates how to disable text wrapping inside an element.</p>
      <p><a target="_blank" href="tryit.asp?filename=trycss_vertical-align">Vertical alignment of an image</a><br />
        This example demonstrates how to set the vertical align of an image in a text.</p>
      <div className="w3-note w3-panel">
        <p><strong>Tip:</strong> <a href="css_font.asp">Go to our CSS Fonts</a> chapter to learn about how to change fonts, text size and the style of a text.</p> 
      </div>
      <hr />
      <div className="w3-container w3-dark-grey w3-padding">
        <h2>Test Yourself with Exercises!</h2>
        <div className="w3-bar w3-margin-bottom">
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_text1" target="_blank">Exercise 1 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_text2" target="_blank">Exercise 2 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_text3" target="_blank">Exercise 3 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_text4" target="_blank">Exercise 4 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_text5" target="_blank">Exercise 5 »</a>
        </div>
      </div>
      <hr />
      <h2>All CSS Text Properties</h2>
      <table className="w3-table-all notranslate">
        <tbody><tr>
            <th style={{width: '30%'}}>Property</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_color.asp">color</a></td>
            <td>Sets the color of text</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_direction.asp">direction</a></td>
            <td>Specifies the text direction/writing direction</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_letter-spacing.asp">letter-spacing</a></td>
            <td>Increases or decreases the space between characters in a text</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_dim_line-height.asp">line-height</a></td>
            <td>Sets the line height</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_text-align.asp">text-align</a></td>
            <td>Specifies the horizontal alignment of text</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_text-decoration.asp">text-decoration</a></td>
            <td>Specifies the decoration added to text</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_text-indent.asp">text-indent</a></td>
            <td>Specifies the indentation of the first line in a text-block</td>
          </tr>
          <tr>
            <td><a href="/cssref/css3_pr_text-shadow.asp">text-shadow</a></td>
            <td>Specifies the shadow effect added to text</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_text-transform.asp">text-transform</a></td>
            <td>Controls the capitalization of text</td>
          </tr>
          <tr>
            <td><a href="/cssref/css3_pr_text-overflow.asp">text-overflow</a></td>
            <td>Specifies how overflowed content that is not displayed should be signaled to the user</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_unicode-bidi.asp">unicode-bidi</a></td>
            <td>Used together with the <a href="/cssref/pr_text_direction.asp">direction</a> property to set or return whether the text should be overridden to support multiple languages in the same document</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_pos_vertical-align.asp">vertical-align</a></td>
            <td>Sets the vertical alignment of an element</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_white-space.asp">white-space</a></td>
            <td>Specifies how white-space inside an element is handled</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_text_word-spacing.asp">word-spacing</a></td>
            <td>Increases or decreases the space between words in a text</td>
          </tr>
        </tbody></table>
      <br />

    </div>
   
    </div>
    
    <br /><br />
  </div>


      <Codepen
        src={
            "https://codepen.io/langhamerm/embed/dyoYxxG?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default Text1;
