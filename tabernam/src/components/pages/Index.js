import React, { Component } from 'react';
import Collections from '../../elements/carousel/Collections';
import ProductListContainer from '../../elements/views/ProductListContainer'
import Jumbotron from '../../elements/views/Jumbotron'
import Article from '../../elements/views/Article'
import CommentList from '../../elements/views/CommetList'

class Index extends Component {
    render() {
        return (
            <div>
                <Collections />
                <br/>
                <Jumbotron/>
                <Article/>
                <ProductListContainer />
                <CommentList/>
            </div>
    );
    }
}

export default Index;
