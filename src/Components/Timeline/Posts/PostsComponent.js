import React from "react";
import './PostsComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostsComponent extends React.Component {
    render() {
        return (
            <div class="card text-white bg-dark mb-3" /*id="post-${element.id}"*/ /*style="width: 46rem; margin-top: 25px;"*/>
                <div class="card-body">
                    <div class="container">
                        <div class="row" id="postRow">
                            <div class="col-2">
                                <img src="https://i.imgur.com/qkmlLDG.jpg" alt="" /*style="width: 70px; border-radius: 50%;"*/ />
                            </div>
                            <div class="col-10">
                                <h5 class="card-title">{this.props.title}</h5>
                                <div class="imgContent">
                                    <img class="card-img-top" src="https://i.imgur.com/qGPeR2M.jpg" alt="Card image cap" /*style="width: 200px" */ />
                                    <img class="card-img-top" src="https://i.imgur.com/qGPeR2M.jpg" alt="Card image cap" /*style="width: 200px"*/ />
                                    <img class="card-img-top" src="https://i.imgur.com/qGPeR2M.jpg" alt="Card image cap" /*style="width: 200px"*/ />
                                    <img class="card-img-top" src="https://i.imgur.com/qGPeR2M.jpg" alt="Card image cap" /*style="width: 200px"*/ />
                                </div>
                                <p class="card-text">{this.props.body}</p>
                                <div class="card-body">
                                    <a /*onclick="toggleComments(${element.id})"*/ /*onClick={this.handleClick}*/ >Comments</a>
                                </div>
                                <div /*id="comment-${element.id}" */ /*data-visible="true"*/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PostsComponent;
