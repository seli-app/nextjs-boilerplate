import React from 'react';
import { shallow } from 'enzyme';
import { Body, mapStateToProps, mapDispatchToProps } from './Body';
import actions from '../../../store/actions';

const expand = jest.fn();
const collapse = jest.fn();

describe('Body', () => {
  describe('common', () => {
    let component;
    let children;

    beforeAll(() => {
      children = <div className="childrenContainer"><h1>Children tests</h1></div>;
      component = shallow(
        <Body
          expanded
          expand={expand}
          collapse={collapse}
        >
          {children}
        </Body>
      ).childAt(0).dive();
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

    it('should display the NavBar component', () => {
      expect(component.find('NavBar')).toHaveLength(1);
    });

    it('should display the TopBar component', () => {
      expect(component.find('Connect(TopBar)')).toHaveLength(1);
    });

    it('should display the Footer component', () => {
      expect(component.find('Footer')).toHaveLength(1);
    });
  });

  describe('mapStateToProps', () => {
    const state = {
      ui: {
        navbarExpanded: true,
        userDropExpanded: false
      }
    };

    it('should return navbarExpanded from ui reducer', () => {
      expect(mapStateToProps(state)).toEqual({
        expanded: true
      });
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;
    let mappedDispatch;

    beforeEach(() => {
      dispatch = jest.fn();
      mappedDispatch = mapDispatchToProps(dispatch);
    });

    it('should return expand and collapse from mapped dispatch', () => {
      expect(mappedDispatch.expand).not.toBe(null);
      expect(mappedDispatch.collapse).not.toBe(null);
    });

    it('should dispatch EXPAND_NAVBAR when expand is called', () => {
      mappedDispatch.expand();
      expect(dispatch.mock.calls[0][0]).toEqual(
        { type: actions.ui.EXPAND_NAVBAR }
      );
    });

    it('should dispatch COLLAPSE_NAVBAR when collapse is called', () => {
      mappedDispatch.collapse();
      expect(dispatch.mock.calls[0][0]).toEqual(
        { type: actions.ui.COLLAPSE_NAVBAR }
      );
    });
  });
});
