import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TextField from '../../elements/textField';
import Button from '../../elements/button';
import EmptyState from './EmptyState';
import Props from './EmptyState.types';
import filterIllustrationsBySize from './illustrations';

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    jest: ['EmptyState.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <EmptyState {...args} />
  </div>
);

const TemplateWithImageSm: Story<Props> = (args: Props) => {
  const [list, setList] = useState(filterIllustrationsBySize('sm'));
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = ({ target: { value } }) =>
    setList(
      filterIllustrationsBySize('sm').filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );

  const showMessage = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      <Header showAlert={showAlert} onChangeSearch={handleChange} listLength={list.length} />
      <Grid itemList={list} showMessage={showMessage} args={args} />
    </>
  );
};

const TemplateWithImageLg: Story<Props> = (args: Props) => {
  const [list, setList] = useState(filterIllustrationsBySize('lg'));
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = ({ target: { value } }) =>
    setList(
      filterIllustrationsBySize('sm').filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );

  const showMessage = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      <Header showAlert={showAlert} onChangeSearch={handleChange} listLength={list.length} />
      <Grid itemList={list} showMessage={showMessage} args={args} />
    </>
  );
};

export const Default: Story<Props> = Template.bind({});
export const WithIcon: Story<Props> = Template.bind({});
export const WithImageSmall: Story<Props> = TemplateWithImageSm.bind({});
export const WithImageLarge: Story<Props> = TemplateWithImageLg.bind({});

Default.args = {
  title: 'You haven’t set up your accelerator... yet!',
  body: 'Create your program and start receiving project applications',
  altImage: 'Image',
  buttons: <Button extraClass="primary-full" onClick={() => {}} text="Set up now" />,
};

WithIcon.args = {
  container: {
    rounded: true,
    shadow: true,
    borderSize: 1,
  },
  title: 'You haven’t set up your accelerator... yet!',
  body: 'Create your program and start receiving project applications ',
  icon: 'icon-ic-website',
  buttons: (
    <>
      <Button extraClass="dark" onClick={() => {}} text="Set up now" />
      <Button extraClass="primary-full" onClick={() => {}} text="Set up now" />
    </>
  ),
};

WithImageSmall.args = {
  container: {
    rounded: true,
    shadow: true,
    borderSize: 1,
  },
  title: 'You haven’t set up your accelerator... yet!',
  body: 'Create your program and start receiving project applications ',
};

WithImageLarge.args = {
  container: {
    rounded: true,
    shadow: true,
    borderSize: 1,
  },
  title: 'You haven’t set up your accelerator... yet!',
  body: 'Create your program and start receiving project applications ',
};

const Header = ({ showAlert, onChangeSearch, listLength }) => (
  <>
    {showAlert && (
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
        The image url has been copied to the clipboard!
      </div>
    )}
    <div className="d-flex align-items-center" style={{ gap: '16px' }}>
      <TextField label="Search images" type="text" onChange={onChangeSearch} />
      <div>{listLength} images</div>
    </div>
  </>
);

const Grid = ({ itemList, showMessage, args }) => (
  <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
    {itemList.map(item => {
      const url = `https://s3.eu-west-1.amazonaws.com/esolidar.com/frontend/assets/illustrations/${item.size}/${item.variant}/${item.name}.svg`;

      return (
        <CopyToClipboard
          key={`${item.size}-${item.variant}-${item.name}`}
          text={url}
          onCopy={showMessage}
        >
          <div className="d-flex align-items-center flex-column">
            <h3>{item.name}</h3>
            <EmptyState {...args} image={url} />
          </div>
        </CopyToClipboard>
      );
    })}
  </div>
);

Header.propTypes = {
  listLength: PropTypes.number,
  onChangeSearch: PropTypes.func,
  showAlert: PropTypes.bool,
};

Grid.propTypes = {
  args: PropTypes.any,
  itemList: PropTypes.array,
  showMessage: PropTypes.func,
};
