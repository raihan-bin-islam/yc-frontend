import React, { useState } from 'react';
import Slider from 'react-slick/lib/slider';
import styles from './homevideoslide.module.scss'
import leafImg from '../../../public/assets/images/landing_page/yunus_leaf.png'

const HomeVideoSlide = () => {

    // styles
    const { videoSlideContainer, videoSliderBody, videoHeroContainer, videoThumbContainer, videoThumb, videoLeaf } = styles
    
    // states
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    // slider
    const youTubeSlider = {
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
              },
            },
          ],
    }

    return (
        <section className={videoSlideContainer}>
            <div className={videoLeaf}>
                <img src={leafImg.src} alt='yunus-leaf'/>
            </div>
            <div className={videoSliderBody}>
                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                    <div className={videoHeroContainer}>
                        <h3>1</h3>
                    </div>
                    <div className={videoHeroContainer}>
                        <h3>2</h3>
                    </div>
                    <div className={videoHeroContainer}>
                        <h3>3</h3>
                    </div>
                    <div className={videoHeroContainer}>
                        <h3>4</h3>
                    </div>
                    <div className={videoHeroContainer}>
                        <h3>5</h3>
                    </div>
                    <div className={videoHeroContainer}>
                        <h3>6</h3>
                    </div>
                </Slider>
                <div className='mt3'>
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        {...youTubeSlider}
                    >
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>1</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>2</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>3</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>4</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>5</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>6</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default HomeVideoSlide;