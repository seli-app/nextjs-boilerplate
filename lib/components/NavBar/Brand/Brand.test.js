import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brand';

describe('Brand', () => {
  let component;

  beforeAll(() => {
    component = shallow(
      <Brand
        id="someId"
        brandName="Brand"
      />
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have a clickable link', () => {
    expect(component.find('Link')).toHaveLength(1);
  });
});
