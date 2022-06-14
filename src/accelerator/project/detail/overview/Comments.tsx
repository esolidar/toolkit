import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../elements/container';

const Comments = () => (
  <div className="content-comments">
    <Container borderSize={1} rounded>
      <div>
        <h3>
          <FormattedMessage id="Comments are inactive for the moment" />
        </h3>
        <p>
          <FormattedMessage id="Once your project is approved, it will become available for public engagement" />
        </p>
      </div>
    </Container>
  </div>
);

export default Comments;
