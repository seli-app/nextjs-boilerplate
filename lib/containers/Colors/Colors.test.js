import React from 'react';
import { shallow } from 'enzyme';
import { Colors, mapStateToProps } from './Colors';

describe('Colors', () => {
  let colors;

  beforeAll(() => {
    colors = [
      {
        id: 1, name: 'name1', color: 'color1', pantone_value: 'pantone_value1', year: 2001
      },
      {
        id: 2, name: 'name2', color: 'color2', pantone_value: 'pantone_value2', year: 2002
      },
      {
        id: 3, name: 'name3', color: 'color3', pantone_value: 'pantone_value3', year: 2003
      }
    ];
  });

  describe('common', () => {
    let component;

    beforeAll(() => {
      component = shallow(
        <Colors
          data={colors}
        />
      );
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a "container-fluid"', () => {
      expect(component.find('div.container-fluid')).toHaveLength(1);
    });

    it('should render a PageHeader component', () => {
      expect(component.find('PageHeader')).toHaveLength(1);
    });

    it('should render a "ReactTable" component', () => {
      expect(component.find('ReactTable')).toHaveLength(1);
    });
  });

  describe('mapStateToProps', () => {
    it('should return colors from reqres reducer as data', () => {
      expect(mapStateToProps({
        reqres: { colors }
      })).toEqual({
        data: colors
      });
    });
  });
});
