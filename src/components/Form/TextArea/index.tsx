import React, { FunctionComponent, useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { TextAreaStyle } from './TextAreaStyle';

interface TextAreaProps {
  label?: string;
  name?: string;
  value?: string;
  fontSize?: number;
  onChangeValue?: (value: string) => void;
  className?: string;
  rows?: number;
  maxLength?: number;
  offsetTopMoved?: string;
}

interface TextAreaState {
  value: string;
  isFocus: boolean;
}

const TextArea: FunctionComponent<TextAreaProps> = props => {
  let ref: HTMLTextAreaElement;

  const { className, fontSize, name, value, label, onChangeValue, rows, maxLength, offsetTopMoved } = props;
  const [state, setState] = useState<TextAreaState>({
    isFocus: false,
    value: '',
  });

  useEffect(() => {
    if (!onChangeValue) return;
    onChangeValue(state.value);
  }, [state.value]);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      value: event.target.value,
    });
  };

  return (
    <TextAreaStyle isFocus={state.isFocus} isHasValue={state.value.length > 0} offsetTopMoved={offsetTopMoved} className={className}>
      <span
        onClick={() => {
          ref.focus();
        }}
      >
        {label}
      </span>
      <textarea
        css={css`
          font-size: ${fontSize}rem !important;
        `}
        ref={r => {
          if (r) {
            ref = r;
          }
        }}
        rows={rows}
        maxLength={maxLength}
        autoComplete="off"
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
    </TextAreaStyle>
  );
};

export default TextArea;
