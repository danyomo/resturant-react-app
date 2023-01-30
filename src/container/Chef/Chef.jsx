import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
  <div className='app__wrapper_img app__img-reverse'>
    <img src= {images.chef} alt="chef"/>
  </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'></p>
              
          </div>
          <p className='p__opensans' >At our fine dining restaurant, we believe in providing a dining experience that is truly exceptional. We believe in using only the freshest, highest quality ingredients to create dishes that are not only delicious but also visually stunning. We believe in treating our guests like royalty, offering impeccable service and attention to detail. Above all, we believe in creating memories that will last a lifetime. Come dine with us and discover what sets us apart in the world of fine dining.</p>
        </div>
        <div className='app__chef-sign'>
            <p>Kevin Luo</p>
            <p className='p__opensans'> Chef & Founder</p>
            <img src= {images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
