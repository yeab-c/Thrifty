import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'ETB';
    const delivery_fee = 100;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size) => {

        if(!size){
            toast.error('Please select a size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

    }

    const getCartCount = () => {
        let TotalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    TotalCount += cartItems[items][item];
                } catch (error) {
                    console.error("Error calculating cart count:", error);
                }
            }
        }
        if (TotalCount > 99) {
            return '99+';
        }
        return TotalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    }

    const getCartAmmount = () => {
        let totalAmmount = 0;

        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmmount += cartItems[items][item] * itemInfo.price;
                    }
                } catch (error) {
                    console.error("Error calculating cart amount:", error);
                }
            }
        }
        return totalAmmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmmount,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;