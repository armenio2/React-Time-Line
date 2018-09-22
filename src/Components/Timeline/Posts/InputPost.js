import React from "react";
//import './CardLeft.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsComponent from "../Posts/PostsComponent"


class InputPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', componentes: null };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.value);
        this.state = {
            componentes: <PostsComponent title={this.state.value} body={this.state.value} />
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3"  /*style="margin-top: 40px ;width: 46rem;"*/>
                    <input id="postInput" type="text" class="form-control" placeholder="Message" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.value} onChange={this.handleChange}></input>
                    <div class="input-group-append">
                        <button class="input-group-text" id="basic-addon2" type="submit" value="Submit">Post</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default InputPost;


