import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getPreviews} from "../../actions/essentilaActions";



class Collections extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    componentDidMount(){
        this.props.getPreviews();
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { previews } = this.props;
        return (
            <Carousel className="locate-top">
                {previews.map((preview) => (
                    <Carousel.Item
                        key={preview.id}
                    >
                        <img
                            className="d-block w-100"
                            src={preview.img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{preview.title}</h3>
                            <p>{preview.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

Collections.propTypes = {
    previews: PropTypes.array.isRequired,
    getContacts: PropTypes.func
};

const mapStateToProps = (state) => ({
    previews: state.preview.previews
});


export default connect(mapStateToProps, {getPreviews})(Collections);
