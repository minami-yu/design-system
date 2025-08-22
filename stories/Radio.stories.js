import React from 'react';
import { fn } from 'storybook/test';
import { Radio } from './Radio';

export default {
  title: 'Design System/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { 
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary']
    },
  },
  args: { 
    onChange: fn(),
    name: 'radio-group',
    value: 'option1'
  },
};

// Basic variants
export const Default = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    color: 'default',
  },
};

export const Checked = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    color: 'default',
  },
};

export const Primary = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    color: 'secondary',
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
    color: 'default',
  },
};

export const Small = {
  args: {
    checked: true,
    disabled: false,
    size: 'small',
    color: 'primary',
  },
};

export const Medium = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    color: 'primary',
  },
};

export const Large = {
  args: {
    checked: true,
    disabled: false,
    size: 'large',
    color: 'primary',
  },
};
