import React from 'react';
import Slider from 'react-slick';

const Gallery = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5eRJkmVfx3iGJabmswaP1QmUkvioKqglz56xQMDE1TSxb3eUYaAW73NrAkRDZQTd0u8&usqp=CAU',
    'https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Image+2',
    'https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Image+3',
    'https://via.placeholder.com/600x400/FFFF00/FFFFFF?text=Image+4',
    'https://via.placeholder.com/600x400/FF00FF/FFFFFF?text=Image+5',
  ];

  const settings = {
    dots: true, // Display dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 images at a time
    centerMode: true, // Enable center mode
    centerPadding: '60px', // No padding around the center image
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    focusOnSelect: true, // Focus on the selected image
    className :"center",
  };

  return (
    <div className="gallery-container py-8  w-screen">
      <h2 className="text-2xl text-center mb-6 font-bold">Image Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt="/"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
