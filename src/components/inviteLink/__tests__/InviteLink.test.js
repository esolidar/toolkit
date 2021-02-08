import React from 'react';
import { shallow } from 'enzyme';
import InviteLink from '../InviteLink';

describe('InviteLink component', () => {
  it('renders InviteLink correctly', () => {
    const component = shallow(
      <InviteLink
        inviteLinkText="You can invite your members..."
        inviteLink="whitelabel_subdomain/lang/user/.."
        copyLinkFunc={() => {}}
        copied={false}
        CopyLinkText="Copy link"
        CopiedLinkText="Copied"
      />
    );
    expect(component).toHaveLength(1);
  });
});
