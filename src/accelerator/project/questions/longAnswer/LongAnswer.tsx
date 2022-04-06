import React from 'react';
import { useIntl } from 'react-intl';
import Props from './LongAnswer.types';
import Viewport from '../../../../components/viewport';
import TextareaField from '../../../../elements/forms/textareaField';

const LongAnswer = ({ name, control, question, description, required }: Props): JSX.Element => {
  const intl = useIntl();
  return (
    <Viewport size="lg" centred={false}>
      <div className="page-content-checkbox">
        <h2>
          {question}
          {!required && (
            <span className="h2-optional">({intl.formatMessage({ id: 'optional' })})</span>
          )}
        </h2>
        <p>{description}</p>
        <TextareaField
          name={name}
          control={control}
          required={required}
          textareaFieldProps={{
            size: 'lg',
          }}
        />
      </div>
    </Viewport>
  );
};

export default LongAnswer;
