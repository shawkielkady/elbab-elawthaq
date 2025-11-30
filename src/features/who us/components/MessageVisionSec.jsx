import React from 'react'

/**
* @author
* @function MessageVisionSec
**/

export const MessageVisionSec = () => {
  return(
    <section className="vision-mission-section">
  <div className="container">
    <div className="section-header">
      <h2>رؤيتنا ورسالتنا</h2>
      <p>نطمح لتقديم تجربة عقارية متكاملة تحقق التميز وتلبي تطلعات عملائنا.</p>
    </div>

    <div className="vision-mission-cards">
      {/* Vision */}
      <div className="card">
        <div className="card-header">
          <i className="fa-solid fa-eye"></i>
          <h3>رؤيتنا</h3>
        </div>
        <p>
          أن نكون الشركة الرائدة في مجال التطوير العقاري من حيث الجودة
          والابتكار، وأن نصنع بيئات سكنية واستثمارية تُلهم أسلوب حياة أفضل.
        </p>
      </div>

      {/* Mission */}
      <div className="card">
        <div className="card-header">
          <i className="fa-solid fa-envelope-open-text"></i>
          <h3>رسالتنا</h3>
        </div>
        <p>
          تقديم خدمات عقارية متميزة تركز على راحة العميل، وتعكس التزامنا
          بالثقة ، الشفافية، والاستدامة في كل خطوة.
        </p>
      </div>
    </div>
  </div>
</section>


   )
  }
