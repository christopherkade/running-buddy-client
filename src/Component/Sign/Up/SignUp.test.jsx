import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from './SignUp';

let wrapper = null;

enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = enzyme.shallow(<SignUp />);
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});

it('should have valid default email', () => {
  expect(wrapper.instance().state.emailValue).toBe('');
});

it('should have valid default password', () => {
  expect(wrapper.instance().state.passwordValue).toBe('');
});

it('should have a valud default username', () => {
  expect(wrapper.instance().state.usernameValue).toBe('');
});

it('should have the correct home navigation links', () => {
  expect(wrapper.find('.logo-link').props().to).toBe('/');
});

it('should have the correct sign-in navigation links', () => {
  expect(wrapper.find('.sign-in-link').props().to).toBe('/sign-in');
});
