import React, {Component} from 'react';
import introPicture from '../../assets/rimil.jpg';
import './intro-page.scss';

class IntroPage extends Component {
  render() {
    return (
      <section className="intro-page-container" id="intro-page">
        <div className="intro-div">
          <div className="intro-picture">
            <img
              src={introPicture}
              alt="profile picture"
              className="intro-img"
            />
          </div>

          <div className="intro-text">
            <h1 className="intro-heading">
              Rimil Dey
            </h1>

            <h2 className="intro-sub-heading">
              Front-end web developer
            </h2>
          </div>

          <div className="intro-background" />
        </div>
      </section>
    );
  }
}

export default IntroPage;
