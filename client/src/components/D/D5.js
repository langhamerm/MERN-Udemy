import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';

const D5 = () => {
  return (
    <div>
  

  <div className="w3-row w3-white">
  <div className="w3-col l10 m12" id="main">
    <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
      {/* MainLeaderboard*/}
      {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
      <div id="snhb-main_leaderboard-0" data-google-query-id="CLq14ejKzucCFYTFwAodRk4Bow"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" width={468} height={60} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={1} data-load-complete="true" /></div></div>
      {/* adspace leaderboard */}
    </div>
    <h1>CSS <span className="color_h1">Layout - float and clear</span></h1>
    <div className="w3-clear nextprev">
      <a className="w3-left w3-btn" href="css_overflow.asp">❮ Previous</a>
      <a className="w3-right w3-btn" href="css_inline-block.asp">Next ❯</a>
    </div>
    <hr />
    <p className="intro">The CSS <code className="w3-codespan">float</code> property specifies 
      how an element should float.</p>
    <p className="intro">The CSS <code className="w3-codespan">clear</code> property 
      specifies what elements can float beside the cleared element and on which side.</p>
    <div style={{backgroundColor: '#2196F3', padding: 16, float: 'left', width: '30%', opacity: '0.85', textAlign: 'center'}}>
      <span className="floatl" />
    </div>
    <div style={{backgroundColor: '#F44336', padding: 16, float: 'right', width: '30%', opacity: '0.85', textAlign: 'center'}}>
      <span className="floatr" />
    </div>
    <br /><br />
    <hr style={{clear: 'both', marginBottom: 15, marginTop: 32}} />
    <h2>The float Property</h2>
    <p>The <code className="w3-codespan">float</code> property is used for 
      positioning and formatting content e.g. let an image float left to the text in a 
      container.</p>
    <p>The <code className="w3-codespan">float</code> property can have one of the 
      following values:</p>
    <ul>
      <li>left - The element floats to the left of its container</li>
      <li>right - The element floats to the right of its container</li>
      <li>none - The element does not float (will be displayed just where it occurs in the text). This is default</li>
      <li>inherit - The element inherits the float value of its parent</li>
    </ul>
    <p>In its simplest use, the <code className="w3-codespan">float</code> property can be used to wrap text around images.</p>
    <hr />
    <h2>Example - float: right;</h2>
    <p>The following example specifies that an image should float to the <strong>right</strong> in a text:</p>
    <div className="w3-clear w3-border w3-padding">
      <p><img src="pineapple.jpg" alt="Pineapple" style={{width: 170, height: 170, float: 'right', marginLeft: 15, marginBottom: 10}} />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. <span className="w3-hide-small">Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...</span></p>
    </div>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          img <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> right<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_layout_float" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>Example - float: left;</h2>
    <p>The following example specifies that an image should float to the <strong>left</strong> in a text:</p>
    <div className="w3-clear w3-border w3-padding">
      <p><img src="pineapple.jpg" alt="Pineapple" style={{width: 170, height: 170, float: 'left', marginRight: 15, marginBottom: 10}} />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. <span className="w3-hide-small">Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...</span></p>
    </div>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          img <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_layout_float2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>Example - No float</h2>
    <p>In the following example the image will be displayed just where it occurs in 
      the text (float: none;):</p>
    <div className="w3-clear w3-border w3-padding">
      <p><img src="pineapple.jpg" alt="Pineapple" style={{maxWidth: 185, width: '50%', float: 'none'}} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. <span className="w3-hide-small">Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...</span></p>
    </div>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          img <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_layout_float_none" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>The clear Property</h2>
    <p>The <code className="w3-codespan">clear</code> property specifies what 
      elements can float beside the cleared element and on which side.</p>
    <p>The <code className="w3-codespan">clear</code> property can have one of the 
      following values:</p>
    <ul>
      <li>none - Allows floating elements on both sides. This is default</li>
      <li>left - No floating elements allowed on the left side</li>
      <li>right- No floating elements allowed on the right side</li>
      <li>both - No floating elements allowed on either the left or the right
        side</li>
      <li>inherit - The element inherits the clear value of its parent</li>
    </ul>
    <p>The most common way to use the <code className="w3-codespan">clear</code> 
      property is after you have used a <code className="w3-codespan">float</code> 
      property on an element.</p>
    <p>When clearing floats, you should match the clear to the float: If an element 
      is floated to the left, then you should clear to the left. Your floated element 
      will continue to float, but the cleared element will appear below it on the web 
      page.</p>
    <p>The following example clears the float to the left. Means that no floating 
      elements are allowed on the left side (of the div):</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          div <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;clear<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_layout_clear" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
      {/* MidContent */}
      {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
      <div id="snhb-mid_content-0" data-google-query-id="CKKh_enKzucCFQrdwAodUgEP2w"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={300} height={250} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={4} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    </div>
    <hr />
    <h2>The clearfix Hack</h2>
    <p>If an element is taller than the element containing it, and it is floated, it 
      will "overflow" outside of its container:</p>
    <div className="w3-border w3-padding">
      <div className="w3-row-padding" style={{margin: '0 -16px 32px'}}>
        <div className="w3-half">
          <h3>Without Clearfix</h3>
          <img src="/howto/clearfix_prob.jpg" style={{width: '100%'}} className="w3-image" />
        </div>
        <div className="w3-half">
          <h3>With Clearfix</h3>
          <img src="/howto/clearfix_solution.jpg" style={{width: '100%'}} className="w3-image" />
        </div></div>
    </div>
    <p>Then we can add <code className="w3-codespan">overflow: auto;</code> to the containing element to fix 
      this problem:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          .clearfix <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;overflow<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_layout_clearfix" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <p>The <code className="w3-codespan">overflow: auto</code> clearfix works well as long as you are able to keep control of your margins and padding (else you 
      might see scrollbars). The 
      <strong>new, modern clearfix hack</strong> however, is safer to use, and the following code is used for most webpages:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          .clearfix::after <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> ""<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;clear<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> both<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> table<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_layout_clearfix2" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <div className="w3-note w3-panel">
      <p>You will learn more about the <code className="w3-codespan">::after</code> pseudo-element in a later chapter.</p>
    </div>
    <hr />
    <h2>Grid of Boxes / Equal Width Boxes</h2>
    <div className="w3-row-padding w3-center" style={{margin: '0 -16px'}}>
      <div className="w3-col s6 w3-padding-32" style={{backgroundColor: '#bbb'}}>
        <p>Box 1</p>
      </div>
      <div className="w3-col s6 w3-padding-32" style={{backgroundColor: '#ccc'}}>
        <p>Box 2</p>
      </div>
    </div>
    <br />
    <div className="w3-row-padding w3-center" style={{margin: '0 -16px'}}>
      <div className="w3-col s4 w3-padding-32" style={{backgroundColor: '#bbb'}}>
        <p>Box 1</p>
      </div>
      <div className="w3-col s4 w3-padding-32" style={{backgroundColor: '#ccc'}}>
        <p>Box 2</p>
      </div>
      <div className="w3-col s4 w3-padding-32" style={{backgroundColor: '#ddd'}}>
        <p>Box 3</p>
      </div>
    </div>
    <p>With the <code className="w3-codespan">float</code> property, it is easy to float boxes of content side by side:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          * <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;box-sizing<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> border-box<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.box <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 33.33%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* three 
              boxes (use 25% for four, and 50% for two, etc) */</span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              50px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* if you want space between the images */</span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_float_boxes" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <div className="w3-note w3-panel">
      <p><strong>What is box-sizing?</strong></p>
      <p>You can easily create three floating boxes side by side. However, when you add something that enlarges the width of each box (e.g. padding or borders), the box will break. The <code className="w3-codespan">box-sizing</code> property allows us to include the padding and border in the box's total width (and height), making sure that the padding stays inside of the box and that it does not break.</p>
      <p>You can read more about the box-sizing property in our <a href="css3_box-sizing.asp">CSS Box Sizing Chapter</a>.</p>
    </div>
    <hr />
    <h2>Images Side By Side</h2>
    <div className="w3-row-padding" style={{margin: '0 -16px'}}>
      <div className="w3-col m4">
        <img src="img_5terre.jpg" alt="Italy" style={{width: '100%'}} />
      </div>
      <div className="w3-col m4">
        <img src="img_forest.jpg" alt="Forest" style={{width: '100%'}} />
      </div>
      <div className="w3-col m4">
        <img src="img_mountains.jpg" alt="Mountains" style={{width: '100%'}} />
      </div>
    </div>
    <p>The grid of boxes can also be used to display images side by side:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          .img-container <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 33.33%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* three 
              containers (use 25% for four, and 50% for two, etc) */</span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              5px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <span className="commentcolor" style={{color: 'green'}}>/* if you want space between the images */</span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_float_images_side" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>Equal Height Boxes</h2>
    <p>In the previous example, you learned how to float boxes side by side with an equal width. However, it is not easy to create floating boxes with equal heights. A quick fix 
      however, is to set a fixed height, like in the example below:</p>
    <div className="w3-row-padding w3-center" style={{margin: '0 -16px'}}>
      <div className="w3-col s6 w3-padding-32" style={{backgroundColor: '#bbb', height: 300}}>
        <h2>Box 1</h2>
        <p>Some content, some content, some content</p>
      </div>
      <div className="w3-col s6 w3-padding-32" style={{backgroundColor: '#ccc', height: 300}}>
        <h2>Box 2</h2>
        <p>Some content, some content, some content</p>
        <p>Some content, some content, some content</p>
        <p>Some content, some content, some content</p>
      </div>
    </div>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          .box <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 500px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_float_boxes_height" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <p><strong>However</strong>, this is not very flexible. It is ok if you can guarantee that the boxes will always have the same amount of content in them. 
      But many times, the content is not the same. If you try the example above on a mobile phone, you will see that the second 
      box's content will be displayed outside of the box. 
      This is where CSS3 Flexbox comes in handy - as it can automatically stretch 
      boxes to be as long as the longest box:</p>
    <style dangerouslySetInnerHTML={{__html: "\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  background-color: DodgerBlue;\n}\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  width: 50%;\n  margin: 10px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 24px;\n}\n\n" }} />
    <div className="w3-example">
      <h3>Example</h3>
      <p>Using <strong>Flexbox</strong> to create flexible boxes:</p>
      <div className="w3-padding w3-padding-16 w3-white">
        <div className="flex-container">
          <div>Box 1 - This is some text to make sure that the content gets really tall. This is some text to make sure that the content gets really tall. This is some text to make sure that the content gets really tall.</div>
          <div>Box 2 - My height will follow Box 1.</div>
        </div>
      </div>
      <a target="_blank" href="tryit.asp?filename=trycss_float_boxes_flex" className="w3-btn w3-margin-top w3-margin-bottom">Try it Yourself »</a>
    </div>
    <div className="w3-note w3-panel">
      <p>The only problem with Flexbox is that it does not work in Internet Explorer 10 or earlier versions. You can read more about the Flexbox Layout Module in our <a href="css3_flexbox.asp">CSS Flexbox Chapter</a>.</p>
    </div>
    <hr />
    <h2>Navigation Menu</h2>
    <style dangerouslySetInnerHTML={{__html: "\nul.navbarmenu {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n}\n\nul.navbarmenu li {\n    float: left;\n}\n\nul.navbarmenu li a {\n    display: inline-block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nul.navbarmenu li a:hover {\n    background-color: #111;\n}\n\nul.navbarmenu li a.active {\n    background-color: red;\n}\n" }} />
    <p>Use <code className="w3-codespan">float</code> with a list of hyperlinks to create a horizontal menu:</p>
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-white w3-padding">
        <ul className="navbarmenu">
          <li><a href="javascript:void(0)" className="active">Home</a></li>
          <li><a href="javascript:void(0)">News</a></li>
          <li><a href="javascript:void(0)">Contact</a></li>
          <li className="w3-hide-small"><a href="javascript:void(0)">About</a></li>
        </ul>
      </div>
      <a target="_blank" href="tryit.asp?filename=trycss_float5" className="w3-btn w3-margin-top w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>Web Layout Example</h2>
    <p>It is also common to do entire web layouts using the <code className="w3-codespan">float</code> property:</p>
    <iframe src="trycss_layout_cols.htm" className="w3-hide-small" style={{width: '100%', border: '1px solid #f1f1f1', height: 420, padding: 5, overflow: 'auto'}} />
    <div className="w3-example">
      <h3>Example</h3>
      <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
          .header, .footer <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> grey<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;color<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> white<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            &nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.column <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; float<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> left<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
            padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 15px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.clearfix::after <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;content<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
              ""<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;clear<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> both<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> table<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
          </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.menu <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; 
            width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 25%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />.content <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 75%<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
      <a target="_blank" href="tryit.asp?filename=trycss_layout_cols" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
    </div>
    <hr />
    <h2>More Examples</h2>
    <p><a target="_blank" href="tryit.asp?filename=trycss_float2">An image with border and margins that floats to the right in a paragraph</a><br />
      Let an image float to the right in a paragraph. Add border and margins to the image.</p>
    <p><a target="_blank" href="tryit.asp?filename=trycss_float3">An image with a caption that floats to the right</a><br />
      Let an image with a caption float to the right.</p>
    <p><a target="_blank" href="tryit.asp?filename=trycss_float4">Let the first letter of a paragraph float to the left</a><br />
      Let the first letter of a paragraph float to the left and style the letter.</p>
    <p><a target="_blank" href="tryit.asp?filename=trycss_layout_webpage">Creating a website with float</a><br />
      Use float to create a homepage with a navbar, header, footer, left content and main content.</p>
    <hr />
    <h2>All CSS Float Properties</h2>
    <table className="w3-table-all notranslate">
      <tbody><tr>
          <th style={{width: '20%'}}>Property</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><a href="/cssref/css3_pr_box-sizing.asp">box-sizing</a></td>
          <td>Defines how the width and height of an element are calculated: should they include padding and borders, or not</td>
        </tr>
        <tr>
          <td><a href="/cssref/pr_class_clear.asp">clear</a></td>
          <td>Specifies what elements can float beside the cleared element and on 
            which side</td>
        </tr>
        <tr>
          <td><a href="/cssref/pr_class_float.asp">float</a></td>
          <td>Specifies how an element should float</td>
        </tr>
        <tr>
          <td><a href="/cssref/pr_pos_overflow.asp">overflow</a></td>
          <td>Specifies what happens if content overflows an element's box</td>
        </tr>
        <tr>
          <td><a href="/cssref/css3_pr_overflow-x.asp">overflow-x</a></td>
          <td>Specifies what to do with the left/right edges of the content if it overflows the element's content area</td>
        </tr>
        <tr>
          <td><a href="/cssref/css3_pr_overflow-y.asp">overflow-y</a></td>
          <td>Specifies what to do with the top/bottom edges of the content if it overflows the element's content area</td>
        </tr>
      </tbody></table>
    <br />
    <div className="w3-clear nextprev">
      <a className="w3-left w3-btn" href="css_overflow.asp">❮ Previous</a>
      <a className="w3-right w3-btn" href="css_inline-block.asp">Next ❯</a>
    </div>
  </div>
  <div className="w3-col l2 m12" id="right">
    <div className="sidesection">
      <div id="skyscraper">
        {/*<pre>wide_skyscraper, all: [160,600][300,600][320,50][120,600][300,1050]</pre>*/}
        <div id="snhb-wide_skyscraper-0" style={{minHeight: 0}} data-google-query-id="CLu14ejKzucCFYTFwAodRk4Bow"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0" title="3rd party ad content" width={320} height={50} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={2} data-load-complete="true" /></div></div>
        {/* adspace wide*/}
      </div>
    </div>
    <div className="sidesection">
      <h4><a href="/colors/colors_picker.asp">COLOR PICKER</a></h4>
      <a href="/colors/colors_picker.asp">
        <img src="/images/colorpicker.gif" alt="colorpicker" /></a>
    </div>
    <div className="sidesection" id="moreAboutSubject">
    </div>
    {/*
<div id="sidesection_exercise" class="sidesection" style="background-color:#555555;max-width:200px;margin:auto;margin-bottom:32px">
  <div class="w3-container w3-text-white">
    <h4>Exercises</h4>
  </div>
  <div>
    <div class="w3-light-grey">
<a target="_blank" href="/html/exercise.asp" style="padding-top:8px">HTML</a>
<a target="_blank" href="/css/exercise.asp">CSS</a>
<a target="_blank" href="/js/exercise_js.asp">JavaScript</a>
<a target="_blank" href="/sql/exercise.asp">SQL</a>
<a target="_blank" href="/php/exercise.asp">PHP</a>
<a target="_blank" href="/python/exercise.asp">Python</a>
<a target="_blank" href="/bootstrap/exercise_bs3.asp">Bootstrap</a>
<a target="_blank" href="/jquery/exercise_jq.asp" style="padding-bottom:8px">jQuery</a>
    </div>
  </div>
</div>
*/}
    <div className="sidesection w3-light-grey" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: 230}}>
      <div className="w3-container w3-dark-grey">
        <h4><a href="/howto/default.asp" className="w3-hover-text-white">HOW TO</a></h4>
      </div>
      <div className="w3-container w3-left-align w3-padding-16">
        <a href="/howto/howto_js_tabs.asp">Tabs</a><br />
        <a href="/howto/howto_css_dropdown.asp">Dropdowns</a><br />
        <a href="/howto/howto_js_accordion.asp">Accordions</a><br />
        <a href="/howto/howto_js_sidenav.asp">Side Navigation</a><br />
        <a href="/howto/howto_js_topnav.asp">Top Navigation</a><br />
        <a href="/howto/howto_css_modals.asp">Modal Boxes</a><br />
        <a href="/howto/howto_js_progressbar.asp">Progress Bars</a><br />
        <a href="/howto/howto_css_parallax.asp">Parallax</a><br />
        <a href="/howto/howto_css_login_form.asp">Login Form</a><br />
        <a href="/howto/howto_html_include.asp">HTML Includes</a><br />
        <a href="/howto/howto_google_maps.asp">Google Maps</a><br />
        <a href="/howto/howto_js_rangeslider.asp">Range Sliders</a><br />
        <a href="/howto/howto_css_tooltip.asp">Tooltips</a><br />
        <a href="/howto/howto_js_slideshow.asp">Slideshow</a><br />
        <a href="/howto/howto_js_filter_lists.asp">Filter List</a><br />
        <a href="/howto/howto_js_sort_list.asp">Sort List</a><br />
      </div>
    </div>
    <div className="sidesection">
      <h4>SHARE</h4>
      <div className="w3-text-grey sharethis">
        <a href="http://www.facebook.com/sharer.php?u=https://www.w3schools.com/css/css_float.asp" target="_blank" title="Facebook"><span className="fa fa-facebook-square fa-2x" /></a><a href="https://twitter.com/home?status=Currently reading https://www.w3schools.com/css/css_float.asp" target="_blank" title="Twitter"><span className="fa fa-twitter-square fa-2x" /></a>
        <br /><br />
        <a href="javascript:void(0);" onclick="clickFBLike()" title="Like W3Schools on Facebook">
          <span className="fa fa-thumbs-o-up fa-2x" /></a>
        <div id="fblikeframe" className="w3-modal">
          <div className="w3-modal-content w3-padding-64 w3-animate-zoom" id="popupDIV" />
        </div>
      </div>
    </div>
    <div className="sidesection">
      <h4><a target="_blank" href="//www.w3schools.com/cert/default.asp">CERTIFICATES</a></h4>
      <p>
        <a href="/cert/cert_html.asp">HTML</a><br />
        <a href="/cert/cert_css.asp">CSS</a><br />
        <a href="/cert/cert_javascript.asp">JavaScript</a><br />
        <a href="/cert/cert_sql.asp">SQL</a><br />
        <a href="/cert/cert_python.asp">Python</a><br />
        <a href="/cert/cert_php.asp">PHP</a><br />
        <a href="/cert/cert_jquery.asp">jQuery</a><br />
        <a href="/cert/cert_bootstrap.asp">Bootstrap</a><br />
        <a href="/cert/cert_xml.asp">XML</a></p>
      <a href="//www.w3schools.com/cert/default.asp" className="w3-button w3-dark-grey" style={{textDecoration: 'none'}}>
        Read More »</a>
    </div>
    <div id="stickypos" className="sidesection" style={{textAlign: 'center', position: 'sticky', top: 50}}>
      <div id="stickyadcontainer">
        <div style={{position: 'relative', margin: 'auto'}}>
          {/*<pre>sidebar_sticky, desktop: [120,600][160,600][300,600][300,250]</pre>*/}
          <div id="snhb-sidebar_sticky-0" style={{display: 'none'}} />
        </div>
      </div>
    </div>
  </div>
</div>



<Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default D5;
