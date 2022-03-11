import React from 'react';
import Props from './Radiobox.types';
import Viewport from '../../../../components/viewport';
import RadioboxField from '../../../../elements/forms/radioboxField';

const Radiobox = ({
  handleChange,
  name,
  control,
  description,
  options,
  question,
  required,
  reply,
}: Props): JSX.Element => (
  <Viewport size="xl">
    <div className="page-content-checkbox">
      <h2>{question}</h2>
      <p>{description}</p>

      {options.map(option => (
        <RadioboxField
          name={name}
          control={control}
          required={required}
          onChange={handleChange}
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

export default Radiobox;
