/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
  convertFromHTML,
  Modifier,
} from 'draft-js';
import { Editor } from '@esolidar/react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import Dropdown from './Dropdown';
import InputLabel from '../../elements/inputLabel';
import useIsFirstRender from '../../hooks/useIsFirstRender';
import Icon from '../../elements/icon';
import '@esolidar/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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

const toolbarButtons = {
  inline: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
  list: ['unordered', 'ordered', 'indent', 'outdent'],
  textAlign: ['left', 'center', 'right', 'justify'],
  link: ['link'],
  image: ['image'],
};

const getToolbarOptions = toolbarItems => {
  const options = [];
  const keys = Object.keys(toolbarButtons);

  keys.forEach(key => {
    const isOptionIncludedInToolbarItems = toolbarItems.some(item =>
      toolbarButtons[key].includes(item)
    );
    if (isOptionIncludedInToolbarItems) options.push(key);
  });

  return options;
};

const getCurrentTextSelection = editorState => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  const start = selectionState.getStartOffset();
  const end = selectionState.getEndOffset();
  const selectedText = currentContentBlock.getText().slice(start, end);

  return selectedText;
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
  maxLength,
  size,
  toolbarItems,
  onBlur,
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
  const [options, setOptions] = useState(getToolbarOptions(toolbarItems));

  useEffect(() => {
    const newOptions = getToolbarOptions(toolbarItems);
    if (JSON.stringify(options) !== JSON.stringify(newOptions)) {
      setOptions(newOptions);
    }
  }, [toolbarItems]);

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
      let value = initialContent;

      if (initialContent[0] === '{') value = JSON.parse(initialContent);

      const content = value
        ? EditorState.createWithContent(convertFromRaw(getInitialRawContent(value)))
        : EditorState.createEmpty();

      setEditorState(content);
    }
  }, [initialContent]);

  const handleEditorStateChange = editorState => {
    if (onChange) onChange(convertToRaw(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  const handlePastedText = (text, html, editorState, onChange) => {
    if (maxLength) {
      const currentTextLength = Number(editorState.getCurrentContent().getPlainText('').length);
      const selection = editorState.getSelection();
      const currentTextSelection = getCurrentTextSelection(editorState).length;
      const string = text.substring(0, maxLength - (currentTextLength - currentTextSelection));

      if (string === '') {
        onChange(editorState);
        return 'handled';
      }

      const pastedBlocks = ContentState.createFromText(string).blockMap;
      const newState = Modifier.replaceWithFragment(
        editorState.getCurrentContent(),
        selection,
        pastedBlocks
      );

      const newEditorState = EditorState.push(editorState, newState, 'insert-fragment');
      onChange(newEditorState);
      return 'handled';
    }
  };

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => {
    if (onBlur) onBlur(convertToRaw(editorState.getCurrentContent()));
    setIsFocused(false);
  };

  if (showAddImageBtn && !options.includes('image')) options.push('image');
  if (showAddUrlBtn && !options.includes('link')) options.push('link');

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
    <div className={classnames('form-group', `htmlEditor-${size}`, className)}>
      {inputLabelProps && <InputLabel {...inputLabelProps} />}
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
            options: toolbarItems.filter(item => toolbarButtons.inline.includes(item)),
            bold: {
              icon: <Icon name="Bold" size="sm" />,
            },
            italic: {
              icon: <Icon name="Italic" size="sm" />,
            },
            underline: {
              icon: <Icon name="Underline" size="sm" />,
            },
            strikethrough: {
              icon: <Icon name="StrikeThrough" size="sm" />,
            },
          },
          list: {
            options: toolbarItems.filter(item => toolbarButtons.list.includes(item)),
            unordered: {
              icon: <Icon name="BulletList" size="sm" />,
            },
          },
          textAlign: {
            options: toolbarItems.filter(item => toolbarButtons.textAlign.includes(item)),
            left: {
              icon: <Icon name="AlignLeft" size="sm" />,
            },
            center: {
              icon: <Icon name="AlignCenter" size="sm" />,
            },
            right: {
              icon: <Icon name="AlignRight" size="sm" />,
            },
          },
          link: {
            defaultTargetOption: '_blank',
            options: toolbarItems.filter(item => toolbarButtons.link.includes(item)),
            link: {
              icon: <Icon name="Link" size="sm" />,
            },
          },
          image: {
            icon: <Icon name="Image" size="sm" />,
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
        maxLength={maxLength}
        handlePastedText={handlePastedText}
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
  maxLength: PropTypes.number,
  size: PropTypes.string,
  toolbarItems: PropTypes.array,
  onBlur: PropTypes.func,
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
  size: 'lg',
  toolbarItems: [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'unordered',
    'left',
    'center',
    'right',
    'link',
  ],
};

export default HtmlEditor;
