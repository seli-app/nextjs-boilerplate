import React from 'react';
import { shallow } from 'enzyme';
import Head from './Head';

describe('Head', () => {
  let component;

  beforeAll(() => {
    component = shallow(<Head />);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
