import React, { createContext, useEffect, useReducer } from 'react';
import './Cart.css';

import { products } from './products';
import ContextCart from './ContextCart';

import { reducer } from "./reducer";

export const CartContext = createContext();

const Cart = () => {

    const initialState = {
        item: products,
        totalAmount: 0,
        totalItem: 0,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    const clearCart = () => {
        return dispatch({
            type: "CLEAR_ALL",
        });
    };

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    useEffect(() => {
        dispatch({
            type: "GET_TOTAL",
        });
    }, [state.item]);


    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
                <ContextCart />
            </CartContext.Provider>
        </>
    );
};

export default Cart;