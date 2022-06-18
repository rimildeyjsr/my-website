import React, {Component} from 'react';
import aboutSectionImage from '../../assets/about-section.png';
import SectionHeading from '../../components/SectionHeading/section-heading';
import './about-page.scss';

class AboutPage extends Component {
  render() {
    return (
      <section className="about-page-container" id="about-page">
        <div className="about-div">
          <SectionHeading
            sectionName="About"
            backgroundColor="#a40e88"
            textColor="white"
          />

          <div className="about-content-container">
            <div className="about-description">
              <p className="content-paragraph">
                I work as a front-end engineer at Appsmith, on the FE coders pod.
                The instant visual feedback I received while making my first crude web-page
                made me fall in love with building user interfaces, and I have been chasing
                that high ever since.
              </p>

              <p className="content-paragraph">
                In my free time, I read, bake, binge-watch my favourite TV series
                and look after my plants. Someday, I hope to travel around the globe,
                attend a Charlie Puth concert and watch Federer winning a match front-row
                at Wimbledon.
              </p>
            </div>

            <div className="about-section-image-container">
              <img
                className="about-section-image"
                src={aboutSectionImage}
                alt="about section image"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutPage;
