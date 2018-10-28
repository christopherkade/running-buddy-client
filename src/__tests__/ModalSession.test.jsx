import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalSession from '../Component/Dashboard/ModalSession';

let wrapper = null;

enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  const session = {
    title: 'Session title',
    description: 'Session description'
  };
  const modal = true;
  const toggleModalFunc = () => {};
  wrapper = enzyme.shallow(
    <ModalSession session={session} modal={modal} toggleModal={toggleModalFunc} />
  );
});

it('renders without crashing', () => {
  expect(wrapper).not.toBe(null);
});

it('should have member badges (>= 0)', () => {
  expect(wrapper.find('.badgeModal').length).toBeGreaterThanOrEqual(0);
});

it('should have a date', () => {
  expect(wrapper.find('.modalDate>Input').props().value).not.toBe('');
});
