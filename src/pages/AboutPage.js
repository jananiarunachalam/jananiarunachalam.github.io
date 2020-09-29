import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {
  return (
    <dv>
      <Hero title={props.title} />
      <Content>
        <p>
          What can I possible say about myself that hasn't been told in the
          History books?
        </p>
      </Content>
    </dv>
  );
}

export default HomePage;
