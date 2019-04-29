import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let component;

  beforeAll(() => {
    component = shallow(<Footer />);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
