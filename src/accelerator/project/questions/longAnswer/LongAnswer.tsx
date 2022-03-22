import React from 'react';
import Props from './LongAnswer.types';
import Viewport from '../../../../components/viewport';
import TextareaField from '../../../../elements/forms/textareaField';

const LongAnswer = ({ name, control, id, question, description, required }: Props): JSX.Element => (
  <Viewport size="lg" centred={false}>
    <div className="page-content-checkbox">
      <h2>{question}</h2>
      <p>{description}</p>
      <TextareaField
        name={name}
        control={control}
        required={required}
        textareaFieldProps={{
          id,
          size: 'lg',
        }}
      />
    </div>
  </Viewport>
);

export default LongAnswer;
