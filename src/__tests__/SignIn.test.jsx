import React from 'react';
import { configure, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from '../Component/Sign/In/SignIn';

let wrapper = null;

configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = shallow(<SignIn />);
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

it('should have the correct home navigation links', () => {
  expect(wrapper.find('.logo-link').props().to).toBe('/');
});

it('should have the correct sign-up navigation links', () => {
  expect(wrapper.find('.sign-up-link').props().to).toBe('/sign-up');
});

it('should have the right email placeholder', () => {
  expect(wrapper.find('.input-email').props().placeholder).toBe('E-mail');
});

it('should have the right password placeholder', () => {
  expect(wrapper.find('.input-password').props().placeholder).toBe('Password');
});

it('should handle email input changes', () => {
  const handleChangeSpy = sinon.spy(SignIn.prototype, 'updateEmailValue');
  const event = { target: { name: 'email', value: 'fakeemail@gmail.com' } };
  wrapper.find('.input-email').simulate('change', event);
  expect(handleChangeSpy.calledOnce).toBe(true);
});

it('should handle password input changes', () => {
  const handleChangeSpy = sinon.spy(SignIn.prototype, 'updatePasswordValue');
  const event = { target: { name: 'password', value: 'badPassword123' } };
  wrapper.find('.input-password').simulate('change', event);
  expect(handleChangeSpy.calledOnce).toBe(true);
});
