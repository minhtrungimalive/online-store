import React, { FunctionComponent, useState } from 'react';
import DatePicker from 'react-datepicker';
import { DatePickerInputStyle } from './DatePickerInputStyle';

interface DatePickerCustomProps {
  label?: string;
  name?: string;
  className?: string;
  offsetTopMoved?: string;
  onChangeDate?: (date: Date | null) => void;
}

interface DatePickerCustomState {
  value: Date | null;
  isFocus: boolean;
}

const DatePickerCustom: FunctionComponent<DatePickerCustomProps> = props => {
  let ref: DatePicker | null;
  const { label, name, className, offsetTopMoved, onChangeDate } = props;
  const [state, setState] = useState<DatePickerCustomState>({
    value: null,
    isFocus: false,
  });
  const onChange = (date: Date | null) => {
    setState({
      ...state,
      value: date,
    });
    if (!onChangeDate) return;
    onChangeDate(date);
  };
  return (
    <DatePickerInputStyle className={className} offsetTopMoved={offsetTopMoved} isFocus={state.isFocus} isHasValue={state.value !== null}>
      <span
        onClick={() => {
          if (!ref) return;
          ref.setFocus();
        }}
      >
        {label}
      </span>
      <DatePicker
        ref={r => {
          if (r) {
            ref = r;
          }
        }}
        className="date-picker-control"
        selected={state.value}
        onChange={onChange}
        name={name}
        autoComplete="off"
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
    </DatePickerInputStyle>
  );
};

export default DatePickerCustom;
