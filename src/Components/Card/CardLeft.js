import React from "react";
import './CardLeft.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class CardLeft extends React.Component {
    render() {
        return (
            <div id="DivCardLeft" class="card text-white bg-dark mb-3" >
                <div class="card-header" >
                    <img src="https://i.imgur.com/qkmlLDG.jpg" alt="..." class="img-thumbnail rounded-circle"  />
                </div>
                <div class="card-body" >
                    <h5 class="card-title">Projota</h5>
                    <p class="card-text">Tenha disposição para sair do zero, e pense, eu não quero fazer o que eu posso, eu posso fazer o
                            que eu quero</p>
                </div>
            </div>
        );
    }
}

export default CardLeft;
