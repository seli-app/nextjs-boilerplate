import React from 'react';
import Link from 'next/link';
import './Brand.scss';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';

const brand = (props) => {
  const { id, className, brandName } = props;
  return (
    <Link href="/">
      <a id={id} className={className} href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <Icon icon="laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          {brandName}
        </div>
      </a>
    </Link>
  );
};

brand.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  brandName: PropTypes.string.isRequired
};

brand.defaultProps = {
  id: '',
  className: ''
};

export default brand;
