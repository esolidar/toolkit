import React from 'react';
import ReactSelect from 'react-select';
import { useIntl } from 'react-intl';

interface AllOptions {
  label: string;
  value: string;
}

interface Props {
  options: any[];
  onChange(options: any[]): void;

  allowSelectAll: boolean;
}

const Select = (props: Props) => {
  const intl = useIntl();
  const allOption: AllOptions = {
    label: intl.formatMessage({ id: 'select-all' }),
    value: '*',
  };

  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[allOption, ...props.options]}
        onChange={(selected, event) => {
          if (selected !== null && selected.length > 0) {
            if (selected[selected.length - 1].value === allOption.value) {
              return props.onChange([allOption, ...props.options]);
            }
            let result = [];
            if (selected.length === props.options.length) {
              if (selected.find(i => i.value === '*')) {
                result = selected.filter(option => option.value !== allOption.value);
              } else if (event.action === 'select-option') {
                result = [allOption, ...props.options];
              }
              return props.onChange(result);
            }
          }

          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

export default Select;
