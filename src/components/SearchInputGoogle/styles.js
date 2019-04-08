import styled from 'styled-components';

const SearchBox = styled.input`
  box-sizing: border-box;
  border: 1px solid transparent;
  width: 85%;
  height: 32px;
  padding: 0 12px;
  border-radius: 3px;
  box-shadow: 0 2px 6px ${props => props.theme.main};
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;
`;
export default SearchBox;
