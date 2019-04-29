import React from 'react';
import PropTypes from 'prop-types';
import ErrorComponent from '../lib/containers/Error/Error';
import Head from '../lib/layouts/shared/Head/Head';
import BodyComponent from '../lib/layouts/application/Body/Body';

const Error = (props) => {
  const { statusCode } = props;
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
        <ErrorComponent status={statusCode} />
      </BodyComponent>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  if (res) {
    return { statusCode: res.statusCode };
  }
  if (err) {
    return { statusCode: err.statusCode };
  }
  return { statusCode: null };
};

Error.propTypes = {
  statusCode: PropTypes.number
};

Error.defaultProps = {
  statusCode: null
};

export default Error;
