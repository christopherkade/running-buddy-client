import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from './Navigation';

let wrapper = null;

configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = shallow(<Navigation />);
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});
