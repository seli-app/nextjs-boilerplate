import reducer, { initialState } from './reqres';
import actions from '../actions';

describe('reqres reducer', () => {
  const users = [
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
  const colors = [
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

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle GET_USERS_SUCCESS', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_USERS_SUCCESS,
      users
    })).toEqual({
      ...initialState,
      users
    });
  });

  it('should handle GET_COLORS_SUCCESS', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_COLORS_SUCCESS,
      colors
    })).toEqual({
      ...initialState,
      colors
    });
  });
});
