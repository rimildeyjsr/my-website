import React, {Component} from 'react';
import './gradient-wrapper.scss';

class GradientWrapper extends Component {
  constructor(props) {
    super(props);
  }

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
      </div>
    );
  }
}

export default GradientWrapper;
