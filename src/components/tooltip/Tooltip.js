import React from 'react';
import PropTypes from 'prop-types';
import cn from './Tooltip.module.scss';

export const Tooltip = React.memo(({ title, top, right, left, bottom }) => (
  <div
    className={cn.tooltip}
    data-role="tooltip"
    style={{ top, right, left, bottom }}
  >
    <p>{title}</p>
  </div>
));
Tooltip.defaultProps = {
  top: '',
  right: '',
  left: '',
  bottom: '',
};
Tooltip.propTypes = {
  title: PropTypes.string,
  top: PropTypes.any,
  right: PropTypes.any,
  left: PropTypes.any,
  bottom: PropTypes.any,
};
