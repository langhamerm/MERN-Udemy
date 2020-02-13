import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';


const Q4 = () => {
  return (
    <div>



<div className="w3-main w3-light-grey" id="belowtopnav" style={{marginLeft: 220, paddingTop: 44}}>
  <div className="w3-row w3-white">
    <div className="w3-col l10 m12" id="main">
      <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
        {/* MainLeaderboard*/}
        {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-main_leaderboard-0" data-google-query-id="COn09f2Dz-cCFYMXAQod2poO_w"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="https://secureframe.doubleclick.net/container.html?ecs=20200213" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
        {/* adspace leaderboard */}
      </div>
      <h1>CSS <span className="color_h1">Image Sprites</span></h1>
      <div className="w3-clear nextprev">
        <a className="w3-left w3-btn" href="css_image_gallery.asp">❮ Previous</a>
        <a className="w3-right w3-btn" href="css_attribute_selectors.asp">Next ❯</a>
      </div>
      <hr />
      <h2>Image Sprites</h2>
      <p>An image sprite is a collection of images put into a single image.</p>
      <p>A web page with many images can take a long time to load and generates 
        multiple server requests.</p>
      <p>Using image sprites will reduce the number of server requests and save 
        bandwidth.</p>
      <hr />
      <h2>Image Sprites - Simple Example</h2>
      <p>Instead of using three separate images, we use this single image ("img_navsprites.gif"):</p>
      <p><img src="img_navsprites.gif" alt="navigation images" /></p>
      <p>With CSS, we can show just the part of the image we need.</p>
      <p>In the following example the CSS specifies which part of the "img_navsprites.gif" 
        image to show:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #home
            <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
              &nbsp;
              width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 46px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;&nbsp;height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 44px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp;
              background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url(img_navsprites.gif) 0 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
            </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_sprites_img" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p><b>Example explained:</b></p>
      <ul>
        <li><code className="w3-codespan">&lt;img id="home" src="img_trans.gif"&gt;</code> - Only defines a small transparent image 
          because the src attribute cannot be empty. The displayed image will be the background image we specify in CSS</li>
        <li><code className="w3-codespan">width: 46px; height: 44px;</code> - Defines the portion of the image we want to use</li>
        <li><code className="w3-codespan">background: url(img_navsprites.gif) 0 0;</code> - Defines the background image and its position (left 0px, top 0px)</li>
      </ul>
      <p>This is the easiest way to use image sprites, now we want to expand it by 
        using links and hover effects.</p>
      <hr />
      <h2>Image Sprites - Create a Navigation List</h2>
      <p>We want to use the sprite image ("img_navsprites.gif") to create a navigation list.</p>
      <p>We will use an HTML list, because it can be a link and also supports a background image:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #navlist <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> relative<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />#navlist li <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; margin<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; padding<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; list-style<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> none<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; position<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> absolute<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
              &nbsp; top<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br /><br />
            #navlist li, #navlist a <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; height<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 44px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; display<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> block<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />
            #home <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 0px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 46px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('img_navsprites.gif') 
                0 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />#prev <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 63px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp; width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 43px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('img_navsprites.gif') -47px 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />#next <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; left<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 129px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;width<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 43px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('img_navsprites.gif') 
                -91px 0<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span>
          </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_sprites_nav" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p><b>Example explained:</b></p>
      <ul>
        <li>#navlist {'{'}position:relative;{'}'} - position is set to relative to allow 
          absolute positioning inside it</li>
        <li>#navlist li {'{'}margin:0;padding:0;list-style:none;position:absolute;top:0;{'}'} 
          - margin and padding are set to 0, list-style is removed, and all list items 
          are absolute positioned</li>
        <li>#navlist li, #navlist a {'{'}height:44px;display:block;{'}'} - the height of all 
          the images are 44px</li>
      </ul>
      <p>Now start to position and style for each specific part:</p>
      <ul>
        <li>#home {'{'}left:0px;width:46px;{'}'} - Positioned all the way to the left, and 
          the width of the image is 46px</li>
        <li>#home {'{'}background:url(img_navsprites.gif) 0 0;{'}'} - 
          Defines the background 
          image and its position (left 0px, top 0px)</li>
        <li>#prev {'{'}left:63px;width:43px;{'}'} - Positioned 63px to the 
          right (#home width 46px + some extra space between items), and 
          the width is 43px.</li>
        <li>#prev {'{'}background:url('img_navsprites.gif') -47px 0;{'}'} - Defines the background 
          image 47px to the right (#home width 46px + 1px line 
          divider)</li>
        <li>#next {'{'}left:129px;width:43px;{'}'}- Positioned 129px to 
          the right (start of #prev is 63px + #prev width 43px + 
          extra space), and the width is 43px.</li>
        <li>#next {'{'}background:url('img_navsprites.gif') -91px 0;{'}'} - 
          Defines the background 
          image 91px to the right (#home width 46px + 1px 
          line divider + #prev width 43px + 1px line divider )</li>
      </ul>
      <hr />
      <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
        {/* MidContent */}
        {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
        <div id="snhb-mid_content-0" data-google-query-id="CIaR0_6Dz-cCFRDCwAodBfsKRw"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="https://secureframe.doubleclick.net/container.html?ecs=20200213" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={5} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
      </div>
      <hr />
      <h2>Image Sprites - Hover Effect</h2>
      <p>Now we want to add a hover effect to our navigation list.</p>
      <div className="w3-panel w3-note">
        <p><strong>Tip:</strong> The <code className="w3-codespan">:hover</code> selector can be used on all elements, 
          not only on links.</p>
      </div>
      <p>Our new image ("img_navsprites_hover.gif") contains three navigation images 
        and three images to use for hover effects:</p>
      <p><img src="img_navsprites_hover.gif" alt="navigation images" /></p>
      <p>Because this is one single image, and not six separate files, there will be <b>no 
          loading delay</b> when a user hovers over the image.</p>
      <p>We only add three lines of code to add the hover effect:</p>
      <div className="w3-example">
        <h3>Example</h3>
        <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
            #home a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('img_navsprites_hover.gif') 0 -45px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />#prev a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('img_navsprites_hover.gif') -47px 
                -45px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
            <br />#next a:hover <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> url('img_navsprites_hover.gif') -91px 
                -45px<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span> </span></div>
        <a target="_blank" href="tryit.asp?filename=trycss_sprites_hover_nav" className="w3-btn w3-margin-bottom">Try it Yourself »</a>
      </div>
      <p>Example explained:</p>
      <ul>
        <li>#home a:hover {'{'}background: transparent url('img_navsprites_hover.gif') 0 -45px;{'}'} - For all three hover images we specify the same background position, only 45px further down</li>
      </ul>
      <br />
      <div className="w3-clear nextprev">
        <a className="w3-left w3-btn" href="css_image_gallery.asp">❮ Previous</a>
        <a className="w3-right w3-btn" href="css_attribute_selectors.asp">Next ❯</a>
      </div>
    </div>
    <div className="w3-col l2 m12" id="right">
      <div className="sidesection">
        <div id="skyscraper">
          {/*<pre>wide_skyscraper, all: [160,600][300,600][320,50][120,600][300,1050]</pre>*/}
          <div id="snhb-wide_skyscraper-0" style={{minHeight: 0}} data-google-query-id="CPP09f2Dz-cCFYMXAQod2poO_w"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0__container__" style={{border: '0pt none', display: 'inline-block', width: 120, height: 600}}><iframe frameBorder={0} src="https://secureframe.doubleclick.net/container.html?ecs=20200213" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//wide_skyscraper_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={120} height={600} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={2} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
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
        <div className="w3-text-grey sharethis" style={{visibility: 'visible'}}>
          <a href="http://www.facebook.com/sharer.php?u=https://www.w3schools.com/css/css_image_sprites.asp" target="_blank" title="Facebook"><span className="fa fa-facebook-square fa-2x" /></a><a href="https://twitter.com/home?status=Currently reading https://www.w3schools.com/css/css_image_sprites.asp" target="_blank" title="Twitter"><span className="fa fa-twitter-square fa-2x" /></a>
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
        <div id="stickyadcontainer" style={{width: '943.991px'}}>
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
        <div id="snhb-bottom_medium_rectangle-0" style={{padding: '0 10px 10px 0', float: 'left', width: 'auto'}} data-google-query-id="CL2J8_2Dz-cCFYMXAQod2poO_w"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//bottom_medium_rectangle_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//bottom_medium_rectangle_0" title="3rd party ad content" width={300} height={250} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={3} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
        {/* adspace bmr */}
        {/* RightBottomMediumRectangle */}
        {/*<pre>right_bottom_medium_rectangle, desktop: [300,250][336,280]</pre>*/}
        <div id="snhb-right_bottom_medium_rectangle-0" style={{padding: '0 10px 10px 0', float: 'left', width: 'auto'}} data-google-query-id="CL6J8_2Dz-cCFYMXAQod2poO_w"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//right_bottom_medium_rectangle_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//right_bottom_medium_rectangle_0" title="3rd party ad content" width={300} height={250} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc data-google-container-id={4} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
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


<Codepen
        src={
          "https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default Q4;

