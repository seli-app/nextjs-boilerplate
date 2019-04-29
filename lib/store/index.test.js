import configureMockStore from 'redux-mock-store';
import configureStore from './index';
import api from './apis';
import actions from './actions';

describe('actions', () => {
  let store;

  beforeEach(() => {
    store = configureStore({}, configureMockStore);
  });

  it('should setup normal store correctly', () => {
    const normalStore = configureStore({});
    expect(normalStore).toMatchSnapshot();
  });

  describe('reqres', () => {
    let getUsers;
    let users;
    let getColors;
    let colors;

    beforeEach(() => {
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
      getUsers = jest.spyOn(api.reqres, 'getUsers')
        .mockImplementation(() => Promise.resolve({ data: { data: users } }));

      getColors = jest.spyOn(api.reqres, 'getColors')
        .mockImplementation(() => Promise.resolve({ data: { data: colors } }));
    });

    it('should dispatch GET_USERS_SUCCESS after GET_USERS_REQUEST when everything works', async () => {
      await store.dispatch({ type: actions.reqres.GET_USERS_REQUEST });
      expect(getUsers).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual([
        {
          type: actions.reqres.GET_USERS_REQUEST,
        },
        {
          type: actions.reqres.GET_USERS_SUCCESS,
          users
        }
      ]);
    });

    it('should dispatch GET_USERS_FAILURE after GET_USERS_REQUEST when something fails', async () => {
      getUsers = jest.spyOn(api.reqres, 'getUsers')
        .mockImplementation(() => Promise.reject(new Error('SomeError')));

      await store.dispatch({ type: actions.reqres.GET_USERS_REQUEST });
      expect(getUsers).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual([
        {
          type: actions.reqres.GET_USERS_REQUEST,
        },
        {
          type: actions.reqres.GET_USERS_FAILURE,
          error: new Error('SomeError')
        }
      ]);
    });

    it('should dispatch GET_COLORS_SUCCESS after GET_COLORS_REQUEST when everything works', async () => {
      await store.dispatch({ type: actions.reqres.GET_COLORS_REQUEST });
      expect(getColors).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual([
        {
          type: actions.reqres.GET_COLORS_REQUEST,
        },
        {
          type: actions.reqres.GET_COLORS_SUCCESS,
          colors
        }
      ]);
    });

    it('should dispatch GET_COLORS_FAILURE after GET_COLORS_REQUEST when something fails', async () => {
      getColors = jest.spyOn(api.reqres, 'getColors')
        .mockImplementation(() => Promise.reject(new Error('SomeError')));

      await store.dispatch({ type: actions.reqres.GET_COLORS_REQUEST });
      expect(getColors).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual([
        {
          type: actions.reqres.GET_COLORS_REQUEST,
        },
        {
          type: actions.reqres.GET_COLORS_FAILURE,
          error: new Error('SomeError')
        }
      ]);
    });

    afterEach(() => {
      getUsers.mockRestore();
      getColors.mockRestore();
    });
  });
});
