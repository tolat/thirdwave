import * as React from "react";

import 'dayjs/locale/en-gb';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styles from "./MaterialInputs.module.css";


export const MaterialDatePicker = (props) => {
  const required = { required: props.required };

  const [locale, setLocale] = React.useState('en-gb');
  const [datePickerValue, setDatePickerValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DatePicker
        label={props.label}
        value={datePickerValue}
        onChange={(newValue) => {
          setDatePickerValue(newValue);
        }}
        inputRef={props.inputRef}
        style={props.style}
        renderInput={(params, inputRef, style) => (
          <div className={styles.inputWrapper}>
            <TextField
              variant="standard"
              ref={inputRef}
              style={props.style}
              {...required}
              {...params}
              size="small"
            />
            <div className={styles.inputSubtext}>{props.subText}</div>
          </div>
        )}
      />
    </LocalizationProvider>
  );
};

export const MaterialTextInput = (props) => {
  const required = { required: props.required };

  return (
    <div className={styles.inputWrapper}>
      <TextField
        label={props.label}
        inputRef={props.inputRef}
        style={props.style}
        type={props.type}
        onChange={props.onChange}
        variant="standard"
        {...required}
        size="small"
      />
      <div className={styles.inputSubtext} style={props.subTextStyle}>{props.subText}</div>
    </div>
  );
};

export const MaterialTimePicker = (props) => {
  const [value, setValue] = React.useState(null);
  const required = { required: props.required };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={props.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        inputRef={props.inputRef}
        style={props.style}
        renderInput={(params, inputRef) => (
          <div className={styles.inputWrapper}>
            <TextField
              variant="standard"
              ref={inputRef}
              style={props.style}
              {...required}
              {...params}
              size="small"
            />
            <div className={styles.inputSubtext}>{props.subText}</div>
          </div>
        )}
      />
    </LocalizationProvider>
  );
};

export const MaterialCheckbox = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.checkboxWrapper} style={props.wrapperStyle}>
        <div className={styles.checkboxInputContainer}>
          <input
            className={styles.checkBoxInput}
            style={props.style}
            ref={props.inputRef}
            type="checkbox"
            value={false}
          />
        </div>

        <div>
          <div className={styles.checkboxLabel}> {props.label}</div>
          <div className={styles.inputSubtext}> {props.subLabel}</div>
        </div>
      </div>
    </div>
  );
};
