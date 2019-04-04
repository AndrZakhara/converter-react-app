import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

export const StyledAppBar = styled(AppBar)`
  width: 100%;
`;
export const StyledToolbar = styled(Toolbar)`
  display: flex;
`;
export const Brand = styled.div`
  flex-grow: 1;
  text-decoration: none;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff !important;
`;
export const ButtonLogo = styled(Button)`
  color: #fff !important;
`;

export const Logo = styled(Typography)`
  color: #fff !important;
`;
