import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {GET_DATA} from "../../actions/types";



class Header extends Component {

    componentDidMount(){
        this.props.getNavigators();
    }

    render() {
        const { navigators } = this.props;
        return (
            <ul className="row nav-list">
                {navigators.map(navigator =>
                    (
                        <li
                            key={navigator.id}
                            className="col-sm"
                        >
                            <a href={navigator.link} className="nav-link">
                                {navigator.title}
                            </a>
                        </li>
                    )
                )}
            </ul>
        );
    }
}

Header.propTypes = {
    navigators: PropTypes.array.isRequired,
    getNavigators: PropTypes.func
};

const mapStateToProps = (state) => ({
    navigators: state.navigator.navigators
});

const mapDispatchToProps = (dispatch) => ({
    getNavigators: () => dispatch({type: GET_DATA})
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);