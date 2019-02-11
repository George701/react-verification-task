import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getComments} from "../../actions/commentActions";
import Comment from './Comment';
import ScrollableAnchor,{ configureAnchors }  from 'react-scrollable-anchor';

class CommentList extends Component {

    componentDidMount(){
        this.props.getComments();
    }

    render() {
        const {comments} = this.props;
        configureAnchors({offset: -60, scrollDuration: 200});
        return (
            <ScrollableAnchor id={'comments'}>
                <div>
                    <h2 className="category-header">Natoque penatibus</h2>
                    {comments.map(comment => {

                            // #TODO: more button
                            // #TODO: more action: display loader, then show more comment
                            if(comment.id < 5){
                                return(
                                    <Comment
                                        key={comment.id}
                                        name={comment.name}
                                        email={comment.email}
                                        body={comment.body}
                                    />
                                )
                            }
                        }
                    )}
                </div>
            </ScrollableAnchor>
        );
    }
}

CommentList.propTypes = {
    pictures: PropTypes.array.isRequired,
    getComments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    comments: state.comment.comments
});

export default connect(mapStateToProps, {getComments})(CommentList);
