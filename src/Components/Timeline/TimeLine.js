import React from "react";
import './TimeLine.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetPosts from "../../Network/GetPosts";
import PostsComponent from './Posts/PostsComponent';
import InputPost from "./Posts/InputPost";


class TimeLine extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            componentes: null

        }

        this.createPosts(this)
    }

    createPosts(context) {
        GetPosts()
            .then(function (result) {
                var componentes = result.map(function (element) {
                    return <PostsComponent title={element.title} body={element.body} />
                })

                context.setState({
                    componentes: componentes
                })
            })
    }


    render() {
        return (
            <section>
                <InputPost/>
                <div id="postsArea" inputPosts={this.state.inputPosts} >
                    {this.state.componentes}
                </div>
            </section>
        );
    }
}

export default TimeLine;
