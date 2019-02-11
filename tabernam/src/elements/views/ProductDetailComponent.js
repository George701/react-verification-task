import React, { Component } from 'react';

class ProductDetailComponent  extends Component {
    render() {
        const { img, title, price, color } = this.props;
        return (
            <div className="hover-box-action">
                <img src={img} alt="img" className="product-img"/>
                <h2>{title}</h2>
                <h3>{price}$</h3>
                <input type="color" id="head" name="head" value={color}/>
            </div>
        );
    }
}

export default ProductDetailComponent ;