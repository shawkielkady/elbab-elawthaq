import React from 'react'
import whous from '../../../assets/images/whous.jpg'
import colors from '../../../assets/styles/colors'

/**
* @author
* @function WhoUsSection
**/

export const WhoUsSection = ({whousImg=whous}) => {
  return(
  <section className="who-us-section py-5">
  <div className="container">
    <div className="row align-items-center">
      
      {/* الصورة */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="who-us-img text-center">
          <img 
            src={whousImg} 
            alt="Who we are" 
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>

      {/* النص */}
      <div className="col-12 col-md-6">
        <div className="who-us-text">
          <div className="who-us-title mb-3">
            <h2 className="fw-bold " style={{color: colors.gold}}> من نحن </h2>
          </div>
          <p className="text-muted mb-4">
          نحن شركة مهنية متخصصة في مجال التصميم والتطوير و الإنتاج لمنتجات البناء، حيث تمتلك الشركة خبرة كبيرة في مجالها وتقديم خدمات عالية الجودة.
          </p>
          <button type="button" className="btn  px-4 py-2" style={{backgroundColor: colors.gold, color: colors.white}}>
           اعرف المزيد
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

   )
  }
