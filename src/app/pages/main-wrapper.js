import React, {Component} from 'react';
import ReactDOM from "react-dom";
import ReactFullpage from '@fullpage/react-fullpage';
import './main-wrapper.css';
import FirstPage from "./FirstPage/first-page";

export class MainWrapper extends Component {
  render() {
    return (
      <ReactFullpage
        sectionsColor={["#ffffff", "#ffffff"]}
        render={
          (state, fullpageApi) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <FirstPage/>
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

ReactDOM.render(<MainWrapper />, document.getElementById("root"));
export default MainWrapper;
