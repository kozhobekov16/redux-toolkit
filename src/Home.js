import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "./redux/slices/countSlice";

const Home = ({cart}) => {
    const dispatch = useDispatch()
    return (
        <div style={{display: "flex", flexWrap: 'wrap', gap: '14px', marginTop: '20px'}}>
            {cart.map(item => (
                <div key={item.id} style={{background: 'gray'}}>
                    <p>{item.title}</p>
                    <button onClick={() => dispatch(addToCart(item))}>Add to basket</button>
                </div>
            ))}
        </div>
    );
};

export default Home;