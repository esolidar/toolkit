import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './ChangeCurrency.scss';

const ChangeCurrency = ({ onChange, currentCurrency, currencies }) => {
  const allCurrencies = currencies.map((currency, index) => (
    <Dropdown.Item key={index} eventKey={index} onSelect={onChange}>
      {currency.name}
    </Dropdown.Item>
  ));

  return (
    <div className="changeCurrency">
      <DropdownButton
        drop="up"
        variant="footer"
        title={`${currentCurrency.symbol} ${currentCurrency.small}`}
        key="up"
      >
        {allCurrencies}
      </DropdownButton>
    </div>
  );
};

ChangeCurrency.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentCurrency: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
};

export default ChangeCurrency;
