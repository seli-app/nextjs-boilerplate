import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  let component;

  describe('common', () => {
    beforeAll(() => {
      component = shallow(<Error status={500} />);
    });

    it('should render correctly in "debug" mode', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a "container-fluid"', () => {
      expect(component.find('div.container-fluid')).toHaveLength(1);
    });

    it('should render a .error.mx-auto component', () => {
      expect(component.find('.error.mx-auto')).toHaveLength(1);
    });

    it('should render a "Link to home" component', () => {
      expect(component.find('Link')).toHaveLength(1);
    });
  });

  describe('404 error', () => {
    beforeAll(() => {
      component = shallow(<Error status={404} />);
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
