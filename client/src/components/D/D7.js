import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import html5 from "../../images/html5.png";

const D7 = () => {
  return (
    <div>
      <div className="w3-row w3-white">
        <div className="w3-col l10 m12" id="main">
          <div id="mainLeaderboard" style={{ overflow: "hidden" }}>
            {/* MainLeaderboard*/}
            {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
            <div
              id="snhb-main_leaderboard-0"
              data-google-query-id="CLG8xZ7LzucCFYUpaQodFBAPyQ"
            >
              <div
                id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__"
                style={{ border: "0pt none" }}
              >
                <iframe
                  id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0"
                  title="3rd party ad content"
                  width={468}
                  height={60}
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  frameBorder={0}
                  srcDoc
                  data-google-container-id={1}
                  style={{ border: 0, verticalAlign: "bottom" }}
                  data-load-complete="true"
                />
              </div>
            </div>
            {/* adspace leaderboard */}
          </div>
          <h1>
            CSS{" "}
            <span className="color_h1">
              Layout - Horizontal &amp; Vertical Align
            </span>
          </h1>
          <div className="w3-clear nextprev">
            <a className="w3-left w3-btn" href="css_inline-block.asp">
              ❮ Previous
            </a>
            <a className="w3-right w3-btn" href="css_combinators.asp">
              Next ❯
            </a>
          </div>
          <br />
          <div className="w3-dark-grey w3-padding-48 w3-display-container">
            <span
              className="w3-display-topmiddle w3-hide-small"
              style={{ marginTop: 16 }}
            >
              ▲
            </span>
            <span
              className="w3-display-bottommiddle w3-hide-small"
              style={{ marginBottom: 16 }}
            >
              ▼
            </span>
            <div
              className="w3-center w3-display-container"
              style={{
                backgroundColor: "#1abc9c",
                color: "white",
                maxWidth: 400,
                margin: "auto",
                padding: 15
              }}
            >
              <span
                className="w3-display-left w3-hide-small"
                style={{ left: "-30px" }}
              >
                ◀
              </span>
              <span
                className="w3-display-right w3-hide-small"
                style={{ right: "-30px" }}
              >
                ►
              </span>
              <h2>
                Center elements
                <br />
                horizontally and vertically
              </h2>
            </div>
          </div>
          <hr />
          <h2>Center Align Elements</h2>
          <p>
            To horizontally center a block element (like &lt;div&gt;), use{" "}
            <code className="w3-codespan">margin: auto;</code>
          </p>
          <p>
            Setting the width of the element will prevent it from stretching out
            to the edges of its container.
          </p>
          <p>
            The element will then take up the specified width, and the remaining
            space will be split equally between the two margins:
          </p>
          <div
            style={{
              margin: "0 auto",
              width: "50%",
              border: "3px solid green",
              padding: 10
            }}
          >
            <p>This div element is centered.</p>
          </div>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .center
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;margin
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    auto
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; width
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    50%
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid green
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; padding
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    10px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_container"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <p>
            <b>Note:</b> Center aligning has no effect if the{" "}
            <code className="w3-codespan">width</code> property is not set (or
            set to 100%).
          </p>
          <hr />
          <h2>Center Align Text</h2>
          <p>
            To just center the text inside an element, use{" "}
            <code className="w3-codespan">text-align: center;</code>
          </p>
          <div style={{ textAlign: "center", border: "3px solid green" }}>
            <p>This text is centered.</p>
          </div>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .center{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp; text-align
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    center
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid green
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_text"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <p>
            <strong>Tip:</strong> For more examples on how to align text, see
            the <a href="css_text.asp">CSS Text</a> chapter.
          </p>
          <hr />
          <div
            id="midcontentadcontainer"
            style={{ overflow: "auto", textAlign: "center" }}
          >
            {/* MidContent */}
            {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
            <div
              id="snhb-mid_content-0"
              data-google-query-id="CLiH35_LzucCFQ8XAQodDNEBaA"
            >
              <div
                id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__"
                style={{ border: "0pt none" }}
              >
                <iframe
                  id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0"
                  title="3rd party ad content"
                  width={336}
                  height={280}
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  frameBorder={0}
                  srcDoc
                  style={{ border: 0, verticalAlign: "bottom" }}
                  data-google-container-id={4}
                  data-load-complete="true"
                />
              </div>
            </div>
          </div>
          <hr />
          <h2>Center an Image</h2>
          <p>
            To center an image, set left and right margin to{" "}
            <code className="w3-codespan">auto</code> and make it into a{" "}
            <code className="w3-codespan">block</code> element:
          </p>
          <img
            src="paris.jpg"
            alt="Paris"
            style={{ width: "45%", display: "block", margin: "0 auto" }}
          />
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                img
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;display
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    block
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; margin-left
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    auto
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; margin-right
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    auto
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;width
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    40%
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_image"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <hr />
          <h2>Left and Right Align - Using position</h2>
          <p>
            One method for aligning elements is to use{" "}
            <code className="w3-codespan">position: absolute;</code>:
          </p>
          <div style={{ position: "relative", marginBottom: 180 }}>
            <div
              style={{
                position: "absolute",
                right: 0,
                width: 300,
                border: "3px solid #73AD21",
                padding: 10
              }}
            >
              <p>
                In my younger and more vulnerable years my father gave me some
                advice that I've been turning over in my mind ever since.
              </p>
            </div>
          </div>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .right
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;position
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    absolute
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; right
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    0px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;width
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    300px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid #73AD21
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;padding
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    10px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_pos"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <p>
            <b>Note:</b> Absolute positioned elements are removed from the
            normal flow, and can overlap elements.
          </p>
          {/*<p><strong>Tip:</strong> When aligning elements with <code class="w3-codespan">position</code>, always define
<code class="w3-codespan">margin</code> and <code class="w3-codespan">padding</code> for
the <code class="w3-codespan">&lt;body&gt;</code> element. This is to avoid visual differences in different browsers.</p>
<p>There is also a problem with IE8 and earlier, when using <code class="w3-codespan">position</code>. If 
a container element (in our case &lt;div class=&quot;container&quot;&gt;) has a specified width, 
and the !DOCTYPE declaration is missing, IE8 and earlier versions will add a 17px margin on 
the right side. This seems to be space reserved for a scrollbar. So, always set the !DOCTYPE 
declaration when using <code class="w3-codespan">position</code>:</p>
<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate cssHigh">
body
{<br>
&nbsp;&nbsp;&nbsp;
margin: 0;<br>
&nbsp;&nbsp;&nbsp;
padding: 0;<br>
}<br><br>
.container
{<br>
&nbsp;&nbsp;&nbsp;
position: relative;<br>
&nbsp;&nbsp;&nbsp;
width: 100%;<br>
}<br><br>
.right
{<br>
&nbsp;&nbsp;&nbsp;
position: absolute;<br>
&nbsp;&nbsp;&nbsp;
right: 0px;<br>
&nbsp;&nbsp;&nbsp;
width: 300px;<br>
&nbsp;&nbsp;&nbsp;
background-color: #b0e0e6;<br>
}</div>
<a target="_blank" href="tryit.asp?filename=trycss_align_pos_crossbrowser" class="w3-btn w3-margin-bottom">Try it Yourself &raquo;</a>
</div>
*/}
          <hr />
          <h2>Left and Right Align - Using float</h2>
          <p>
            Another method for aligning elements is to use the{" "}
            <code className="w3-codespan">float</code> property:
          </p>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .right
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;float
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    right
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; width
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    300px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid #73AD21
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;padding
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    10px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_float"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <div className="w3-note w3-panel">
            <p>
              <strong>Note:</strong> If an element is taller than the element
              containing it, and it is floated, it will overflow outside of its
              container. You can use the "<strong>clearfix</strong>" hack to fix
              this (see example below).
            </p>
          </div>
          <hr />
          {/*<p><strong>Tip:</strong> When aligning elements with <code class="w3-codespan">float</code>, always define <code class="w3-codespan">margin</code> and 
<code class="w3-codespan">padding</code> for
the <code class="w3-codespan">&lt;body&gt;</code> element. This is to avoid visual differences in different browsers.</p>
<p>There is also a problem with IE8 and earlier, when using <code class="w3-codespan">float</code>. If 
the !DOCTYPE declaration is missing, IE8 and earlier versions will add a 17px margin on 
the right side. This seems to be space reserved for a scrollbar. So, always set the !DOCTYPE 
declaration when using <code class="w3-codespan">float</code>:</p>
<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate cssHigh">
body
{<br>
&nbsp;&nbsp;&nbsp;
margin: 0;<br>
&nbsp;&nbsp;&nbsp;
padding: 0;<br>
}<br><br>
.right
{<br>
&nbsp;&nbsp;&nbsp;
float: right;<br>
&nbsp;&nbsp;&nbsp;
width: 300px;<br>
&nbsp;&nbsp;&nbsp;
background-color: #b0e0e6;<br>
}</div>
<a target="_blank" href="tryit.asp?filename=trycss_align_float_crossbrowser" class="w3-btn w3-margin-bottom">Try it Yourself &raquo;</a>
</div>*/}
          <h2>The clearfix Hack</h2>
          <div className="w3-border w3-padding">
            <div className="w3-row-padding" style={{ margin: "0 -16px 32px" }}>
              <div className="w3-half">
                <h3>Without Clearfix</h3>
                <img
                  src="/howto/clearfix_prob.jpg"
                  style={{ width: "100%" }}
                  className="w3-image"
                />
              </div>
              <div className="w3-half">
                <h3>With Clearfix</h3>
                <img
                  src="/howto/clearfix_solution.jpg"
                  style={{ width: "100%" }}
                  className="w3-image"
                />
              </div>
            </div>
          </div>
          <p>
            Then we can add <code className="w3-codespan">overflow: auto;</code>{" "}
            to the containing element to fix this problem:
          </p>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .clearfix{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;overflow
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    auto
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_layout_clearfix"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <hr />
          <h2>Center Vertically - Using padding</h2>
          <p>
            There are many ways to center an element vertically in CSS. A simple
            solution is to use top and bottom{" "}
            <code className="w3-codespan">padding</code>:
          </p>
          <div style={{ border: "3px solid green", padding: "70px 2px" }}>
            <p>I am vertically centered.</p>
          </div>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .center{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;padding
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    70px 0
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid green
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_padding"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <p>
            To center both vertically and horizontally, use{" "}
            <code className="w3-codespan">padding</code> and{" "}
            <code className="w3-codespan">text-align: center</code>:
          </p>
          <div
            style={{
              border: "3px solid green",
              padding: "70px 2px",
              textAlign: "center"
            }}
          >
            <p>I am vertically and horizontally centered.</p>
          </div>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .center{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp; padding
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    70px 0
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid green
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; text-align
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    center
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_padding2"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <hr />
          <h2>Center Vertically - Using line-height</h2>
          <p>
            Another trick is to use the{" "}
            <code className="w3-codespan">line-height</code> property with a
            value that is equal to the{" "}
            <code className="w3-codespan">height</code> property.
          </p>
          <div
            style={{
              lineHeight: 200,
              height: 200,
              border: "3px solid green",
              textAlign: "center"
            }}
          >
            <p
              style={{
                lineHeight: "1.2",
                display: "inline-block",
                verticalAlign: "middle"
              }}
            >
              I am vertically and horizontally centered.
            </p>
          </div>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .center{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp; line-height
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    200px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;height
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    200px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid green
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;text-align
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    center
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>
                <br />
                <br />
                <span className="commentcolor" style={{ color: "green" }}>
                  /* If the text has multiple lines, add the following: */
                </span>
                <br />
                .center p{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;line-height
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    1.5
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;display
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    inline-block
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;vertical-align
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    middle
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_line-height"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <hr />
          <h2>Center Vertically - Using position &amp; transform</h2>
          <p>
            If <code className="w3-codespan">padding</code> and{" "}
            <code className="w3-codespan">line-height</code>
            are not options, a third solution is to use positioning and the{" "}
            <code className="w3-codespan">transform</code> property:
          </p>
          <div
            style={{
              lineHeight: 200,
              height: 200,
              border: "3px solid green",
              textAlign: "center"
            }}
          >
            <p
              style={{
                lineHeight: "1.2",
                display: "inline-block",
                verticalAlign: "middle"
              }}
            >
              I am vertically and horizontally centered.
            </p>
          </div>
          <div className="w3-example">
            <h3>Example</h3>
            <div className="w3-code notranslate cssHigh">
              <span className="cssselectorcolor" style={{ color: "brown" }}>
                .center{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  {" "}
                  <br />
                  &nbsp;&nbsp;height
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    200px
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp;&nbsp;position
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    relative
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; border
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    3px solid green
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>{" "}
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>
                <br />
                <br />
                .center p{" "}
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"{"}
                </span>
                <span className="csspropertycolor" style={{ color: "red" }}>
                  <br />
                  &nbsp;&nbsp;margin
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    0
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; position
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    absolute
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; top
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    50%
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; left
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    50%
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                  &nbsp; transform
                  <span
                    className="csspropertyvaluecolor"
                    style={{ color: "mediumblue" }}
                  >
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      :
                    </span>{" "}
                    translate(-50%, -50%)
                    <span
                      className="cssdelimitercolor"
                      style={{ color: "black" }}
                    >
                      ;
                    </span>
                  </span>
                  <br />
                </span>
                <span className="cssdelimitercolor" style={{ color: "black" }}>
                  {"}"}
                </span>{" "}
              </span>
            </div>
            <a
              target="_blank"
              href="tryit.asp?filename=trycss_align_transform"
              className="w3-btn w3-margin-bottom"
            >
              Try it Yourself »
            </a>
          </div>
          <p>
            <strong>Tip:</strong> You will learn more about the transform
            property in our{" "}
            <a href="css3_2dtransforms.asp">2D Transforms Chapter</a>.
          </p>
          <hr />
          <div className="w3-container w3-dark-grey w3-padding">
            <h2>Test Yourself with Exercises!</h2>
            <div className="w3-bar w3-margin-bottom">
              <a
                className="w3-bar-item w3-btn"
                href="exercise.asp?filename=exercise_align1"
                target="_blank"
              >
                Exercise 1 »
              </a>
              <a
                className="w3-bar-item w3-btn"
                href="exercise.asp?filename=exercise_align2"
                target="_blank"
              >
                Exercise 2 »
              </a>
            </div>
          </div>
          <br />
          <div className="w3-clear nextprev">
            <a className="w3-left w3-btn" href="css_inline-block.asp">
              ❮ Previous
            </a>
            <a className="w3-right w3-btn" href="css_combinators.asp">
              Next ❯
            </a>
          </div>
        </div>
       
      </div>

      <Codepen src={"https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default D7;
