import React from "react";
// import Container from "react-bootstrap/Container";

import { connect } from "react-redux";

// console.log(this);

function Iframe(props) {
    
    return (
  
        <iframe
        title='vid'
          width="90% !important" 
          height="75% !important"
          src={props.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
 
    )
  }

// export default Iframe;
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Iframe);
