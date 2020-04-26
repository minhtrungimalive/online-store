import styled from '@emotion/styled';

const ImageUploadStyle = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  background: #e6e6e6;
  justify-content: center;
  border-radius: 4px;
  padding: 2.5em 0;
  .upload-icon {
    width: 20px;
    height: 21px;
    margin: 0;
    margin-right: 1em;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .upload-tips {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    font-size: 14px;
    line-height: 17px;
    .main {
      font-family: RubikMedium;
      color: #0e282d;
      margin-bottom: 5px;
    }
    .sub {
      color: #adafb5;
    }
  }
`;

export { ImageUploadStyle };
