import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
// import box from "../../images/box.png";
// import boxex from "../../images/boxex.png";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const Text6 = () => {
  return (
    <div>

<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CJzljqPEzucCFUM_Twod7zgNkQ"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Tables</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_list.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_display_visibility.asp">Next ❯</a>
  </div>
  <hr />
  <p className="intro">The look of an HTML table can be greatly improved with CSS:</p>
  <table id="customers">
    <tbody><tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr className="alt">
        <td>Berglunds snabbköp</td>
        <td>Christina Berglund</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr className="alt">
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr className="alt">
        <td>Königlich Essen</td>
        <td>Philip Cramer</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr className="alt">
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </tbody></table>
  <br />
  <a target="_blank" href="tryit.asp?filename=trycss_table_fancy" className="w3-btn">Try it Yourself »</a>
  <hr />
  <h2>Table Borders</h2>
  <p>To specify table borders in CSS, use the <code className="w3-codespan">border</code> property.</p>
  <p>The example below specifies a black border for &lt;table&gt;, &lt;th&gt;, and &lt;td&gt; elements:</p>
  <iframe src="trycss_table_border_iframe.htm" style={{border: 'none', height: 105}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        table, th, td <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_table_border" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>Notice that the table in the example above has double borders. This is 
    because both the table and the &lt;th&gt; and &lt;td&gt; elements have separate borders.</p>
  <hr />
  <h2>Collapse Table Borders</h2>
  <p>The <code className="w3-codespan">border-collapse</code> property sets whether the table borders 
    should be collapsed into a single border:</p>
  <iframe src="trycss_table_border-collapse_iframe.htm" style={{border: 'none', height: 95}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        table
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border-collapse<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> collapse<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        table, th, td
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_table_border-collapse">Try it Yourself »</a>
  </div>
  <p style={{marginTop: 25}}>If you only want a border around the table, only specify the <code className="w3-codespan">border</code> property for 
    &lt;table&gt;:</p>
  <iframe src="trycss_table_border2_iframe.htm" style={{border: 'none', height: 95}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        table
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_table_border2">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="CIDMrKTEzucCFUetTwoda4IIvg"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={4} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Table Width and Height</h2>
  <p>Width and height of a table are defined by the <code className="w3-codespan">width</code> and <code className="w3-codespan">height</code> properties.</p>
  <p>The example below sets the width of the table to 100%, and the height of the 
    &lt;th&gt; elements to 50px:</p>
  <iframe src="trycss_table_width_iframe.htm" style={{border: 'none', width: '100%', height: 146}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        table 
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
        th
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
      </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_table_width">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Horizontal Alignment</h2>
  <p>The <code className="w3-codespan">text-align</code> property sets the horizontal alignment (like left, right, or center) 
    of the content in &lt;th&gt; or &lt;td&gt;.</p>
  <p>By default, the content of &lt;th&gt; elements are center-aligned and the 
    content of &lt;td&gt; elements are left-aligned.</p>
  <p>The following example left-aligns the text in &lt;th&gt; elements:</p>
  <iframe src="trycss_table_align_iframe.htm" style={{border: 'none', width: '100%', height: 120}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        th
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_table_align">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Vertical Alignment</h2>
  <p>The <code className="w3-codespan">vertical-align</code> property sets the vertical alignment (like top, bottom, or middle) 
    of the content in &lt;th&gt; or &lt;td&gt;.</p>
  <p>By default, the vertical alignment of the content in a table is middle (for both &lt;th&gt; 
    and &lt;td&gt; elements).</p>
  <p>The following example sets the vertical text alignment to bottom for &lt;td&gt; elements:</p>
  <iframe src="trycss_table_vertical-align_iframe.htm" style={{border: 'none', width: '100%', height: 206}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        td
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          &nbsp;
          vertical-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> bottom<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_table_vertical-align">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Table Padding</h2>
  <p>To control the space between the border and the content in a table, use the 
    <code className="w3-codespan">padding</code> property on 
    &lt;td&gt; and &lt;th&gt; elements:</p>
  <iframe src="trycss_table_border-padding_iframe.htm" style={{border: 'none', width: '100%', height: 231}} />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        th, td
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; text-align<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss_table_padding">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Horizontal Dividers</h2>
  <table className="tabletest2">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Savings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
      </tr>
      <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
      </tr>
    </tbody>
  </table>
  <p>Add the <code className="w3-codespan">border-bottom</code> property to &lt;th&gt; and &lt;td&gt; for horizontal dividers:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        th, td <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;border-bottom<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 1px solid #ddd<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_table_border_divider" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Hoverable Table</h2>
  <p>Use the <code className="w3-codespan">:hover</code> selector on &lt;tr&gt; to highlight table rows on mouse 
    over:</p>
  <table className="tabletest4">
    <tbody><tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
      </tr>
      <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
      </tr>
    </tbody></table>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        tr:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f5f5f5<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_table_hover" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Striped Tables</h2>
  <table className="tabler">
    <tbody><tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
      </tr>
      <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
      </tr>
    </tbody></table>
  <p>For zebra-striped tables, use the <code className="w3-codespan">nth-child()</code> selector and add a <code className="w3-codespan">background-color</code> to all even (or odd) table rows:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        tr:nth-child(even) <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}>background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #f2f2f2<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_table_striped" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Table Color</h2>
  <p>The example below specifies the background color 
    and text color of 
    &lt;th&gt; elements:</p>
  <table className="tabler">
    <tbody><tr style={{backgroundColor: '#4CAF50', color: 'white'}}>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
      </tr>
      <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
      </tr>
    </tbody></table>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        th <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #4CAF50<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_table_color" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Responsive Table</h2>
  <p>A responsive table will display a horizontal scroll bar if the screen is too 
    small to display the full content:</p>
  <div className="w3-responsive">
    <table className="w3-table w3-striped w3-bordered"><tbody><tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
        </tr></tbody></table>
  </div>
  <p>Add a container element (like &lt;div&gt;) with <code className="w3-codespan">overflow-x:auto</code> around the &lt;table&gt; element to make it responsive:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate htmlHigh">
      <span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>div<span className="attributecolor" style={{color: 'red'}}> style<span className="attributevaluecolor" style={{color: 'mediumblue'}}>="overflow-x:auto;"</span></span><span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br /><br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>table<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      ... table content ...<br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/table<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span><br />
      <br /><span className="tagnamecolor" style={{color: 'brown'}}><span className="tagcolor" style={{color: 'mediumblue'}}>&lt;</span>/div<span className="tagcolor" style={{color: 'mediumblue'}}>&gt;</span></span>
    </div>
    <a target="_blank" href="tryit.asp?filename=trycss_table_responsive" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <div className="w3-note w3-panel">
    <p><strong>Note:</strong> In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).</p>
  </div>
  <hr />
  <h2>More Examples</h2>
  <p><a target="_blank" href="tryit.asp?filename=trycss_table_fancy">Make a fancy table</a><br />
    This example demonstrates how to create a fancy table.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_table_caption-side">Set the position of the table caption</a><br />
    This example demonstrates how to position the table caption.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_table1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_table2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_table3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_table4" target="_blank">Exercise 4 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_table5" target="_blank">Exercise 5 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_table6" target="_blank">Exercise 6 »</a>
    </div>
  </div>
  <hr />
  <h2>CSS Table Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_border.asp">border</a></td>
        <td>Sets all the border properties in one declaration</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_border-collapse.asp">border-collapse</a></td>
        <td>Specifies whether or not table borders should be collapsed</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_border-spacing.asp">border-spacing</a></td>
        <td>Specifies the distance between the borders of adjacent cells</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_tab_caption-side.asp">caption-side</a></td>
        <td>Specifies the placement of a table caption</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_tab_empty-cells.asp">empty-cells</a></td>
        <td>Specifies whether or not to display borders and background on empty cells in a table</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_tab_table-layout.asp">table-layout</a></td>
        <td>Sets the layout algorithm to be used for a table</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_list.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_display_visibility.asp">Next ❯</a>
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
export default Text6;
