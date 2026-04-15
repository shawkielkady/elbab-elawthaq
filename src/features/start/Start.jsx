import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import colors from "../../assets/styles/colors"; // تأكد إنك حافظ الملف هنا
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
export default function StartScreen({ logoImg = logo }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="d-flex flex-column flex-md-row vh-100 text-center"
      style={{
        background: colors.white,
      }}
    >
      {/* القسم الأيسر - الرئيسية */}
      <motion.div
        className="d-flex flex-column justify-content-center align-items-center flex-fill p-5"
        style={{
          background: colors.gradientGold,
          color: colors.black,
        }}
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={logoImg} // حط اللوجو بتاعك هنا
          alt="Logo"
          className="mb-4"
          style={{ width: "50%" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        />
        <motion.button
          onClick={() => navigate("/home")}
          className="btn fw-bold px-5 py-3 rounded-pill shadow-lg"
          style={{
            background: colors.black,
            color: colors.gold,
            border: `2px solid ${colors.gold}`,
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: `0 0 25px ${colors.goldShadow}`,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          الدخول إلى الرئيسية
        </motion.button>
      </motion.div>

      {/* القسم الأيمن - الصفحة الثانية */}
      <motion.div
        className="d-flex flex-column justify-content-center align-items-center flex-fill p-5"
        style={{
          background: colors.black,
          color: colors.gold,
        }}
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={logoImg} // حط اللوجو بتاعك هنا
          alt="Logo"
          className="mb-4"
          style={{ width: "50%" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        />
        <motion.button
          className="btn fw-bold px-5 py-3 rounded-pill shadow-lg d-flex align-items-center justify-content-center gap-2"
          style={{
            background: colors.gold,
            color: colors.black,
            border: `2px solid ${colors.brightGold}`,
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: `0 0 25px ${colors.goldShadow}`,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <a
            href="/demands"
            style={{
              color: colors.black,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaWhatsapp size={22} color={colors.black} /> */}
            اعرض وحدتك لدينا
          </a>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
