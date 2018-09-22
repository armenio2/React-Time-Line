import React from "react";


class ButtonNav extends React.Component {
  render() {
    return (
      <div >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
                        <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Notification
                        <span class="badge badge-light">9</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Friends</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Albuns</a>
          </li>

        </ul>
      </div>
    );
  }
}

export default ButtonNav;
