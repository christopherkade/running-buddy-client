import React from 'react';
import './Landing.css';
import runner from './paris-runner.jpg';
import runner2 from './paris-runner2.jpg';

function Landing() {
  return (
    <div className="landing">
      <h1 className="landing-title">Runnig Buddy, your fitness companion</h1>

      <div className="container first-row">
        <div className="row">
          <div className="col-sm">
            <img className="landing-img" src={runner} alt="Runner" />
          </div>
          <div className="col-sm landing-text landing-text-right">
            <h3 className="landing-subtitle">As easy as ready, set, go !</h3>
            <p className="landing-description">
              Just create a running session on our platform and find running partners in a matter of
              minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="container second-row">
        <div className="row">
          <div className="col-sm landing-text landing-text-right">
            <h3 className="landing-subtitle">New friends, everyday</h3>
            <p className="landing-description">
              Our large network of runners allows you to find like-minded people on a daily basis.
            </p>
          </div>
          <div className="col-sm">
            <img className="landing-img landing-img-rect" src={runner2} alt="Runner" />
          </div>
        </div>
      </div>

      <h2 className="landing-cta">What are you waiting for? Sign up now !</h2>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
    </div>
  );
}

export default Landing;
