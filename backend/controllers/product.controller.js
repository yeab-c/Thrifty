import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/product.model.js';

// for adding new product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1?.[0]
        const image2 = req.files.image2?.[0]
        const image3 = req.files.image3?.[0]
        const image4 = req.files.image4?.[0]

        const images = [image1, image2, image3, image4].filter(image => image !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {
                    folder: 'thrifty/products',
                    resource_type: 'image'
                });
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: bestseller === 'true' ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new Product(productData);
        await product.save();

        res.json({ success: true, message: 'Product added successfully', imagesUrl });
    } catch (error) {
        console.error('Error adding product:', error);
        res.json({ success: false, message: 'Error adding product', error });
    }
}

// for listing all products
const listProducts = async (req, res) => {
  try {
    
    const products = await Product.find({});
    res.json({ success: true, products });

  } catch (error) {
    console.error('Error fetching products:', error);
    res.json({ success: false, message: 'Error fetching products', error });
  }
}

// for removing a producta
const removeProduct = async (req, res) => {
    try {
        
        await Product.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Product removed successfully' });

    } catch (error) {
        console.error('Error removing product:', error);
        res.json({ success: false, message: 'Error removing product', error });
    }
}

// for single product details
const singleProduct = async (req, res) => {
    try {
        
        const { productId } = req.body;
        const product = await Product.findById(productId);

        res.json({ success: true, product });

    } catch (error) {
        console.error('Error fetching single product:', error);
        res.json({ success: false, message: 'Error fetching single product', error });
    }
}

export { addProduct, listProducts, removeProduct, singleProduct };