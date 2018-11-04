import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Setting from '../Component/Setting/index';

let wrapper = null;
const localStorage = '';

enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = enzyme.shallow(<Setting />);
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});

it('has a valid My Sessions button link', () => {
  expect(wrapper.find('.sessions-button').props().to).toBe('/session');
});
