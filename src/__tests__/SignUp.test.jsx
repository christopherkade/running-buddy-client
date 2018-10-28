import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import SignUp from '../Component/Sign/Up/SignUp';

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

it('should have the right email placeholder', () => {
  expect(wrapper.find('.input-email').props().placeholder).toBe('E-mail');
});

it('should have the right password placeholder', () => {
  expect(wrapper.find('.input-password').props().placeholder).toBe('Password');
});

it('should have the right username placeholder', () => {
  expect(wrapper.find('.input-username').props().placeholder).toBe('Username');
});

it('should handle email input changes', () => {
  const handleChangeSpy = sinon.spy(SignUp.prototype, 'updateEmailValue');
  const event = { target: { name: 'email', value: 'fakeemail@gmail.com' } };
  wrapper.find('.input-email').simulate('change', event);
  expect(handleChangeSpy.calledOnce).toBe(true);
});

it('should handle password input changes', () => {
  const handleChangeSpy = sinon.spy(SignUp.prototype, 'updatePasswordValue');
  const event = { target: { name: 'password', value: 'badPassword123' } };
  wrapper.find('.input-password').simulate('change', event);
  expect(handleChangeSpy.calledOnce).toBe(true);
});

it('should handle password input changes', () => {
  const handleChangeSpy = sinon.spy(SignUp.prototype, 'updateUsernameValue');
  const event = { target: { name: 'username', value: 'fakeUsername' } };
  wrapper.find('.input-username').simulate('change', event);
  expect(handleChangeSpy.calledOnce).toBe(true);
});
