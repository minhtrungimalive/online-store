import styled from '@emotion/styled';

interface ModalStyleProps {
  isShow?: boolean;
}

const ModalStyle = styled.div<ModalStyleProps>`
  position: fixed;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  .modal-box {
    transform: translateY(-1.3em);
    position: relative;
    margin: 1em;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    max-width: 40em;
    max-height: fit-content;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export { ModalStyle };
