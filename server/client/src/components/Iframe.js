import React from "react";
import Container from "react-bootstrap/Container";

import { connect } from "react-redux";

// console.log(this);

function Iframe(props) {
    
    return (
      <Container>
        <iframe
        title='vid'
          width="200px"
          height="250px"
          src={props.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    )
  }

// export default Iframe;
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Iframe);
