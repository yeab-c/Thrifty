import User from "../models/user.model.js";


// add products to cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        const userData = await User.findById(userId);
        let cartData = await userData.cart;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await User.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: 'Product added to cart successfully' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error adding product to cart', error });
    }
}


// get cart items
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        const userData = await User.findById(userId);
        let cartData = await userData.cart;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error getting cart items', error });
    }
}

// update cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        const userData = await User.findById(userId);
        let cartData = await userData.cart;

        cartData[itemId][size] = quantity;

        await User.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: 'Cart updated successfully' });
    } catch (error) {
        log(error);
        res.json({ success: false, message: 'Error updating cart', error });
    }
}

export { addToCart, getUserCart, updateCart }