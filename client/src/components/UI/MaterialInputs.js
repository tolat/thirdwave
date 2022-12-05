import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styles from "./MaterialInputs.module.css";

export const MaterialDatePicker = (props) => {
  const [value, setValue] = React.useState(null);
  const required = { required: props.required };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
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
            />
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
      />
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
        renderInput={(params, inputRef, style) => (
          <div className={styles.inputWrapper}>
            <TextField
              variant="standard"
              ref={inputRef}
              style={props.style}
              {...required}
              {...params}
            />
          </div>
        )}
      />
    </LocalizationProvider>
  );
};
