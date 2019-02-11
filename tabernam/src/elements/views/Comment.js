import React, { Component } from 'react';

class Comment extends Component {
    render() {
        const { name, email, body} = this.props;

        return (
            <div className="comment-body">
                <div className="comment-head">
                    <img src="http://www.aestore.in/image/cache/aefkst48-800x800.jpg" alt="img"/>
                    <div className="comment-credentials">
                        <div><span>Title: </span>{name}</div>
                        <div><span>Email: </span>{email}</div>
                    </div>
                </div>
                <div>{body}</div>
            </div>
        );
    }
}

export default Comment;