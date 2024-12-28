import React from 'react';
import Slider from 'react-slick';

const Gallery = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5eRJkmVfx3iGJabmswaP1QmUkvioKqglz56xQMDE1TSxb3eUYaAW73NrAkRDZQTd0u8&usqp=CAU',
    'https://i.pinimg.com/736x/a1/40/bc/a140bcc39928e76e165d8220a26429dd.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNW8XIx4Ycd4APcK011rMWHIc_INvJNz50SzYYafcR_zjtbGStF2zqDDHFqgatFQe1mwk&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMJl551aZaEm3dN8l5YTS6RoFeqecHfE50pmluGDZbF_Tt0iwZKPLKTk4NH2g-NrB5-g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iEWtGeivVhaOJdNZa_iPhFwTRpKhP9618w&s',
  ];

  const settings = {
    dots: true, // Display dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 images at a time
    centerMode: true, // Enable center mode
    centerPadding: '20px', // No padding around the center image
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    focusOnSelect: true, // Focus on the selected image
    className :"center",
   
  };

  return (
    <div className="gallery-wrapper py-8  w-screen bg-gray-600 dark:bg-black my-10 overflow-hidden z-10">
      <h2 className="text-2xl text-center mb-6 font-bold text-white font-sans"> Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item ">
            <img
              src={image}
              alt="/"
              className="w-full h-80 rounded-sm  transition-transform duration-300 ease-in-out slick-center shadow-2xl z-0"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
