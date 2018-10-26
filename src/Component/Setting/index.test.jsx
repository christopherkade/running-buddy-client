import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Setting from './index';

let wrapper = null;

enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = enzyme.shallow(<Setting />);
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});

it('has a valid state', () => {
  expect(wrapper.instance().state.modal).toBe(false);
});

it('can have its state changed without failing', () => {
  wrapper.setState({
    modal: true
  });
  expect(wrapper.instance().state.modal).toBe(true);
});

it('has a valid My Sessions button link', () => {
  expect(wrapper.find('.sessions-button').props().to).toBe('/session');
});
