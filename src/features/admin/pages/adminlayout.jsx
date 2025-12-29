import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "../components/sidebar";
import '../admin.css'

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    // simple logout
    // localStorage.removeItem("admin_logged_in");
    navigate("/admin/login");
  };

  return (
    <div className="admin-root">
      <Sidebar />
      <div className="admin-main">
        <Navbar bg="light" className="admin-topbar px-3">
          <Navbar.Brand className="ms-2">لوحة التحكم</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={logout} className="d-flex align-items-center">
              <FiLogOut className="me-1" />
              تسجيل خروج
            </Nav.Link>
          </Nav>
        </Navbar>

        <Container fluid className="p-4">
          <Outlet />
        </Container>
      </div>
    </div>
  );
}
