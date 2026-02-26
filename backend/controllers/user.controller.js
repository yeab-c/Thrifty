import User from "../models/user.model.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({sucess: false, message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({ sucess: true, message: 'Login successful', token });
        } else {
            res.json({ sucess: false, message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.json({ sucess: false, message: 'Error logging in user', error });
    }
}

// Route for user registration
const registerUser = async (req, res) => {
    try {
        
        // getting user details from the request body from the frontend
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ sucess: false, message: 'User already exists' });
        }

        if (!validator.isEmail(email)) {
            return res.json({ sucess: false, message: 'Invalid email format' });
        }

        if (password.length < 8) {
            return res.json({ sucess: false, message: 'Password must be at least 8 characters long' });
        }

        if (!validator.isStrongPassword(password)) {
            return res.json({ sucess: false, message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
        }

        // hashing the password before saving to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating a new user instance
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // saving the user to the database
        const user = await newUser.save();

        const token = createToken(user._id);

        res.status(201).json({ message: 'User registered successfully', token });

    } catch (error) {
        console.error('Error registering user:', error);
        res.json({ sucess: false, message: 'Error registering user', error });
    }
}

// Route for admin login
const adminLogin = async (req, res) => {

}




export { loginUser, registerUser, adminLogin };