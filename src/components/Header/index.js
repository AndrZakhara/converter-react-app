import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { signOut } from 'actions';
import { ADMIN } from 'constants/roles';
import { ThemeProvider, withTheme } from 'styled-components';
import {
  StyledAppBar,
  StyledToolbar,
  Brand,
  StyledLink,
  ButtonLogo,
  Logo,
} from './styles';
import theme from '../../styles';

const Header = ({ isLoggedIn, role, onLogOut }) => (
  <>
    <ThemeProvider theme={theme}>
      <StyledAppBar position="static">
        <StyledToolbar>
          {isLoggedIn ? (
            <Brand>
              <StyledLink to="/">
                <ButtonLogo>
                  <Logo variant="title">LOGO</Logo>
                </ButtonLogo>
              </StyledLink>
            </Brand>
          ) : (
            <Brand>
              <Logo variant="title">LOGO</Logo>
            </Brand>
          )}
          {isLoggedIn ? (
            <Fragment>
              {role === ADMIN ? (
                <Fragment>
                  <StyledLink to="/admin-panel">
                    <ButtonLogo>
                      <span>Admin Panel</span>
                    </ButtonLogo>
                  </StyledLink>
                </Fragment>
              ) : null}
              <StyledLink to="/converter">
                <ButtonLogo>
                  <span>Converter</span>
                </ButtonLogo>
              </StyledLink>
              <StyledLink to="/weather">
                <ButtonLogo>
                  <span>Weather</span>
                </ButtonLogo>
              </StyledLink>
              <StyledLink to="/profile">
                <ButtonLogo>
                  <Person />
                </ButtonLogo>
              </StyledLink>
              <ButtonLogo onClick={onLogOut}>
                <ExitToApp />
                <span>Logout</span>
              </ButtonLogo>
            </Fragment>
          ) : (
            <Fragment>
              <StyledLink to="/sign-in">
                <ButtonLogo>
                  <span>Sign In</span>
                </ButtonLogo>
              </StyledLink>
              <StyledLink to="/sign-up">
                <ButtonLogo>
                  <span>Sign Up</span>
                </ButtonLogo>
              </StyledLink>
            </Fragment>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </ThemeProvider>
  </>
);

const mapStateToProps = ({ auth, user }) => ({
  isLoggedIn: auth.isLoggedIn,
  role: user.profile.role,
});

const mapDispatchToProps = {
  onLogOut: signOut,
};

export default compose(
  withTheme,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Header);
