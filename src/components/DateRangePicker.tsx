// DateRangePicker.tsx
import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldProps } from '@mui/material/TextField';
import { DateRange } from '@mui/lab';

const DateRangePicker: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);

  const handleDateChange = (newValue: DateRange<Date>) => {
    setDateRange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateRangePicker
        startText="From"
        endText="To"
        value={dateRange}
        onChange={handleDateChange}
        renderInput={(startProps: TextFieldProps, endProps: TextFieldProps) => (
          <>
            <TextField {...startProps} variant="standard" className="mr-4" />
            <TextField {...endProps} variant="standard" />
          </>
        )}
        className="w-full"
      />
    </LocalizationProvider>
  );
};

export default DateRangePicker;
