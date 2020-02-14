/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
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
