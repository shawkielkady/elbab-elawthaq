import mongoose from 'mongoose';

const demandSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
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
  img: {
    type: String, // Or array depending on if users upload 1 or multiple
    required: true
  },
  senderName: {
    type: String,
    required: true
  },
  senderPhone: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

const Demand = mongoose.model('Demand', demandSchema);
export default Demand;
