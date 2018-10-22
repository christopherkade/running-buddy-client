import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from './SignIn';

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

/* it('should handle input change', () => {
  const event = { target: { email: 'c.kade96@gmail.com', password: 'abcdefg' } };
  const mountedWrapper = mount(<SignIn />);
  const updateEmailSpy = sinon.spy(mountedWrapper.instance(), 'updateEmailValue');
  mountedWrapper.update();
  mountedWrapper.ref('email').simultate('change', event);
  expect(updateEmailSpy.calledOnce).to.equal(true);
}); */
