import React, {useEffect} from "react";


const Slider = ({ key, h1, p, bg, img }) => {
    // document.querySelector(document).ready(function () {
    //   for (var i = 1; i <= document.querySelector(".slider__slide").length; i++) {
    //     document.querySelector(".slider__indicators").append(
    //       '<div class="slider__indicator" data-slide="' + i + '"></div>'
    //     );
    //   }
    //   setTimeout(function () {
    //     document.querySelector(".slider__wrap").addClass("slider__wrap--hacked");
    //   }, 1000);
    // });
    
    // function goToSlide(number) {
    //   document.querySelector(".slider__slide").removeClass("slider__slide--active");
    //   document.querySelector(".slider__slide[data-slide=" + number + "]").addClass(
    //     "slider__slide--active"
    //   );
    // }
    
    // document.querySelector(".slider__next, .go-to-next").on("click", function () {
    //   var currentSlide = Number(document.querySelector(".slider__slide--active").data("slide"));
    //   var totalSlides = document.querySelector(".slider__slide").length;
    //   currentSlide++;
    //   if (currentSlide > totalSlides) {
    //     currentSlide = 1;
    //   }
    //   goToSlide(currentSlide);
    // });
  
    return (
      <div className="slider">
        <div className="slider__slide slider__slide--active" data-slide="1">
          <div className="slider__wrap">
            <div className="slider__back"></div>
          </div>
          <div className="slider__inner">
            <div className="slider__content">
              <h1>GROUP FITNESS  <br/> CLASSES</h1>
              <p>We design our clubs to give you the most awesome workouts possible. That’s why our dedicated group fitness studios are four walls of innovative, hard work, fun.</p>
              <a className="go-to-next">next</a>
            </div>
          </div>
        </div>
        <div className="slider__slide" data-slide="2">
          <div className="slider__wrap">
            <div className="slider__back"></div>
          </div>
          <div className="slider__inner">
            <div className="slider__content">
              <h1>YOGA RELAXES  <br/> YOU</h1>
              <p>Yoga improves strength, balance and flexibility.Yoga relaxes you, to help you sleep better, eat better, work better and live better.</p>
              <a className="go-to-next">next</a>
            </div>
          </div>
        </div>
        <div className="slider__slide" data-slide="3">
          <div className="slider__wrap">
            <div className="slider__back"></div>
          </div>
          <div className="slider__inner">
            <div className="slider__content">
              <h1>MILES OF  <br/> CARDIO</h1>
              <p>We’ve got all the equipment you need to sprint, jog or walk your way to your fitness goals. We’re cheering for you!</p>
              <a className="go-to-next">next</a>
            </div>
          </div>
        </div>
        <div className="slider__slide" data-slide="3">
          <div className="slider__wrap">
            <div className="slider__back"></div>
          </div>
          <div className="slider__inner">
            <div className="slider__content">
              <h1>THINGS TO   <br/> LEFT</h1>
              <p>Bodybuilding isn’t 90 minutes in the gym. It’s a lifestyle. We are here to be part of your lifestyle.</p>
              <a className="go-to-next">next</a>
            </div>
          </div>
        </div>
        <div className="slider__indicators"></div>
      </div>
    )
}

export default Slider;