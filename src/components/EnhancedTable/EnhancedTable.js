import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import { stableSort, getSorting } from 'utils/sort';
import EnhancedTableHead from './EnhancedTableHead';
import styles from './style';

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
    const { classes, allUserData } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;

    if (allUserData) {
      const data = allUserData;
      const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      return (
        <Paper className={classes.root}>
          <h1 className={classes.headerTitle}>History of Converting values</h1>
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
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
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        className={classes.remPadd}>
                        {n.date}
                      </TableCell>
                      <TableCell align="center" className={classes.remPadd}>
                        {n.currencyFrom}
                      </TableCell>
                      <TableCell align="center" className={classes.remPadd}>
                        {n.amountFrom}
                      </TableCell>
                      <TableCell align="center" className={classes.remPadd}>
                        {n.currencyTo}
                      </TableCell>
                      <TableCell align="center" className={classes.remPadd}>
                        {n.amountTo}
                      </TableCell>
                      <TableCell align="center" className={classes.remPadd}>
                        {n.commission}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.remPaddRight}>
                        {n.rate}
                      </TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
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
        </Paper>
      );
    }
    return null;
  }
}

export default withStyles(styles)(EnhancedTable);
