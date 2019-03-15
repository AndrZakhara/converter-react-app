import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const Input = ({
  input,
  meta: { touched, error },
  Icon,
  label,
  className,
  disabled,
  type,
}) => (
  <TextField
    className={className}
    fullWidth
    placeholder={label}
    helperText={touched && error}
    error={error && touched}
    type={type}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Icon />
        </InputAdornment>
      ),
    }}
    disabled={disabled}
    {...input}
  />
);

export default Input;
