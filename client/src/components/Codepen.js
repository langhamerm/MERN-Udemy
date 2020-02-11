import React from "react";
// import Container from "react-bootstrap/Container";

import { connect } from "react-redux";

// console.log(this);

function Codepen(props) {
  return (
    <iframe
      id="frame"
      height="1000"
      style={{width: '100%'}}
      scrolling="yes"
      title="HTML_CSS_Layout"
      src={props.src}
      frameBorder="no"
      allowTransparency={true}
      allowFullScreen={true}
    >
      See the Pen{" "}
      <a href="https://codepen.io/langhamerm/pen/ExjxMZd">HTML_CSS_Layout</a> by
      langhamerm (<a href="https://codepen.io/langhamerm">@langhamerm</a>) on{" "}
      <a href="https://codepen.io">CodePen</a>.
    </iframe>

  );
}

// export default Iframe;
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Codepen);