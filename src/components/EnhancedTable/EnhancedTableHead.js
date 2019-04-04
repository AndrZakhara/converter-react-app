import React, { Component } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';
import styled from 'styled-components';

const HeaderCell = styled(TableCell)`
  font-size: 18px !important;
  font-weight: bold !important;
`;
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
            <HeaderCell
              key={row.id}
              align="center"
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
            </HeaderCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;
