var React = require('react');
var Slider = require('react-slick');

import { Image } from 'react-bootstrap';
import {TrendingLeft, TrendingRight} from 'components/Arrow/Arrow';
import styles from './trending.scss';

import coverart1 from 'img/coverart1.jpg';
import coverart2 from 'img/coverart2.jpg';
import coverart3 from 'img/coverart3.jpg';
import coverart4 from 'img/coverart4.jpg';
import coverart5 from 'img/coverart5.jpg';



var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      defaultActiveIndex:1,
      nextArrow:TrendingRight,
      prevArrow:TrendingLeft
    };
    return (
            <Slider {...settings} className={styles.slider}>
              <div><Image className={styles.sliderimg} src={coverart1} responsive /></div>
              <div><Image className={styles.sliderimg} src={coverart2} responsive /></div>
              <div><Image className={styles.sliderimg} src={coverart3} responsive /></div>
              <div><Image className={styles.sliderimg} src={coverart4} responsive /></div>
              <div><Image className={styles.sliderimg} src={coverart5} responsive /></div>
            </Slider>
    );
  }
});

export default SimpleSlider;
