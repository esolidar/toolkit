import { FormattedNumber } from 'react-intl';
import isDefined from '../isDefined/isDefined';

const convertToMyCurrency = (value, currency) => {
  let convertedValue = value;
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  const myCurrency =
    isDefined(user) && user.currency !== 'null' && isDefined(user.currency)
      ? user.currency
      : currency;

  if (myCurrency.id !== currency.id) {
    convertedValue = (value * Number(currency.value)) / myCurrency.value;
  }

  return <FormattedNumber value={convertedValue} style="currency" currency={myCurrency.small} />;
};

export default convertToMyCurrency;
