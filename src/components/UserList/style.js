import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

export const StyledList = styled(List)`
  min-width: 320px;
  width: 320px;
  height: 100%;
  overflow-y: auto;
  padding: 0;
  background-color: #f0f0f0;
`;
export const SearchWrapper = styled.div`
  padding: 10px 0px 5px 20px;
  display: flex;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const StyledInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`;
export const ListWrapper = styled.div`
  height: 100%;
`;
