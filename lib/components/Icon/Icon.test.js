import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  let component;
  let id;
  let icon;

  beforeAll(() => {
    id = 'testId';
    icon = 'smile';
    component = shallow(<Icon id={id} icon={icon} />);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render an "i" element', () => {
    const i = component.find(`i#${id}`);
    expect(i).toHaveLength(1);
    expect(i.hasClass(`fa-${icon}`)).toBe(true);
  });
});
