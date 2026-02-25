import User from "../models/user.model.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async (req, res) => {

}

// Route for user registration
const registerUser = async (req, res) => {
    try {
        
        // getting user details from the request body from the frontend
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: 'User already exists' });
        }

        if (!validator.isEmail(email)) {
            return res.json({ message: 'Invalid email format' });
        }

        if (password.length < 8) {
            return res.json({ message: 'Password must be at least 8 characters long' });
        }

        if (!validator.isStrongPassword(password)) {
            return res.json({ message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
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
        res.json({ message: 'Error registering user', error });
    }
}

// Route for admin login
const adminLogin = async (req, res) => {

}




export { loginUser, registerUser, adminLogin };