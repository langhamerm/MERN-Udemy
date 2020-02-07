import React from "react";
// import Container from "react-bootstrap/Container";

import { connect } from "react-redux";

// console.log(this);

function Codepen(props) {
    
    return (
  
        
        <iframe
          height="500"
          style={{width: "100%"}}
          scrolling="no"
          title="HTML_Git"
          src={props.src}
          frameBorder="no"
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/langhamerm/pen/MWwWxwO">HTML_Git</a> by
          langhamerm (<a href="https://codepen.io/langhamerm">@langhamerm</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
     
 
    )
  }
  

// export default Iframe;
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Codepen);
