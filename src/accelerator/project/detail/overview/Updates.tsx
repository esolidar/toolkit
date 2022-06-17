import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../elements/container';

const Updates = () => (
  <div className="content-updates">
    <Container borderSize={1} rounded>
      <div>
        <h3>
          <FormattedMessage id="toolkit.updates.inactive.title" />
        </h3>
        <p>
          <FormattedMessage id="toolkit.updates.inactive.text" />
        </p>
      </div>
    </Container>
  </div>
);

export default Updates;
