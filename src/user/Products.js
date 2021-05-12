import React, { useState } from 'react'
import { Redirect } from 'react-router';

const Products = () => {

    const [redirect, setRedirect] = useState(false);


    let Product = [
        {
            id:1,
            cardTitles:'this is title',
            imageUrl: 'https://images.pexels.com/photos/125437/pexels-photo-125437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w',
            cardDescription:" this is descri[tion",
            cardPrice: '2'
        },
       {
            id:2,
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/667803/pexels-photo-667803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w',
            cardDescription:" thisis descritpion",
            cardPrice: '130'
        },
        {
            id:3,
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/707377/pexels-photo-707377.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w',
            cardDescription:" thisis descritpion",
            cardPrice: '140'
        },
       {
            id:4,
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w,',
            cardDescription:" thisis descritpion",
            cardPrice: '150'
        },
        {
            id:5,
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/122436/girl-water-wet-summer-122436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w',
            cardDescription:" thisis descritpion",
            cardPrice: '160'
        },
       {
            id:6,
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/114011/pexels-photo-114011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w',
            cardDescription:" thisis descritpion",
            cardPrice: '120'
        },
    ]

    const [count, setCount] = useState(Product.count);



    const addItemToCart = (item) => {
        let cart = [];
        if(typeof window !== undefined) {
            if(localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            cart.push({...item,count:1});
            localStorage.setItem("cart", JSON.stringify(cart));
            setRedirect(true)
        }
    }

    const getRedirect = (redirect) => {
        console.log("redirect",redirect)
        if(redirect) {
            return <Redirect to="/cart" />
        }
    }

    return (
        <div className="row">
        { getRedirect(redirect) }
        {Product.map((product, index)=> (
            <div className="col-4 mt-2">
                <div className="card text-white bg-dark border border-info">
                    <div className="card-header lead">{product.cardTitles}</div>
                        <div className="card-body">
                            <div className="rounded border border-success p-2">
                                <img src={ product.imageUrl }
                                    alt="photo"
                                    style={{maxHeight: "100%", maxWidth: "100%"}}
                                    className="mb-3 rounded"
                                />
                            </div>
                            <p className="lead bg-success font-weight-normal text-wrap">{ product.cardDescription}</p>
                            <p className="btn btn-success rounded btn-sm px-4">$ { product.cardPrice }</p>
                            <div className="row">
                                <div className="col-12">
                                <button onClick={() => {
                                        addItemToCart(product)
                                    }} className="btn form-control btn-outline-success mt-2 mb-2">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        ))}
        </div>  
    )
}

export default Products