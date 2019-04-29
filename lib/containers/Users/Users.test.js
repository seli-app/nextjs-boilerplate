import React from 'react';
import { shallow } from 'enzyme';
import { Users, mapStateToProps } from './Users';

describe('Users', () => {
  let users;

  beforeAll(() => {
    users = [
      {
        id: 1, first_name: 'first_name1', last_name: 'last_name1', avatar: 'avatar1'
      },
      {
        id: 2, first_name: 'first_name2', last_name: 'last_name2', avatar: 'avatar2'
      },
      {
        id: 3, first_name: 'first_name3', last_name: 'last_name3', avatar: 'avatar3'
      },
    ];
  });

  describe('common', () => {
    let component;

    beforeAll(() => {
      component = shallow(
        <Users
          data={users}
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
    it('should return users from reqres reducer as data', () => {
      expect(mapStateToProps({
        reqres: { users }
      })).toEqual({
        data: users
      });
    });
  });
});
