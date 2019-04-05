import React, { Component } from 'react';
import './Body.scss';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

class Body extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  componentDidMount() {
    document.querySelector('body').classList.add('bg-gradient-primary');
  }

  render() {
    const { children } = this.props;

    return (
      <div className="container">
        <I18nextProvider i18n={i18n}>
          { children }
        </I18nextProvider>
      </div>
    );
  }
}


export default Body;
