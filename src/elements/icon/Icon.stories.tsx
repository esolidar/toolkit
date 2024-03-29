/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as Icons from '../../assets/icons/md';
import * as IconsSmall from '../../assets/icons/sm';
import * as IconsXSmall from '../../assets/icons/xs';
import * as IconsLarge from '../../assets/icons/lg';
import TextField from '../textField';
import Icon from './Icon';
import Props from './Icon.types';

export default {
  title: 'Elements/Icon',
  parameters: {
    jest: ['Icon.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [icons, setIcons] = useState(Object.entries(Icons));
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = ({ target: { value } }) => {
    const search = Object.entries(Icons).filter(icon =>
      icon[0].toLowerCase().includes(value.toLowerCase())
    );
    setIcons(search);
  };

  const showMessage = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      {showAlert && <Alert />}
      <div style={{ position: 'absolute', right: '30px', top: '30px' }}>{icons.length} Icons</div>
      <SearchField onChange={handleChange} />
      <Grid icons={icons} showMessage={showMessage} args={args} />
    </>
  );
};

const TemplateSmall: Story<Props> = (args: Props) => {
  const [icons, setIcons] = useState(Object.entries(IconsSmall));
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = ({ target: { value } }) => {
    const search = Object.entries(IconsSmall).filter(icon =>
      icon[0].toLowerCase().includes(value.toLowerCase())
    );
    setIcons(search);
  };

  const showMessage = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      {showAlert && <Alert />}
      <div style={{ position: 'absolute', right: '30px', top: '30px' }}>{icons.length} Icons</div>
      <SearchField onChange={handleChange} />
      <Grid icons={icons} showMessage={showMessage} args={args} />
    </>
  );
};

const TemplateXSmall: Story<Props> = (args: Props) => {
  const [icons, setIcons] = useState(Object.entries(IconsXSmall));
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = ({ target: { value } }) => {
    const search = Object.entries(IconsXSmall).filter(icon =>
      icon[0].toLowerCase().includes(value.toLowerCase())
    );
    setIcons(search);
  };

  const showMessage = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      {showAlert && <Alert />}
      <div style={{ position: 'absolute', right: '30px', top: '30px' }}>{icons.length} Icons</div>
      <SearchField onChange={handleChange} />
      <Grid icons={icons} showMessage={showMessage} args={args} />
    </>
  );
};

const TemplateLarge: Story<Props> = (args: Props) => {
  const [icons, setIcons] = useState(Object.entries(IconsLarge));
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = ({ target: { value } }) => {
    const search = Object.entries(IconsLarge).filter(icon =>
      icon[0].toLowerCase().includes(value.toLowerCase())
    );
    setIcons(search);
  };

  const showMessage = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      {showAlert && <Alert />}
      <div style={{ position: 'absolute', right: '30px', top: '30px' }}>{icons.length} Icons</div>
      <SearchField onChange={handleChange} />
      <Grid icons={icons} showMessage={showMessage} args={args} />
    </>
  );
};

export const Default: Story<Props> = Template.bind({});
export const Small: Story<Props> = TemplateSmall.bind({});
export const XSmall: Story<Props> = TemplateXSmall.bind({});
export const Large: Story<Props> = TemplateLarge.bind({});

Default.args = {
  color: '#6C7679',
};

Small.args = {
  color: '#6C7679',
  size: 'sm',
};

XSmall.args = {
  color: '#6C7679',
  size: 'xs',
};
Large.args = {
  color: '#6C7679',
  size: 'lg',
};

const Alert = () => (
  <div
    style={{
      position: 'fixed',
      zIndex: 10,
      right: '20px',
      top: '20px',
      backgroundColor: '#000',
      color: '#fff',
      padding: '15px',
      borderRadius: '5px',
    }}
  >
    The icon name has been copied to the clipboard!
  </div>
);

const SearchField = ({ onChange }) => (
  <div>
    <TextField label="Search icon" field="input-code" type="text" onChange={onChange} size="lg" />
  </div>
);

const Grid = ({ icons, showMessage, args }) => (
  <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
    {icons.map(([name]) => {
      return (
        <CopyToClipboard key={name} text={name} onCopy={showMessage}>
          <div
            className="p-3 d-flex align-items-center flex-column"
            style={{ border: '1px solid #e7e7e7', borderRadius: '5px', width: '150px' }}
          >
            <Icon name={name} {...args} />
            <div style={{ color: '#888', fontSize: '12px', marginTop: '10px' }}>{name}</div>
          </div>
        </CopyToClipboard>
      );
    })}
  </div>
);
