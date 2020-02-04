import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import StyleButton from './StyleButton';

const InlineStyleControls = ({
  editorState, onToggle, changeColumns, columns,
}) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  const INLINE_STYLES = [
    { label: 'B', style: 'BOLD' },
    { label: 'I', style: 'ITALIC' },
    { label: 'U', style: 'UNDERLINE' },
  ];

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
      <span className="RichEditor-styleButton">
        <FormattedMessage
          id="columns"
          defaultMessage="Columns"
        />
      </span>
      <select onChange={changeColumns} value={columns}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

export default InlineStyleControls;

InlineStyleControls.propTypes = {
  editorState: PropTypes.object,
  onToggle: PropTypes.func,
  changeColumns: PropTypes.func.isRequired,
  columns: PropTypes.number,
};
