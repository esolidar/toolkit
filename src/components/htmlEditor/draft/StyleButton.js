import React from 'react';
import PropTypes from 'prop-types';

class StyleButton extends React.Component {
  constructor() {
    super();
    const { onToggle, style } = this.props;

    this.onToggle = (e) => {
      e.preventDefault();
      onToggle(style);
    };
  }

  render() {
    const { active, label } = this.props;
    let className = 'RichEditor-styleButton';
    if (active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {label}
      </span>
    );
  }
}

export default StyleButton;

StyleButton.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  style: PropTypes.string,
  onToggle: PropTypes.func,
};
