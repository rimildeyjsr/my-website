import React, {Component} from 'react';
import './main-wrapper.scss';
import FirstPage from "./FirstPage/first-page";

export class MainWrapper extends Component {
  render() {
    return (
      <div>
        <FirstPage/>
      </div>
    )
  }
}

export default MainWrapper;
