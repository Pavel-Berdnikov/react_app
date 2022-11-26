import React from "react"
import Slider from "react-slick";
import style from './banner.module.css'

const TestSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };

    return(
        <Slider {...settings}>
          <div>
            <div className={style.banner_section}>
              <div className={style.banner}>
                <p className={style.text_banner}>Лучшие цены
                <br />
                <span>на все телевизоры!</span>
                <br />
                <button className={style.banner_btn}>Купить TV</button>
                </p>
              </div>
            </div>
          </div>
          <div>
          <div className={style.banner_section}>
              <div className={style.banner1}>
                <p className={style.text_banner}>Лучшие цены
                <br />
                <span>на все телевизоры!</span>
                <br />
                <button className={style.banner_btn}>Купить TV</button>
                </p>
              </div>
            </div>
          </div>
        </Slider>
    )

}

export default TestSlider