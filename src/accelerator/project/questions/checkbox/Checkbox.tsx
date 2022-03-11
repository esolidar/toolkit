import React from 'react';
import { useIntl } from 'react-intl';
import Props from './Checkbox.types';
import Viewport from '../../../../components/viewport';
import CheckboxField from '../../../../elements/forms/checkboxField';

const Checkbox = (props: Props): JSX.Element => {
  const {
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
    name,
    reply,
  } = props;

  const intl = useIntl();

  const answersAllowedMessage = {
    exact: () => intl.formatMessage({ id: 'toolkit.checkbox.range.exact' }, { value: exact }),
    range: () =>
      intl.formatMessage(
        {
          id: 'toolkit.checkbox.range.range',
        },
        { rangeMin, rangeMax }
      ),
    unlimited: () => '',
  };

  return (
    <Viewport size="xl" centred={false}>
      <>
        <div className="page-content-checkbox">
          <h2>{question}</h2>
          <p>{description}</p>
          {answersAllowed !== 'unlimited' && (
            <span className="checkbox-helper-answers-allowed">
              {answersAllowedMessage[answersAllowed]()}
            </span>
          )}
          {options.map(option => (
            <CheckboxField
              name={name}
              control={control}
              required={required}
              onChange={handleChange}
              key={option.id}
              reply={reply}
              checkboxFieldProps={{
                error: '',
                label: option.value,
                name: option.value,
                value: option.id,
              }}
            />
          ))}
        </div>
      </>
    </Viewport>
  );
};

export default Checkbox;
