
import './testimonials.css'
import data from './testinonialsData';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>
      <Slider {...settings}iv className="container testimonials__container">
        {
          data.map(({ avatar, name, review },index) => {
            return (
              
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One"></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </article>
              
            )
          })
        }
      </Slider>
    </section>
  )
}

export default Testimonials