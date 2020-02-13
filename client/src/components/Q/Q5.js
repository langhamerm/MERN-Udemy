import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';


const Q5 = () => {
  return (
    <div>


<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CJ3g7qmEz-cCFYUuaQodaegHaw"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={1} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Attribute</span> Selectors</h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_image_sprites.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_form.asp">Next ❯</a>
  </div>
  <hr />
  <h2>Style HTML Elements With Specific Attributes</h2>
  <p>It is possible to style HTML elements that have specific attributes or attribute values.</p>
  <hr />
  <h2>CSS [attribute] Selector</h2>
  <p>The <code className="w3-codespan">[attribute]</code> selector is used to select elements with a specified 
    attribute.</p>
  <p>The following example selects all &lt;a&gt; elements with a target attribute:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a[target] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_attribute" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS [attribute="value"] Selector</h2>
  <p>The <code className="w3-codespan">[attribute="value"]</code> selector is used to select elements with a specified 
    attribute and value.</p>
  <p>The following example selects all &lt;a&gt; elements with a target="_blank" attribute:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        a[target="_blank"] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}> <br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_attribute_value" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS [attribute~="value"] Selector</h2>
  <p>The <code className="w3-codespan">[attribute~="value"]</code> selector is used to select elements with an attribute 
    value containing a specified word.</p>
  <p>The following example selects all elements with a title attribute that 
    contains a space-separated list of words, one of which is "flower":</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        [title~="flower"] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px solid yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_attribute_value2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>The example above will match elements with title="flower", title="summer 
    flower", and title="flower new", but not title="my-flower" or title="flowers".</p>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CMz5yKqEz-cCFVOmaQodru0NAg"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={5} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>CSS [attribute|="value"] Selector</h2>
  <p>The <code className="w3-codespan">[attribute|="value"]</code> selector is used to select elements with the specified attribute starting with the specified value.</p>
  <p>The following example selects all elements with a class attribute value that begins with "top":</p>
  <p><strong>Note:</strong> The value has to be a whole word, either alone, like 
    class="top", or followed by a hyphen( - ), like class="top-text"!&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        [class|="top"] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_attribute_hyphen" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS [attribute^="value"] Selector</h2>
  <p>The <code className="w3-codespan">[attribute^="value"]</code> selector is used to select elements whose attribute 
    value begins with a specified value.</p>
  <p>The following example selects all elements with a class attribute value that begins with "top":</p>
  <p><strong>Note:</strong> The value does not have to be a whole word!&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        [class^="top"] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_attribute_start" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS [attribute$="value"] Selector</h2>
  <p>The <code className="w3-codespan">[attribute$="value"]</code> selector is used to select elements whose attribute 
    value ends with a specified value.</p>
  <p>The following example selects all elements with a class attribute value that 
    ends with "test":</p>
  <p><strong>Note:</strong> The value does not have to be a whole word!&nbsp;&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        [class$="test"] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_sel_attribute_end" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS [attribute*="value"] Selector</h2>
  <p>The <code className="w3-codespan">[attribute*="value"]</code> selector is used to select elements whose attribute 
    value contains a specified value.</p>
  <p>The following example selects all elements with a class attribute value that 
    contains "te":</p>
  <p><strong>Note:</strong> The value does not have to be a whole word!&nbsp;&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        [class*="te"] <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_sel_attribute_contain" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Styling Forms</h2>
  <p>The attribute selectors can be useful for styling forms without class or ID:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        input[type="text"]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 150px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          margin-bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        input[type="button"]
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 120px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;margin-left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 35px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_attselector_form" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p><strong>Tip:</strong> Visit our <a href="css_form.asp">CSS Forms Tutorial</a> for more examples on how to style forms with CSS.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_attribute_selectors1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_attribute_selectors2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_attribute_selectors3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_attribute_selectors4" target="_blank">Exercise 4 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_attribute_selectors5" target="_blank">Exercise 5 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_attribute_selectors6" target="_blank">Exercise 6 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Attribute Selectors</h2>
  <div className="w3-responsive">
    <table className="w3-table-all notranslate">
      <tbody><tr>
          <th style={{width: '20%'}}>Selector</th>
          <th style={{width: '20%'}}>Example</th>
          <th>Example description</th>
        </tr>
        <tr>
          <td><a href="/cssref/sel_attribute.asp">[<i>attribute</i>]</a></td>
          <td className="notranslate">[target]</td>
          <td>Selects all elements with a target attribute</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_attribute_value.asp">[<i>attribute</i>=<i>value</i>]</a></td>
          <td className="notranslate">[target=_blank]</td>
          <td>Selects all elements with target="_blank"</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_attribute_value_contains.asp">[<i>attribute</i>~=<i>value</i>]</a></td>
          <td className="notranslate">[title~=flower]</td>
          <td>Selects all elements with a title attribute containing the word "flower"</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_attribute_value_lang.asp">[<i>attribute</i>|=<i>value</i>]</a></td>
          <td className="notranslate">[lang|=en]</td>
          <td>Selects all elements with a lang attribute value starting with "en"</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_attr_begin.asp">[<i>attribute</i>^=<i>value</i>]</a></td>
          <td>a[href^="https"]</td>
          <td>Selects every &lt;a&gt; element whose href attribute value begins with "https"</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_attr_end.asp">[<i>attribute</i>$=<i>value</i>]</a></td>
          <td>a[href$=".pdf"]</td>
          <td>Selects every &lt;a&gt; element whose href attribute value ends with ".pdf"</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_attr_contain.asp">[<i>attribute</i>*=<i>value</i>]</a></td>
          <td>a[href*="w3schools"]</td>
          <td>Selects every &lt;a&gt; element whose href attribute value contains the substring "w3schools"</td>
        </tr>
      </tbody></table>
  </div>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_image_sprites.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_form.asp">Next ❯</a>
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
export default Q5;

