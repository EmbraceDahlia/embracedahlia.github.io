import React, { useState } from "react";
import Product from "./Product"

const data = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    { id: 3, name: 'Cherry', price: 2, inStock: true },
    { id: 4, name: 'Durian', price: 10, inStock: true }
]

export default function ProductList() {
    const [products, setProducts] = useState(data);
    const toggleStockStatus = (id) => {
        setProducts(
            (existingProducts) => existingProducts.map((p) => p.id === id ? { ...p, inStock: !p.inStock } : p)
        )
    };
    return (
        <div>
            <div className="product-container" style={{ fontWeight: 'bold'}}>
                <div className='list-title' style={{ width: '60%' }}>Name</div>
                <div className='list-title' style={{ width: '20%' }}>Price</div>
                <div className='list-title' style={{ width: '20%' }}>Action</div>
            </div>
            <div style={{border:"1px solid",borderRadius:"5px",padding:"10px"}}>
            {products.map((product,index) => (
                <Product
                    key={product.id}
                    {...product}
                    onToggle={() => toggleStockStatus(product.id)}
                    isEven={index % 2 === 0} />

            ))}
            </div>
        </div>
    );
}