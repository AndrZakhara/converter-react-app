import React from 'react';
import {TextField,InputAdornment} from '@material-ui/core';

const Input = ({input, meta: {touched, error}, Icon, label,className}) => (
    <TextField
        className={className}
        fullWidth
        placeholder={label}
        helperText={touched && error}
        error={error && touched}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Icon/>
                </InputAdornment>
            ),
        }}
        {...input}
    />
);

export default Input;