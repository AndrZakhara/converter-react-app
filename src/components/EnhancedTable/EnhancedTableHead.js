import React, { Component } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';

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
    label: 'Ammount',
  },
  {
    id: 'commission',
    numeric: true,
    label: 'Сommission',
  },
  {
    id: 'rate',
    numeric: true,
    label: 'Rate',
  },
];
class EnhancedTableHead extends Component {
  createSortHandler = property => event => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
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
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;
