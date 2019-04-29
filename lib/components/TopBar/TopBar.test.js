import React from 'react';
import { shallow } from 'enzyme';
import { TopBar, mapDispatchToProps, mapStateToProps } from './TopBar';
import actions from '../../store/actions';

const expandNavbar = jest.fn();
const collapseNavbar = jest.fn();
const expandUserDrop = jest.fn();
const collapseUserDrop = jest.fn();

describe('TopBar', () => {
  let component;

  describe('common', () => {
    beforeEach(() => {
      const navbarExpanded = true;
      const userDropExpanded = false;
      const username = 'someUserName';
      const avatar = 'Avatar';
      const dropdown = [
        { name: 'profile', href: '#', icon: 'user' },
        { name: 'settings', href: '#', icon: 'cogs' },
        { name: 'activity log', href: '#', icon: 'list' },
        { divider: true },
        { name: 'log out', href: '#', icon: 'sign-out-alt' }
      ];
      component = shallow(
        <TopBar
          navbarExpanded={navbarExpanded}
          userDropExpanded={userDropExpanded}
          username={username}
          avatar={avatar}
          dropdown={dropdown}
          collapseNavbar={collapseNavbar}
          expandNavbar={expandNavbar}
          collapseUserDrop={collapseUserDrop}
          expandUserDrop={expandUserDrop}
        />
      );
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should display a toggle button for NavBar', () => {
      expect(component.find('button#navbarToggleTop')).toHaveLength(1);
    });

    it('should collapse NavBar when expanded and button is clicked', () => {
      const button = component.find('button#navbarToggleTop');
      button.simulate('click');
      expect(collapseNavbar).toBeCalled();
    });

    it('should expand NavBar when collapsed and button is clicked', () => {
      component.setProps({ navbarExpanded: false });
      const button = component.find('button#navbarToggleTop');
      button.simulate('click');
      expect(expandNavbar).toBeCalled();
    });

    it('should display a button for expand user dropdown', () => {
      expect(component.find('button#userDropdown')).toHaveLength(1);
    });

    it('should expand user dropdown when collapsed and button is clicked', () => {
      const button = component.find('button#userDropdown');
      button.simulate('click');
      expect(expandUserDrop).toBeCalled();
    });

    it('should collapse user dropdown when expanded and button is clicked', () => {
      component.setProps({ userDropExpanded: true });
      const button = component.find('button#userDropdown');
      button.simulate('click');
      expect(collapseUserDrop).toBeCalled();
    });

    it('should display all the passed links and dividers', () => {
      expect(component.find('Link')).toHaveLength(4);
      expect(component.find('div.dropdown-divider')).toHaveLength(1);
    });
  });

  describe('mapStateToProps', () => {
    it('should return the required props from ui state', () => {
      expect(mapStateToProps({
        ui: {
          userDropExpanded: false,
          navbarExpanded: true,
          username: 'SomeUserName',
          avatar: 'fakeAvatarURL',
          extraProp: 'ExtraProp'
        },
        otherReducer: {
          unnecessaryProp: 'prop'
        }
      })).toEqual({
        userDropExpanded: false,
        navbarExpanded: true,
        username: 'SomeUserName',
        avatar: 'fakeAvatarURL'
      });
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;
    let dispatchedProps;

    beforeEach(() => {
      dispatch = jest.fn();
      dispatchedProps = mapDispatchToProps(dispatch);
    });

    it('should return the required functions after mapping dispatch', () => {
      expect(dispatchedProps.expandNavbar).not.toBe(null);
      expect(dispatchedProps.collapseNavbar).not.toBe(null);
      expect(dispatchedProps.expandUserDrop).not.toBe(null);
      expect(dispatchedProps.collapseUserDrop).not.toBe(null);
    });

    it('should dispatch action EXPAND_NAVBAR when expandNavbar is called', () => {
      dispatchedProps.expandNavbar();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actions.ui.EXPAND_NAVBAR
      });
    });

    it('should dispatch action COLLAPSE_NAVBAR when collapseNavbar is called', () => {
      dispatchedProps.collapseNavbar();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actions.ui.COLLAPSE_NAVBAR
      });
    });

    it('should dispatch action EXPAND_USER_DROPDOWN when expandUserDrop is called', () => {
      dispatchedProps.expandUserDrop();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actions.ui.EXPAND_USER_DROPDOWN
      });
    });

    it('should dispatch action COLLAPSE_USER_DROPDOWN when collapseUserDrop is called', () => {
      dispatchedProps.collapseUserDrop();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actions.ui.COLLAPSE_USER_DROPDOWN
      });
    });
  });
});
