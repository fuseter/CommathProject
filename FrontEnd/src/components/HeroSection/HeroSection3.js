import React from "react";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <React.Fragment>
        <section className="hero-section hero-section-3 ptb-100">
          <div className="circles">
            <div className="point animated-point-1"></div>
            <div className="point animated-point-2"></div>
            <div className="point animated-point-3"></div>
            <div className="point animated-point-4"></div>
            <div className="point animated-point-5"></div>
            <div className="point animated-point-6"></div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content-left ptb-100">
                  <h1>
                    <span>คณิตศาสตร์เชิงการคำนวณ</span>
                  </h1>
                  <p className="lead" style={{fontSize: 20, color: "#000"}}>พงศ์คเณศ แก้วฤทธิ์ 61114440397</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="hero-animation-img">
                  <img
                    className="img-fluid d-block m-auto animation-one"
                    src="/CommathProject/img/Telemedicine_01.svg"
                    width="150"
                    alt="animation"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-two"
                    src="/CommathProject/img/hero-animation-01.svg"
                    alt="animation"
                    width="120"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-three"
                    src="/CommathProject/img/Telemedicine_03.svg"
                    alt="animation"
                    width="120"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-four"
                    src="/CommathProject/img/hero-animation-03.svg"
                    alt="animation"
                    width="200"
                  />
                </div>
              </div>
            </div>
          </div>

          <img
            src="/CommathProject/img/hero-bg-shape-2.svg"
            className="shape-image"
            alt="shape"
          />
        </section>
      </React.Fragment>
    );
  }
}

export default HeroSection;
