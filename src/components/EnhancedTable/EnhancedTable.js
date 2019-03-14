import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TablePagination,
  TableRow,
  Paper,
  TableCell,
} from '@material-ui/core';
import EnhancedTableHead from './EnhancedTableHead';
import { data } from '../../mocks/db';
import { styles } from './style';
import { stableSort, getSorting } from '../../utils/sort';

class EnhancedTable extends Component {
  state = {
    order: 'asc',
    orderBy: 'date',
    data: data['petya@gmail.com'],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page } = this.state;
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
                  <TableRow hover>
                    <TableCell component="th" scope="row">
                      {n.date}
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: '16px' }}>{n.currencyFrom}</TableCell>
                    <TableCell align="center" style={{ fontSize: '16px' }}>{n.amountFrom}</TableCell>
                    <TableCell align="center" style={{ fontSize: '16px' }}>{n.currencyTo}</TableCell>
                    <TableCell align="center" style={{ fontSize: '16px' }}>{n.amountTo}</TableCell>
                    <TableCell align="center" style={{ fontSize: '16px' }}>{n.commission}</TableCell>
                    <TableCell align="center" style={{ fontSize: '16px' }}>{n.rate}</TableCell>
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
}

export default withStyles(styles)(EnhancedTable);
