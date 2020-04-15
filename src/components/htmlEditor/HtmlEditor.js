/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import {
  AtomicBlockUtils, Editor, EditorState, RichUtils, convertFromHTML, ContentState,
} from 'draft-js';
import ColorPicker, { colorPickerPlugin } from 'draft-js-color-picker';
import { stateToHTML } from 'draft-js-export-html';
import Loading from '../loading/Loading';
import Button from '../button/Button';
import BlockStyleControls from './draft/BlockStyleControls';
import InlineStyleControls from './draft/InlineStyleControls';
import { mediaBlockRenderer } from './entities/mediaBlockRenderer';
import Icon from '../icon/Icon';

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

const presetColors = [
  '#000000',
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#ff5722',
  '#795548',
  '#50646d',
];

class HtmlEditor extends Component {
  constructor(props) {
    super(props);
    const { html } = this.props;

    const blocksFromHTML = convertFromHTML(html);
    const content = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );

    this.state = {
      editorState: html ? EditorState.createWithContent(content) : EditorState.createEmpty(),
      isLoading: false,
      showModal: false,
    };

    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    this.saveContent = this.saveContent.bind(this);

    this.getEditorState = () => this.state.editorState;

    this.picker = colorPickerPlugin(this.onChange, this.getEditorState);
    this.onAddImage = this.onAddImage.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { imageUrl } = this.props;
    if (prevProps.imageUrl !== imageUrl) {
      if (imageUrl) {
        this.onAddImage(imageUrl);
      }
    }
  }

  onChangeInput(e) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = () => {
      this.toggleModal();
      this.props.fileUpload(reader.result);
    };
  }

  getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(
      editorState,
      command,
    );
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  onAddImage = (url) => {
    const { editorState } = this.state;
    const urlValue = url;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: urlValue },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
      'create-entity',
    );
    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' ',
      ),
    });
  };

  toggleModal = () => {
    const { showModal } = this.state;
    return this.setState({
      showModal: !showModal,
    });
  };

  saveContent() {
    const { editorState } = this.state;
    const { submitTextHtml } = this.props;
    const inlineStyles = this.picker.exporter(editorState);
    const content = stateToHTML(editorState.getCurrentContent(), { inlineStyles });
    submitTextHtml(content);
    this.setState({
      isLoading: true,
    });
  }

  _toggleInlineStyle(inlineStyle) {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(
      editorState,
      inlineStyle,
    ));
  }

  _toggleBlockType(blockType) {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleBlockType(
      editorState,
      blockType,
    ));
  }

  _onTab(e) {
    const { editorState } = this.state;
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, editorState, maxDepth));
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  render() {
    const { editorState, isLoading, showModal } = this.state;
    const {
      columns, changeColumns, cancelTextHtml,
    } = this.props;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="htmlEditor">
        {isLoading && (
          <Loading css="loading-upload-image" />
        )}
        <div className="RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            columns={columns}
            onToggle={this.toggleInlineStyle}
            changeColumns={changeColumns}
          />
          <div className="RichEditor-controls colorPicker">
            <ColorPicker
              toggleColor={(color) => this.picker.addColor(color)}
              presetColors={presetColors}
              color={this.picker.currentColor(editorState) || 'rgba(0,0,0,1)'}
            />
            <button className="inline styleButton" type="button" onClick={this.toggleModal}>
              <Icon iconClass="icon-image" />
            </button>
          </div>
          <div className={className}>
            <Editor
              blockRendererFn={mediaBlockRenderer}
              customStyleFn={this.picker.customStyleFn}
              blockStyleFn={this.getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              onTab={this.onTab}
              ref="editor"
              spellCheck={true}
            />
          </div>
        </div>
        <Row>
          <Col sm={6}>
            <Button
              extraClass="dark"
              onClick={cancelTextHtml}
              text={(
                <FormattedMessage
                  id="homepage.configuration.cancel"
                  defaultMessage="Cancel"
                />
              )}
            />
          </Col>
          <Col sm={6} className="text-right">
            <Button
              extraClass="success-full"
              onClick={this.saveContent}
              text={(
                <FormattedMessage
                  id="homepage.configuration.save"
                  defaultMessage="Save"
                />
              )}
            />
          </Col>
        </Row>
        <Modal show={showModal} onHide={this.toggleModal}>
          <Modal.Body>
            <form>
              <input type="file" onChange={this.onChangeInput} />
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default HtmlEditor;

HtmlEditor.propTypes = {
  html: PropTypes.string.isRequired,
  submitTextHtml: PropTypes.func.isRequired,
  changeColumns: PropTypes.func.isRequired,
  columns: PropTypes.number,
  cancelTextHtml: PropTypes.func.isRequired,
  fileUpload: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
};
