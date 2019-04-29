import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';

describe('Body', () => {
  let component;
  let children;

  beforeAll(() => {
    children = <div className="childrenContainer"><h1>Children tests</h1></div>;
    component = shallow(<Body>{children}</Body>);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render its children properly', () => {
    const container = component.find('.childrenContainer');
    expect(container).toHaveLength(1);
    const h1 = container.find('h1');
    expect(h1).toHaveLength(1);
    expect(h1.text()).toBe('Children tests');
  });
});
