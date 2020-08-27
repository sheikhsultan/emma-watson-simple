import React, { useState } from "react";
import fakeData from "../../fakeData/courses";
import "./Courses.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Courses = () => {
  const first15 = fakeData.slice(0, 15);
  const [coursesCart, setCoursesCart] = useState(first15);

  const [cart, setCart]= useState([]);

  const handleAddProduct = (product)=>{
    const newCart = [...cart, product];
    setCart(newCart);
  }



  return (
    <div className="d-flex ">
      <div className="course-container">
        {
          coursesCart.map( prodt => <Product
              handleAddProduct ={handleAddProduct}
             product={prodt}
             ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div> 
  );
};

export default Courses;
