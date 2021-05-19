import PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const ChangeCurrency = ({ onChange, currentCurrency, currencies }) => (
  <div className="changeCurrency">
    <DropdownButton
      drop="up"
      variant="footer"
      title={`${currentCurrency.symbol} ${currentCurrency.small}`}
      key="up"
    >
      {currencies.map((currency, index) => (
        <Dropdown.Item key={index} eventKey={index} onSelect={onChange}>
          {currency.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  </div>
);

ChangeCurrency.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentCurrency: PropTypes.object.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      small: PropTypes.string,
      symbol: PropTypes.string,
    })
  ).isRequired,
};

export default ChangeCurrency;
