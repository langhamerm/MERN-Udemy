import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const P1 = () => {
  return (
    <div>


<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CJjF5ubtzucCFU6naQod_Q8Ldw"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={1} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Combinators</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_align.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_pseudo_classes.asp">Next ❯</a>
  </div>
  <hr />
  <h2>CSS Combinators</h2>
  <div className="w3-panel w3-note">
    <p>A combinator is something that explains the relationship between the selectors.</p>
  </div>
  {/*
<div class="w3-example w3-white">
<p class="w3-btn w3-green w3-padding">Select all &lt;p&gt; elements inside the &lt;div&gt; element:</p>
<div class="siblings">
<div class="parentdiv">Div (parent)
<p>Paragraph 1 in the div.</p>
<div>Div in the div.</div>
<p>Paragraph 2 in the div.</p>
</div>
<p>Paragraph 3. Not in a div.</p>
</div>

<div></div>
</div>
*/}
  <p>A CSS selector can contain more than one simple selector. Between the simple 
    selectors, we can include a combinator.</p>
  <p>There are four different combinators in CSS:</p>
  <ul>
    <li>descendant selector (space)</li>
    <li>child selector (&gt;)</li>
    <li>adjacent sibling selector (+)</li>
    <li>general sibling selector (~)</li>
  </ul>
  <hr />
  <h2>Descendant Selector</h2>
  <p>The descendant selector matches all elements that are descendants of a specified 
    element.</p>
  <p>The following example selects all &lt;p&gt; elements inside &lt;div&gt; elements:&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_element_element" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Child Selector</h2>
  <p>The child selector selects all elements that are the children of a 
    specified element.</p>
  <p>The following example selects all &lt;p&gt; elements that are  
    children of a &lt;div&gt; 
    element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div &gt; p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_element_gt" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CIbN--ftzucCFU6JwAodj1QAzQ"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={4} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Adjacent Sibling Selector</h2>
  <p>The adjacent sibling selector selects all elements that are the adjacent siblings 
    of a specified element.</p>
  <p>Sibling elements must have the same parent element, and "adjacent" means 
    "immediately following".</p>
  <p>The following example selects all &lt;p&gt; elements that are placed immediately after &lt;div&gt; elements:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div + p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_element_pluss" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>General Sibling Selector</h2>
  <p>The general sibling selector selects all elements that are siblings of a specified element.</p>
  <p>The following example selects all &lt;p&gt; elements that are siblings of &lt;div&gt; elements:&nbsp;</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        div ~ p <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_sel_element_tilde" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_combinators1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_combinators2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_combinators3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_combinators4" target="_blank">Exercise 4 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS Combinator Selectors</h2>
  <div className="w3-responsive">
    <table className="w3-table-all notranslate">
      <tbody><tr>
          <th style={{width: '20%'}}>Selector</th>
          <th style={{width: '20%'}}>Example</th>
          <th>Example description</th>
        </tr>
        <tr>
          <td><a href="/cssref/sel_element_element.asp"><i>element</i> <i>element</i></a></td>
          <td className="notranslate">div p</td>
          <td>Selects all &lt;p&gt; elements inside &lt;div&gt; elements</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_element_gt.asp"><i>element</i>&gt;<i>element</i></a></td>
          <td className="notranslate">div &gt; p</td>
          <td>Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_element_pluss.asp"><i>element</i>+<i>element</i></a></td>
          <td className="notranslate">div + p</td>
          <td>Selects all &lt;p&gt; elements that are placed immediately after &lt;div&gt; elements</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_gen_sibling.asp"><i>element1</i>~<i>element2</i></a></td>
          <td>p ~ ul</td>
          <td>Selects every &lt;ul&gt; element that are preceded by a &lt;p&gt; element</td>
        </tr>
      </tbody></table>
  </div>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_align.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_pseudo_classes.asp">Next ❯</a>
  </div>
</div>




<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default P1;
