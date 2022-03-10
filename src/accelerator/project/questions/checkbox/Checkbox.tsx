import React from 'react';
import { useIntl } from 'react-intl';
import Props from './Checkbox.types';
import Viewport from '../../../../components/viewport';
import CheckboxField from '../../../../elements/forms/checkboxField';

const Checkbox = ({
  handleChange,
  control,
  answersAllowed,
  description,
  options,
  question,
  exact,
  rangeMin,
  rangeMax,
  required,
}: Props): JSX.Element => {
  const intl = useIntl();
  let answersAllowedText = '';

  switch (answersAllowed) {
    case 'exact':
      answersAllowedText = intl.formatMessage(
        { id: 'toolkit.checkbox.range.exact' },
        { value: exact }
      );
      break;
    case 'range':
      answersAllowedText = intl.formatMessage(
        {
          id: 'toolkit.checkbox.range.range',
        },
        { rangeMin, rangeMax }
      );
      break;

    default:
      answersAllowedText = '';
      break;
  }

  return (
    <Viewport size="xl">
      <div className="page-content-checkbox">
        <h2>{question}</h2>
        <p>{description}</p>
        {answersAllowed !== 'unlimited' && (
          <span className="checkbox-helper-answers-allowed">{answersAllowedText}</span>
        )}
        {options.map(option => (
          <CheckboxField
            control={control}
            required={required}
            onChange={handleChange}
            key={option.id}
            checkboxFieldProps={{
              error: '',
              label: option.value,
              name: option.value,
              value: option.id,
            }}
          />
        ))}
      </div>
    </Viewport>
  );
};

export default Checkbox;
