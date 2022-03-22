import React from 'react';
import { FormattedMessage } from 'react-intl';
import Props from './Description.types';
import Viewport from '../../../../components/viewport';
import TextareaField from '../../../../elements/forms/textareaField';

const Description = ({ name, control, id, reply, userName, required }: Props): JSX.Element => {
  return (
    <Viewport size="lg" centred={false}>
      <div className="page-content-checkbox">
        <h2>
          <FormattedMessage id="description" />
        </h2>
        <p>
          <FormattedMessage id="toolkit.welcome.aboard.user" values={{ userName }} />
          <br />
          <br />
          <FormattedMessage id="toolkit.project.description.description" />
        </p>
        <TextareaField
          name={name}
          control={control}
          required={required}
          textareaFieldProps={{
            id,
            value: reply,
            size: 'lg',
          }}
        />
      </div>
    </Viewport>
  );
};

export default Description;
