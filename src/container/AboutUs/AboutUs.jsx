import React from 'react';
import images from "../../constants/images";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div app__aboutus-content_about>
        <h1 className='headtext__cormorant'>AboutUs</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Experience the epitome of sophistication and elegance at our fine dining restaurant. With an unwavering commitment to the highest quality ingredients and expertly crafted dishes, we offer an unforgettable culinary journey. Our professional team, from the kitchen to the dining room, is dedicated to providing exceptional service and an experience that will leave you feeling truly pampered. Join us for a night of exquisite dining and memories that will last a lifetime</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about_knife" />
        </div>
        <div app__aboutus-content_history>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our fine dining restaurant has a rich history, dating back to 1996. Founded by Edwin Peters , our restaurant has been dedicated to delivering the finest dining experience to our guests for 27 years. From the beginning, we have been committed to sourcing the freshest, highest quality ingredients and working with local suppliers to create truly inspired dishes. Over the years, our restaurant has become a staple in England, earning recognition and accolades from both locals and food critics alike. Today, we continue to strive for excellence, offering a dining experience that is unparalleled in every way</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);
 
export default AboutUs;
