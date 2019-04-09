import uploadImage from 'components/UploadImage/index';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const CardMediaWithUpload = uploadImage()(CardMedia);

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const СardWrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const Media = styled(CardMediaWithUpload)`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background-color: #bababa;
`;

export const StyledIcon = styled(IconButton)`
  color: ${props => props.theme.main} !important;
`;
