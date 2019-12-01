/*
 *
 * TableContent actions
 *
 */

import { SET_INITIAL_DATA, SORT_BY_COLUMN, FILTER_BY_TABLE } from './constants';

// Action to set initial data in reducer
export function setInitialData(data) {
  return {
    type: SET_INITIAL_DATA,
    data,
  };
}

// Action to sort data with column as name of column to be sort
export function sortByColumn(column) {
  return {
    type: SORT_BY_COLUMN,
    column,
  };
}

// Action to filter data
// value is the search keyword and filterInColumn is for search in specific column
export function filterByTable(value, filterInColumn = null) {
  return {
    type: FILTER_BY_TABLE,
    payload: {
      value,
      filterInColumn,
    },
  };
}
