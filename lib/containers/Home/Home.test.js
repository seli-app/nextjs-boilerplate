import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let component;

  beforeAll(() => {
    component = shallow(<Home />);
  });


  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render a "container-fluid"', () => {
    expect(component.find('div.container-fluid')).toHaveLength(1);
  });

  it('should render a "PageHeader" component', () => {
    expect(component.find('PageHeader')).toHaveLength(1);
  });
});
