import React, { FunctionComponent, useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { InputStyle } from './InputStyle';

interface InputProps {
  className?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  fontSize?: number;
  onChangeValue?: (value: string) => void;
  offsetTopMoved?: string;
}

interface InputState {
  value: string;
  isFocus: boolean;
}

const Input: FunctionComponent<InputProps> = props => {
  let ref: HTMLInputElement;
  const { className, fontSize, name, type, value, label, offsetTopMoved, onChangeValue } = props;
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
    <InputStyle offsetTopMoved={offsetTopMoved} className={className} isFocus={state.isFocus} isHasValue={state.value.length > 0}>
      <span
        onClick={() => {
          ref.focus();
        }}
      >
        {label}
      </span>
      <input
        css={css`
          font-size: ${fontSize}rem !important;
        `}
        ref={r => {
          if (r) {
            ref = r;
          }
        }}
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
    </InputStyle>
  );
};

export default Input;
