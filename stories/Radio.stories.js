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

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
    color: 'default',
  },
};

// Size variants
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

// Showcase all combinations
export const AllVariants = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '20px',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div><strong>Unchecked</strong></div>
      <div><strong>Checked</strong></div>
      <div><strong>Disabled Unchecked</strong></div>
      <div><strong>Disabled Checked</strong></div>
      
      {/* Default Color */}
      <div style={{ fontSize: '12px', color: '#666' }}>Default</div>
      <div></div>
      <div></div>
      <div></div>
      
      <Radio checked={false} color="default" size="small" />
      <Radio checked={true} color="default" size="small" />
      <Radio checked={false} disabled color="default" size="small" />
      <Radio checked={true} disabled color="default" size="small" />
      
      <Radio checked={false} color="default" size="medium" />
      <Radio checked={true} color="default" size="medium" />
      <Radio checked={false} disabled color="default" size="medium" />
      <Radio checked={true} disabled color="default" size="medium" />
      
      <Radio checked={false} color="default" size="large" />
      <Radio checked={true} color="default" size="large" />
      <Radio checked={false} disabled color="default" size="large" />
      <Radio checked={true} disabled color="default" size="large" />
      
      {/* Primary Color */}
      <div style={{ fontSize: '12px', color: '#666' }}>Primary</div>
      <div></div>
      <div></div>
      <div></div>
      
      <Radio checked={false} color="primary" size="small" />
      <Radio checked={true} color="primary" size="small" />
      <Radio checked={false} disabled color="primary" size="small" />
      <Radio checked={true} disabled color="primary" size="small" />
      
      <Radio checked={false} color="primary" size="medium" />
      <Radio checked={true} color="primary" size="medium" />
      <Radio checked={false} disabled color="primary" size="medium" />
      <Radio checked={true} disabled color="primary" size="medium" />
      
      <Radio checked={false} color="primary" size="large" />
      <Radio checked={true} color="primary" size="large" />
      <Radio checked={false} disabled color="primary" size="large" />
      <Radio checked={true} disabled color="primary" size="large" />
      
      {/* Secondary Color */}
      <div style={{ fontSize: '12px', color: '#666' }}>Secondary</div>
      <div></div>
      <div></div>
      <div></div>
      
      <Radio checked={false} color="secondary" size="small" />
      <Radio checked={true} color="secondary" size="small" />
      <Radio checked={false} disabled color="secondary" size="small" />
      <Radio checked={true} disabled color="secondary" size="small" />
      
      <Radio checked={false} color="secondary" size="medium" />
      <Radio checked={true} color="secondary" size="medium" />
      <Radio checked={false} disabled color="secondary" size="medium" />
      <Radio checked={true} disabled color="secondary" size="medium" />
      
      <Radio checked={false} color="secondary" size="large" />
      <Radio checked={true} color="secondary" size="large" />
      <Radio checked={false} disabled color="secondary" size="large" />
      <Radio checked={true} disabled color="secondary" size="large" />
    </div>
  ),
};

// Interactive radio group example
export const RadioGroup = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');
    
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio 
            checked={selectedValue === 'option1'}
            onChange={handleChange}
            value="option1"
            name="radio-group-example"
            color="primary"
          />
          <label>Option 1</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio 
            checked={selectedValue === 'option2'}
            onChange={handleChange}
            value="option2"
            name="radio-group-example"
            color="primary"
          />
          <label>Option 2</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio 
            checked={selectedValue === 'option3'}
            onChange={handleChange}
            value="option3"
            name="radio-group-example"
            color="primary"
          />
          <label>Option 3</label>
        </div>
      </div>
    );
  },
};
