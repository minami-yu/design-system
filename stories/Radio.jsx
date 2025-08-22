import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MuiRadio, styled } from '@mui/material';

const StyledRadio = styled(MuiRadio)(({ theme, size, color }) => {
  const sizes = {
    small: '20px',
    medium: '24px', 
    large: '28px'
  };

  const colors = {
    primary: '#61892F',
    secondary: '#FFA500',
    default: '#222629'
  };

  const hoverColors = {
    primary: 'rgba(97, 137, 47, 0.04)',
    secondary: 'rgba(255, 165, 0, 0.04)',
    default: 'rgba(34, 38, 41, 0.04)'
  };

  const focusColors = {
    primary: 'rgba(97, 137, 47, 0.30)',
    secondary: 'rgba(255, 165, 0, 0.30)',
    default: 'rgba(34, 38, 41, 0.12)'
  };

  return {
    padding: '9px',
    '& .MuiSvgIcon-root': {
      width: sizes[size],
      height: sizes[size],
    },
    '&:hover': {
      backgroundColor: hoverColors[color],
    },
    '&.Mui-focusVisible': {
      backgroundColor: focusColors[color],
    },
    '&.Mui-disabled': {
      '& .MuiSvgIcon-root': {
        color: 'rgba(34, 38, 41, 0.38)',
      },
    },
    '& .MuiSvgIcon-root': {
      color: color === 'default' 
        ? 'rgba(34, 38, 41, 0.6)' 
        : colors[color],
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      color: color === 'default' 
        ? 'rgba(34, 38, 41, 0.6)' 
        : colors[color],
    },
  };
});

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
  return (
    <StyledRadio
      checked={checked}
      disabled={disabled}
      size={size}
      color={color}
      onChange={onChange}
      name={name}
      value={value}
      {...props}
    />
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
