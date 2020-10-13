import React, { Component } from "react";

import HeroSection from "../../components/HeroSection/HeroSection3";
import PromoSection from "../../components/PromoSection";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <HeroSection />
          <PromoSection />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
