import Сard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';

export const Сontainer = styled(Сard)`
  margin: 0 auto 0;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Media = styled(CardMedia)`
  width: 100%;
  height: 990px;
`;

export const MediaTitle = styled.div`
  width: 80%;
  color: #fff;
  font-size: 40px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MediaTitleMain = styled.h2`
  font-size: 225px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 30px;
`;
