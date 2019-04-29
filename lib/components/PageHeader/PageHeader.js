import React from 'react';
import './PageHeader.scss';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';

const PageHeader = (props) => {
  const { title } = props;

  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800"><Trans>{ title }</Trans></h1>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
