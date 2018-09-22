import React, { Component } from 'react';
import './App.css';
import Nav from "../NavComponents/Nav"
import CardLeft from '../Card/CardLeft';
import ContentMiddle from '../Timeline/TimeLine';
import RightMenu from '../TemasMenu/RightMenu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="navbarCss">
          <Nav />
        </section>
        <div class="container-fluid bg-secondary mb-3">
          <div class="row">
            <div class="col" id="contentLeft" >
              <CardLeft />
            </div>
            <div class="col-7 " id="contentMiddle">
              <ContentMiddle />
            </div>
            <div class="col" id="contentRight">
              <RightMenu />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
