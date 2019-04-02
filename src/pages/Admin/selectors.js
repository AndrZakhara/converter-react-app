import { createSelector } from 'reselect';

const getFilterValue = admin => admin.filterValue;
const getUserList = admin => admin.userList;

const transformToArray = createSelector(
  getUserList,
  itemList => {
    const list = itemList;
    const newListArr = [];

    Object.entries(list).forEach(([key, item]) => {
      const itemCopy = { ...item };

      if (typeof itemCopy === 'object') {
        itemCopy.id = key;
      }
      newListArr.push(itemCopy);
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
        if (item.toLowerCase().includes(filterValue.toLowerCase())) {
          return true;
        }
      }
      return false;
    };

    list.forEach(item => {
      let isAdded = false;
      Object.entries(item).forEach(([key, value]) => {
        if (key !== 'ava' && key !== 'id' && !isAdded) {
          if (isInItem(value, filter)) {
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
