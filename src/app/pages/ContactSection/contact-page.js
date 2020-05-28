import React, {Component} from 'react';
import SectionHeading from '../../components/SectionHeading/section-heading';
import mentionGirl from '../../assets/mention.png';
import './contact-page.scss';

class ContactPage extends Component {
  contactButtonList = [
    {
      name: 'Github',
      iconImage: 'fab fa-github icon-button',
      link: 'https://github.com/rimildeyjsr',
    },
    {
      name: 'Twitter',
      iconImage: 'fab fa-twitter icon-button',
      link: 'https://twitter.com/rimildeyjsr',
    },
    {
      name: 'LinkedIn',
      iconImage: 'fab fa-linkedin icon-button',
      link: 'https://www.linkedin.com/in/rimildeyjsr/',
    },
    {
      name: 'Mail',
      iconImage: 'fas fa-at icon-button',
      link: 'mailto:rimildeyjsr@gmail.com',
    },
  ];

  openLink(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <div className="contact-page-container" id="contact-page">
        <div className="contact-div">
          <SectionHeading
            sectionName="Contact"
            backgroundColor="#057a8b"
            textColor="white"
          />

          <div className="contact-content-container">
            <p className="content-paragraph">
              Feel free to reach out if you want to discuss life as a Potter-head,
              Angular vs React, European monarchies, GRRM's writing speed,
              brownie recipes, and book to movie adaptations. I am always open to talk about
              other stuff if my pet topics are not your cup of tea!
            </p>

            <div className="pic-container">
              <div className="mention-image-container">
                <img
                  src={mentionGirl}
                  alt="mention girl image"
                  className="mention-image"
                />
              </div>

              <div className="contact-button-container">
                {
                  this.contactButtonList.map((button) => {
                    return (
                      <div
                        className="button-container"
                        onClick={() => this.openLink(button.link)}
                      >
                        <i className={button.iconImage} />
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactPage;
