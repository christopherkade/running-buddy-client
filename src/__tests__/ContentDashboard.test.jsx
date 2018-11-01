import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ContentDashboard from '../Component/Dashboard/ContentDashboard';

let wrapper = null;
const mockStore = configureMockStore();
const store = mockStore({
  items: [
    {
      title: 'Title Test',
      date: '01/12/1942',
      description: 'Description Test'
    }
  ]
});

enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = enzyme.shallow(
    <Provider store={store}>
      <ContentDashboard />
    </Provider>
  );
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});

it('has a store instance', () => {
  expect(store).not.toBe(null);
});

it('has a store with data', () => {
  expect(store.getState().items.length).toBe(1);
});

it('can change store values', () => {
  store.getState().items[0].title = 'New title';
  expect(store.getState().items[0].title).toBe('New title');
});
