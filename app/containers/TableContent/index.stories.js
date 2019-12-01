import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import TableContent from './index';
import configureStore from '../../configureStore';

const initialState = {};
const store = configureStore(initialState);

export default { title: 'Table Content' };
const originalData = {
  columnHeaders: [
    {
      id: 'firstName',
      label: 'First Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      sortable: 'false',
      filterable: 'true',
    },
    {
      id: 'designation',
      label: 'Designation',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'department',
      label: 'Department',
      sortable: 'true',
      filterable: 'true',
    },
  ],
  rowData: [
    {
      id: 'user_id_1',
      data: [
        { id: 'firstName', value: 'John' },
        { id: 'lastName', value: 'Smith' },
        { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
      ],
    },
    {
      id: 'user_id_2',
      data: [
        { id: 'firstName', value: 'Jane' },
        { id: 'lastName', value: 'Doe' },
        { id: 'dateOfBirth', value: '07-11-1995' },
        { id: 'designation', value: 'Intern' },
        { id: 'department', value: 'Mobile' },
      ],
    },
  ],
};
const columnHeaderEmpty = {
  columnHeaders: [],
  rowData: [
    {
      id: 'user_id_1',
      data: [
        { id: 'firstName', value: 'John' },
        { id: 'lastName', value: 'Smith' },
        { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
      ],
    },
    {
      id: 'user_id_2',
      data: [
        { id: 'firstName', value: 'Jane' },
        { id: 'lastName', value: 'Doe' },
        { id: 'dateOfBirth', value: '07-11-1995' },
        { id: 'designation', value: 'Intern' },
        { id: 'department', value: 'Mobile' },
      ],
    },
  ],
};
const emptyData = {};
const rowDataEmpty = {
  columnHeaders: [
    {
      id: 'firstName',
      label: 'First Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      sortable: 'false',
      filterable: 'true',
    },
    {
      id: 'designation',
      label: 'Designation',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'department',
      label: 'Department',
      sortable: 'true',
      filterable: 'true',
    },
  ],
  rowData: [],
};
const bothEmpty = {
  columnHeaders: [],
  rowData: [],
};
const singleValueEmpty = {
  columnHeaders: [
    {
      id: 'firstName',
      label: 'First Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      sortable: 'false',
      filterable: 'true',
    },
    {
      id: 'designation',
      label: 'Designation',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'department',
      label: 'Department',
      sortable: 'true',
      filterable: 'true',
    },
  ],
  rowData: [
    {
      id: 'user_id_1',
      data: [
        { id: 'firstName', value: 'John' },
        { id: 'lastName', value: 'Smith' },
        // { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
      ],
    },
    {
      id: 'user_id_2',
      data: [
        { id: 'firstName', value: 'Jane' },
        { id: 'lastName', value: 'Doe' },
        { id: 'dateOfBirth', value: '07-11-1995' },
        { id: 'designation', value: 'Intern' },
        { id: 'department', value: 'Mobile' },
      ],
    },
  ],
};
const moreData = {
  columnHeaders: [
    {
      id: 'firstName',
      label: 'First Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      sortable: 'false',
      filterable: 'true',
    },
    {
      id: 'designation',
      label: 'Designation',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'department',
      label: 'Department',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'contact',
      label: 'Contact',
      sortable: 'true',
      filterable: 'true',
    },
    {
      id: 'address',
      label: 'Address',
      sortable: 'false',
      filterable: 'false',
    },

  ],
  rowData: [
    {
      id: 'user_id_1',
      data: [
        { id: 'firstName', value: 'John' },
        { id: 'lastName', value: 'Smith' },
        { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
        { id: 'contact', value: '123456789' },
        { id: 'address', value: 'abc' },
      ],
    },
    {
      id: 'user_id_2',
      data: [
        { id: 'firstName', value: 'Bob' },
        { id: 'lastName', value: 'Smith' },
        { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
        { id: 'contact', value: '123456789' },
        { id: 'address', value: 'abc' },
      ],
    },
    {
      id: 'user_id_3',
      data: [
        { id: 'firstName', value: 'Bob1' },
        { id: 'lastName', value: 'Smith1' },
        { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
        { id: 'contact', value: '123456789' },
        { id: 'address', value: 'abc' },
      ],
    },
    {
      id: 'user_id_4',
      data: [
        { id: 'firstName', value: 'Bob2' },
        { id: 'lastName', value: 'Smith2' },
        { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
        { id: 'contact', value: '123456789' },
        { id: 'address', value: 'abc' },
      ],
    },
  ],
};
storiesOf('TableContent', module).add('With Given Data', () => (
  <Provider store={store}>
    <TableContent data={originalData} />
  </Provider>
));

storiesOf('TableContent', module).add('With Empty Data', () => (
  <Provider store={store}>
    <TableContent data={emptyData} />
  </Provider>
));

storiesOf('TableContent', module).add('With Column Headers Empty', () => (
  <Provider store={store}>
    <TableContent data={columnHeaderEmpty} />
  </Provider>
));

storiesOf('TableContent', module).add('With Row Data Empty', () => (
  <Provider store={store}>
    <TableContent data={rowDataEmpty} />
  </Provider>
));

storiesOf('TableContent', module).add('With Row Data and Column Headers Empty', () => (
  <Provider store={store}>
    <TableContent data={bothEmpty} />
  </Provider>
));

storiesOf('TableContent', module).add('With single value empty', () => (
  <Provider store={store}>
    <TableContent data={singleValueEmpty} />
  </Provider>
));

storiesOf('TableContent', module).add('With more data', () => (
  <Provider store={store}>
    <TableContent data={moreData} />
  </Provider>
));
