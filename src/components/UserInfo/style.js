import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const PaperWrapper = styled(Paper)`
  color: #fff;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  width: 620px;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const BigAvatar = styled(Avatar)`
  margin-left: 50px;
  width: 120px;
  height: 120px;
`;
export const Header = styled.h2`
  width: 100%;
  text-align: center;
`;

export const InfoBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const UserInfoWrapper = styled.div`
  width: 60%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  margin: 0 5px 5px 5px !important;
`;
