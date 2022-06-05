import React from "react";
import Slider from "react-slick";
// Import css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider className="sliderCard" {...settings}>
      <div className="card">
        <div className="text">
          <h2>THINGS TO LEFT</h2>
          <p>We’ve got all the equipment you need to sprint, jog or walk your way to your fitness goals. We’re cheering for you!</p>
        </div>
        <img className="max-w-none w-80vw h-full" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div className="card">
        <div className="text">
          <h2>MILES OF CARDIO</h2>
          <p>We’ve got all the equipment you need to sprint, jog or walk your way to your fitness goals. We’re cheering for you!</p>
        </div>
        <img className="max-w-none w-80vw h-full" src="https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div className="card">
        <div className="text">
          <h2>Yoga relaxes you</h2>
          <p>Yoga improves strength, balance and flexibility.Yoga relaxes you, to help you sleep better, eat better, work better and live better.</p>
        </div>
        <img className="max-w-none w-80vw h-full" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div className="card">
        <div className="text">
          <h2>GROUP FITNESS CLASSES</h2>
          <p>We design our clubs to give you the most awesome workouts possible. That’s why our dedicated group fitness studios are four walls of innovative, hard work, fun.</p>
        </div>
        <img className="max-w-none w-80vw h-full" src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" />
      </div>
    </Slider>
  );
}