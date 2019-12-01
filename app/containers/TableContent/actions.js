/*
 *
 * LanguageProvider actions
 *
 */

import { SET_INITIAL_DATA, SORT_BY_COLUMN, FILTER_BY_TABLE } from './constants';

export function setInitialData(data) {
  return {
    type: SET_INITIAL_DATA,
    data,
  };
}
export function sortByColumn(column) {
  return {
    type: SORT_BY_COLUMN,
    column,
  };
}
export function filterByTable(value, filterInColumn = null) {
  return {
    type: FILTER_BY_TABLE,
    payload: {
      value,
      filterInColumn,
    },
  };
}
