import React from 'react'
import { Container } from 'react-bootstrap';
import colors from '../../../assets/styles/colors';

/**
* @author
* @function CustomerCommentSec
**/

export const CustomerCommentSec = () => {
  return(
<section className="customer-comment-section" style={{ backgroundColor: colors.gold }}>
  <div className="container">
    <div className="customer-comment-text">
      <h2>آراء عملائنا</h2>
      <p>نفتخر بثقة عملائنا الذين شاركونا قصص نجاحهم وتجربتهم المميزة معنا.</p>
    </div>

    <div className="customer-comment">
      <div className="comment-card">
        <div className="comment-header">
          <i className="fa-solid fa-user-circle"></i>
          <h3> ابو أحمد</h3>
        </div>
        <p>
          تعاملت مع الشركة وكانت التجربة رائعة جدًا. التزام بالمواعيد وجودة في التنفيذ.
        </p>
      </div>

      <div className="comment-card">
        <div className="comment-header">
          <i className="fa-solid fa-user-circle"></i>
          <h3> ابو زياد</h3>
        </div>
        <p>
          خدمة عملاء ممتازة واحترافية في كل المراحل من البداية حتى التسليم.
        </p>
      </div>
    </div>
  </div>
</section>


   )
  }
