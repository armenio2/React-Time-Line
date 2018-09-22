import React from "react";


class Logo extends React.Component {
  render() {
    return (
      <div >
        <a class="navbar-brand" href="#">Index</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    );
  }
}

export default Logo;
