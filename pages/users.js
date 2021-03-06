import React from 'react';
import { connect } from 'react-redux';
import Head from '../lib/layouts/shared/Head/Head';
import BodyComponent from '../lib/layouts/application/Body/Body';
import UsersComponent from '../lib/containers/Users/Users';
import actions from '../lib/store/actions';

const UsersPage = () => (
  <div>
    <Head />
    <BodyComponent>
      <UsersComponent />
    </BodyComponent>
  </div>
);

UsersPage.getInitialProps = async ({ store, isServer }) => {
  if (store.getState().reqres.users.length === 0) {
    store.dispatch({ type: actions.reqres.GET_USERS_REQUEST });
  }

  return { isServer };
};

export default connect()(UsersPage);
