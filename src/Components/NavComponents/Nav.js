import React from "react";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./Logo";
import ButtonNav from "./ButtonNav";
import InputNav from "./InputNav";


class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Logo />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ButtonNav />
            <InputNav />
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;


