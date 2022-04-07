import React from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Props from './Radiobox.types';
import Viewport from '../../../../components/viewport';
import RadioboxField from '../../../../elements/forms/radioboxField';

const Radiobox = ({
  control,
  name,
  required,
  reply,
  description,
  options,
  question,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  return (
    <Viewport size="xl">
      <div className="page-content-checkbox">
        <h2>
          {question}
          {!required && (
            <span className="h2-optional">({intl.formatMessage({ id: 'optional' })})</span>
          )}
        </h2>
        <p>{description}</p>
        {options.map(option => (
          <RadioboxField
            name={name}
            control={control}
            required={required}
            key={option.id}
            radioboxFieldProps={{
              error: '',
              label: option.value,
              name,
              value: option.id,
              checked: reply === String(option.id),
            }}
          />
        ))}
      </div>
    </Viewport>
  );
};

export default Radiobox;
