import React from 'react';
import Props from './ShortAnswer.types';
import Viewport from '../../../../components/viewport';
import TextField from '../../../../elements/forms/textField';

const ShortAnswer = ({
  name,
  control,
  id,
  reply,
  question,
  description,
  required,
}: Props): JSX.Element => (
  <Viewport size="lg" centred={false}>
    <div className="page-content-checkbox">
      <h2>{question}</h2>
      <p>{description}</p>
      <TextField
        name={name}
        control={control}
        required={required}
        textFieldProps={{
          id,
          value: reply,
          size: 'lg',
        }}
      />
    </div>
  </Viewport>
);

export default ShortAnswer;
