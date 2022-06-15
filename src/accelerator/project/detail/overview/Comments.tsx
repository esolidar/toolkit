import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../elements/container';

const Comments = () => (
  <div className="content-comments">
    <Container borderSize={1} rounded>
      <div>
        <h3>
          <FormattedMessage id="toolkit.comments.inactive.title" />
        </h3>
        <p>
          <FormattedMessage id="toolkit.comments.inactive.text" />
        </p>
      </div>
    </Container>
  </div>
);

export default Comments;
