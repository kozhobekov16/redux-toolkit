import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeProduct} from "./redux/slices/countSlice";

const Basket = () => {
    const products = useSelector(state => state.countSlice.products)
    const dispatch = useDispatch()
    const removeItem = (id) => {
        dispatch(removeProduct(id))
    }
    return (
        <div>
            <div>
                {products.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Basket;