import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';

import styles from './style';

const rows = [
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'currencyFrom',
    label: 'Currancy From',
  },
  {
    id: 'amountFrom',
    label: 'Ammount',
  },
  {
    id: 'currencyTo',
    label: 'Currancy To',
  },
  {
    id: 'amountTo',
    label: 'Ammount',
  },
  {
    id: 'commission',
    label: 'Сommission',
  },
  {
    id: 'rate',
    label: 'Rate',
  },
];
class EnhancedTableHead extends Component {
  createSortHandler = property => event => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const { classes, order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
            <TableCell
              key={row.id}
              align="center"
              sortDirection={orderBy === row.id ? order : false}
              className={classes.remPadd}>
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
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

export default withStyles(styles)(EnhancedTableHead);
