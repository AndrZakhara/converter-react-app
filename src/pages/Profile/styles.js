import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

export const Сontainer = styled.div`
  padding: 0 3px;
`;

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
