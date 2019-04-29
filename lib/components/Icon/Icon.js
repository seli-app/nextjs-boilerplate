import React from 'react';
import './Icon.scss';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { id, icon, options } = props;
  return (
    <i id={id} className={`fas fa-fw fa-${icon} ${options}`} />
  );
};

Icon.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string.isRequired,
  options: PropTypes.string
};

Icon.defaultProps = {
  id: '',
  options: ''
};

export default Icon;
