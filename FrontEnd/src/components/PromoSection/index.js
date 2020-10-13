import React from "react";
import _data from "../../data";
import {
  Cpu as Cpuicon,
  GitMerge as GitMergeicon,
  Layers as Layersicon,
  Box as Boxicon,
  Search as Searchicon,
  Server as Sercericon,
} from "react-feather";
import { Link } from "react-router-dom";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      promo: _data.promo,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>{this.state.promo.title}</h2>
                </div>
              </div>
            </div>
            <div className="row equal">
              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="chapter1-Basic-Computing">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        {" "}
                        <Cpuicon color="#fff" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 1</h4>
                    <h4>Basic Computing</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="chapter2-Linear-Equations">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <GitMergeicon color="#fff" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 2 </h4>
                    <h4>Linear Equations</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="chapter3-Interpolation">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Layersicon color="#fff" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 3</h4>
                    <h4>Interpolations</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="chapter4-Differentiation">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Boxicon color="#fff" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 4</h4>
                    <h4>Differentiation</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="chapter5-Integration">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Sercericon color="#fff" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 5</h4>
                    <h4>Integration</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="chapter6-Root-finding">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Searchicon color="#fff" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 6</h4>
                    <h4>Root-finding</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PromoSection;
