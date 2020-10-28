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
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {},
    };
  }

  componentDidMount() {
    this.setState({
      promo: _data.promo,
    });
  }

  render() {
    const { navigation } = this.props;

    const nextPage = () => {
      navigation();
    };

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
                <Link to="b2s">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Cpuicon color="#9629E6" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 1</h4>
                    <h4>Basic Computing</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="elimination">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <GitMergeicon color="#9629E6" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 2 </h4>
                    <h4>Linear Equations</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="interpolation">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Layersicon color="#9629E6" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 3</h4>
                    <h4>Interpolations</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="differentiation">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Boxicon color="#9629E6" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 4</h4>
                    <h4>Differentiation</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="integration">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Sercericon color="#9629E6" size="30" />
                      </span>
                    </div>
                    <h4>บทที่ 5</h4>
                    <h4>Integration</h4>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-lg-4" style={{ marginBottom: 30 }}>
                <Link to="root-finding">
                  <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                    <div className="circle-icon mb-5">
                      <span>
                        <Searchicon color="#9629E6" size="40" />
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
