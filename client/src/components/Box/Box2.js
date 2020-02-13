import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import border1 from "../../images/border1.png";
import border2 from "../../images/border2.png";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const Box2 = () => {
  return (
    <div>
      <img id="doctype" src={border1} alt={"persevere"} />
      <img id="head" src={border2} alt={"persevere"} />
     <table className="w3-table-all notranslate">
  <tbody><tr>
      <th style={{width: '25%'}}>Property</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border.asp">border</a></td>
      <td>Sets all the border properties in one declaration</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-bottom.asp">border-bottom</a></td>
      <td>Sets all the bottom border properties in one declaration</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-bottom_color.asp">border-bottom-color</a></td>
      <td>Sets the color of the bottom border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-bottom_style.asp">border-bottom-style</a></td>
      <td>Sets the style of the bottom border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-bottom_width.asp">border-bottom-width</a></td>
      <td>Sets the width of the bottom border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-color.asp">border-color</a></td>
      <td>Sets the color of the four borders</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-left.asp">border-left</a></td>
      <td>Sets all the left border properties in one declaration</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-left_color.asp">border-left-color</a></td>
      <td>Sets the color of the left border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-left_style.asp">border-left-style</a></td>
      <td>Sets the style of the left border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-left_width.asp">border-left-width</a></td>
      <td>Sets the width of the left border</td>
    </tr>
    <tr>
      <td><a href="/cssref/css3_pr_border-radius.asp">border-radius</a></td>
      <td>Sets all the four border-*-radius properties for rounded corners</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-right.asp">border-right</a></td>
      <td>Sets all the right border properties in one declaration</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-right_color.asp">border-right-color</a></td>
      <td>Sets the color of the right border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-right_style.asp">border-right-style</a></td>
      <td>Sets the style of the right border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-right_width.asp">border-right-width</a></td>
      <td>Sets the width of the right border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-style.asp">border-style</a></td>
      <td>Sets the style of the four borders</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-top.asp">border-top</a></td>
      <td>Sets all the top border properties in one declaration</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-top_color.asp">border-top-color</a></td>
      <td>Sets the color of the top border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-top_style.asp">border-top-style</a></td>
      <td>Sets the style of the top border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-top_width.asp">border-top-width</a></td>
      <td>Sets the width of the top border</td>
    </tr>
    <tr>
      <td><a href="/cssref/pr_border-width.asp">border-width</a></td>
      <td>Sets the width of the four borders</td>
    </tr>
  </tbody></table>


      <br></br>
      <Jumbotron>
        <h1>Practice with border types below!</h1>
      </Jumbotron>

      <Codepen
        src={
          "https://codepen.io/langhamerm/embed/bGdEbdL?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default Box2;
