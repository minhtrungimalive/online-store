import React, { FunctionComponent } from 'react';
import Masonry from 'react-masonry-component';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import GridItem from './GridItem';
import { ImageSource } from '../../reducers/gallery/model';
import { GridImageStyle } from './GridImageStyle';
import { ActionBase, RootState } from '../../reducers';
import '../../../node_modules/aos/dist/aos.css';

interface GridImageProps {
  sources: ImageSource[];
  checkOpenNav?: (isOpenNav: boolean) => ActionBase;
}

const GridImage: FunctionComponent<GridImageProps> = props => {
  const { sources } = props;
  const { isOpenNav } = useSelector((rootState: RootState) => rootState.galleryReducer);
  if (!sources || sources.length <= 0) return null;
  const masonryOptions = {
    transitionDuration: '0.3s',
    slideDown: true,
  };

  AOS.init({
    duration: 1200,
    // startEvent: scrollTo,
  });

  return (
    <GridImageStyle isOpenNav={isOpenNav}>
      <Masonry enableResizableChildren className="masonry--class row" elementType="div" options={masonryOptions}>
        {sources.map((source, idx) => {
          return (
            <div className="column" key={idx} data-aos="slide-up">
              <GridItem imgInfo={source} className="grid--item" />
            </div>
          );
        })}
      </Masonry>
    </GridImageStyle>
  );
};

export default GridImage;
