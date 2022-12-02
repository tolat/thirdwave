import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker(props) {
  const [value, setValue] = React.useState(null);

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
          <TextField ref={inputRef} style={props.style} {...params} />
        )}
      />
    </LocalizationProvider>
  );
}
