import React, { FunctionComponent, ReactElement } from 'react';
import { ModalStyle } from './ModalStyle';

interface ModalProps {
  header?: ReactElement;
  isShow?: boolean;
}

const Modal: FunctionComponent<ModalProps> = props => {
  const { children, header, isShow } = props;

  return (
    <ModalStyle isShow={isShow}>
      <div className="modal-box">
        {header}
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;
