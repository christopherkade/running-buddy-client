import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import FilterDistrict from '../Component/Dashboard/FilterDistrict';

let wrapper = null;

enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore();

beforeEach(() => {
  wrapper = enzyme.render(<FilterDistrict store={store} />);
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});

it('should have 20 district buttons', () => {
  const districtButtons = wrapper.find('.district-button');
  expect(districtButtons).toHaveLength(20);
});
