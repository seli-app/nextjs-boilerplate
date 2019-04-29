import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from './NavBar';

const expand = jest.fn();
const collapse = jest.fn();

describe('NavBar', () => {
  let component;
  let sections;
  let expanded;

  describe('common', () => {
    beforeEach(() => {
      sections = [
        {
          heading: 'examples',
          items: [
            {
              name: 'static pages',
              icon: 'fas fa-fw fa-cog',
              items: [
                { itemName: 'home', itemHref: '/', itemIcon: 'home' },
                { itemName: '404', itemHref: '/404' },
                { itemName: '500', itemHref: '/500' }
              ]
            },
            {
              name: 'dynamic pages',
              icon: 'cog',
              items: [
                { itemName: 'users', itemHref: '/users' },
                { itemName: 'colors', itemHref: '/colors' }
              ]
            }
          ]
        },
        {
          items: [
            {
              name: 'random pages',
              icon: 'question',
              items: [
                { itemName: 'random', itemHref: '/random' },
                { itemName: 'faker', itemHref: '/faker' }
              ]
            }
          ]
        }
      ];
      expanded = true;
      component = shallow(
        <NavBar
          sections={sections}
          expand={expand}
          collapse={collapse}
          expanded={expanded}
        />
      );
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should toggle class "toggle" when expanded or not', () => {
      expect(component.find('ul').hasClass('toggled')).toBe(false);
      component.setProps({ expanded: false });
      expect(component.find('ul').hasClass('toggled')).toBe(true);
    });

    it('should render a Brand component', () => {
      expect(component.find('Brand')).toHaveLength(1);
    });

    it('should have a button', () => {
      expect(component.find('button#sidebarToggle')).toHaveLength(1);
    });

    it('should call collapse when expanded and button is pressed', () => {
      const button = component.find('button');
      button.simulate('click');
      expect(collapse).toBeCalled();
    });

    it('should call expand when collapsed and button is pressed', () => {
      component.setProps({ expanded: false });
      const button = component.find('button');
      button.simulate('click');
      expect(collapse).toBeCalled();
    });
  });

  describe('with sections', () => {
    beforeEach(() => {
      sections = [
        {
          heading: 'examples',
          items: [
            {
              name: 'static pages',
              icon: 'cog',
              items: [
                { itemName: 'home', itemHref: '/', itemIcon: 'home' },
                { itemName: '404', itemHref: '/404' },
                { itemName: '500', itemHref: '/500' }
              ]
            },
            {
              name: 'dynamic pages',
              icon: 'cog',
              items: [
                { itemName: 'users', itemHref: '/users' },
                { itemName: 'colors', itemHref: '/colors' }
              ]
            }
          ]
        }
      ];
      expanded = true;
      component = shallow(
        <NavBar
          sections={sections}
          expand={expand}
          collapse={collapse}
          expanded={expanded}
        />
      );
    });

    it('should render all the items', () => {
      expect(component.find('Item')).toHaveLength(2);
    });
  });

  describe('without sections', () => {
    beforeEach(() => {
      expanded = true;
      component = shallow(
        <NavBar
          expand={expand}
          collapse={collapse}
          expanded={expanded}
        />
      );
    });

    it('should render no items at all', () => {
      expect(component.find('Item')).toHaveLength(0);
    });
  });
});
