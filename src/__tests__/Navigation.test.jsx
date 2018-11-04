import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../Rooting/Navigation';

let wrapper = null;

configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = shallow(<Navigation />);
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});

it('should display a valid home link', () => {
  expect(wrapper.find('.title').props().to).toBe('/home');
});

it('should display a valid title', () => {
  expect(wrapper.find('.title').props().children).toBe('Running Buddy');
});
