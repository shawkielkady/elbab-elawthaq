import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaThList,
  FaBoxes,
  FaLayerGroup,
} from "react-icons/fa";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) => (pathname === path ? "side-link active" : "side-link");

  return (
    <aside className="admin-sidebar">
      <div className="brand">
        <h3>الباب الأوثق</h3>
        <small>Admin Panel</small>
      </div>

      <Nav className="flex-column">
        <Nav.Item>
          <Link to="/admin" className={linkClass("/admin")}>
            <FaTachometerAlt className="me-2" /> لوحة التحكم
          </Link>
        </Nav.Item>

        {/* <Nav.Item>
          <Link to="/admin/categories" className={linkClass("/admin/categories")}>
            <FaThList className="me-2" /> التصنيفات
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/admin/subcategories" className={linkClass("/admin/subcategories")}>
            <FaLayerGroup className="me-2" /> التصنيفات الفرعية
          </Link>
        </Nav.Item> */}

        <Nav.Item>
          <Link to="/admin/adminProducts" className={linkClass("/admin/products")}>
            <FaBoxes className="me-2" />   الوحدات
          </Link>
        </Nav.Item>
      </Nav>

      <div className="sidebar-footer">
        <small>مصدر: لوحة تجريبية</small>
      </div>
    </aside>
  );
}
