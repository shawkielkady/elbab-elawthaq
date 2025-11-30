import React from 'react'

/**
* @author
* @function WhoUsSec
**/

export const WhoUsSec = () => {
  const points = [
    { icon: "fa-sun", text: "فريق متخصص وخبرة عالية في محال التسويق العقاري" },
    { icon: "fa-building", text: "استخدام احدث تقنيات التكنولوجيا في مجال التسويق العقاري" },
    { icon: "fa-clipboard-check", text:"متابعة دقيقة لإنجاز معاملات التسجيل العقاري" },
    { icon: "fa-chart-line", text: "ضمان تسليم المعاملات في الوقت المحدد" },
  ];

  return (
    <section className="whyus-modern-section">
      <div className="container">
        {/* العنوان */}
        <h2 className="section-title">لماذا نحن؟</h2>

        <div className="whyus-content">
          {/* القائمة */}
          <div className="whyus-list">
            {points.map((item, index) => (
              <div key={index} className="whyus-item">
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* الأيقونة الافتراضية */}
          <div className="whyus-person">
            <div className="whyus-avatar">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="whyus-person-text">
              <p>
                متخصصون في تسويق العقارات بجميع انحاء الكويت
              </p>
              <h4>فريق  الباب الأوثق</h4>
              <span>الخبرة تصنع الفرق</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};