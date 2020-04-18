import React, { ReactElement } from 'react';
import { HeaderStyle } from './HeaderStyle';

interface HeaderModalProps {
  title?: string;
  icon?: ReactElement;
  onClose: (isClose: boolean) => void;
}

const Header: React.FunctionComponent<HeaderModalProps> = props => {
  const { icon, title, onClose } = props;
  return (
    <HeaderStyle>
      {icon}
      <span>{title}</span>
      <div>
        <button
          type="button"
          onClick={() => {
            onClose(true);
          }}
        >
          &times;
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
