import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';


const Q7 = () => {
  return (
    <div>



<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CP3BrbKFz-cCFVKxTwodFA8J5A"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Counters</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_form.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_website_layout.asp">Next ❯</a>
  </div>
  <hr />
  <div className="w3-dark-grey">
    <div className="container w3-content w3-green" style={{maxWidth: 500}}>
      <h3>Pizza</h3>
      <h3>Hamburger</h3>
      <h3>Hotdogs</h3>
    </div>
  </div>
  <p className="intro">CSS counters are "variables" maintained by CSS whose values can 
    be incremented by CSS rules (to track how many times they are used). Counters 
    let you adjust the appearance of content based on its placement in the document.</p>
  <hr />
  <h2>Automatic Numbering With Counters</h2>
  <p>CSS counters are like "variables". The variable values can be incremented by CSS rules 
    (which will 
    track how many times they are used).</p>
  <p>To work with CSS counters we will use the following properties:</p>
  <ul>
    <li><code className="w3-codespan">counter-reset</code> - Creates or resets a counter</li>
    <li><code className="w3-codespan">counter-increment</code> - Increments a counter value</li>
    <li><code className="w3-codespan">content</code> - Inserts generated 
      content</li>
    <li><code className="w3-codespan">counter()</code> or <code className="w3-codespan">counters()</code> function - Adds the 
      value of a counter to an element</li>
  </ul>
  <p>To use a CSS counter, it must first be created with <code className="w3-codespan">counter-reset</code>.</p>
  <p>The following example creates a counter for the page (in the body selector), 
    then increments the counter value for each &lt;h2&gt; element and adds "Section &lt;<em>value of the counter</em>&gt;:" 
    to the beginning of each &lt;h2&gt; element:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        body <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;counter-reset<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> section<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h2::before <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; counter-increment<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> section<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> "Section " counter(section) ": "<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_counters1" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CI2GgLOFz-cCFUG8TwodZ8oL8Q"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={5} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Nesting Counters</h2>
  <p>The following example creates one counter for the page (section) and one 
    counter for each &lt;h1&gt; element (subsection). The "section" counter will be 
    counted for each &lt;h1&gt; element with "Section &lt;<em>value of the 
      section counter</em>&gt;.", and the "subsection" counter will be counted 
    for each &lt;h2&gt; element with "&lt;<em>value of the section counter</em>&gt;.&lt;<em>value of the 
      subsection counter</em>&gt;":</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        body <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;counter-reset<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> section<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
          counter-reset<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> subsection<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h1::before <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; counter-increment<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            section<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> "Section " counter(section) ". "<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />h2::before <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
          counter-increment<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> subsection<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            counter(section) "." counter(subsection) " "<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_counters2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>A counter can also be useful to make outlined lists because a new 
    instance of a counter is automatically created in child elements. Here we use the 
    <code className="w3-codespan">counters()</code> function to insert a string between different levels of nested 
    counters:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ol <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; counter-reset<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> section<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        li::before <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; counter-increment<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> section<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> counters(section,".") " "<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_counters3" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>&nbsp;CSS Counter Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_gen_content.asp">content</a></td>
        <td>Used with the ::before and ::after pseudo-elements, to insert generated content</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_gen_counter-increment.asp">counter-increment</a></td>
        <td>Increments one or more counter values</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_gen_counter-reset.asp">counter-reset</a></td>
        <td>Creates or resets one or more counters</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_form.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_website_layout.asp">Next ❯</a>
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
export default Q7;

