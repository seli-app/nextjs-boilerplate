import React from 'react';
import { connect } from 'react-redux';
import Head from '../lib/layouts/shared/Head/Head';
import BodyComponent from '../lib/layouts/application/Body/Body';
import ColorsComponent from '../lib/containers/Colors/Colors';
import actions from '../lib/store/actions';

const ColorsPage = () => {
  const sections = [
    {
      heading: 'examples',
      items: [
        {
          name: 'static pages',
          icon: 'fas fa-fw fa-cog',
          items: [
            { itemName: 'home', itemHref: '/', itemIcon: 'fas fa-fw fa-home' },
            { itemName: '404', itemHref: '/404' }
          ]
        },
        {
          name: 'dynamic pages',
          icon: 'fas fa-fw fa-cog',
          items: [
            { itemName: 'users', itemHref: '/users' },
            { itemName: 'colors', itemHref: '/colors' }
          ]
        }
      ]
    }
  ];

  const dropdown = [
    { name: 'profile', href: '#', icon: 'user' },
    { name: 'settings', href: '#', icon: 'cogs' },
    { name: 'activity log', href: '#', icon: 'list' },
    { divider: true },
    { name: 'log out', href: '#', icon: 'sign-out-alt' }
  ];

  return (
    <div>
      <Head />
      <BodyComponent sections={sections} dropdown={dropdown}>
        <ColorsComponent />
      </BodyComponent>
    </div>
  );
};

ColorsPage.getInitialProps = async ({ store, isServer }) => {
  if (store.getState().reqres.colors.length === 0) {
    store.dispatch({ type: actions.reqres.GET_COLORS_REQUEST });
  }

  return { isServer };
};

export default connect()(ColorsPage);
