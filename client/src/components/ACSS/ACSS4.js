import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "materialize-css/dist/css/materialize.min.css";

class ACSS4 extends Component {
  render() {
     
    return (
     
        <div id="cssproperties">
<div className="w3-col l10 m12" id="main">
  <div id="mainLeaderboard" style={{overflow: 'hidden'}}>
    {/* MainLeaderboard*/}
    {/*<pre>main_leaderboard, all: [728,90][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-main_leaderboard-0" data-google-query-id="COCdpteqz-cCFclOAQodkQ0AZg"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html" id="google_ads_iframe_/22152718/sws-hb//w3schools.com//main_leaderboard_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id={1} style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div>
    {/* adspace leaderboard */}
  </div>
  <h1>CSS <span className="color_h1">Gradients</span></h1>
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css3_colors.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_shadows.asp">Next ❯</a>
  </div>
  <hr />
  <div id="grad1" style={{textAlign: 'center', margin: 'auto', color: '#f3f3f3', fontSize: 30, fontWeight: 550, paddingTop: 105}}>
    Gradient Background</div>
  <hr />
  <p>CSS gradients let you display smooth transitions between two or more specified colors.</p>
  <p>CSS defines two types of gradients:</p>
  <ul>
    <li><strong>Linear Gradients (goes down/up/left/right/diagonally)</strong></li>
    <li><strong>Radial Gradients (defined by their center)</strong></li>
  </ul>
  <hr />
  <h2>CSS Linear Gradients</h2>
  <p>To create a linear gradient you must define 
    at least two color stops. Color stops are the colors you want to render smooth transitions 
    among. You can also set a starting point and a direction (or an angle) along 
    with the gradient effect.</p>
  <h3>Syntax</h3>
  <div className="w3-code w3-border notranslate"><div>
      background-image: linear-gradient(<em>direction</em>, <em>color-stop1</em>, <em>
        color-stop2, ...</em>);</div></div>
  <p><strong>Linear Gradient - Top to Bottom (this is default)</strong></p>
  <p>The following example shows a linear gradient that starts at the top. It starts red, transitioning to yellow:</p>
  <div id="grad2" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp;&nbsp;background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> linear-gradient(red, yellow)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear" target="_blank">Try it Yourself »</a>
  </div>
  <p><strong>Linear Gradient - Left to Right</strong></p>
  <p>The following example shows a linear gradient that starts from the left. It starts red, transitioning to 
    yellow:</p>
  <div id="grad3" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> linear-gradient(to right, red , yellow)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear_ltr" target="_blank">Try it Yourself »</a>
  </div>
  <p><strong>Linear Gradient - Diagonal</strong></p>
  <p>You can make a gradient diagonally by specifying both the horizontal and vertical starting positions.</p>
  <p>The following example shows a linear gradient that starts at top left (and 
    goes to bottom right). It starts red, transitioning to yellow:</p>
  <div id="grad4" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> linear-gradient(to bottom right, red, yellow)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear_diagonal" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <div id="midcontentadcontainer" style={{overflow: 'auto', textAlign: 'center'}}>
    {/* MidContent */}
    {/*<pre>mid_content, all: [300,250][336,280][728,90][970,250][970,90][320,50][468,60]</pre>*/}
    <div id="snhb-mid_content-0" data-google-query-id="COyjxdiqz-cCFQfEwAodZNUHCw"><div id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/22152718/sws-hb//w3schools.com//mid_content_0" title="3rd party ad content" width={728} height={90} scrolling="no" marginWidth={0} marginHeight={0} frameBorder={0} srcDoc style={{border: 0, verticalAlign: 'bottom'}} data-google-container-id={4} data-load-complete="true" /></div></div>
  </div>
  <hr />
  <h2>Using Angles</h2>
  <p>If you want more control over the direction of the gradient, 
    you can define an angle, instead of the predefined directions (to bottom, to 
    top, to right, to left, to bottom right, etc.).</p>
  <h3>Syntax</h3>
  <div className="w3-code w3-border notranslate">
    <div>
      background-image: linear-gradient(<em>angle</em>, <em>color-stop1</em>, <em>
        color-stop2</em>);
    </div></div>
  <p>The angle is specified as an angle between a horizontal line and the gradient line.</p>
  <p>The following example shows how to use angles on linear gradients:</p>
  <div id="grad5" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> linear-gradient(-90deg, red, yellow)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear_angles" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Using Multiple Color Stops</h2>
  <p>The following example shows a linear gradient (from top to bottom) with 
    multiple color stops:</p>
  <div id="grad6" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> linear-gradient(red, yellow, green)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear_cs" target="_blank">Try it Yourself »</a>
  </div>
  <p>The following example shows how to create a linear gradient (from left to 
    right) with the color of the rainbow and some text:</p>
  <div id="grad7" style={{textAlign: 'center', margin: 'auto', color: '#888888', fontSize: 40, fontWeight: 'bold'}}>
    Gradient Background
  </div>
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span> <br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear_rainbow" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Using Transparency</h2>
  <p>CSS gradients also support transparency, which can be used to create fading effects.</p>
  <p>To add transparency, we use the rgba() function to define the color stops. 
    The last parameter in the rgba() function can be a value from 0 to 1, and it 
    defines the transparency of the color: 0 indicates full transparency, 1 
    indicates full color (no transparency).</p>
  <p>The following example shows a linear gradient that starts from the left. It starts fully transparent, transitioning to full color red:</p>
  <div id="grad8" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> linear-gradient(to right, rgba(255,0,0,0), 
            rgba(255,0,0,1))<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear_trans" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Repeating a linear-gradient</h2>
  <p>The repeating-linear-gradient() function is used to repeat linear gradients:</p>
  <div id="grad9" />
  <div className="w3-example">
    <h3>Example</h3>
    <p>A repeating linear gradient:</p>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            repeating-linear-gradient(red, yellow 10%, green 20%)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-linear_repeating" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>CSS Radial Gradients</h2>
  <p>A radial gradient is defined by its center.</p>
  <p>To create a radial gradient you must also define at least two color stops.</p>
  <h3>Syntax</h3>
  <div className="w3-code w3-border notranslate"><div>
      background-image: radial-gradient(<em>shape size </em>at<em> position, start-color, ..., last-color</em>);</div></div>
  <p>By default, shape is ellipse, size is farthest-corner, and position is center.</p>
  <p><strong>Radial Gradient - Evenly Spaced Color Stops (this is default)</strong></p>
  <p>The following example shows a radial gradient with evenly spaced color stops:</p>
  <div id="grad10" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> radial-gradient(red, yellow, green)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-radial" target="_blank">Try it Yourself »</a>
  </div>
  <p><strong>Radial Gradient - Differently Spaced Color Stops</strong></p>
  <p>The following example shows a radial gradient with differently spaced color stops:</p>
  <div id="grad11" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> radial-gradient(red 5%, yellow 15%, green 60%)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-radial2" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Set Shape</h2>
  <p>The shape parameter defines the shape. It can take the value circle or ellipse. The default value is ellipse.</p>
  <p>The following example shows a radial gradient with the shape of a circle:</p>
  <div id="grad12" />
  <div className="w3-example">
    <h3>Example</h3>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> radial-gradient(circle, red, yellow, green)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br />
        </span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-radial_shape" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Use of Different Size Keywords</h2>
  <p>The size parameter defines the size of the gradient. It can take four values:</p>
  <ul>
    <li><strong>closest-side</strong></li>
    <li><strong>farthest-side</strong></li>
    <li><strong>closest-corner</strong></li>
    <li><strong>farthest-corner</strong></li>
  </ul>
  <div className="w3-example">
    <h3>Example</h3>
    <p>A radial gradient with different size keywords:</p>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad1 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> radial-gradient(closest-side at 60% 55%, red, yellow, 
            black)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span><br />
        <br />#grad2 <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />
          &nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> radial-gradient(farthest-side at 60% 
            55%, red, yellow, black)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-radial_size" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <h2>Repeating a radial-gradient</h2>
  <p>The repeating-radial-gradient() function is used to repeat radial gradients:</p>
  <div id="grad13" />
  <div className="w3-example">
    <h3>Example</h3>
    <p>A repeating radial gradient:</p>
    <div className="w3-code notranslate cssHigh"><span className="cssselectorcolor" style={{color: 'brown'}}>
        #grad <span className="cssdelimitercolor" style={{color: 'black'}}>{'{'}</span><span className="csspropertycolor" style={{color: 'red'}}><br />&nbsp; background-image<span className="csspropertyvaluecolor" style={{color: 'mediumblue'}}><span className="cssdelimitercolor" style={{color: 'black'}}>:</span> 
            repeating-radial-gradient(red, yellow 10%, green 15%)<span className="cssdelimitercolor" style={{color: 'black'}}>;</span></span><br /></span><span className="cssdelimitercolor" style={{color: 'black'}}>{'}'}</span></span></div>
    <a className="w3-btn w3-margin-bottom" href="tryit.asp?filename=trycss3_gradient-radial_repeating" target="_blank">Try it Yourself »</a>
  </div>
  <hr />
  <div className="w3-container w3-dark-grey w3-padding">
    <h2>Test Yourself with Exercises!</h2>
    <div className="w3-bar w3-margin-bottom">
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_gradients1" target="_blank">Exercise 1 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_gradients2" target="_blank">Exercise 2 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_gradients3" target="_blank">Exercise 3 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_gradients4" target="_blank">Exercise 4 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_gradients5" target="_blank">Exercise 5 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_gradients6" target="_blank">Exercise 6 »</a>
      <a className="w3-bar-item w3-btn" href="exercise.asp?filename=exercise_css3_gradients7" target="_blank">Exercise 7 »</a>
    </div>
  </div>
  <hr />
  <h2>CSS Gradient Properties</h2>
  <p>The following table lists the CSS gradient properties:</p>
  <table className="w3-table-all notranslate">
    <tbody><tr>
        <th style={{width: '28%'}}>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/cssref/pr_background-image.asp">background-image</a></td>
        <td>Sets one or more background images for an element</td>
      </tr>
    </tbody></table>
  <br />
  <div className="w3-clear nextprev">
    <a className="w3-left w3-btn" href="css3_colors.asp">❮ Previous</a>
    <a className="w3-right w3-btn" href="css3_shadows.asp">Next ❯</a>
  </div>
</div>

</div>



  

        
 
    );
  }
}
export default ACSS4;
{/* <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}