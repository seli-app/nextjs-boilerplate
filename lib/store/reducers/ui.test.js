import reducer, { initialState } from './ui';
import actions from '../actions';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle EXPAND_NAVBAR', () => {
    expect(reducer(initialState, {
      type: actions.ui.EXPAND_NAVBAR,
    })).toEqual({
      ...initialState,
      navbarExpanded: true
    });
  });

  it('should handle COLLAPSE_NAVBAR', () => {
    expect(reducer(initialState, {
      type: actions.ui.COLLAPSE_NAVBAR,
    })).toEqual({
      ...initialState,
      navbarExpanded: false
    });
  });

  it('should handle EXPAND_USER_DROPDOWN', () => {
    expect(reducer(initialState, {
      type: actions.ui.EXPAND_USER_DROPDOWN,
    })).toEqual({
      ...initialState,
      userDropExpanded: true
    });
  });

  it('should handle COLLAPSE_USER_DROPDOWN', () => {
    expect(reducer(initialState, {
      type: actions.ui.COLLAPSE_USER_DROPDOWN,
    })).toEqual({
      ...initialState,
      userDropExpanded: false
    });
  });

  it('should handle GET_USERS_REQUEST', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_USERS_REQUEST,
    })).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('should handle GET_USERS_SUCCESS', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_USERS_SUCCESS,
    })).toEqual({
      ...initialState,
      loading: false
    });
  });

  it('should handle GET_USERS_FAILURE', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_USERS_FAILURE,
      error: new Error('SomeError')
    })).toEqual({
      ...initialState,
      loading: false,
      error: new Error('SomeError')
    });
  });

  it('should handle GET_COLORS_REQUEST', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_COLORS_REQUEST,
    })).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('should handle GET_COLORS_SUCCESS', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_COLORS_SUCCESS,
    })).toEqual({
      ...initialState,
      loading: false
    });
  });

  it('should handle GET_COLORS_FAILURE', () => {
    expect(reducer(initialState, {
      type: actions.reqres.GET_COLORS_FAILURE,
      error: new Error('SomeError')
    })).toEqual({
      ...initialState,
      loading: false,
      error: new Error('SomeError')
    });
  });
});
