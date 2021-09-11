import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.css"

const SimpleSlider = props => {
  const intl = useIntl()
  var settings = {
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000,
  }
  return (
    <div class="slider-render">
      <h3>{props.title}</h3>
      <a
        href="https://www.google.com/search?q=google+abigails+driving+school&oq=google+abigails+driving+school&aqs=chrome..69i57j69i64j69i60.4710j0j4&sourceid=chrome&ie=UTF-8#lrd=0x89b116c99d0dc009:0xf22a5fe2a8ee0f76,1,,,"
        target="_blank"
      >
        <div className="btn">VIEW MORE</div>
      </a>
      <Slider {...settings}>
        <div>
          <div className="testimonial">
            <p>
              "I was off the road for approximately 10 years. Having moved to
              Richmond from NYC, I needed to overcome my trauma with a prior
              accident and drive myself around. Abigail's driving school
              empowered me in ways that words fail to capture. Please ask for
              Mr. Mohamed who is patient, understanding, but firm as he will
              ensure your safety on the road. I appreciated his down to earth
              demeanor and ability to eliminate any of my concerns. Learn with
              Abigail, you won't fail."
            </p>
            <small>-- Victor G</small>
          </div>
        </div>
        <div>
          <p>
            "It was very hard finding a school in the Richmond area that was
            able to deliver a driver education in Spanish for my mother. The
            staff at Abigail's Driving School have been amazing at helping my
            mom obtain her driving license. Since then, I have had both my twin
            sons go to their school. Their schedule is flexible, and are the
            only ones i know of in the Richmond area that will work with your
            budget. Hope they stay in business for a long time. I have an 8 year
            old that will need to learn how to drive. Thank you!"
          </p>
          <small>-- Samuel F.</small>
        </div>
        <div>
          <p>
            "This class was very helpful and family friendly environment. I was
            nervous that this class wouldn’t help me get my learners after I
            failed 3 times but I passed after attending their class. I would
            recommend this school to anyone."
          </p>
          <small>-- James R.</small>
        </div>
        <div>
          <p>
            "I initially came here because of the irony that the title had my
            name. But what I found was far more fulfillinging than I could have
            anticipated. It didn't only improve my driving but it was a
            confidence booster which seems goes hand in hand with being a good
            driver. I've learned you must be "comfortable with your decision
            making skills, in order to be a safe driver." This concept helped to
            alleviate my anxiety and I am forever grateful for attending
            Abigail's driving school. After years of procrastination and doubt
            that i could ever be a driver, I now can say I finally have my
            license. Because of this experience, I am now a strong believer and
            advocate that with the right guidance any one can learn to drive.
            Luckily I found mine, I would definitely recommend Abigail's Driving
            School."
          </p>
          <small>-- Abigail L. </small>
        </div>
        <div>
          <p>
            "This is a great driving school. They are very flexible and made
            getting my license that much easier. I would highly recommend this
            driving school to others."
          </p>
          <small>-- Michele B.</small>
        </div>
        <div>
          <p>
            "Excellent just excellent, so patient and help you study to the
            point that you would be able to learn it and remember it very
            quickly. I love Mohamed and really appreciated everything you do
            with your clients. I've never met someone who was so determined to
            help you pass the test. He will help you everyday if he has to until
            you go down to DMV and take the test. I would recommend anybody to
            him. Thank you so much friend, you're the best."
          </p>
          <small>-- NyTasha S.</small>
        </div>
        <div>
          <p>
            "The instructor was professional yet friendly and worked with my
            busy schedule so I could complete the course as an adult driver. He
            ensured I knew the material before moving forward-some of which I
            was not aware of as a foreigner and proved to be very helpful with
            regards to road safety. Thank you for all your help!"
          </p>
          <small>-- Lucy W.</small>
        </div>
        <div>
          <p>
            "This driving school is so easy. The teacher breaks things down in a
            way you can understand it. I'm confident I will pass the driving
            test."
          </p>
          <small>-- Neek N.</small>
        </div>
        <div>
          <p>
            "They are very professional and they do everything they can to help
            comply with your needs."
          </p>
          <small>-- Tavis M.</small>
        </div>
      </Slider>
    </div>
  )
}
export default SimpleSlider
