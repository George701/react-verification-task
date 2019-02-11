import React, { Component } from 'react';
import ProductDetaileComponent from './ProductDetailComponent';
import ScrollableAnchor,{ configureAnchors }  from 'react-scrollable-anchor';

class ProductListContainer extends Component {
    state = {products: []};

    componentDidMount(){
        fetch('/products')
            .then(res => res.json())
            .then(products => this.setState({ products }));
    }



    render() {
        const { products } = this.state;
        configureAnchors({offset: -60, scrollDuration: 200});
        return (
            <ScrollableAnchor id={'product'}>
                <div>
                    <h2 className="category-header">Nullam lacinia</h2>
                    <div className="grid-container">
                        {products.map((product) => (
                            <ProductDetaileComponent
                                key={product.id}
                                img={product.img}
                                title={product.title}
                                price={product.price}
                                color = {product.color}
                            />
                        ))}
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }
}
export default ProductListContainer;