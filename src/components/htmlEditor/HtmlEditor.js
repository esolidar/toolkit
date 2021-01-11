/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML,
} from 'draft-js';
import { Editor } from '@pedroguia/react-draft-wysiwyg';
import { injectIntl } from 'react-intl';
import htmlToDraft from 'html-to-draftjs';
import Dropdown from './Dropdown';
import '@pedroguia/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const errorClass = 'rdw-editor-wrapper-error';
const muiStyleClass = 'rdw-editor-wrapper-mui';
const focusClass = 'rdw-editor-wrapper-focus';

const HtmlEditor = ({
  onFileUpload, initialContent, onChange, columns, changeColumns, intl, error, muiStyle, helperText,
}) => {
  const isContentHtmlString = typeof initialContent === 'string';

  const getInitialRawContent = () => {
    if (isContentHtmlString) {
      const fixedHtml = initialContent.replaceAll('<figure>', '<p>').replaceAll('</figure>', '</p>');
      const numberOfElements = convertFromHTML(fixedHtml).contentBlocks.length;
      const blocksFromHTML = htmlToDraft(fixedHtml);
      const content = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );

      const rawContent = convertToRaw(content);
      if (rawContent.blocks.length > numberOfElements && rawContent.blocks[0].text === '') rawContent.blocks.shift();
      return rawContent;
    }
    return initialContent;
  };

  const [editorState, setEditorState] = useState(
    initialContent
      ? EditorState.createWithContent(convertFromRaw(getInitialRawContent()))
      : EditorState.createEmpty(),
  );

  const [wrapperClassName, setWrapperClassName] = useState([]);

  useEffect(() => {
    if (error) {
      if (!wrapperClassName.includes(errorClass)) setWrapperClassName([...wrapperClassName, errorClass]);
    } else setWrapperClassName(wrapperClassName.filter((item) => item !== errorClass));
  }, [error]);

  useEffect(() => {
    if (muiStyle) {
      if (!wrapperClassName.includes(muiStyleClass)) setWrapperClassName([...wrapperClassName, muiStyleClass]);
    } else setWrapperClassName(wrapperClassName.filter((item) => item !== muiStyleClass));
  }, [muiStyle]);

  const handleFileUpload = (file) => new Promise(
    (resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = async () => {
        const imageUrl = await onFileUpload(reader.result);
        const result = { data: { link: imageUrl } };
        resolve(result);
      };
      reader.onerror = async () => {
        const imageUrl = await onFileUpload(reader.result);
        const error = { data: { link: imageUrl } };
        reject(error);
      };
    },
  );

  const handleEditorStateChange = (editorState) => {
    if (onChange) onChange(convertToRaw(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  return (
    <>
      <Editor
        wrapperClassName={wrapperClassName.join(' ')}
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        localization={{
          locale: 'pt',
          translations: {
            'components.controls.link.linkTitle': 'Texto',
            'components.controls.link.linkTarget': 'Endereço URL',
            'components.controls.link.linkTargetOption': 'Abrir novo separador',
            'components.controls.link.link': 'Adicionar ligação',
            'components.controls.link.unlink': 'Remover ligação',
          },
        }}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'image', 'remove', 'history'],
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
        toolbarCustomButtons={[<Dropdown title={intl.formatMessage({ id: 'columns', defaultMessage: 'Columns' })} options={[1, 2, 3]} value={columns} handleChange={changeColumns} />]}
        stripPastedStyles={true}
        spellCheck={true}
        onFocus={() => {
          if (!wrapperClassName.includes(focusClass)) setWrapperClassName([...wrapperClassName, focusClass]);
        }}
        onBlur={() => setWrapperClassName(wrapperClassName.filter((item) => item !== focusClass))}
      />
      {!!helperText && (<p className="helper-text__error">{helperText}</p>)}
    </>
  );
};

HtmlEditor.propTypes = {
  onFileUpload: PropTypes.func,
  initialContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  columns: PropTypes.number,
  changeColumns: PropTypes.func,
  error: PropTypes.bool,
  muiStyle: PropTypes.bool,
  helperText: PropTypes.string,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

HtmlEditor.defaultProps = {
  initialContent: '',
  columns: 1,
  error: false,
  muiStyle: false,
};

export default injectIntl(HtmlEditor);
