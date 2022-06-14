import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../elements/container';

const Updates = () => (
  <div className="content-updates">
    <Container borderSize={1} rounded>
      <div>
        <h3>
          <FormattedMessage id="Updates are inactive for the moment" />
        </h3>
        <p>
          <FormattedMessage id="Once your project is approved, you can notify the public about news and your current progress" />
        </p>
      </div>
    </Container>
  </div>
);

export default Updates;
