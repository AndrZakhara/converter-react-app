import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const SubFooter = styled(Grid)`
  padding: 20px 16px 20px 16px;
  background: ${props => props.theme.main} !important;
`;

export const FooterText = styled(Typography)`
  color: #fff !important;
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.5;
`;
export const Wrapper = styled.div`
  width: 100%;
`;
