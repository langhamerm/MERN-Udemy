import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const P3
 = () => {
  return (
    <div>

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CL3FyZ7uzucCFYemaQodQfUJRQ"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 468, height: 60}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={468} height={60} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Pseudo-elements</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_pseudo_classes.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_image_transparency.asp">Next ❯</a>
  </div>
  <hr />
  <h2>What are Pseudo-Elements?</h2>
  <p>A CSS pseudo-element is used to style specified parts of an element.</p>
  <p>For example, it can be used to:</p>
  <ul>
    <li>Style the first letter, or line, of an element</li>
    <li>Insert content before, or after, the content of an element </li>
  </ul>
  <hr />
  <h2>Syntax</h2>
  <p>The syntax of pseudo-elements:</p>
  <div className="w3-example">
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        selector::pseudo-element <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;property<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>value<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
  </div>
  <hr />
  <h2>The ::first-line Pseudo-element</h2>
  <p>The <code className="w3-codespan">::first-line</code> pseudo-element is used to add a special style 
    to the first line of a text.</p>
  <p>The following example formats the first line of the text in all &lt;p&gt; 
    elements:</p>
  <div className="w3-example">
    <h3>Example&nbsp;</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p::first-line 
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #ff0000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          font-variant<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> small-caps<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_firstline" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p><strong>Note:</strong> The <code className="w3-codespan">::first-line</code> pseudo-element can only be applied to block-level 
    elements.</p>
  <p>The following properties apply to the <code className="w3-codespan">::first-line</code> 
    pseudo-element:</p>
  <ul>
    <li>font properties</li>
    <li>color properties</li>
    <li>background properties</li>
    <li>word-spacing</li>
    <li>letter-spacing</li>
    <li>text-decoration</li>
    <li>vertical-align</li>
    <li>text-transform</li>
    <li>line-height</li>
    <li>clear</li>
  </ul>
  <div className="w3-panel w3-note">
    <p><strong>Notice the double colon notation - </strong> <code className="w3-codespan">::first-line</code> versus
      <code className="w3-codespan">:first-line</code><br /><br />The double colon replaced the single-colon 
      notation for pseudo-elements in CSS3. This was an attempt from W3C to 
      distinguish between <strong>pseudo-classes</strong> 
      and <strong>pseudo-elements</strong>.<br /><br />The single-colon syntax was used 
      for both pseudo-classes and pseudo-elements in CSS2 and CSS1.<br /><br />For 
      backward compatibility, the single-colon syntax is acceptable for CSS2 and CSS1 
      pseudo-elements.</p>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CKfVkqDuzucCFZN9AQodI9gIsQ"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={4} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>The ::first-letter Pseudo-element</h2>
  <p>The <code className="w3-codespan">::first-letter</code> pseudo-element is used to add a special style to the first 
    letter of a text.</p>
  <p>The following example formats the first letter of the text in all &lt;p&gt; 
    elements:&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p::first-letter 
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #ff0000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> xx-large<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_firstletter" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p><strong>Note:</strong> The <code className="w3-codespan">::first-letter</code> pseudo-element can only be applied to block-level 
    elements.</p>
  <p>The following properties apply to the ::first-letter pseudo- element:&nbsp;</p>
  <ul>
    <li> font properties</li>
    <li> color properties&nbsp;</li>
    <li> background properties</li>
    <li>margin properties</li>
    <li>padding properties</li>
    <li>border properties</li>
    <li>text-decoration</li>
    <li>vertical-align (only if "float" is "none")</li>
    <li>text-transform</li>
    <li>line-height</li>
    <li>float</li>
    <li>clear</li>
  </ul>
  <hr />
  <h2>Pseudo-elements and CSS Classes</h2>
  <p>Pseudo-elements can be combined with CSS classes:&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p.intro::first-letter <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #ff0000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span>200%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_pseudo-element" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>The example above will display the first letter of paragraphs with class="intro", in 
    red and in a larger size.</p>
  <hr />
  <h2>Multiple Pseudo-elements</h2>
  <p>Several pseudo-elements can also be combined.</p>
  <p>In the following example, the first letter of a paragraph will be red, in 
    an xx-large font size. The rest of the first line will be blue, and in 
    small-caps. The rest of the paragraph will be the default font size and color:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        p::first-letter
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #ff0000<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;font-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> xx-large<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        p::first-line 
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #0000ff<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          font-variant<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> small-caps<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_firstline_letter" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS - The ::before Pseudo-element</h2>
  <p>The <code className="w3-codespan">::before</code> pseudo-element can be used to insert some content before the content of an element.</p>
  <p>The following example inserts an image before the content of each &lt;h1&gt; element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        h1::before 
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(smiley.gif)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_before" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS - The ::after Pseudo-element</h2>
  <p>The <code className="w3-codespan">::after</code> pseudo-element can be used to insert some content after the content of an element.</p>
  <p>The following example inserts an image after the content of each &lt;h1&gt; element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        h1::after
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(smiley.gif)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_after" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS - The ::selection Pseudo-element</h2>
  <p>The <code className="w3-codespan">::selection</code> pseudo-element matches the portion of an element that is 
    selected by a user.</p>
  <p>The following CSS properties can be applied to <code className="w3-codespan">::selection</code>: 
    <code className="w3-codespan">color</code>, 
    <code className="w3-codespan">background</code>, <code className="w3-codespan">cursor</code>, and <code className="w3-codespan">outline</code>.</p>
  <p>The following example makes the selected text red on a yellow background:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ::selection <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> red<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; 
          background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss3_selection" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_pseudo_elements1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_pseudo_elements2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_pseudo_elements3" target="_blank">Exercise 3 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Pseudo Elements</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Selector</th>
        <th style={{width: '20%'}}>Example</th>
        <th>Example description</th>
      </tr>
      <tr>
        <td><a href="/cssref/sel_after.asp">::after</a></td>
        <td className="notranslate">p::after</td>
        <td>Insert something after the content of each &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_before.asp">::before</a></td>
        <td className="notranslate">p::before</td>
        <td>Insert something before the content of each &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_firstletter.asp">::first-letter</a></td>
        <td className="notranslate">p::first-letter</td>
        <td>Selects the first letter of each &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_firstline.asp">::first-line</a></td>
        <td className="notranslate">p::first-line</td>
        <td>Selects the first line of each &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_selection.asp">::selection</a></td>
        <td className="notranslate">p::selection</td>
        <td>Selects the portion of an element that is selected by a user</td>
      </tr>
    </tbody></table>
  <h2>All CSS Pseudo Classes</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Selector</th>
        <th style={{width: '20%'}}>Example</th>
        <th>Example description</th>
      </tr>
      <tr>
        <td><a href="/cssref/sel_active.asp">:active</a></td>
        <td className="notranslate">a:active</td>
        <td>Selects the active link</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_checked.asp">:checked</a></td>
        <td className="notranslate">input:checked</td>
        <td>Selects every checked &lt;input&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_disabled.asp">:disabled</a></td>
        <td className="notranslate">input:disabled</td>
        <td>Selects every disabled &lt;input&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_empty.asp">:empty</a></td>
        <td className="notranslate">p:empty</td>
        <td>Selects every &lt;p&gt; element that has no children</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_enabled.asp">:enabled</a></td>
        <td className="notranslate">input:enabled</td>
        <td>Selects every enabled &lt;input&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_firstchild.asp">:first-child</a></td>
        <td className="notranslate">p:first-child</td>
        <td>Selects every &lt;p&gt; elements that is the first child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_first-of-type.asp">:first-of-type</a></td>
        <td className="notranslate">p:first-of-type</td>
        <td>Selects every &lt;p&gt; element that is the first &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_focus.asp">:focus</a></td>
        <td className="notranslate">input:focus</td>
        <td>Selects the &lt;input&gt; element that has focus</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_hover.asp">:hover</a></td>
        <td className="notranslate">a:hover</td>
        <td>Selects links on mouse over</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_in-range.asp">:in-range</a></td>
        <td className="notranslate">input:in-range</td>
        <td>Selects &lt;input&gt; elements with a value within a specified range</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_invalid.asp">:invalid</a></td>
        <td className="notranslate">input:invalid</td>
        <td>Selects all &lt;input&gt; elements with an invalid value</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_lang.asp">:lang(<i>language</i>)</a></td>
        <td className="notranslate">p:lang(it)</td>
        <td>Selects every &lt;p&gt; element with a lang attribute value starting with "it"</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_last-child.asp">:last-child</a></td>
        <td className="notranslate">p:last-child</td>
        <td>Selects every &lt;p&gt; elements that is the last child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_last-of-type.asp">:last-of-type</a></td>
        <td className="notranslate">p:last-of-type</td>
        <td>Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_link.asp">:link</a></td>
        <td className="notranslate">a:link</td>
        <td>Selects all unvisited links</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_not.asp">:not(selector)</a></td>
        <td className="notranslate">:not(p)</td>
        <td>Selects every element that is not a &lt;p&gt; element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-child.asp">:nth-child(n)</a></td>
        <td className="notranslate">p:nth-child(2)</td>
        <td>Selects every &lt;p&gt; element that is the second child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-last-child.asp">:nth-last-child(n)</a></td>
        <td className="notranslate">p:nth-last-child(2)</td>
        <td>Selects every &lt;p&gt; element that is the second child of its parent, counting from the last child</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-last-of-type.asp">:nth-last-of-type(n)</a></td>
        <td className="notranslate">p:nth-last-of-type(2)</td>
        <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting from the last child</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_nth-of-type.asp">:nth-of-type(n)</a></td>
        <td className="notranslate">p:nth-of-type(2)</td>
        <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_only-of-type.asp">:only-of-type</a></td>
        <td className="notranslate">p:only-of-type</td>
        <td>Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_only-child.asp">:only-child</a></td>
        <td className="notranslate">p:only-child</td>
        <td>Selects every &lt;p&gt; element that is the only child of its parent</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_optional.asp">:optional</a></td>
        <td className="notranslate">input:optional</td>
        <td>Selects &lt;input&gt; elements with no "required" attribute</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_out-of-range.asp">:out-of-range</a></td>
        <td className="notranslate">input:out-of-range</td>
        <td>Selects &lt;input&gt; elements with a value outside a specified range</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_read-only.asp">:read-only</a></td>
        <td className="notranslate">input:read-only</td>
        <td>Selects &lt;input&gt; elements with a "readonly" attribute specified</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_read-write.asp">:read-write</a></td>
        <td className="notranslate">input:read-write</td>
        <td>Selects &lt;input&gt; elements with no "readonly" attribute</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_required.asp">:required</a></td>
        <td className="notranslate">input:required</td>
        <td>Selects &lt;input&gt; elements with a "required" attribute specified</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_root.asp">:root</a></td>
        <td className="notranslate">root</td>
        <td>Selects the document's root element</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_target.asp">:target</a></td>
        <td className="notranslate">#news:target</td>
        <td>Selects the current active #news element (clicked on a URL containing that anchor name)</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_valid.asp">:valid</a></td>
        <td className="notranslate">input:valid</td>
        <td>Selects all &lt;input&gt; elements with a valid value</td>
      </tr>
      <tr>
        <td><a href="/cssref/sel_visited.asp">:visited</a></td>
        <td className="notranslate">a:visited</td>
        <td>Selects all visited links</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_pseudo_classes.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_image_transparency.asp">Next ❯</a>
  </div>
</div>




<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default P3
;
