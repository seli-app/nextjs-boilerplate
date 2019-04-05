import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from './TopBar';

describe('TopBar', () => {
  it('matches snapshot', () => {
    const component = shallow(<TopBar />);
    expect(component).toMatchSnapshot();
  });
});
