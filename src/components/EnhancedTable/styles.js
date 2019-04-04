import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const StyledPaper = styled(Paper)`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
`;

export const TableTitle = styled.h1`
  background: #3f51b5;
  color: #fff;
  background: ${props =>
    props.primary
      ? '#3f51b5'
      : 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)'};
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin: 0;
  padding: 10px 0;
  border: ${props =>
    props.primary
      ? '1px solid #3f51b5'
      : 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)'};
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  text-transform: capitalize;
  letter-spacing: 1px;
`;

export const StyledTable = styled(Table)`
  min-width: 1020px;
`;

export const StyledTableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTableCell = styled(TableCell)`
  font-size: 16px !important;
  text-align: left;
`;
