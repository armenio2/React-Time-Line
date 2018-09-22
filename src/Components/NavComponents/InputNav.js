import React from "react";
import './InputNav.css';


class InputNav extends React.Component {
  render() {
    return (
      <div id="divFormInput" >
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <img src="https://i.imgur.com/3ACmtyW.png" alt="lupa verde render" />
          </button>
        </form>
      </div>
    );
  }
}

export default InputNav;
