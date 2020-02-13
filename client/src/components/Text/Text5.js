import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
// import box from "../../images/box.png";
// import boxex from "../../images/boxex.png";
// import Container from "react-bootstrap/Container";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const Text5 = () => {
  return (
    <div className="w3-col l10 m12" id="main">
<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="CLTXmKzDzucCFRHawAodiyUInw"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Lists</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_link.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_table.asp">Next ❯</a>
  </div>
  <hr />
  <div className="w3-row">
    <div className="w3-half w3-container">
      <h2>Unordered Lists:</h2>
      <ul style={{listStyle: 'circle'}}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ul>
      <ul style={{listStyle: 'square'}}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ul>
    </div>
    <div className="w3-half w3-container">
      <h2>Ordered Lists:</h2>  
      <ol style={{listStyle: 'decimal'}}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ol>
      <ol style={{listStyle: 'upper-roman'}}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ol>
    </div>
  </div> 
  <hr />
  <h2>HTML Lists and CSS List Properties</h2>
  <p>In HTML, there are two main types of lists:</p>
  <ul>
    <li>unordered lists (&lt;ul&gt;) - the list items are marked with bullets</li>
    <li>ordered lists (&lt;ol&gt;) - the list items are marked with numbers or letters</li>
  </ul>
  <p>The CSS list properties allow you to:</p>
  <ul>
    <li>Set different list item markers for ordered lists</li>
    <li>Set different list item markers for unordered lists</li>
    <li>Set an image as the list item marker</li>
    <li>Add background colors to lists and list items</li>
  </ul>
  <hr />
  <h2>Different List Item Markers</h2>
  <p>The <code className="w3-codespan">list-style-type</code> property specifies the type of list item 
    marker.</p>
  <p>The following example shows some of the available list item markers: </p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ul.a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> circle<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />ul.b <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> square<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />
        ol.c <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> upper-roman<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />ol.d <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> lower-alpha<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_list-style-type_ex" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>Note: Some of the values are for unordered lists, and some for ordered lists.</p>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="COzJwK3DzucCFRDIwAodmdwGyA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={4} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>An Image as The List Item Marker</h2>
  <p>The <code className="w3-codespan">list-style-image</code> property specifies an image as the list 
    item marker:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ul
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; list-style-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('sqpurple.gif')<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_list-style-image" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Position The List Item Markers</h2>
  <p>The <code className="w3-codespan">list-style-position</code> property specifies the position of the list-item markers 
    (bullet points).</p>
  <p>"list-style-position: outside;" means that the bullet points will be outside 
    the list item. The start of each line of a list item will be aligned vertically. 
    This is default:</p>
  <ul style={{listStylePosition: 'outside', width: '25%'}}>
    <li style={{border: '1px solid #000000'}}>Coffee -
      <span style={{display: 'inline !important', float: 'none', backgroundColor: 'transparent', color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman', fontSize: 16, fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, letterSpacing: 'normal', listStylePosition: 'inside', orphans: 2, textAlign: 'left', textDecoration: 'none', textIndent: 0, textTransform: 'none', WebkitTextStrokeWidth: 0, whiteSpace: 'normal', wordSpacing: 0}}>
        A brewed drink prepared from roasted coffee beans...</span></li>
    <li style={{border: '1px solid #000000', borderTop: 0}}>Tea</li>
    <li style={{border: '1px solid #000000', borderTop: 0}}>Coca-cola</li>
  </ul>
  <p>"list-style-position: inside;" means that the bullet points will be inside 
    the list item. As it is part of the list item, it will be part of the text and 
    push the text at the start:</p>
  <ul style={{listStylePosition: 'inside', width: '25%'}}>
    <li style={{border: '1px solid #000000'}}>Coffee -
      <span style={{display: 'inline !important', float: 'none', backgroundColor: 'transparent', color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman', fontSize: 16, fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, letterSpacing: 'normal', listStylePosition: 'inside', orphans: 2, textAlign: 'left', textDecoration: 'none', textIndent: 0, textTransform: 'none', WebkitTextStrokeWidth: 0, whiteSpace: 'normal', wordSpacing: 0}}>
        A brewed drink prepared from roasted coffee beans...</span></li>
    <li style={{border: '1px solid #000000', borderTop: 0}}>Tea</li>
    <li style={{border: '1px solid #000000', borderTop: 0}}>Coca-cola</li>
  </ul>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ul.a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; list-style-position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> outside<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />ul.b <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;list-style-position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> inside<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_list-style-position" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Remove Default Settings</h2>
  <p>The <code className="w3-codespan">list-style-type:none</code> property can also be 
    used to remove the markers/bullets. Note that the list also has default margin 
    and padding. To remove this, add <code className="w3-codespan">margin:0</code> and <code className="w3-codespan">padding:0</code> to &lt;ul&gt; or &lt;ol&gt;:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ul
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          list-style-type<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_list-style_none" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <hr />
  <h2>List - Shorthand property</h2>
  <p>The <code className="w3-codespan">list-style</code> property is a shorthand property. It is used to set all the 
    list properties in one declaration:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ul
        <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp;
          list-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> square inside url("sqpurple.gif")<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <a target="_blank" href="tryit.asp?filename=trycss_list-style" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
  </div>
  <p>When using the shorthand property, the order of the property values are:</p>
  <ul>
    <li><code className="w3-codespan">list-style-type</code> (if a list-style-image is specified, 
      the value of this property will be displayed if the image for some reason 
      cannot be displayed)</li>
    <li><code className="w3-codespan">list-style-position</code> (specifies whether the list-item markers should appear inside or outside the content flow)</li>
    <li><code className="w3-codespan">list-style-image</code> (specifies an image as the list item 
      marker)</li>
  </ul>
  <p>If one of the property values above are missing, the default value for the 
    missing property will be inserted, if any.</p>
  <hr />
  <h2>Styling List With Colors</h2>
  <p>We can also style lists with colors, to make them look a little more 
    interesting.</p>
  <p>Anything added to the &lt;ol&gt; or &lt;ul&gt; tag, affects the entire list, while 
    properties added to the &lt;li&gt; tag will affect the individual list items:</p>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        ol <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #ff9999<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />ul <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> #3399ff<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 20px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />ol li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            #ffe5e5<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
          margin-left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 35px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />ul li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            #cce5ff<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
    <p>Result:</p>
    <div className="w3-padding w3-white notranslate">
      <ol id="ex4">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ol>
      <ul id="ex5">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ul>
    </div>
    <a target="_blank" href="tryit.asp?filename=trycss_list-style_colors" className="w3-btn w3-margin-bottom w3-margin-top">Try it Yourself »</a>
  </div>
  <hr />
  <h2>More Examples</h2>
  <p><a target="_blank" href="tryit.asp?filename=trycss_list-style-red-border">Customized list with a red left border</a><br />
    This example demonstrates how to create a list with a red left border.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_list-style-border">Full-width bordered list</a><br />
    This example demonstrates how to create a bordered list without bullets.</p>
  <p><a target="_blank" href="tryit.asp?filename=trycss_list-style-type_all">All the different list-item markers for lists</a><br />
    This example demonstrates all the different list-item markers in CSS.</p>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_list1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_list2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_list3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_list4" target="_blank">Exercise 4 »</a>
    </div>
  </div>
  <hr />
  <h2>All CSS List Properties</h2>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '20%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_list-style.asp">list-style</a></td>
        <td>Sets all the properties for a list in one declaration</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_list-style-image.asp">list-style-image</a></td>
        <td>Specifies an image as the list-item marker</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_list-style-position.asp">list-style-position</a></td>
        <td>Specifies the position of the list-item markers (bullet points)</td>
      </tr>
      <tr>
        <td><a href="/cssref/pr_list-style-type.asp">list-style-type</a></td>
        <td>Specifies the type of list-item marker</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css_link.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css_table.asp">Next ❯</a>
  </div>
</div>

    
      <Codepen
        src={
            "https://codepen.io/langhamerm/embed/dyoYxxG?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
</div>
  );
};
export default Text5;

