// src/components/TopNav.jsx
import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoImage from '../assets/images/logo.png';
/**
 * TopNav: Navbar RTL responsive using react-bootstrap
 * Props:
 *  - logo: path to logo image (default: "/logo.png")
 */
const TopNav = ({ logo = logoImage }) => {
  const gold = "#D4AF37";

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? gold : "#1C1C1C",
    textDecoration: "none",
    fontWeight: isActive ? 700 : 500,
    padding: "8px 12px",
    borderRadius: 6,
  });

  return (
    <>
      <Navbar expand="lg" bg="white" variant="light" className="shadow-sm border-bottom" dir="rtl" sticky="top">
        <Container>
          {/* CTA Button */}
              <div className="d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
                <Button
                  as="a"
                  href="https://wa.me/+96560993838"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: gold,
                    borderColor: gold,
                    color: "#fff",
                    fontWeight: 700,
                    padding: "8px 14px",
                    boxShadow: "0 4px 12px rgba(212,175,55,0.12)",
                    borderRadius: 8,
                  }}
                >
                  تواصل عبر واتساب
                </Button>
              </div>

          <Navbar.Toggle aria-controls="main-navbar-nav" />

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto me-3 align-items-lg-center">
              <Nav.Link as={NavLink} to="/home" style={navLinkStyle} end>
                الرئيسية
              </Nav.Link>

              {/* <NavDropdown title="العقارات" id="properties-dropdown" align="end">
                <NavDropdown.Item as={NavLink} to="/villas">فلل</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/apartments">شقق</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/towers">أبراج</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/compounds">مجمعات</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/farms">استراحات ومزارع</NavDropdown.Item>
              </NavDropdown> */}

              {/* <Nav.Link as={NavLink} to="/demands" style={navLinkStyle}>
                مطلوب لدينا
              </Nav.Link> */}

              {/* <Nav.Link as={NavLink} to="/swap" style={navLinkStyle}>
                تبديل عقار
              </Nav.Link> */}

              <Nav.Link as={NavLink} to="/who-us" style={navLinkStyle}>
                من نحن
              </Nav.Link>
                   <Nav.Link as={NavLink} to="/categories" style={navLinkStyle}>
                 الأقسام
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" style={navLinkStyle}>
                تواصل معنا
              </Nav.Link>

              
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center gap-2">
            <img src={logo} alt="" width={120} height={120} style={{ objectFit: "contain",height:"auto"   }} />
            
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Floating WhatsApp quick button (mobile friendly) */}
      <a
        href="https://wa.me/+96560993838"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp d-lg-none"
        aria-label="WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .027 5.347.027 12.005c0 2.112.554 4.173 1.605 5.99L0 24l5.39-1.403A11.907 11.907 0 0012 24c6.627 0 12-5.373 12-11.995 0-3.2-1.244-6.203-3.48-8.525zM12 21.75c-1.146 0-2.266-.193-3.31-.574l-.235-.083-3.2.834.86-2.97-.09-.234A8.294 8.294 0 013.75 12.005 8.25 8.25 0 1112 21.75zM17.064 14.39c-.25-.125-1.478-.73-1.706-.814-.228-.084-.395-.125-.56.125-.165.25-.64.814-.785.98-.144.166-.288.187-.538.062-.25-.125-1.055-.388-2.01-1.237-.744-.664-1.246-1.482-1.39-1.732-.144-.25-.016-.385.11-.51.112-.111.25-.29.375-.435.125-.145.166-.25.249-.416.083-.166.042-.312-.021-.437-.062-.125-.56-1.35-.767-1.857-.202-.486-.407-.42-.56-.427l-.48-.008c-.166 0-.437.062-.665.312-.228.25-.87.85-.87 2.072 0 1.221.892 2.404 1.018 2.572.124.166 1.77 2.743 4.287 3.847 3.003 1.36 3.662 1.263 4.327 1.182.165-.062 1.478-.606 1.686-1.197.208-.59.208-1.094.145-1.197-.062-.104-.228-.166-.477-.291z"/>
        </svg>
      </a>

      {/* Inline styles for floating button (can move to css file) */}
      <style jsx="true">{`
        .floating-whatsapp {
          position: fixed;
          bottom: 18px;
          left: 18px; /* left because RTL layout */
          width: 52px;
          height: 52px;
          background: ${gold};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.18);
          z-index: 1050;
          text-decoration: none;
        }

        /* Active link highlight (desktop) */
        .nav-link.active {
          color: ${gold} !important;
        }

        /* Adjust dropdown alignment for RTL */
        .dropdown-menu {
          text-align: right;
          right: 0;
          left: auto;
        }

        @media (max-width: 991px) {
          .navbar-brand div small {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default TopNav;
