import { createSelector } from 'reselect';

const getFilterValue = users => users.filterValue;
const getUserList = users => users.userList;

const transformToArray = createSelector(
  [getUserList],
  itemList => {
    const list = itemList;
    const newListArr = [];
    Object.keys(list).forEach(key => {
      list[key].id = key;
      newListArr.push(list[key]);
    });
    return newListArr;
  },
);

const getFilteredUserList = createSelector(
  [transformToArray, getFilterValue],
  (list, filter) => {
    const filteredList = [];
    const isInItem = (item, filterValue) => {
      if (typeof item === 'string') {
        if (item.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    };

    list.forEach(item => {
      let isAdded = false;
      Object.keys(item).forEach(keys => {
        if (keys !== 'ava' && keys !== 'id' && !isAdded) {
          if (isInItem(item[keys], filter)) {
            filteredList.push(item);
            isAdded = true;
          }
        }
      });
    });

    return filteredList;
  },
);

export default getFilteredUserList;
