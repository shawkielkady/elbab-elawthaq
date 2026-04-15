import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String, // String allows formatting like "250,000 د.ك"
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sold: {
    type: Boolean,
    default: false
  },
  img: {
    type: String,
    required: true
  },
  imgs: {
    type: [String],
    default: []
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
