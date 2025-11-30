import React from 'react'
import { Container } from 'react-bootstrap'
import { WhoUsSection } from '../components/WhoUsSec'
import '../whous.css'
import { SpecialUnits } from '../../home/components/Special-Units'
import { CategoryiesSecWhoUs } from '../components/categoriesSecWhous'
import { CustomerCommentSec } from '../components/customerSec'
import { MessageVisionSec } from '../components/MessageVisionSec'
import { ValuesSection } from '../components/our-values'
import { WhoUsSec } from '../components/WhyUsSec'
import { PartnersSection } from '../components/OurPartners'

/**
* @author
* @function WhoUs
**/

export const WhoUs = () => {
  return(
    <div className="who-us-container">
        <Container >
       <WhoUsSection />
<CategoryiesSecWhoUs id='special-units' address=' الوحدات العقارية '/>
    </Container>
    <CustomerCommentSec />
    <MessageVisionSec />
    <ValuesSection />
    <WhoUsSec />
    {/* <PartnersSection /> */}
    </div>
    
   )
  }
