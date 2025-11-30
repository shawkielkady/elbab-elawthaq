import React from 'react'
import colors from '../assets/styles/colors';
import { FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


export const ProductCard = ({ productimg, productName }) => {
  return (
    <div className="product-card text-center shadow-sm rounded-4 p-3 ">
      <img
        src={productimg}
        alt={productName}
        className="img-fluid rounded-3 mb-3"
        style={{ height: '200px', objectFit: 'cover', width: '100%' }}
      />
      <h5 className="mb-3">{productName}</h5>
      <button
        className="btn px-4 py-2"
        style={{
          backgroundColor: colors.gold,
          color: colors.white,
          border: 'none',
          borderRadius: '10px',
          fontWeight: 'bold',
        }}
        onClick={() =>
    window.open('https://wa.me/+96560993838', '_blank')
  }
      >
     <FaWhatsapp size={22} color={colors.white} />   عرض التفاصيل 
      </button>
      
    </div>
  );
};