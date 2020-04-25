import React, {Component} from 'react';
import introPicture from '../../assets/rimil.jpg';
import './first-page.scss';

export class FirstPage extends Component {
  render() {
    return (
      <div className="first-page-container">
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
      </div>
    );
  }
}

export default FirstPage;
