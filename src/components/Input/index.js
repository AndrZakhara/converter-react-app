import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

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
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    disabled={disabled}
    {...input}
  />
);

export default Input;
