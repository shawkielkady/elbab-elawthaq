import dotenv from 'dotenv';
import connectDB from './config/db.js';

import Admin from './models/Admin.js';
import Category from './models/Category.js';
import Product from './models/Product.js';
import Demand from './models/Demand.js';
import bcrypt from 'bcryptjs';
import process from 'process';

dotenv.config();

const categories = [
  {
    title: "بيع",
    desc: "وحدات للبيع بأسعار مميزة",
  },
  {
    title: "إيجار",
    desc: "شقق وبيوت للإيجار",
  },
  {
    title: "بدل",
    desc: "فرص بدل عقاري",
  },
  {
    title: "قصائم صناعية",
    desc: "قصائم صناعية جاهزة",
  },
  {
    title: "مزارع",
    desc: "مزارع للبيع والإيجار",
  },
];

// Product seed dummy data mapping corresponding cat references
const baseProducts = [
  {
    title: "فيلا فاخرة",
    price: "250,000 د.ك",
    description: "فيلا واسعة مع حديقة",
    sold: false,
    catTitle: "بيع", // Used to map
    img: "/images/villa.jpg",
    imgs: ["/images/villa.jpg", "/images/tower.jpg", "/images/apartment.jpg"]
  },
  {
    title: "شقة حديثة",
    price: "120,000 د.ك",
    description: "شقة مطلة على البحر",
    sold: false,
    catTitle: "بيع",
    img: "/images/apartment.jpg",
    imgs: ["/images/villa.jpg", "/images/tower.jpg", "/images/apartment.jpg"]
  },
  {
    title: "منزل ريفي",
    price: "80,000 د.ك",
    description: "منزل هادئ في الريف",
    sold: true,
    catTitle: "إيجار",
    img: "/images/villa.jpg",
    imgs: ["/images/villa.jpg", "/images/tower.jpg"]
  },
  {
    title: "قصر فاخر",
    price: "500,000 د.ك",
    description: "قصر مع مسبح وحديقة كبيرة",
    sold: false,
    catTitle: "بيع",
    img: "/images/villa.jpg",
    imgs: ["/images/villa.jpg", "/images/tower.jpg", "/images/apartment.jpg"]
  },
  {
    title: "شقة صغيرة",
    price: "90,000 د.ك",
    description: "شقة مناسبة للعائلات الصغيرة",
    sold: false,
    catTitle: "إيجار",
    img: "/images/apartment.jpg",
    imgs: ["/images/villa.jpg", "/images/tower.jpg", "/images/apartment.jpg"]
  },
  {
    title: "مزرعة كبيرة",
    price: "300,000 د.ك",
    description: "مزرعة مجهزة بالكامل",
    sold: false,
    catTitle: "مزارع",
    img: "/images/groups.PNG",
    imgs: ["/images/villa.jpg", "/images/tower.jpg", "/images/apartment.jpg"]
  },
  {
    title: "قسيمة صناعية",
    price: "200,000 د.ك",
    description: "مساحة صناعية جاهزة",
    sold: false,
    catTitle: "قصائم صناعية",
    img: "/images/tower.jpg",
    imgs: ["/images/tower.jpg"]
  },
];

const importData = async () => {
  try {
    await connectDB();
    // Clear the DB completely
    await Admin.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await Demand.deleteMany();

    // 1. Create default admin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt); // Default password

    await Admin.create({
      username: 'admin',
      password: hashedPassword
    });
    console.log('Admin inserted: user=admin pass=123456');

    // 2. Insert categories
    const createdCategories = await Category.insertMany(categories);
    console.log('Categories Inserted');

    // 3. Map categories objectId to products array
    const populateProducts = baseProducts.map((p) => {
      // Find matching category object to get _id
      const cat = createdCategories.find(c => c.title === p.catTitle);

      return {
        title: p.title,
        price: p.price,
        description: p.description,
        sold: p.sold,
        category: cat._id, // the dynamic mongodb generated ID
        img: p.img,
        imgs: p.imgs
      };
    });

    // 4. Insert Products
    await Product.insertMany(populateProducts);
    console.log('Products Inserted');

    console.log('Data Imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Admin.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await Demand.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
