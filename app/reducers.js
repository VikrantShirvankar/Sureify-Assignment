/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import tableContentReducer from 'containers/TableContent/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    TableContent: tableContentReducer,
    ...injectedReducers,
  });
}
