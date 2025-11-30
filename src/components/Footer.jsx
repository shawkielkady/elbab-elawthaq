import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import colors from '../assets/styles/colors';
const Footer = () => {
   return (
    <footer
      style={{
        backgroundColor: colors.gold, // الخلفية الذهبية ✨
        color: colors.white,
        padding: '50px 0 20px',
        direction: 'rtl',
        textAlign: 'center',

      }}
    >
      <Container>
        <Row className="gy-4 text-center text-md-start">
          {/* اللوجو و النبذة */}
          <Col md={4} className="text-end">
            <h4 style={{ color: colors.white, fontWeight: 'bold' }}>الباب الأوثق</h4>
            <p style={{ lineHeight: '1.8' }}>
              مؤسسة الباب الأوثق تقدم أفضل الوحدات العقارية المميزة بخبرة تمتد لأكثر من 20 سنة.
            </p>
          </Col>

          {/* روابط سريعة */}
          <Col md={4} className="text-end">
            <h5 style={{ color: colors.white, fontWeight: 'bold' }}>روابط سريعة</h5>
            <ul className="list-unstyled" style={{ lineHeight: '2' }}>
              <li><a href="/home" style={{ color: colors.white, textDecoration: 'none' }}>الرئيسية</a></li>
              <li><a href="/who-us" style={{ color: colors.white, textDecoration: 'none' }}>من نحن</a></li>
              {/* <li><a href="/units" style={{ color: colors.white, textDecoration: 'none' }}>الوحدات</a></li> */}
              <li><a href="/contact" style={{ color: colors.white, textDecoration: 'none' }}>تواصل معنا</a></li>
            </ul>
          </Col>

          {/* تواصل معنا */}
          <Col md={4} className="text-end">
            <h5 style={{ color: colors.white, fontWeight: 'bold' }}>تواصل معنا</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="https://wa.me/+96560993838" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={22} color={colors.white} />
              </a>
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={22} color={colors.white} />
              </a> */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={22} color={colors.white} />
              </a>
              <a href="mwww.elbab-alawthaq.com">
                <FaEnvelope size={22} color={colors.white} />
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: colors.white, margin: '30px 0' }} />

        <p className="text-center" style={{ margin: 0, color: colors.white }}>
          © {new Date().getFullYear()} جميع الحقوق محفوظة لمؤسسة الباب الأوثق
        </p>
      </Container>
    </footer>
  );

};

export default Footer;
