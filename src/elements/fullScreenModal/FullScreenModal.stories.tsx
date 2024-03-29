/* eslint-disable no-alert */
import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import FullScreenModal from './FullScreenModal';
import Props from './FullScreenModal.types';
import WizardHeader from './headers/wizard/Header';
import WizardFooter from '../../components/wizard/footer/WizardFooter';
import Viewport from '../../components/viewport';

export default {
  title: 'Elements/FullScreenModal',
  component: FullScreenModal,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <FullScreenModal {...args} showModal={showModal} closeModal={closeModal}>
          <Viewport>
            <div>
              <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
              <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
              <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
              <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
              <div>Body Content Here</div>
            </div>
          </Viewport>
        </FullScreenModal>
      )}
    </div>
  );
};

const NoHeaderTemplate: Story<Props> = (args: Props) => (
  <div>
    <FullScreenModal {...args}>
      <Viewport>
        <div>
          <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
          <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
          <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
          <div style={{ marginTop: '50px', marginBottom: '500px' }}>Body Content Here</div>
          <div>Body Content Here</div>
        </div>
      </Viewport>
    </FullScreenModal>
  </div>
);

export const Open: Story<Props> = Template.bind({});
export const Close: Story<Props> = NoHeaderTemplate.bind({});
export const NoHeader: Story<Props> = NoHeaderTemplate.bind({});

Open.args = {
  header: (
    <WizardHeader
      disabledDarkButton={false}
      closeWizard={() => {}}
      handleDarkButton={() => {}}
      buttonDarkText="Save & Close"
      buttonPrimaryText="Publish"
      handlePrimaryButton={() => {}}
      cdnStaticUrl=""
      disabledPrimaryButton={false}
      isLoading={false}
      isDraft={true}
      title="Destino4All"
    />
  ),
  footer: (
    <Viewport>
      <WizardFooter
        disabledDarkButton={false}
        buttonDarkText="Save & Close"
        handleDarkButton={() => {}}
        buttonNextText="Continue"
        handleClickBack={() => {}}
        handleClickNext={() => {}}
        totalPages={3}
        currentPage="3"
        disableClickNext={false}
        isLoading={false}
      />
    </Viewport>
  ),
};

Close.args = {
  showModal: false,
  closeModal: () => {},
};

NoHeader.args = {
  showModal: true,
  closeModal: () => {},
  footer: <div className="d-flex justify-content-center align-items-center">Footer</div>,
};
