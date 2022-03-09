import React from 'react';
import { FormattedMessage } from 'react-intl';
import Viewport from '../../../../components/viewport';
import Props from './Success.types';

const Success = ({ user, companyName }: Props) => (
  <Viewport size="xl">
    <div className="wizard-success">
      {/* <div className="image" /> // TODO: uncomment css too */}
      <h2>
        <FormattedMessage id="toolkit.success.published.project" />
      </h2>
      <p>
        <FormattedMessage id="toolkit.success.ready" values={{ user }} />
        <br />
        <FormattedMessage id="toolkit.success.journey.start" />
        <br />
        <FormattedMessage id="toolkit.success.project.pending.approval" values={{ companyName }} />
      </p>
    </div>
  </Viewport>
);

export default Success;
