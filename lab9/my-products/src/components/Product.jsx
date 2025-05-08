import React from "react";
function Product({ name, price, inStock, onToggle, isEven }) {
    return (
        <div className="product-container" style={{backgroundColor: isEven?'#f9f9f9':'white'}}>            
            <div className="description" style={{ width: '60%', color: inStock ? 'green' : 'red' }}>{name}</div>
            <div className="number" style={{ width: '20%' }}>{price}</div>
            <div style={{ width: '20%',padding:"5px" }}><button className="action-button" onClick={onToggle}>{inStock ? 'Out of Stock' : 'In Stock'}</button></div>
        </div>
    );
}
export default Product;