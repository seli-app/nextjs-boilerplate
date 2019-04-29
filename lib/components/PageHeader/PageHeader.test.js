import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('matches snapshot', () => {
    const component = shallow(<PageHeader title="SomeTitle" />);
    expect(component).toMatchSnapshot();
  });
});
