import React from 'react'

const Products = () => {

   
    let Product = [
        {
            cardTitles:'this is title',
            imageUrl: 'https://images.pexels.com/photos/125437/pexels-photo-125437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w',
            cardDescription:" this is descri[tion",
            cardPrice: '2'
        },
       {
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/667803/pexels-photo-667803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w',
            cardDescription:" thisis descritpion",
            cardPrice: '130'
        },
        {
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/707377/pexels-photo-707377.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w',
            cardDescription:" thisis descritpion",
            cardPrice: '140'
        },
       {
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w,',
            cardDescription:" thisis descritpion",
            cardPrice: '150'
        },
        {
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/122436/girl-water-wet-summer-122436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w',
            cardDescription:" thisis descritpion",
            cardPrice: '160'
        },
       {
            cardTitles:'title',
            imageUrl: 'https://images.pexels.com/photos/114011/pexels-photo-114011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w',
            cardDescription:" thisis descritpion",
            cardPrice: '120'
        },
    ]

    

    return (
        <div className="row">
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
                                    showAddToCard
                                </div>
                                <div className="col-12">
                                    showRemoveFromCard
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