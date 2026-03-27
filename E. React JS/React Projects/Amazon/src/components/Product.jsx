import React from 'react'
import '../assets/style/Product.css'
import { RiShoppingBagLine, } from "@remixicon/react";

function Product({ product, addProdCart }) {
    const { img, name, price, stock, seller, features } = product;

    return (
        <div className='product'>
            <div className="img-box">
                <img src={img} alt="" />
            </div>

            <div className="product-content">
                <h4 className='product-tittle'>{name}</h4>
                <div className='product-detail'>
                    <span>
                        <p>By: {seller}</p>
                        <h3 className='price'>${price}</h3>
                        <p>Only {stock} left in stock - order soon</p>
                        <button onClick={() => addProdCart(product)} className='add-to-cart'><RiShoppingBagLine /> Add to Cart</button>
                    </span>
                    <span className='featues'>
                        <h4>Featues</h4>
                        <ul>
                            {
                                features.map((feature, i) => <li key={i}>
                                    {feature.description}: <span>{feature.value}</span></li>)
                            }
                        </ul>
                    </span>
                </div>
            </div >
        </div >
    )
}

export default Product