import React from "react";
import './RightMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class RightMenu extends React.Component {
    render() {

        return (
            <section>
                <div id="divAlert"></div>
                <div class="list-group" /*style="margin-top: 25px;"*/>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Esportes</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Educação</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Política</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Entretenimento</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Games</a>
                </div>
            </section>
        );
    }
}

export default RightMenu;
