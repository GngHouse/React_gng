import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./Slider.css";
import First from "./First";
import Firstleft from "./Firstleft"

class Slider extends Component {
  componentDidMount() {
    const height = "100vh";
    const options = {
      indicators: true,
      height: height,
      interval: 4000,
      duration: 500,
    };
    M.Slider.init(this.Slider, options);
  }

  render() {
    return (
      <div className="body">
        <div
          ref={(Slider) => {
            this.Slider = Slider;
          }}
          className="slider"
        >
          {/* If you want fullscreen slider then add fullscreen to
      this div */}
          <ul className="slides">
            <li>
              <img src="/img/background0.png" />
              <div className="caption center-align">
                <div className="center">
                  <div className="space">
                    <div className="firstleft">
                      <div className="firstleftspace">
                        <span className="공간대여">공간 대여</span>
                        <div className="firstleftbox">
                          <span className="gnghouse">
                            GNG HOUSE
                            <br />
                          </span>
                          <span className="gnghouseintro">
                            GNG는 Give aNd Give의 줄임말로서 한 식구처럼 지내고,
                            사회적 공헌을 할 수 있는 업무를 목표로 하는 회사를
                            나타냅니다.
                            <br />
                            <br />
                            결혼식과 같은 행사 공간 연출 및 공공기관 발주 행사,
                            소모임 공간대여를 진행 중입니다.
                          </span>
                        </div>
                        <span className="공간연출">공간연출</span>
                      </div>
                    </div>
                    <div className="firstright"><First/></div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <img src="/img/background1.png" />
              <div className="caption center-align">
                <div className="center">
                  <div className="space">
                    <div className="firstleft">
                      <div className="firstleftspace">
                        <span className="공간대여">GNG HOUSE</span>
                        <div className="firstleftbox">
                          <span className="gnghouse">
                            공간 연출
                            <br />
                          </span>
                          <span className="gnghouseintro">
                            특별한 추억은 특별한 시간으로부터, 특별한 시간은
                            특별한 공간으로부터 시작됩니다.
                            <br />
                            <br />
                            GNG HOUSE에서 여러분들을 위한 공간을 특별한 추억으로
                            만들어드리겠습니다.
                          </span>
                        </div>
                        <span className="공간연출">공간 대여</span>
                      </div>
                    </div>
                    <div className="firstright"><First/></div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <img src="/img/background1.png" />
              <div className="caption center-align">
                <div className="center">
                  <div className="space">
                    <div className="firstleft">
                      <div className="firstleftspace">
                        <span className="공간대여">공간 연출</span>
                        <div className="firstleftbox">
                          <span className="gnghouse">
                            GNG HOUSE
                            <br />
                          </span>
                          <span className="gnghouseintro">
                          특별한 추억은 특별한 시간으로부터, 특별한 시간은 특별한 공간으로부터 시작됩니다.
                            <br />
                            <br />
                            GNG HOUSE에서 여러분들을 위한 공간을 특별한 추억으로 만들어드리겠습니다.
                          </span>
                        </div>
                        <span className="공간연출">GNG HOUSE</span>
                      </div>
                    </div>
                    <div className="firstright"><First/></div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li>
              <img src="/img/background1.png" />
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
