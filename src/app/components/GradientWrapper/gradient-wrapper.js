import React, {Component} from 'react';
import './gradient-wrapper.scss';

class GradientWrapper extends Component {
  render() {
    return (
      <div>
        <div
          className={"gradient-bg intro-page-gradient" + (this.props.activeGradientId === 'introPageGradient' ? ' active' : '')}
        />
        <div
          className={"gradient-bg about-page-gradient" + (this.props.activeGradientId === 'aboutPageGradient' ? ' active' : '')}
        />
        <div className={"gradient-bg projects-page-gradient" + (this.props.activeGradientId === 'projectsPageGradient' ? ' active' : '')}
        />
        <div className={"gradient-bg contact-page-gradient" + (this.props.activeGradientId === 'contactPageGradient' ? ' active' : '')}
        />
      </div>
    );
  }
}

export default GradientWrapper;
