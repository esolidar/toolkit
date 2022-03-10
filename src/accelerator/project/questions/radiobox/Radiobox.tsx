import React from 'react';
import Props from './Radiobox.types';
import Viewport from '../../../../components/viewport';
import RadioboxField from '../../../../elements/forms/radioboxField';

const Radiobox = ({
  handleChange,
  control,
  id,
  description,
  options,
  question,
  required,
}: Props): JSX.Element => (
  <Viewport size="xl">
    <div className="page-content-checkbox">
      <h2>{question}</h2>
      <p>{description}</p>

      {options.map(option => (
        <RadioboxField
          control={control}
          required={required}
          onChange={handleChange}
          key={option.id}
          checkboxFieldProps={{
            error: '',
            label: option.value,
            name: `field-${id}`,
            value: option.id,
          }}
        />
      ))}
    </div>
  </Viewport>
);

export default Radiobox;
