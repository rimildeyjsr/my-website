import React, {Component} from 'react';
import SectionHeading from '../../components/SectionHeading/section-heading';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './projects-page.scss';
import introPicture from '../../assets/rimil.jpg';

class ProjectsPage extends Component {
  projectList = [
    {
      name: 'Patterns',
      image: introPicture,
      techStack: 'Swift',
      link: 'https://github.com/rimildeyjsr/patterns',
    },
    {
      name: 'St. Anthony School\'s Website',
      image: introPicture,
      techStack: 'HTML, CSS, Javascript, Jquery',
      link: 'http://stanthonysdoranda.org/',
    },
    {
      name: 'Prateek\'s Portfolio Website',
      image: introPicture,
      techStack: 'HTML, CSS, Javascript, Jquery',
      link: 'https://hackertronix.com/',
    },
    {
      name: 'ToDo List',
      image: introPicture,
      techStack: 'React',
      link: 'https://rimildeyjsr.github.io/todo/',
    },
    {
      name: 'Tic-tac-toe Game',
      image: introPicture,
      techStack: 'Angular',
      link: 'https://rimildeyjsr.github.io/tic-tac-toe/',
    },
    {
      name: 'Admin Dashboard',
      image: introPicture,
      techStack: 'React, Firebase',
      link: 'https://github.com/rimildeyjsr/admin-dashboard',
    },
  ];

  openLink(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <div className="projects-page-container" id="projects-page">
        <SectionHeading
          sectionName="Projects"
          backgroundColor="#188a62"
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
                <div className="project-div">
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
                    className="project-link-text"
                    onClick={() => this.openLink(project.link)}
                  >
                    See Project
                  </button>
                </div>
              );
            })
          }
        </Carousel>
      </div>
    );
  }
}

export default ProjectsPage;
