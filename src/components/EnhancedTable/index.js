import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Tooltip,
  TableCell,
} from '@material-ui/core';
import { data } from '../../mocks/db';
import { styles } from './style';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  {
    id: 'date',
    numeric: false,
    label: 'Date',
  },
  {
    id: 'currencyFrom',
    numeric: true,
    label: 'Currancy From',
  },
  {
    id: 'amountFrom',
    numeric: true,
    label: 'Ammount',
  },
  {
    id: 'currencyTo',
    numeric: true,
    label: 'Currancy To',
  },
  {
    id: 'amountTo',
    numeric: true,
    disablePadding: false,
    label: 'Ammount',
  },
  {
    id: 'commission',
    numeric: true,
    label: 'Сommission',
  },
  { id: 'rate', numeric: true, disablePadding: false, label: 'Rate' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'center' : 'left'}
                sortDirection={orderBy === row.id ? order : false}
                style={{ fontSize: '20px' }}>
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}>
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

class EnhancedTable extends React.Component {
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
