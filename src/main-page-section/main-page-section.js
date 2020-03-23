import React, {Component} from 'react';
import ReactDOM from "react-dom";
import ReactFullpage from '@fullpage/react-fullpage';
import './main-page-section.css';

export class MainPageSection extends Component {
  render() {
    return (
      <ReactFullpage
        sectionsColor={["#ffffff", "#00c09d"]}
        render={
          (state, fullpageApi) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1</p>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  }
}

ReactDOM.render(<MainPageSection />, document.getElementById("root"));
export default MainPageSection;
