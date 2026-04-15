import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    // Optionally allow filtering by category or sold status via query params
    // e.g., /api/products?category=123&sold=false
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.sold) filter.sold = req.query.sold === 'true';

    const products = await Product.find(filter).populate('category', 'title desc');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'title desc');
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  const { title, price, category, description, sold, img, imgs } = req.body;

  try {
    const product = new Product({
      title,
      price,
      category,
      description,
      sold: sold || false,
      img,
      imgs: imgs || []
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req, res) => {
  const { title, price, category, description, sold, img, imgs } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      if (title) product.title = title;
      if (price) product.price = price;
      if (category) product.category = category;
      if (description) product.description = description;
      if (sold !== undefined) product.sold = sold;
      if (img) product.img = img;
      if (imgs) product.imgs = imgs;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (product) {
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
