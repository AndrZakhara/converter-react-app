import { createSelector } from 'reselect';

const getFilterValue = users => users.filterValue;
const getUserList = users => users.userList;

const getFilteredUserList = createSelector(
  [getUserList, getFilterValue],
  (list, filter) => {
    const filteredList = {};
    const isInString = (item, filterValue) => {
      if (typeof item === 'string') {
        if (item.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1) {

          return true;
        }
      }

      return false;
    };
    Object.keys(list).forEach(id => {
      const userDetail = list[id];
      Object.keys(userDetail).forEach(key => {
        if (isInString(userDetail[key], filter)) {
          filteredList[id] = userDetail;
        }
      });
    });

    return filteredList;
  },
);

export default getFilteredUserList;
