import Demand from '../models/Demand.js';
import Product from '../models/Product.js';

// @desc    Submit a demand
// @route   POST /api/demands
// @access  Public
export const createDemand = async (req, res) => {
  const { title, price, category, description, img, senderName, senderPhone } = req.body;

  try {
    const demand = new Demand({
      title,
      price,
      category,
      description,
      img,
      senderName,
      senderPhone
    });

    const createdDemand = await demand.save();
    res.status(201).json(createdDemand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all demands
// @route   GET /api/demands
// @access  Private/Admin
export const getDemands = async (req, res) => {
  try {
    const demands = await Demand.find({}).populate('category', 'title desc');
    res.json(demands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update demand status (Approve/Reject)
// @route   PUT /api/demands/:id/status
// @access  Private/Admin
export const updateDemandStatus = async (req, res) => {
  const { status } = req.body; // 'approved' or 'rejected'

  try {
    const demand = await Demand.findById(req.params.id);

    if (demand) {
      demand.status = status;
      const updatedDemand = await demand.save();

      // If approved, automatically create a listing (Product)
      if (status === 'approved') {
        const product = new Product({
          title: demand.title,
          price: demand.price,
          category: demand.category,
          description: `من: ${demand.senderName} - ${demand.description}`,
          img: demand.img,
          imgs: [demand.img], // Put the main img in the array too
          sold: false
        });
        await product.save();
      }

      res.json(updatedDemand);
    } else {
      res.status(404).json({ message: 'Demand not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
