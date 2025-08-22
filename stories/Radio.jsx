import React from 'react';
import PropTypes from 'prop-types';
import tokens from '../src/tokens/tokens.json';
import './radio.css';

// Extract colors from design tokens
const colors = {
  primary: tokens.core.Brand_Chlorophyll.value, // #61892f
  secondary: tokens.core.Brand_Sunrise.value,   // #ffa500
  default: '#222629' // Using standard text color for default
};

/** Radio button component matching the design system specifications */
export const Radio = ({
  checked = false,
  disabled = false,
  size = 'medium',
  color = 'default',
  onChange,
  name,
  value,
  ...props
}) => {
  const handleChange = (event) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  const classNames = [
    'radio-button',
    `radio-button--${size}`,
    `radio-button--${color}`,
    checked ? 'radio-button--checked' : 'radio-button--unchecked',
    disabled ? 'radio-button--disabled' : 'radio-button--enabled'
  ].join(' ');

  return (
    <label className={classNames}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
        className="radio-button__input"
        {...props}
      />
      <span className="radio-button__icon">
        {checked ? (
          <svg viewBox="0 0 24 24" className="radio-button__svg">
            <circle cx="12" cy="12" r="5" className="radio-button__inner-circle" />
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" className="radio-button__outer-circle" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="radio-button__svg">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" className="radio-button__outer-circle" />
          </svg>
        )}
      </span>
    </label>
  );
};

Radio.propTypes = {
  /** Whether the radio button is checked */
  checked: PropTypes.bool,
  /** Whether the radio button is disabled */
  disabled: PropTypes.bool,
  /** Size of the radio button */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color variant of the radio button */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /** Change handler function */
  onChange: PropTypes.func,
  /** Name attribute for the radio button */
  name: PropTypes.string,
  /** Value attribute for the radio button */
  value: PropTypes.string,
};
