import React, {Component} from 'react';
import SectionHeading from '../../components/SectionHeading/section-heading';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './projects-page.scss';
import stAnthonyPicture from '../../assets/st-anthonys-website.png';
import prateekPicture from '../../assets/hackertronix-website.png';
import ticTacToePicture from '../../assets/tic-tac-toe.png';
import toDoPicture from '../../assets/todo-website.png';
import adminDashboardPicture from '../../assets/admin-dash.png';
import patternsPicture from '../../assets/patterns.png';

class ProjectsPage extends Component {
  projectList = [
    {
      name: 'Patterns - Playground app',
      image: patternsPicture,
      techStack: 'Swift',
      link: 'https://github.com/rimildeyjsr/patterns',
      key: 1,
    },
    {
      name: 'St. Anthony School\'s Website',
      image: stAnthonyPicture,
      techStack: 'HTML, CSS, Javascript, Jquery',
      link: 'http://stanthonysdoranda.org/',
      key: 2,
    },
    {
      name: 'Prateek\'s Portfolio Website',
      image: prateekPicture,
      techStack: 'HTML, CSS, Javascript, Jquery',
      link: 'https://hackertronix.com/',
      key: 3,
    },
    {
      name: 'To-Do App',
      image: toDoPicture,
      techStack: 'React',
      link: 'https://rimildeyjsr.github.io/todo/',
      key: 4,
    },
    {
      name: 'Tic-tac-toe Game',
      image: ticTacToePicture,
      techStack: 'Angular',
      link: 'https://rimildeyjsr.github.io/tic-tac-toe/',
      key: 6,
    },
    {
      name: 'Admin Dashboard',
      image: adminDashboardPicture,
      techStack: 'React, Firebase',
      link: 'https://github.com/rimildeyjsr/admin-dashboard',
      key: 7
    },
  ];

  openLink(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <section className="projects-page-container" id="projects-page">
        <SectionHeading
          sectionName="Projects"
          backgroundColor="#1e3264"
          textColor="white"
        />

        <Carousel
          arrows
          dots
          infinite
          keepDirectionWhenDragging
          animationSpeed="1500"
          className="carousel-container"
        >
          {
            this.projectList.map((project) => {
              return (
                <div className="project-div" key={project.key}>
                  <div className="project-details-container">
                    <div className="project-picture">
                      <img
                        src={project.image}
                        alt="project picture"
                        className="project-img"
                      />
                    </div>

                    <div className="project-text">
                      <h1 className="project-heading">
                        {project.name}
                      </h1>

                      <h2 className="project-sub-heading">
                        {project.techStack}
                      </h2>
                    </div>
                  </div>

                  <div className="project-background" />

                  <button
                    className="project-link-button"
                    onClick={() => this.openLink(project.link)}
                  >
                    See Project
                  </button>
                </div>
              );
            })
          }
        </Carousel>
      </section>
    );
  }
}

export default ProjectsPage;
