import React, {Component} from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import './main-wrapper.scss';
import IntroPage from "./IntroPage/intro-page";
import AboutPage from "./AboutPage/about-page";
import GradientWrapper from "../components/GradientWrapper/gradient-wrapper";
import ProjectsPage from "./ProjectsPage/projects-page";
import ContactPage from "./ContactSection/contact-page";

class MainWrapper extends Component {

  pageIndexMap = ['introPageGradient', 'aboutPageGradient', 'projectsPageGradient', 'contactPageGradient'];
  constructor(props) {
    super(props);
    this.state = {
      activeGradientId: 'introPageGradient',
    };
  }

  render() {
    return (
      <div className="main-wrapper-container">
        <GradientWrapper
          activeGradientId={this.state.activeGradientId}
        />
        <ReactFullpage
          onLeave={(origin, destination, direction) => {
            this.setState({
              activeGradientId: this.pageIndexMap[destination.index]
            });
          }}
          render={
            () => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <IntroPage/>
                  </div>
                  <div className="section">
                <AboutPage/>
                  </div>
                  <div className="section">
                    <ProjectsPage/>
                  </div>
                  <div className="section">
                    <ContactPage/>
                  </div>
                </ReactFullpage.Wrapper>
              )
            }
          }
        />
      </div>
    )
  }
}

export default MainWrapper;
