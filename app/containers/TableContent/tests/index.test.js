import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import TableContent from '../index';
import configureStore from '../../../configureStore';
const data = {
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
        { id: 'firstName', value: 'Durgesh' },
        { id: 'lastName', value: 'Smith' },
        { id: 'dateOfBirth', value: '07-11-1992' },
        { id: 'designation', value: 'Software Engineer' },
        { id: 'department', value: 'Web' },
      ],
    },
    {
      id: 'user_id_2',
      data: [
        { id: 'firstName', value: 'Atish' },
        { id: 'lastName', value: 'Doe' },
        { id: 'dateOfBirth', value: '07-11-1995' },
        { id: 'designation', value: 'Intern' },
        { id: 'department', value: 'Mobile' },
      ],
    },
    {
      id: 'user_id_3',
      data: [
        { id: 'firstName', value: 'Chetan' },
        { id: 'lastName', value: 'Doe' },
        { id: 'dateOfBirth', value: '07-11-1995' },
        { id: 'designation', value: 'Intern' },
        { id: 'department', value: 'Mobile' },
      ],
    },
    {
      id: 'user_id_4',
      data: [
        { id: 'firstName', value: 'Bharat' },
        { id: 'lastName', value: 'Doe' },
        { id: 'dateOfBirth', value: '07-11-1995' },
        { id: 'designation', value: 'Intern' },
        { id: 'department', value: 'Mobile' },
      ],
    },
  ],
};
describe('<TableContent />', () => {
  let store;
  beforeAll(() => {
    store = configureStore({});
  });
  it('should present the default `en` english language option', () => {
    const { container } = render(
      <Provider store={store}>
        <TableContent data={data} />
      </Provider>,
    );
    // expect(container.data.);
  });
});
