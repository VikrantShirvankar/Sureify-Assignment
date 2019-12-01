/*
 * TableContent
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setInitialData, sortByColumn, filterByTable } from './actions';

/**
 * @return {null}
 */
export function TableContent(props) {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(setInitialData(props.data));
  }, []);

  const [filterInColumn, setFilterInColumn] = useState('');
  const { tableContent } = props;

  // if no data return null
  if (!tableContent.data) {
    return null;
  }

  // if columnHeaders and rowData empty then return
  if (!tableContent.data.columnHeaders || !tableContent.data.rowData) {
    return null;
  }

  const { columnHeaders, rowData } = tableContent.data;
  const { filterData } = tableContent;
  let rData = rowData;

  const sortColumn = column => {
    if (column.sortable === 'true') {
      dispatch(sortByColumn(column.id));
    }
  };

  // if filter data is not empty
  if (filterData) {
    rData = filterData;
  }

  // function to render sort column arrow
  const arrow = column => {
    const { sortOrder, sortByColumn: col } = props.tableContent;
    if (column === col) {
      if (sortOrder === 'asc') return <span>&nbsp;&#x2191;</span>;
      if (sortOrder === 'desc') return <span>&nbsp;&#x2193;</span>;
    }
    return (
      <span>
        <span>&nbsp;&#x2193;</span>
        <span>&nbsp;&#x2191;</span>
      </span>
    );
  };

  return (
    <div>
      <div style={{ padding: 10, float: 'left' }}>
        <input
          onKeyUp={e => dispatch(filterByTable(e.target.value, filterInColumn))}
          placeholder="Search"
        />
      </div>
      <div style={{ padding: 10 }}>
        <select onChange={e => setFilterInColumn(e.target.value)}>
          <option value="">Filter by column</option>
          {columnHeaders
            .filter(c => c.filterable === 'true')
            .map(m => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            {columnHeaders.map(c => (
              <th key={c.id} onClick={() => sortColumn(c)}>
                {c.label}
                {c.sortable === 'true' ? arrow(c.id) : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rData && rData.length ? (
            rData.map(key => (
              <tr key={key.id}>
                {columnHeaders.map(vv => (
                  <td key={vv.id}>{key[vv.id]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columnHeaders.length}
                style={{ padding: 20, textAlign: 'center' }}
              >
                No Records
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
TableContent.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func,
  tableContent: PropTypes.oneOfType([PropTypes.object]),
};

const mapStateToProps = state => ({
  tableContent: state.TableContent,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableContent);
