import React from 'react';

const Product = (props) => {
    // console.log(props)
    // const {img, name}
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "100%", height: "220px" }}>
            <div className="row no-gutters">

            <div className="col-md-4" style={{height: "220px"}}>
                <img src={props.product.photo} alt="" />
                {/* <img src={props.product.photo} className="card-img" alt="..." /> */}
            </div>

            <div className="col-md-8">

                <div className="card-body">

                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    .
                </p>
                <br/> 
                <h6 className="card-title">Price: ${props.product.price}</h6>
                <button style={{cursor: "pointer"}} className="btn btn-warning" 
                onClick={()=> props.handleAddProduct(props.product)} 

                > add to cart</button>

                
                </div>

            </div>
            </div>
        </div>
        </div>
    );
};

export default Product;