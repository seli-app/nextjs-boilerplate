import React, { Component } from 'react';
import './Body.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import { NavBar } from '../../../components/NavBar/NavBar';
import TopBar from '../../../components/TopBar/TopBar';
import Footer from '../Footer/Footer';
import i18n from '../../../i18n';
import actions from '../../../store/actions';

class Body extends Component {
  componentDidMount() {
    document.querySelector('body').classList.add('page-top');
  }

  render() {
    const { children, expanded, expand, collapse } = this.props;
    const sections = [
      {
        heading: 'examples',
        items: [
          {
            name: 'static pages',
            icon: 'fas fa-fw fa-cog',
            items: [
              { itemName: 'home', itemHref: '/', itemIcon: 'fas fa-fw fa-home' },
              { itemName: '404', itemHref: '/404' },
              { itemName: '500', itemHref: '/500' }
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
      <div id="wrapper">
        <I18nextProvider i18n={i18n}>
          <NavBar sections={sections} expanded={expanded} expand={expand} collapse={collapse} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar dropdown={dropdown} />

              { children }
            </div>
            <Footer />
          </div>
        </I18nextProvider>
      </div>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired
};


const mapStateToProps = state => ({
  expanded: state.global.navbarExpanded
});

const mapDispatchToProps = dispatch => (
  {
    expand: () => {
      dispatch({ type: actions.ui.expandNavbar });
    },
    collapse: () => {
      dispatch({ type: actions.ui.COLLAPSE_NAVBAR });
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Body);
