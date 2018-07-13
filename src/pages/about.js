import React, {Fragment} from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg'

const AboutPage = () => {
  return (
      <div>
         <h2>  About </h2>
         <section>
           <div>
<img src={img1} alt="" width='300'/>
           </div>
           <div>
           <img src={img2} alt="" width='300'/>

           </div>
         </section>
          </div>
 
  )
}

export default AboutPage;