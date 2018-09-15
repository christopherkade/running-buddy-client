import React, { Component } from 'react';
import './Landing.css';
import scrollToComponent from 'react-scroll-to-component';
import arrow from './arrow.svg';

class Landing extends Component {
  constructor() {
    super();
    this.block1Ref = React.createRef();
  }

  scrollToElement = () => {
    scrollToComponent(this.block1, {
      offset: 1000,
      align: 'top',
      duration: 1500
    });
  };

  render() {
    return (
      <div className="landing-wrapper">
        <div className="landing">
          <h1 className="landing-title">Runnig Buddy, your fitness companion</h1>
          <button
            type="button"
            className="btn btn-primary landing-button"
            onClick={this.scrollToElement}
          >
            Discover us
          </button>
        </div>

        <div
          className="landing-block1"
          ref={div => {
            this.block1 = div;
          }}
        >
          <img className="arrow" src={arrow} alt="arrow" />
          <div className="landing-text-block block-right">
            <h3 className="landing-subtext">As easy as ready, set, go !</h3>

            <p>Just create or join a session in your neighborhood and you're ready to go !</p>
          </div>
          <img className="arrow arrow-invert" src={arrow} alt="arrow" />
          <div className="landing-text-block block-left">
            <h3 className="landing-subtext">Find new buddies, everyday</h3>

            <p>Join a massive network of like-minded people !</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
