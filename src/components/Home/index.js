// import React from 'react';

// const Home = () => {
//   return (
//     <div className = 'content'>
//       <h2>Main page</h2>
//     </div>
//   );
// };

// export default Home;
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