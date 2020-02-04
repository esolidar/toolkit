/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import {
  Editor, EditorState, RichUtils, convertFromHTML, ContentState,
} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Loading from '../loading/Loading';
import Button from '../button/Button';
import BlockStyleControls from './draft/BlockStyleControls';
import InlineStyleControls from './draft/InlineStyleControls';

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

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
    };

    // this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    this.saveContent = this.saveContent.bind(this);
  }

  getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
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

  _onTab(e) {
    const { editorState } = this.state;
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleBlockType(
      editorState,
      blockType,
    ));
  }

  _toggleInlineStyle(inlineStyle) {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(
      editorState,
      inlineStyle,
    ));
  }

  saveContent() {
    const { editorState } = this.state;
    const { submitTextHtml } = this.props;
    const content = stateToHTML(editorState.getCurrentContent());
    submitTextHtml(content);
    this.setState({
      isLoading: true,
    });
  }

  render() {
    const { editorState, isLoading } = this.state;
    const { columns, changeColumns, cancelTextHtml } = this.props;

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
      <div>
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
          <div className={className}>
            <Editor
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
};
