import React from "react";
import Container from "react-bootstrap/Container";


// console.log(this);

class Iframe extends React.Component {

   findSrc =(video) => {
        console.log(video);
    }
 
render() {
    
    return (
      <Container>
        <iframe
        id="vid"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RgtcsBZ_gWs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Container>
    )}
  }

export default Iframe;