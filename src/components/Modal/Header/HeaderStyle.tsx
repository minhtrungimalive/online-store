import styled from '@emotion/styled';

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  background: #2f3941;
  color: #fff;
  height: 4.3em;
  font-size: 1.3rem;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  padding: 0 1.2em;
  .icon {
    width: 1.3em;
    height: 1.3em;
  }
  span {
    margin: 0 0.5em;
    flex: 1;
  }
  div {
    button {
      background: transparent;
      border: none;
      color: #fff;
      outline: none;
      cursor: pointer;
    }
  }
`;

export { HeaderStyle };
