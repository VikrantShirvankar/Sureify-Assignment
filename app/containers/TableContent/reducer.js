/*
 *
 * LanguageProvider reducer
 *
 */

import { SET_INITIAL_DATA, SORT_BY_COLUMN, FILTER_BY_TABLE } from './constants';

export const initialState = {
  data: null,
  filterData: null,
  filterableColumn: [],
  sortByColumn: null,
  sortOrder: 'asc',
};

/* eslint-disable default-case, no-param-reassign */
const TableContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_DATA: {
      // eslint-disable-next-line no-case-declarations
      let tempData = [];
      const filterableColumn = [];
      action.data.columnHeaders
        .filter(f => f.filterable === 'true')
        .forEach(n => filterableColumn.push(n.id));
      // eslint-disable-next-line array-callback-return
      action.data.rowData.map(key => {
        let tempObj = {};
        // eslint-disable-next-line array-callback-return
        Object.keys(key.data).map(c => {
          tempObj = {
            ...tempObj,
            [key.data[c].id]: key.data[c].value,
          };
        });
        tempData = [...tempData, { id: key.id, ...tempObj }];
      });
      return {
        ...state,
        filterableColumn,
        data: { ...action.data, rowData: tempData },
      };
    }
    case SORT_BY_COLUMN: {
      const {
        data: { rowData },
        filterData,
      } = state;
      let sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
      if (state.sortByColumn !== action.column) {
        sortOrder = 'asc';
      }
      let myData;
      const rData = filterData || rowData;
      if (sortOrder === 'asc') {
        myData = rData.sort((a, b) =>
          b[action.column] > a[action.column] ? -1 : 1,
        );
      } else {
        myData = rData.sort((a, b) =>
          b[action.column] > a[action.column] ? 1 : -1,
        );
      }
      if (filterData) {
        return {
          ...state,
          filterData: myData,
          sortByColumn: action.column,
          sortOrder,
        };
      }
      return {
        ...state,
        sortByColumn: action.column,
        sortOrder,
        data: { ...state.data, rowData: myData },
      };
    }
    case FILTER_BY_TABLE: {
      const {
        data: { rowData },
        filterableColumn,
      } = state;
      const { value, filterInColumn } = action.payload;

      if (!value) {
        return { ...state, filterData: null };
      }
      const columns = filterInColumn ? [filterInColumn] : filterableColumn;

      const filteredData = rowData.filter(item =>
        Object.keys(item).some(key =>
          columns.includes(key)
            ? item[key].toLowerCase().includes(value.toLowerCase())
            : null,
        ),
      );
      return {
        ...state,
        sortByColumn: '',
        sortOrder: 'asc',
        filterData: filteredData,
      };
    }
    default:
      return state;
  }
};

export default TableContentReducer;
