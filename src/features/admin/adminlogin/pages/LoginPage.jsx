/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import colors from "../../../../assets/styles/colors";
import { motion } from "framer-motion";
import logo from '../../../../assets/images/logo.png'
import { FaWhatsapp } from "react-icons/fa"

export default function LoginPage({ logoImg = logo }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // if (email === "admin@admin.com" && pass === "123456") {
    //   localStorage.setItem("admin_logged_in", "1");
      nav("/admin");
    // } else {
    //   alert("بيانات الدخول غير صحيحة (جرب admin@admin.com / 123456)");
    // }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="d-flex flex-column flex-md-row vh-100"
      style={{ background: colors.white }}
    >
      {/* Right Side – Form */}
      <motion.div
        className="d-flex justify-content-center align-items-center flex-fill p-4"
        style={{ background: colors.white }}
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="p-4 p-md-5 shadow-lg rounded-4"
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "#fff",
            border: `1px solid ${colors.lightGrey}`,
          }}
        >
          <h3 className="text-center mb-4" style={{ color: colors.gold, fontWeight: "bold" }}>
            تسجيل الدخول
          </h3>

          <Form onSubmit={submit}>
            <Form.Group className="mb-3 text-end">
              <Form.Label style={{ fontWeight: "600" }}>البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                className="py-2"
                style={{ borderRadius: "10px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </Form.Group>

            <Form.Group className="mb-4 text-end">
              <Form.Label style={{ fontWeight: "600" }}>كلمة المرور</Form.Label>
              <Form.Control
                type="password"
                className="py-2"
                style={{ borderRadius: "10px" }}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                // required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 py-2"
              style={{
                background: colors.gold,
                border: "none",
                color: "#000",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              دخول
            </Button>
          </Form>
        </div>
      </motion.div>

      {/* Left Side – Logo */}
      <motion.div
        className="d-none d-md-flex flex-column justify-content-center align-items-center flex-fill p-5"
        style={{
          background: colors.gradientGold,
          color: colors.black,
        }}
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={logoImg}
          alt="Logo"
          className="mb-4"
          style={{ width: "55%", maxWidth: "260px" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

{/* <Form onSubmit={submit}>
            <Form.Group className="mb-3">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100"
              style={{ background: colors.gold, border: "none", color: "#000" }}
            >
              دخول
            </Button>
          </Form> */}