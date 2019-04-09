import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AccountIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import DateIcon from '@material-ui/icons/Phone';
import { validateTextEmpty, validatePhone } from 'utils/validate';
import Input from 'components/Input/index';
import normalizePhone from 'utils/mask';
import { StyledForm, InputField, Actions, StyledButton } from './styles';

const ProfileEdit = ({ handleSubmit, onSave, toggle }) => (
  <div>
    <Typography variant="display1" align="center">
      Edit profile
    </Typography>
    <StyledForm onSubmit={handleSubmit(onSave)}>
      <Card>
        <CardContent>
          <InputField
            name="firstName"
            component={Input}
            label="First Name"
            Icon={AccountIcon}
            validate={validateTextEmpty}
          />
          <InputField
            name="lastName"
            component={Input}
            label="Second Name"
            Icon={AccountIcon}
            validate={validateTextEmpty}
          />
          <InputField
            name="email"
            component={Input}
            label="Email"
            Icon={MailIcon}
            disabled
          />
          <InputField
            name="phone"
            component={Input}
            label="Phone Number"
            Icon={DateIcon}
            validate={validatePhone}
            normalize={normalizePhone}
          />
        </CardContent>
        <Actions>
          <Button onClick={toggle} variant="outlined" color="secondary">
            Cancel
          </Button>
          <StyledButton type="submit" variant="contained">
            Save
          </StyledButton>
        </Actions>
      </Card>
    </StyledForm>
  </div>
);

export default compose(reduxForm({ form: 'editProfile' }))(ProfileEdit);
