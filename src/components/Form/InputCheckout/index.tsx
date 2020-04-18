import React, { FunctionComponent, useState, useEffect, ReactElement } from 'react';
import { css } from '@emotion/core';
import { InputCheckoutStyle } from './InputCheckoutStyle';

interface InputCheckoutProps {
  className?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  fontSize?: number;
  onChangeValue?: (value: string) => void;
  icon?: ReactElement;
  placeHolder?: string;
}

interface InputState {
  value: string;
  isFocus: boolean;
}

const Input: FunctionComponent<InputCheckoutProps> = props => {
  const { className, fontSize, name, type, value, label, icon, placeHolder, onChangeValue } = props;
  const [state, setState] = useState<InputState>({
    isFocus: false,
    value: '',
  });

  useEffect(() => {
    if (!onChangeValue) return;
    onChangeValue(state.value);
  }, [state.value]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      value: event.target.value,
    });
  };

  return (
    <InputCheckoutStyle className={className} isFocus={state.isFocus} isHasValue={state.value.length > 0}>
      {icon}
      <input
        css={css`
          font-size: ${fontSize}px !important;
        `}
        placeholder={placeHolder}
        autoComplete="off"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => {
          setState({
            ...state,
            isFocus: true,
          });
        }}
        onBlur={() => {
          setState({
            ...state,
            isFocus: false,
          });
        }}
      />
      <span className="date--control">{label}</span>
    </InputCheckoutStyle>
  );
};

export default Input;
