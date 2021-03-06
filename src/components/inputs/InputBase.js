import React from 'react';
import PropTypes from 'prop-types';
import cn from './Input.module.scss';

export const InputBase = React.memo(
  ({
    value,
    type,
    min,
    width,
    text_align,
    auto_focus,
    placeholder,
    disabled,
    handleOnFocus,
    handleOnBlur,
    handleOnChange,
    handleOnKeyDown,
  }) => (
    <input
      className={cn.input}
      autoFocus={auto_focus}
      spellCheck="false"
      autoComplete="new-password"
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      type={type}
      min={min}
      style={{ textAlign: text_align, width }}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onKeyDown={handleOnKeyDown}
    />
  ),
);
InputBase.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
  text_align: 'left',
  min: 0,
  width: 'initial',
  auto_focus: false,
  disabled: false,
  handleOnBlur: () => {},
  handleOnFocus: () => {},
  handleOnChange: () => {},
  handleOnKeyDown: () => {},
};
InputBase.propTypes = {
  disabled: PropTypes.any,
  text_align: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  min: PropTypes.number,
  width: PropTypes.any,
  auto_focus: PropTypes.bool,
  placeholder: PropTypes.string,
  handleOnBlur: PropTypes.func,
  handleOnFocus: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleOnKeyDown: PropTypes.func,
};
