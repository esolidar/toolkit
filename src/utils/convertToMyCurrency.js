import { FormattedNumber } from 'react-intl';

const convertToMyCurrency = (value, currency) => {
  let convertedValue = value;
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  const myCurrency = user && user.currency !== 'null' ? user.currency : currency;

  if (myCurrency.id !== currency.id) {
    convertedValue = (value * currency.value) / myCurrency.value;
  }

  return <FormattedNumber value={convertedValue} style="currency" currency={myCurrency.small} />;
};

export default convertToMyCurrency;
