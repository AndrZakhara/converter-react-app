import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { stableSort, getSorting } from 'utils/sort';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import EnhancedTableHead from './EnhancedTableHead';

const StyledPaper = styled(Paper)`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
`;

const TableTitle = styled.h1`
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

const StyledTable = styled(Table)`
  min-width: 1020px;
`;

const StyledTableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTableCell = styled(TableCell)`
  font-size: 16px !important;
  text-align: left;
`;

const ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};
class EnhancedTable extends Component {
  state = {
    order: ORDER.ASC,
    orderBy: 'date',
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const { orderBy, order } = this.state;
    let currOrder = ORDER.DESC;
    if (orderBy === property && order === ORDER.DESC) {
      currOrder = ORDER.ASC;
    }
    this.setState({ order: currOrder, orderBy: property });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { allUserData } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;

    if (allUserData) {
      const data = allUserData;
      const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      return (
        <StyledPaper>
          <TableTitle primary>History of Converting values</TableTitle>
          <StyledTableWrapper>
            <StyledTable aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => (
                    <TableRow hover key={n.id}>
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row">
                        {n.date}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {n.currencyFrom}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {n.amountFrom}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {n.currencyTo}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {n.amountTo}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {n.commission}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {Math.trunc(n.rate * 100) / 100}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <StyledTableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
            </StyledTable>
          </StyledTableWrapper>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </StyledPaper>
      );
    }
    return <div> You have not any transactions yet.</div>;
  }
}

// export default withStyles(styles)(EnhancedTable);
export default EnhancedTable;
