import { UserList } from 'components';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  min-height: 420px;
`;
export const LeftSactionWrapper = styled(UserList)`
  height: 100%;
`;

export const InfoHeader = styled.h2`
  width: 100%;
  text-align: center;
  color: white;
  height: 30px;
`;
export const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;
