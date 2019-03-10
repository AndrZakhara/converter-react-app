import React from 'react';
import PropTypes from 'prop-types';
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
  TableCell
} from '@material-ui/core';
import './style.css';

let counter = 0;
function createData(date, from, ammFrom, to, ammTo) {
  counter += 1;
  return { id: counter, date, from, ammFrom, to, ammTo };
}

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
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'date', numeric: false, disablePadding: true, label: 'Date' },
  { id: 'from', numeric: true, disablePadding: false, label: 'Currancy From' },
  { id: 'ammFrom', numeric: true, disablePadding: false, label: 'Ammount' },
  { id: 'to', numeric: true, disablePadding: false, label: 'Currancy To' },
  { id: 'ammTo', numeric: true, disablePadding: false, label: 'Ammount' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
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
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}>
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

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});


class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'date',
    selected: [],
    data: [
      createData('10/11/12', 'USD', 200, 'EUR', 187),
      createData('10/10/11', 'UAH', 200, 'USD', 8),
      createData('10/11/11', 'EUR', 100, 'UAH', 6.0),
      createData('12/11/11', 'RUB', 16.0, 'UAH', 6.0),
      createData('12/11/11', 'EUR', 16.0, 'RUB', 6.0),
      createData('10/11/12', 'USD', 200, 'EUR', 187),
      createData('10/10/11', 'UAH', 200, 'USD', 8),
      createData('10/11/11', 'EUR', 100, 'UAH', 6.0),
      createData('12/11/11', 'RUB', 16.0, 'UAH', 6.0),
      createData('12/11/11', 'EUR', 16.0, 'RUB', 6.0),
      createData('10/10/11', 'UAH', 200, 'USD', 8),
      createData('10/11/11', 'EUR', 100, 'UAH', 6.0),
      createData('12/11/11', 'RUB', 16.0, 'UAH', 6.0),
      createData('12/11/11', 'EUR', 16.0, 'RUB', 6.0),
      createData('10/11/12', 'USD', 200, 'EUR', 187),
      createData('10/10/11', 'UAH', 200, 'USD', 8),
      createData('10/11/11', 'EUR', 100, 'UAH', 6.0),
      createData('12/11/11', 'RUB', 16.0, 'UAH', 6.0),
      createData('12/11/11', 'EUR', 16.0, 'RUB', 6.0),
    ],
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

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <h1>History of Converting values</h1>
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
                .map(n => {

                  return (
                    <TableRow hover>
                      <TableCell component="th" scope="row" padding="none">
                        {n.date}
                      </TableCell>
                      <TableCell align="right">{n.from}</TableCell>
                      <TableCell align="right">{n.ammFrom}</TableCell>
                      <TableCell align="right">{n.to}</TableCell>
                      <TableCell align="right">{n.ammTo}</TableCell>
                    </TableRow>
                  );
                })}
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

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);