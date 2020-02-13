import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import select from "../../images/csselect.png";
import ele from "../../images/cssele.png";
import cssid from "../../images/cssid.png";
import cssclass from "../../images/cssclass.png";
import all from "../../images/allcssselectors.png";
const ACSS2 = () => {
  return (
    <div>
<div className="w3-main w3-light-grey" id="belowtopnav" style={{marginLeft: 220, paddingTop: 0}}>
  <div className="w3-row w3-white">
    <div className="w3-col l10 m12" id="main">
      <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
        {/* MainLeaderboard*/}
        {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-main_leaderboard-0" data-google-query-id="COnG_aapz-cCFcooaQodh88ANA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="https://secureframe.doubleclick.net/container.html?ecs=20200213" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
        {/* adspace leaderboard */}
      </div>
      <h1>CSS <span className="color_h1">Multiple Backgrounds</span></h1>
      <div className="w3-clear nextprev">
        <a className="w3-left w3-btn" href="css3_border_images.asp">❮ Previous</a>
        <a className="w3-right w3-btn" href="css3_colors.asp">Next ❯</a>
      </div>
      <hr />
      <div id="example1">
        <p>In this chapter you will learn how to add multiple background images to one 
          element.</p>
        <p>You will also learn about the following properties:</p>
        <ul>
          <li><code className="w3-codespan">background-size</code></li>
          <li><code className="w3-codespan">background-origin</code></li>
          <li><code className="w3-codespan">background-clip</code></li>
        </ul>
      </div>
      <hr />
      <h2>CSS Multiple Backgrounds</h2>
      <p>CSS allows you to add multiple background images for an element, through the 
        <code className="w3-codespan">background-image</code> property.</p>
      <p>The different background images are separated by commas, and the images are 
        stacked on top of each other, where the first image is closest to the viewer.</p>
      <p>The following example has two background images, the first image is a flower 
        (aligned to the bottom and right) and the second image is a paper background (aligned to the top-left corner):</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #example1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_flwr.gif), url(paper.gif)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> right bottom, left top<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-repeat<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> no-repeat, repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background_multiple">Try it Yourself »</a>
      </div>
      <p>Multiple background images can be specified using either the individual 
        background properties (as above) or the <code className="w3-codespan">background</code> shorthand property.</p>
      <p>The following example uses the <code className="w3-codespan">background</code> shorthand property (same result as 
        example above):</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #example1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_flwr.gif) right bottom 
                no-repeat, url(paper.gif) left top repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background_multiple2">Try it Yourself »</a>
      </div>
      <hr />
      <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
        {/* MidContent */}
        {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-mid_content-0" data-google-query-id="CP6piKipz-cCFYmnaQodWHkDzQ"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={4} style={{border: 0, verticalAlign: 'bottom'}} data-integralas-id-d53aefd3-eed5-b300-cab4-d5b47ef3e6ab data-load-complete="true" /></div></div>
      </div>
      <hr />
      <h2>CSS Background Size</h2>
      <p>The CSS <code className="w3-codespan">background-size</code> property allows you to specify the size of background images.</p>
      <p>The size can be specified in lengths, percentages, or by using one of the two 
        keywords: contain or cover.</p>
      <p>The following example resizes a background image to much smaller than the original image (using pixels):</p>
      <div className="div1">
        <div id="example3">
          <h2>Lorem Ipsum Dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <p>Here is the code:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #div1
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp;
              background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_flower.jpg)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;&nbsp;background-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 100px 80px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-repeat<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> no-repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
          </span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background-size">Try it Yourself »</a>
      </div>
      <p>The two other possible values for <code className="w3-codespan">background-size</code> are <code className="w3-codespan">contain</code> 
        and <code className="w3-codespan">cover</code>.</p>
      <p>The <code className="w3-codespan">contain</code> keyword scales the background image to be as large as possible 
        (but both its width and its height must fit inside the content area). As such, depending on the proportions of the background 
        image and the background positioning area, there may be some areas of 
        the background which are not covered by the background image.</p>
      <p>The <code className="w3-codespan">cover</code> keyword scales the background image so that the content area is 
        completely covered by the background image (both its width and height are equal to or 
        exceed the content area). As such, some parts of the background image may not be 
        visible in the background positioning area.</p>
      <p>The following example illustrates the use of <code className="w3-codespan">contain</code> and <code className="w3-codespan">cover</code>:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #div1
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp;
              background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_flower.jpg)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;
              background-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> contain<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background-repeat<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> no-repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />#div2
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp;
              background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_flower.jpg)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;
              background-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> cover<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;
              background-repeat<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> no-repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
          </span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background-size_contain">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Define Sizes of Multiple Background Images</h2>
      <p>The <code className="w3-codespan">background-size</code> property also accepts multiple values for background size 
        (using a comma-separated list), when working with multiple backgrounds.</p>
      <p>The following example has three background images specified, with different 
        background-size value for each image:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #example1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_tree.gif) left top 
                no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top 
                repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 50px, 130px, auto<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background_multiple3">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Full Size Background Image</h2>
      <p>Now we want to have a background image on a website that covers the entire 
        browser window at all times.</p>
      <p>The requirements are as follows:</p>
      <ul>
        <li>Fill the entire page with the image (no white space)</li>
        <li>Scale image as needed</li>
        <li>Center image on page</li>
        <li>Do not cause scrollbars</li>
      </ul>
      <p>The following example shows how to do it; Use the &lt;html&gt; element 
        (the &lt;html&gt; element is always at least the height of the browser window). Then set a fixed and centered background on it. 
        Then adjust its size with the 
        background-size property:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            html <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_man.jpg) no-repeat 
                center fixed<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp;&nbsp;background-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> cover<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background_full">Try it Yourself »</a>
      </div>
      <hr />
      <h2>Hero Image</h2>
      <p>You could also use different background properties on a &lt;div&gt; to create a hero image (a large image with text), and place it where you want.</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            .hero-image <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_man.jpg) no-repeat center<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br />&nbsp; 
              background-size<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> cover<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 500px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
                relative<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background_hero">Try it Yourself »</a>
      </div>
      <hr />
      <h2>CSS background-origin Property</h2>
      <p>The CSS <code className="w3-codespan">background-origin</code> property specifies where the background image is 
        positioned.</p>
      <p>The property takes three different values:</p>
      <ul>
        <li>border-box - the background image starts from the upper left corner of the border</li>
        <li>padding-box - (default) the background image starts from the upper left corner of the padding edge</li>
        <li>content-box - the background image starts from the upper left corner of the content</li>
      </ul>
      <p>The following example illustrates the <code className="w3-codespan">background-origin</code> property:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #example1
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px solid black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 35px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_flwr.gif)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp; 
              background-repeat<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> no-repeat<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
              background-origin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> content-box<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
          </span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background-origin">Try it Yourself »</a>
      </div>
      <hr />
      <h2>CSS background-clip Property</h2>
      <p>The CSS <code className="w3-codespan">background-clip</code> property specifies the painting area of the background.</p>
      <p>The property takes three different values:</p>
      <ul>
        <li>border-box - (default) the background is painted to the outside edge of the border</li>
        <li>padding-box - the background is painted to the outside edge of the padding</li>
        <li>content-box - the background is painted within the content box</li>
      </ul>
      <p>The following example illustrates the <code className="w3-codespan">background-clip</code> property:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #example1
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp; border<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 10px dotted black<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
              padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 35px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> yellow<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; 
              background-clip<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> content-box<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
          </span></div>
        <a target="_blank" className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_background-clip">Try it Yourself »</a>
      </div>
      <hr />
      <div className="w3-container w3-dark-grey w3-padding">
        <h2>Test Yourself with Exercises!</h2>
        <div className="w3-bar w3-margin-bottom">
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_backgrounds1" target="_blank">Exercise 1 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_backgrounds2" target="_blank">Exercise 2 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_backgrounds3" target="_blank">Exercise 3 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_backgrounds4" target="_blank">Exercise 4 »</a>
          <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_backgrounds5" target="_blank">Exercise 5 »</a>
        </div>
      </div>
      <hr />
      <h2>CSS Advanced Background Properties</h2>
      <table className="w3-table-all notranslate">
        <tbody><tr>
            <th style={{width: '28%'}}>Property</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><a href="/cssref/css3_pr_background.asp">background</a></td>
            <td>A shorthand property for setting all the background properties in one declaration</td>
          </tr>
          <tr>
            <td><a href="/cssref/css3_pr_background-clip.asp">background-clip</a></td>
            <td>Specifies the painting area of the background</td>
          </tr>
          <tr>
            <td><a href="/cssref/pr_background-image.asp">background-image</a></td>
            <td>Specifies one or more background images for an element</td>
          </tr>
          <tr>
            <td><a href="/cssref/css3_pr_background-origin.asp">background-origin</a></td>
            <td>Specifies where the background image(s) is/are positioned</td>
          </tr>
          <tr>
            <td><a href="/cssref/css3_pr_background-size.asp">background-size</a></td>
            <td>Specifies the size of the background image(s)</td>
          </tr>
        </tbody></table>
      <br />
      <div className="w3-clear nextprev">
        <a className="w3-left w3-btn" href="css3_border_images.asp">❮ Previous</a>
        <a className="w3-right w3-btn" href="css3_colors.asp">Next ❯</a>
      </div>
    </div>
    <div className="w3-col l2 m12" id="right">
      <div className="sidesection">
        <div id="skyscraper">
          {/*<pre>wide_skyscraper, all: [160,600][300,600][320,50][120,600][300,1050]</pre>*/}
          <div id="snhb-wide_skyscraper-0" style={{minHeight: 0}} data-google-query-id="COrG_aapz-cCFcooaQodh88ANA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0__container__" style={{border: '0pt none', display: 'inline-block', width: 320, height: 50}}><iframe frameBorder={0} src="https://secureframe.doubleclick.net/container.html?ecs=20200213" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={320} height={50} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={2} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
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
          <a href="http://www.facebook.com/sharer.php?u=https://www.w3schools.com/css/css3_backgrounds.asp" target="_blank" title="Facebook"><span className="fa fa-facebook-square fa-2x" /></a><a href="https://twitter.com/home?status=Currently reading https://www.w3schools.com/css/css3_backgrounds.asp" target="_blank" title="Twitter"><span className="fa fa-twitter-square fa-2x" /></a>
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
  <div id="footer" className="footer w3-container w3-white">
    <hr />
    <div style={{overflow: 'auto'}}>
      <div className="bottomad">
        {/* BottomMediumRectangle */}
        {/*<pre>bottom_medium_rectangle, all: [970,250][300,250][336,280]</pre>*/}
        <div id="snhb-bottom_medium_rectangle-0" style={{padding: '0 10px 10px 0', float: 'left', width: 'auto'}} data-google-query-id="COWH-qapz-cCFcooaQodh88ANA"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//bottom_medium_rectangle_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//bottom_medium_rectangle_0" title="3rd party ad content" width={336} height={280} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={3} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
        {/* adspace bmr */}
        {/* RightBottomMediumRectangle */}
        {/*<pre>right_bottom_medium_rectangle, desktop: [300,250][336,280]</pre>*/}
        <div id="snhb-right_bottom_medium_rectangle-0" style={{padding: '0px 10px 10px 0px', float: 'left', width: 'auto', display: 'none'}} />
      </div>
    </div>
    <hr />
    <div className="w3-row-padding w3-center w3-small" style={{margin: '0 -16px'}}>
      <div className="w3-col l3 m3 s12">
        <a className="w3-button w3-light-grey w3-block" href="javascript:void(0);" onclick="displayError();return false" style={{whiteSpace: 'nowrap', textDecoration: 'none', marginTop: 1, marginBottom: 1}}>REPORT ERROR</a>
      </div>
      <div className="w3-col l3 m3 s12">
        <a className="w3-button w3-light-grey w3-block" href="javascript:void(0);" target="_blank" onclick="printPage();return false;" style={{textDecoration: 'none', marginTop: 1, marginBottom: 1}}>PRINT PAGE</a>
      </div>
      <div className="w3-col l3 m3 s12">
        <a className="w3-button w3-light-grey w3-block" href="/forum/default.asp" target="_blank" style={{textDecoration: 'none', marginTop: 1, marginBottom: 1}}>FORUM</a>
      </div>
      <div className="w3-col l3 m3 s12">
        <a className="w3-button w3-light-grey w3-block" href="/about/default.asp" target="_top" style={{textDecoration: 'none', marginTop: 1, marginBottom: 1}}>ABOUT</a>
      </div>
    </div>
    <hr />
    <div className="w3-light-grey w3-padding w3-margin-bottom" id="err_form" style={{display: 'none', position: 'relative'}}>
      <span onclick="this.parentElement.style.display='none'" className="w3-button w3-display-topright w3-large">×</span>
      <h2>Report Error</h2>
      <p>If you want to report an error, or if you want to make a suggestion, do not hesitate to send us an e-mail:</p>
      <p>help@w3schools.com</p>
      <br />
      {/*
<h2>Your Suggestion:</h2>
<form>
<div class="w3-section">      
<label for="err_email">Your E-mail:</label>
<input class="w3-input w3-border" type="text" style="margin-top:5px;width:100%" id="err_email" name="err_email">
</div>
<div class="w3-section">      
<label for="err_email">Page address:</label>
<input class="w3-input w3-border" type="text" style="width:100%;margin-top:5px" id="err_url" name="err_url" disabled="disabled">
</div>
<div class="w3-section">
<label for="err_email">Description:</label>
<textarea rows="10" class="w3-input w3-border" id="err_desc" name="err_desc" style="width:100%;margin-top:5px;resize:vertical;"></textarea>
</div>
<div class="form-group">        
<button type="button" class="w3-button w3-dark-grey" onclick="sendErr()">Submit</button>
</div>
<br>
</form>
*/}
    </div>
    <div className="w3-container w3-light-grey w3-padding" id="err_sent" style={{display: 'none', position: 'relative'}}>
      <span onclick="this.parentElement.style.display='none'" className="w3-button w3-display-topright">×</span>     
      <h2>Thank You For Helping Us!</h2>
      <p>Your message has been sent to W3Schools.</p>
    </div>
    <div className="w3-row w3-center w3-small">
      <div className="w3-col l3 m6 s12">
        <div className="top10">
          <h4>Top Tutorials</h4>
          <a href="/html/default.asp">HTML Tutorial</a><br />
          <a href="/css/default.asp">CSS Tutorial</a><br />
          <a href="/js/default.asp">JavaScript Tutorial</a><br />
          <a href="/howto/default.asp">How To Tutorial</a><br />
          <a href="/sql/default.asp">SQL Tutorial</a><br />
          <a href="/python/default.asp">Python Tutorial</a><br />
          <a href="/w3css/default.asp">W3.CSS Tutorial</a><br />
          <a href="/bootstrap/bootstrap_ver.asp">Bootstrap Tutorial</a><br />
          <a href="/php/default.asp">PHP Tutorial</a><br />
          <a href="/jquery/default.asp">jQuery Tutorial</a><br />
          <a href="/java/default.asp">Java Tutorial</a><br />
          <a href="/cpp/default.asp">C++ Tutorial</a><br />
        </div>
      </div>
      <div className="w3-col l3 m6 s12">
        <div className="top10">
          <h4>Top References</h4>
          <a href="/tags/default.asp">HTML Reference</a><br />
          <a href="/cssref/default.asp">CSS Reference</a><br />
          <a href="/jsref/default.asp">JavaScript Reference</a><br />
          <a href="/sql/sql_ref_keywords.asp">SQL Reference</a><br />
          <a href="/python/python_reference.asp">Python Reference</a><br />
          <a href="/w3css/w3css_references.asp">W3.CSS Reference</a><br />
          <a href="/bootstrap/bootstrap_ref_all_classes.asp">Bootstrap Reference</a><br />
          <a href="/php/php_ref_overview.asp">PHP Reference</a><br />
          <a href="/colors/colors_names.asp">HTML Colors</a><br />
          <a href="/jquery/jquery_ref_overview.asp">jQuery Reference</a><br />
          <a href="/java/java_ref_keywords.asp">Java Reference</a><br />
          <a href="/angular/angular_ref_directives.asp">Angular Reference</a><br />
        </div>
      </div>
      <div className="w3-col l3 m6 s12">
        <div className="top10">
          <h4>Top Examples</h4>
          <a href="/html/html_examples.asp">HTML Examples</a><br />
          <a href="/css/css_examples.asp">CSS Examples</a><br />
          <a href="/js/js_examples.asp">JavaScript Examples</a><br />
          <a href="/howto/default.asp">How To Examples</a><br />
          <a href="/sql/sql_examples.asp">SQL Examples</a><br />
          <a href="/python/python_examples.asp">Python Examples</a><br />
          <a href="/w3css/w3css_examples.asp">W3.CSS Examples</a><br />
          <a href="/bootstrap/bootstrap_examples.asp">Bootstrap Examples</a><br />
          <a href="/php/php_examples.asp">PHP Examples</a><br />
          <a href="/jquery/jquery_examples.asp">jQuery Examples</a><br />
          <a href="/java/java_examples.asp">Java Examples</a><br />
          <a href="/xml/xml_examples.asp">XML Examples</a><br />
        </div>
      </div>
      <div className="w3-col l3 m6 s12">
        <div className="top10">
          <h4>Web Certificates</h4>
          <a href="/cert/default.asp">HTML Certificate</a><br />
          <a href="/cert/default.asp">CSS Certificate</a><br />
          <a href="/cert/default.asp">JavaScript Certificate</a><br />
          <a href="/cert/default.asp">SQL Certificate</a><br />
          <a href="/cert/default.asp">Python Certificate</a><br />
          <a href="/cert/default.asp">jQuery Certificate</a><br />
          <a href="/cert/default.asp">PHP Certificate</a><br />
          <a href="/cert/default.asp">Bootstrap Certificate</a><br />
          <a href="/cert/default.asp">XML Certificate</a><br />
          <a href="//www.w3schools.com/cert/default.asp" className="w3-button w3-margin-top w3-dark-grey" style={{textDecoration: 'none'}}>
            Get Certified »</a>
        </div>
      </div>        
    </div>        
    <hr />
    <div className="w3-center w3-small w3-opacity">
      W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding.
      Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.
      While using this site, you agree to have read and accepted our <a href="/about/about_copyright.asp">terms of use</a>,
      <a href="/about/about_privacy.asp">cookie and privacy policy</a>.
      <a href="/about/about_copyright.asp">Copyright 1999-2020</a> by Refsnes Data. All Rights Reserved.<br />
      <a href="//www.w3schools.com/w3css/">Powered by W3.CSS</a>.<br /><br />
      <a href="//www.w3schools.com">
        <img style={{width: 150, height: 28, border: 0}} src="/images/w3schoolscom_gray.gif" alt="W3Schools.com" /></a>
    </div>
    <br /><br />
  </div>
</div>

     
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default ACSS2;
