/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import { EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from '@pedroguia/react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import Dropdown from './Dropdown';
import InputLabel from '../../elements/inputLabel';
import useIsFirstRender from '../../hooks/useIsFirstRender';
import '@pedroguia/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const getInitialRawContent = initialContent => {
  const isContentHtmlString = typeof initialContent === 'string';

  if (isContentHtmlString) {
    const fixedHtml = initialContent.replaceAll('<figure>', '<p>').replaceAll('</figure>', '</p>');
    const numberOfElements = convertFromHTML(fixedHtml).contentBlocks.length;
    const blocksFromHTML = htmlToDraft(fixedHtml);
    const content = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    const rawContent = convertToRaw(content);
    if (rawContent.blocks.length > numberOfElements && rawContent.blocks[0].text === '')
      rawContent.blocks.shift();
    return rawContent;
  }
  return initialContent;
};

const errorClass = 'rdw-editor-wrapper-error';
const muiStyleClass = 'rdw-editor-wrapper-mui';
const focusClass = 'rdw-editor-wrapper-focus';
const disabledClass = 'rdw-editor-wrapper-disabled';

const translations = {
  pt: {
    'components.controls.link.linkTitle': 'Texto',
    'components.controls.link.linkTarget': 'Endereço URL',
    'components.controls.link.linkTargetOption': 'Abrir novo separador',
    'components.controls.link.link': 'Adicionar ligação',
    'components.controls.link.unlink': 'Remover ligação',
  },
};

const HtmlEditor = ({
  dataTestId,
  initialContent,
  onChange,
  columns,
  changeColumns,
  error,
  muiStyle,
  helperText,
  showColumnsBtn,
  showAddImageBtn,
  showAddUrlBtn,
  disabled,
  className,
  inputLabelProps,
  placeholder,
}) => {
  const intl = useIntl();
  const isFirstRender = useIsFirstRender();

  const [wrapperClassName, setWrapperClassName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [editorState, setEditorState] = useState(
    initialContent
      ? EditorState.createWithContent(convertFromRaw(getInitialRawContent(initialContent)))
      : EditorState.createEmpty()
  );

  useEffect(() => {
    setWrapperClassName(
      classnames({
        [disabledClass]: disabled,
        [muiStyleClass]: muiStyle,
        [errorClass]: error,
        [focusClass]: isFocused,
      })
    );
  });

  useEffect(() => {
    if (isFirstRender) return;

    if (typeof initialContent === 'string') {
      const content = initialContent
        ? EditorState.createWithContent(convertFromRaw(getInitialRawContent(initialContent)))
        : EditorState.createEmpty();

      setEditorState(content);
    }
  }, [initialContent]);

  const handleEditorStateChange = editorState => {
    if (onChange) onChange(convertToRaw(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);

  const options = ['inline', 'list'];
  if (showAddImageBtn) options.push('image');
  if (showAddUrlBtn) options.push('link');

  const toolbarCustomButtons = [];
  if (showColumnsBtn) {
    toolbarCustomButtons.push(
      <Dropdown
        title={intl.formatMessage({ id: 'columns' })}
        options={[1, 2, 3]}
        value={columns}
        handleChange={changeColumns}
        testId="dropdown-btn"
      />
    );
  }

  return (
    <div className={`form-group ${className}`}>
      {inputLabelProps && (
        <InputLabel
          {...inputLabelProps}
          style={{
            marginBottom: '8px',
          }}
        />
      )}
      <Editor
        wrapperClassName={wrapperClassName}
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        localization={{
          locale: 'pt',
          translations: translations.pt,
        }}
        toolbar={{
          options,
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
          },
          list: {
            options: ['unordered', 'ordered'],
          },
          link: {
            defaultTargetOption: '_blank',
            options: ['link'],
          },
        }}
        toolbarCustomButtons={toolbarCustomButtons}
        stripPastedStyles={true}
        spellCheck={true}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        data-testid={dataTestId}
        editorClassName={disabled ? 'disabled' : ''}
        toolbarClassName={disabled ? 'disabled' : ''}
        readOnly={disabled}
        placeholder={placeholder}
      />
      {!!helperText && (
        <p aria-label="html-helper-text" className="helper-text__error">
          {helperText}
        </p>
      )}
    </div>
  );
};

HtmlEditor.propTypes = {
  dataTestId: PropTypes.string,
  initialContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  columns: PropTypes.number,
  changeColumns: PropTypes.func,
  error: PropTypes.bool,
  muiStyle: PropTypes.bool,
  helperText: PropTypes.string,
  showColumnsBtn: PropTypes.bool,
  showAddImageBtn: PropTypes.bool,
  showAddUrlBtn: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  inputLabelProps: PropTypes.object,
  placeholder: PropTypes.string,
};

HtmlEditor.defaultProps = {
  initialContent: '',
  columns: 1,
  error: false,
  muiStyle: false,
  showColumnsBtn: false,
  showAddImageBtn: false,
  showAddUrlBtn: true,
  disabled: false,
};

export default HtmlEditor;
