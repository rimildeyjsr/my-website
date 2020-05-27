import React, {Component} from 'react';
import SectionHeading from '../../components/SectionHeading/section-heading';
import "./projects-page.scss";

class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects-page-container" id="projects-page">
        <SectionHeading
          sectionName="Projects"
          backgroundColor="#209153"
          textColor="white"
        />
      </div>
    );
  }
}

export default ProjectsPage;
