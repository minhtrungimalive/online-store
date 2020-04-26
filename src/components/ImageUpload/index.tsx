import React, { FunctionComponent } from 'react';
import { ImageUploadStyle } from './ImageUploadStyle';
import ImageIcon from '../ImageIcon';

interface ImageUploadProps {
  className?: string;
}
const ImageUpload: FunctionComponent<ImageUploadProps> = props => {
  const { className } = props;
  return (
    <ImageUploadStyle className={className}>
      <ImageIcon className="upload-icon" src="/image_upload_icon.svg" alt="Image Upload Icon" />
      <div className="upload-tips">
        <span className="main">Select file(s) for upload or drag / drop here</span>
        <span className="sub">(you can upload .ZIP files if there are a lot)</span>
      </div>
    </ImageUploadStyle>
  );
};

export default ImageUpload;
