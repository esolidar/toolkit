import PropTypes from 'prop-types';
import Button from '../../elements/button';
import isObject from '../../utils/isObject';
import isEmpty from '../../utils/isEmpty';

const BoxInfo = ({ button, className, style, text }) => {
  const { style: buttonStyle, text: buttonText, onClick, href, to, disabled } = button;
  const extraClass = !isObject(buttonStyle) ? buttonStyle : 'primary-full';

  return (
    <div className={`box box-info ${className}`} style={style}>
      <p className="text">{text}</p>
      {!isEmpty(button) && (
        <div className="button">
          <Button
            extraClass={extraClass}
            onClick={onClick}
            href={href}
            text={buttonText}
            to={to}
            disabled={disabled}
            style={isObject(buttonStyle) ? buttonStyle : undefined}
          />
        </div>
      )}
    </div>
  );
};

BoxInfo.propTypes = {
  button: PropTypes.shape({
    style: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

BoxInfo.defaultProps = {
  button: {},
  className: '',
};

export default BoxInfo;
