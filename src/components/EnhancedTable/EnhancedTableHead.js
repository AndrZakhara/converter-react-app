import React, { Component } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';

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
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
            <TableCell
              key={row.id}
              align="center"
              sortDirection={orderBy === row.id ? order : false}
              style={{ fontSize: '20px', padding: 0 }}>
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
