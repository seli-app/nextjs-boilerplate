import React from 'react';
import { Trans } from 'react-i18next';
import './Error.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Error = (props) => {
  const { status } = props;
  if (status === 404) {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <div className="error mx-auto" data-text="404">404</div>
          <p className="lead text-gray-800 mb-5"><Trans>not found</Trans></p>
          <p className="text-gray-500 mb-0">
            <Trans>it looks like you found a glitch in the matrix</Trans>
          </p>
          <Link href="/">
            <a href="/">
              &larr;
              <Trans>back to home</Trans>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="text-center">
        <div className="error mx-auto" data-text={status}>{ status }</div>
        <p className="lead text-gray-800 mb-5"><Trans>something went wrong</Trans></p>
        <p className="text-gray-500 mb-0">
          <Trans>sorry, but something bad just happened. </Trans>
          <Trans>our engineers will be informed immediately.</Trans>
        </p>
        <Link href="/">
          <a href="/">
            &larr;
            <Trans>back to home</Trans>
          </a>
        </Link>
      </div>
    </div>
  );
};

Error.propTypes = {
  status: PropTypes.number.isRequired
};

export default Error;
