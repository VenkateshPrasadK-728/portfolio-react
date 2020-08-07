import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import landingImage from './landingImage.jpeg';

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src={landingImage}
            alt="avatar"
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>Software Developer</h1>

            <hr />

            <p>
              Java | Spring Framework | JavaScript | React-Js 
              | MySQL | MongoDB | Visual-Studio | HTML | CSS
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="http://linkedin.com/in/venkatesh-prasad-k/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Freecodecamp */}
              <a
                href="http://instagram.com/v.e.n.k.i_?"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>

            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
