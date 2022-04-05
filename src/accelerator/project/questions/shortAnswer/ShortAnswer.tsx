import React from 'react';
import { useIntl } from 'react-intl';
import Props from './ShortAnswer.types';
import Viewport from '../../../../components/viewport';
import TextField from '../../../../elements/forms/textField';

const ShortAnswer = ({
  name,
  control,
  question,
  description,
  required,
  requiredField,
}: Props): JSX.Element => {
  const intl = useIntl();
  return (
    <Viewport size="lg" centred={false}>
      <div className="page-content-checkbox">
        <h2>
          {question}
          {!requiredField && (
            <span className="h2-optional">({intl.formatMessage({ id: 'optional' })})</span>
          )}
        </h2>
        <p>{description}</p>
        <TextField
          name={name}
          control={control}
          required={required}
          textFieldProps={{
            size: 'lg',
          }}
        />
      </div>
    </Viewport>
  );
};

export default ShortAnswer;
