/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from '@pedroguia/react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import Dropdown from './Dropdown';
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
  onFileUpload,
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
}) => {
  const [wrapperClassName, setWrapperClassName] = useState([]);
  const [editorState, setEditorState] = useState(
    initialContent
      ? EditorState.createWithContent(convertFromRaw(getInitialRawContent(initialContent)))
      : EditorState.createEmpty()
  );

  useEffect(() => {
    let newClassArray = [...wrapperClassName];

    if (muiStyle) {
      if (!newClassArray.includes(muiStyleClass)) newClassArray.push(muiStyleClass);
    } else newClassArray = newClassArray.filter(item => item !== muiStyleClass);

    if (error) {
      if (!newClassArray.includes(errorClass)) newClassArray.push(errorClass);
    } else newClassArray = newClassArray.filter(item => item !== errorClass);

    setWrapperClassName(newClassArray);
  }, [muiStyle, error]);

  const handleFileUpload = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = async () => {
        const imageUrl = await onFileUpload(reader.result);
        const result = { data: { link: imageUrl } };
        resolve(result);
      };
      reader.onerror = async () => {
        const imageUrl = await onFileUpload(reader.result);
        const err = { data: { link: imageUrl } };
        reject(err);
      };
    });

  const handleEditorStateChange = editorState => {
    if (onChange) onChange(convertToRaw(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  const handleOnFocus = () => {
    if (!wrapperClassName.includes(focusClass))
      setWrapperClassName([...wrapperClassName, focusClass]);
  };

  const handleOnBlur = () => {
    setWrapperClassName(wrapperClassName.filter(item => item !== focusClass));
  };

  const options = [
    'inline',
    'blockType',
    'fontSize',
    'list',
    'textAlign',
    'colorPicker',
    'remove',
    'history',
  ];
  if (showAddImageBtn) options.push('image');
  if (showAddUrlBtn) options.push('link');

  const toolbarCustomButtons = [];
  if (showColumnsBtn) {
    toolbarCustomButtons.push(
      <Dropdown
        title={useIntl().formatMessage({ id: 'columns', defaultMessage: 'Columns' })}
        options={[1, 2, 3]}
        value={columns}
        handleChange={changeColumns}
        testId="dropdown-btn"
      />
    );
  }

  return (
    <>
      <Editor
        wrapperClassName={wrapperClassName.join(' ')}
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
          blockType: {
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
          },
          link: {
            defaultTargetOption: '_blank',
          },
          image: {
            uploadCallback: handleFileUpload,
            alt: { present: true, mandatory: false },
            previewImage: true,
          },
        }}
        toolbarCustomButtons={toolbarCustomButtons}
        stripPastedStyles={true}
        spellCheck={true}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        data-testid={dataTestId}
      />
      {!!helperText && (
        <p aria-label="html-helper-text" className="helper-text__error">
          {helperText}
        </p>
      )}
    </>
  );
};

HtmlEditor.propTypes = {
  dataTestId: PropTypes.string,
  onFileUpload: PropTypes.func,
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
};

HtmlEditor.defaultProps = {
  initialContent: '',
  columns: 1,
  error: false,
  muiStyle: false,
  showColumnsBtn: true,
  showAddImageBtn: true,
  showAddUrlBtn: true,
};

export default HtmlEditor;
