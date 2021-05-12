import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const Cart = () => {

    const [cartProduct, setCartProduct] = useState([]);
    const [amount, setAmount] = useState();
    const [reload, setReload] = useState(false);

    const loadCart = () => {
        let cart = [];
        let price=0;
        if(typeof window !== undefined) {
            if(localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
                setCartProduct(cart);
            }
            cart.map( p =>{
                console.log("p=======",p);
                price = price + parseInt(p.cardPrice)
            })
            console.log("price====== ", price);
            setAmount(price)
            
        }
    }

    const removeItemFromCart = (productId) => {
        let cart = [];
        if(typeof window !== undefined) {
            if(localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
           cart.map((product,i) => {
               if(product.id === productId) {
                console.log("productId ======== ",productId," ==",product._id);
                   cart.splice(i, 1);
               }
           })
           localStorage.setItem("cart", JSON.stringify(cart));
           setReload(true);
           
        }
    }

    useEffect(() => {
        loadCart() 
    }, [reload])

    return (
    <div>
        <div className="row">
            <div className="col-2">
                 <Link to="/" className="btn btn-dark my-3">Go To Home</Link>
            </div>
            <div className="col-8">
                 <h3 className="text-center mt-3">Ready to Checkout</h3>
            </div>
        </div>
        <div className="row ">
            <div className="col-6 text-center">
                <h4 >Your Order</h4>
                {cartProduct.map((product, index)=> (
                <div className="col-8 mt-2 x" key={index}>
                    <div className="card  text-white bg-dark border border-info">
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
                                            removeItemFromCart(product.id)
                                        }} className="btn form-control btn-outline-success mt-2 mb-2">
                                        Remove Item From Cart Cart
                                    </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="col-6 text-center">
                <h4 >Total</h4>
             <h5>Your Total Amount is {amount}</h5>
            <button className="btn btn-success">Buy</button>
            </div>
        </div> 
    </div> 
    )
}

export default Cart;