import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

import SlickItem from './SlickItem';
import { SlickSliderStyle } from './SlickSliderStyle';
import { ImageSource } from '../../reducers/gallery/model';

interface CustomArrowProps {
  className?: string;
  style?: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface SlickSliderProps {
  sources: ImageSource[];
}

const CustomNextArrow: FunctionComponent<CustomArrowProps> = props => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, display: 'block', background: 'transparent' }} onClick={onClick}>
      <IoIosArrowRoundBack />
    </div>
  );
};

const CustomPrevArrow: FunctionComponent<CustomArrowProps> = props => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', background: 'transparent' }} onClick={onClick}>
      <IoIosArrowRoundForward />
    </div>
  );
};

const settings = {
  className: 'center',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  nextArrow: <CustomPrevArrow />,
  prevArrow: <CustomNextArrow />,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: false,
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      },
    },
  ],
};

const SlickSlider: FunctionComponent<SlickSliderProps> = props => {
  const { sources } = props;
  if (!sources || sources.length <= 0) return null;
  return (
    <SlickSliderStyle>
      <Slider {...settings}>
        {sources &&
          sources.length > 0 &&
          sources.map(item => {
            return (
              <SlickSliderStyle key={item.id}>
                <SlickItem imgInfo={item} imgUrl={item.imgUrl} />
              </SlickSliderStyle>
            );
          })}
      </Slider>
    </SlickSliderStyle>
  );
};

export default SlickSlider;
