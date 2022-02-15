import React from 'react';
import CustomModal from './CustomModal';
import Button from '../button';

export default {
  title: 'Elements/CustomModal',
  component: CustomModal,
};

const Template = args => <CustomModal {...args} />;

export const Default = Template.bind({});
export const WithScroll = Template.bind({});

Default.parameters = {
  jest: ['CustomModal.test.js'],
};

Default.args = {
  backdrop: true,
  actionsChildren: (
    <>
      <Button extraClass="dark" className="mr-2" text="Cancel" />
      <Button extraClass="primary-full" text="Save" />
    </>
  ),
  bodyChildren: <div>Lorem ipsum . Ut purus metus, mattis ut malesuada ut, consequat a mi.</div>,
  onHide: () => {},
  show: true,
  subtitle: 'subtitle',
  title: 'Title',
  size: 'md',
  scrollable: false,
};

WithScroll.args = {
  actionsChildren: (
    <>
      <Button extraClass="dark" className="mr-2" text="Cancel" />
      <Button extraClass="primary-full" text="Save" />
    </>
  ),
  bodyChildren: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat elit felis, in lacinia
      massa maximus id. Nulla tempus bibendum tortor, quis feugiat turpis. Proin velit diam,
      sagittis nec neque eu, lacinia dapibus nibh. In porta faucibus nisl, id vestibulum purus
      convallis tempus. Suspendisse efficitur ac nisi eget aliquet. Aenean tristique dui ipsum, id
      ultricies nibh finibus id. Pellentesque semper tempus leo, vitae imperdiet arcu facilisis non.
      Cras consectetur molestie magna ac tincidunt. Integer eget augue et ante placerat fringilla.
      Suspendisse potenti. Vivamus aliquam sem non velit laoreet hendrerit. Curabitur consectetur
      ante sit amet nulla pellentesque tincidunt. Vivamus dignissim tempor vehicula. Aliquam
      venenatis urna eget finibus suscipit. Praesent quis rhoncus felis. Fusce faucibus pulvinar
      dolor vel tempor. Ut at varius lorem, sed interdum massa. Fusce vulputate lobortis posuere.
      Mauris convallis nunc a ipsum rutrum vehicula. Donec vitae fringilla ipsum, a interdum felis.
      Praesent vehicula est a tortor dictum varius. Sed bibendum consequat purus vitae vestibulum.
      Cras sagittis leo consequat eros tincidunt, non hendrerit orci lacinia. Etiam rutrum urna
      felis, at molestie risus vehicula ac. Vivamus euismod pharetra purus, vitae elementum nisi
      pretium eget. Morbi laoreet urna tortor, quis iaculis quam tincidunt vel. Quisque nulla elit,
      blandit id dui ut, congue dapibus orci. Sed sed eros tempus odio molestie rutrum. Praesent
      eget congue ex, a laoreet erat. Nullam convallis rutrum auctor. Nam tempus porttitor ex at
      iaculis. Proin sagittis magna eget eros tincidunt porta. Duis eget porttitor justo, ut feugiat
      neque. Cras interdum cursus leo, eu faucibus nisi fermentum id. In lobortis ac dui vel semper.
      Donec sed pellentesque ex, at pulvinar quam. Cras laoreet eu augue et pulvinar. Donec
      vestibulum tempus ex, interdum efficitur quam pharetra ut. Praesent blandit blandit lobortis.
      Vivamus lacinia dignissim elit, in rutrum diam tempor id. Nunc sem est, gravida eu dignissim
      tincidunt, imperdiet ac velit. Donec tincidunt ante quis arcu elementum scelerisque.
      Vestibulum pellentesque tellus at nisl posuere, vitae blandit leo porta. Pellentesque pulvinar
      tempus ligula, nec aliquet lacus ornare vel. Sed eget nisl at sem efficitur dignissim. Donec
      erat magna, condimentum eget semper ut, imperdiet eu leo. Fusce venenatis nisl eros, in
      molestie sapien convallis luctus. Ut purus metus, mattis ut malesuada ut, consequat a mi.
    </div>
  ),
  onHide: () => {},
  show: true,
  subtitle: 'subtitle',
  title: 'Title',
};
