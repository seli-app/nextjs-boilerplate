import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  let component;
  let items;

  describe('common', () => {
    beforeEach(() => {
      items = [
        { itemName: 'home', itemHref: '/', itemIcon: 'fas fa-fw fa-home' },
        { itemName: '404', itemHref: '/404' },
        { itemName: '500', itemHref: '/500' }
      ];
      const name = 'static pages';
      const icon = 'fas fa-fw fa-cog';
      component = shallow(
        <Item
          name={name}
          icon={icon}
          items={items}
        />
      );
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should not be expanded by default', () => {
      expect(component.state('expanded')).toBe(false);
      expect(component.find('button.collapsed')).toHaveLength(1);
      expect(component.find('div.collapse.show')).toHaveLength(0);
    });

    it('should have collapsed class on button and div', () => {
      component.instance().setState({ expanded: true });
      expect(component.find('button.collapsed')).toHaveLength(0);
      expect(component.find('div.collapse.show')).toHaveLength(1);
    });

    it('should update state when toggleExpand is called', () => {
      component.instance().toggleExpand();
      expect(component.state('expanded')).toBe(true);
    });

    it('should not display an Icon component when icon prop is not passed', () => {
      component.setProps({ icon: null });
      expect(component.find('Icon')).toHaveLength(0);
    });
  });

  describe('without items', () => {
    beforeAll(() => {
      const name = 'static pages';
      const icon = 'fas fa-fw fa-cog';
      component = shallow(
        <Item
          name={name}
          icon={icon}
        />
      );
    });

    it('should not show a collapse div', () => {
      expect(component.find('div.collapse')).toHaveLength(0);
    });

    it('should have only a Link component', () => {
      expect(component.find('Link')).toHaveLength(1);
    });

    it('should not display an Icon component when icon prop is not passed', () => {
      component.setProps({ icon: null });
      expect(component.find('Icon')).toHaveLength(0);
    });
  });
});
