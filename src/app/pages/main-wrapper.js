import React, {Component} from 'react';
import './main-wrapper.scss';
import IntroPage from "./IntroPage/intro-page";
import AboutPage from "./AboutPage/about-page";
import GradientWrapper from "../components/GradientWrapper/gradient-wrapper";
import ProjectsPage from "./ProjectsPage/projects-page";
import ContactPage from "./ContactSection/contact-page";

class MainWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeGradientId: 'introPageGradient',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let aboutPage = document.getElementById('about-page');
    let projectsPage = document.getElementById('projects-page');
    let contactPage = document.getElementById('contact-page');
    let gradientId = '';

    if (window.scrollY < (aboutPage.offsetTop - 400)) {
      gradientId = 'introPageGradient';
    } else if (window.scrollY < (projectsPage.offsetTop - 400)) {
      gradientId = 'aboutPageGradient';
    } else if (window.scrollY < (contactPage.offsetTop - 400)) {
      gradientId = 'projectsPageGradient';
    } else {
      gradientId = 'contactPageGradient';
    }

    this.setState({
      activeGradientId: gradientId,
    });
  };

  render() {
    return (
      <div className="main-wrapper-container">
        <GradientWrapper
          activeGradientId={this.state.activeGradientId}
        />
        <IntroPage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
      </div>
    )
  }
}

export default MainWrapper;
