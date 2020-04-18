import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { DotLoader } from 'react-spinners';
import Layout from '../../layouts/Layout';
import SideNavigation from '../../components/SideNavigation';
import SideNavContent from './SideNavContent';
import { GalleryPageStyle } from './GalleryPageStyle';
import { getImageGallery, saveRef, getImageFromCart, checkDetailPage } from '../../reducers/gallery/action';
import { RootState, ActionBase } from '../../reducers';
import { ImageSource } from '../../reducers/gallery/model';
import { EventEmitterProvider } from '../../config/eventEmitter';
import GridImage from '../../components/GridImage';
import SlickSlider from '../../components/SlickSlider';

interface GalleryPageProps {
  loading: boolean;
  getImageGalleryAction: () => void;
  refs: { [key: string]: HTMLDivElement };
  saveRefAction: (name: string, ref: HTMLDivElement) => void;
  getImageFromCartAction: () => void;
  imgSource: ImageSource[];
  isShowMorePhotos: boolean;
  checkDetailPage: (isSlick: boolean) => ActionBase;
  checkOpenNav: (isOpenNav: boolean) => ActionBase;
}

const GalleryPage: FunctionComponent<GalleryPageProps> = props => {
  const { getImageGalleryAction, loading, saveRefAction, getImageFromCartAction, imgSource, isShowMorePhotos } = props;

  useEffect(() => {
    getImageGalleryAction();
    getImageFromCartAction();
  }, []);
  return (
    <EventEmitterProvider>
      <Layout
        isClientPage
        onRefEvent={r => {
          saveRefAction('mainRef', r);
        }}
      >
        <GalleryPageStyle isShowMorePhoto={isShowMorePhotos}>
          {loading ? <DotLoader /> : !isShowMorePhotos ? <GridImage sources={imgSource} /> : <SlickSlider sources={imgSource} />}
        </GalleryPageStyle>
      </Layout>
      <SideNavigation
        direction="right"
        onRefEvent={r => {
          saveRefAction('navRef', r);
        }}
      >
        <SideNavContent />
      </SideNavigation>
    </EventEmitterProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  refs: state.galleryReducer.refs,
  imgSource: state.galleryReducer.sources,
  loading: state.galleryReducer.loading,
  isShowMorePhotos: state.galleryReducer.isSlider,
});

const mapDispatchToProps = {
  getImageGalleryAction: getImageGallery,
  getImageFromCartAction: getImageFromCart,
  saveRefAction: saveRef,
  checkDetailPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
