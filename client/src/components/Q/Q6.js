import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';


const Q6 = () => {
  return (
    <div>



<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CLakrc6Ez-cCFRCuAQodXjQA-A"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={1} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Forms</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_attribute_selectors.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_counters.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">The look of an HTML form can be greatly improved with CSS:</p>
  <div style={{borderRadius: 5, backgroundColor: '#f2f2f2', padding: 40}}>
    <form action="/action_page.php" className="test">
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      <label htmlFor="country">Country</label>
      <select id="country" name="country">
        <option value="usa">Australia</option>
        <option value="usa">Canada</option>
        <option value="usa">USA</option>
      </select>
      <a target="_blank" href="tryit.asp?filename=trycss_forms" className="button">Try it Yourself »</a>
    </form>
  </div>
  <hr />
  <h2>Styling Input Fields</h2>
  <p>Use the <code className="w3-codespan">width</code> property to determine the width of the input field:</p>
  <label htmlFor="fname2">First Name</label>
  <input type="text" id="fname2" name="firstname" style={{width: '100%'}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_width" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>The example above applies to all &lt;input&gt; elements. If you only want to 
    style a specific input type, you can use attribute selectors:</p>
  <ul>
    <li><code className="w3-codespan">input[type=text]</code> - will only select text fields</li>
    <li><code className="w3-codespan">input[type=password]</code> - will only select password fields</li>
    <li><code className="w3-codespan">input[type=number]</code> - will only select number fields</li>
    <li>etc..</li>
  </ul>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CMWuns-Ez-cCFQc9TwodCykK9g"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={5} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Padded Inputs</h2>
  <p>Use the <code className="w3-codespan">padding</code> property to add space inside the text field.</p>
  <p><strong>Tip:</strong> When you have many inputs after each other, you might 
    also want to add some <code className="w3-codespan">margin</code>, to add more space 
    outside of them:</p>
  <label htmlFor="fname3">First Name</label>
  <input type="text" id="fname3" name="firstname" className="input1" />
  <label htmlFor="lname3">Last Name</label>
  <input type="text" id="lname3" name="lastname" className="input1" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type=text]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 12px 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 8px 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          box-sizing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> border-box<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_padding" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <div className="w3-panel w3-note">
    <p>Note that we have set the <code className="w3-codespan">box-sizing</code> property to 
      <code className="w3-codespan">border-box</code>. This makes sure that the padding and eventually borders are included in the 
      total width and height of the elements. <br />Read more about the <code className="w3-codespan">box-sizing</code> property in our <a href="css3_box-sizing.asp">CSS Box Sizing</a> chapter.</p>
  </div>
  <hr />
  <h2>Bordered Inputs</h2>
  <p>Use the <code className="w3-codespan">border</code> property to change the border size and color, and 
    use the <code className="w3-codespan">border-radius</code> property to add rounded corners:</p>
  <label htmlFor="fname4">First Name</label>
  <input type="text" id="fname4" name="firstname" className="inputborder" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type=text]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2px solid red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 4px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_border" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>If you only want a bottom border, use the <code className="w3-codespan">border-bottom</code> property:</p>
  <label htmlFor="fname7">First Name</label>
  <input type="text" id="fname7" name="firstname" className="inputborder2" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type=text]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border-bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2px solid red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_border2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Colored Inputs</h2>
  <p>Use the <code className="w3-codespan">background-color</code> property to add a background color to the input, and 
    the <code className="w3-codespan">color</code> property to change the text color:</p>
  <input type="text" defaultValue="John" name="firstname" className="inputcolor" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type=text]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #3CBC8D<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_color" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Focused Inputs</h2>
  <p>By default, some browsers will add a blue outline around the input when it gets 
    focus (clicked on). You can remove this behavior by adding <code className="w3-codespan">outline: none;</code> to the input.</p>
  <p>Use the <code className="w3-codespan">:focus</code> selector to do something with the input field when it gets focus:</p>
  <div className="w3-row-padding" style={{marginLeft: '-16px', marginRight: '-16px'}}>
    <div className="w3-half">
      <input className="focus1" type="text" name="firstname" />
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            input[type=text]:focus
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> lightblue<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_form_focus" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
    </div>
    <div className="w3-half">
      <input className="focus2" type="text" name="firstname" />
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            input[type=text]:focus
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 3px solid #555<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_form_focus2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
    </div>
  </div>
  <hr />
  <h2>Input with icon/image</h2>
  <p>If you want an icon inside the input, use the <code className="w3-codespan">background-image</code> property and 
    position it with the <code className="w3-codespan">background-position</code> property. Also notice that we 
    add a 
    large left padding to reserve the space of the icon:</p>
  <input type="text" name="search" placeholder="Search.." className="icon" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type=text]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('searchicon.png')<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          background-position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px 10px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; background-repeat<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            no-repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding-left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 40px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_icon" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Animated Search Input</h2>
  <p>In this example we use the CSS <code className="w3-codespan">transition</code> property to animate 
    the width of the search input when it gets focus. You will learn more about the <code className="w3-codespan">
      transition</code> property later, in our <a href="css3_transitions.asp">CSS Transitions</a> chapter.</p>
  <input id="myInp" type="text" name="search" placeholder="Search.." />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type=text] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; transition<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> width 0.4s ease-in-out<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />input[type=text]:focus <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; 
          width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_search_anim" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Styling Textareas</h2>
  <p><strong>Tip:</strong> Use the <code className="w3-codespan">resize</code> property to prevent textareas from being resized (disable the "grabber" in the bottom right corner):</p>
  <textarea name="firstname" style={{backgroundColor: '#f8f8f8', width: '100%', padding: '12px 20px', resize: 'none', height: 150, boxSizing: 'border-box', border: '2px solid #ccc', borderRadius: 4}} defaultValue={"Some text...\n"} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        textarea
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 12px 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          box-sizing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> border-box<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 2px solid #ccc<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 4px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f8f8f8<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; resize<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_textarea" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Styling Select Menus</h2>
  <form className="test">
    <select id="country" name="country" style={{backgroundColor: '#f1f1f1', border: 'none'}}>
      <option value="usa">Australia</option>
      <option value="usa">Canada</option>
      <option value="usa">USA</option>
    </select>
  </form>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        select
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 16px 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border-radius<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 4px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f1f1f1<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_select" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Styling Input Buttons</h2>
  <input type="button" defaultValue="Button" className="button" />
  <input type="button" defaultValue="Button" className="button" style={{width: '100%'}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type=button], input[type=submit], input[type=reset]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #4CAF50<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            16px 32px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; text-decoration<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 4px 2px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; cursor<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> pointer<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br /><span className="commentcolor" style={{color: 'green'}}>/* Tip: use <strong>width: 100%</strong> for full-width buttons */</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_form_button" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>For more information about how to style buttons with CSS, read our <a href="css3_buttons.asp">CSS Buttons Tutorial</a>.</p>
  <hr />
  <h2>Responsive Form</h2>
  <p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>
  <div className="w3-note w3-panel">
    <p><strong>Advanced:</strong> The following example use <a href="css3_mediaqueries.asp">media queries</a> to create a responsive form. You will learn more about this in a later chapter.</p>
  </div>
  <iframe src="trycss_form_responsive_ifr.htm" style={{marginLeft: '-8px', border: 'none', width: '100%'}} className="myfr" />
  <a target="_blank" href="tryit.asp?filename=trycss_form_responsive" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  <br />
  {/*
<hr>
<h2>Aligned Form</h2>
<p>An example of how to style labels together with inputs to create a horizontal aligned form:</p>
    <div>
  <label for="fname10" class="label">First Name</label>
  <input type="text" id="fname10" name="firstname" style="width:250px;padding:8px 20px; margin:8px 0">
  </div>

  <div>
  <label for="mname" class="label">Middle Name</label>
  <input type="text" id="mname" name="lastname" style="width:250px;padding:8px 20px; margin:8px 0">
  </div>

  <div>
  <label for="lname10" class="label">Last Name</label>
  <input type="text" id="lname10" name="lastname" style="width:250px;padding:8px 20px; margin:8px 0">
  </div>

<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate cssHigh">
select
{<br>&nbsp;&nbsp;&nbsp; color: green;<br>&nbsp;&nbsp;&nbsp; display: 
inline-block;<br>&nbsp;&nbsp;&nbsp; width: 130px;<br>&nbsp;&nbsp;&nbsp; 
text-align: right;<br>&nbsp;&nbsp;&nbsp; padding-right: 15px; <br>
}</div>
<a target="_blank" href="tryit.asp?filename=trycss_form_aligned" class="w3-btn w3-margin-bottom">Try it Yourself &raquo;</a>
</div>
*/}
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_attribute_selectors.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_counters.asp">Next ❯</a>
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
export default Q6;

