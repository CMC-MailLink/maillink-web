import React, { useState } from "react";
import { EditorState, Editor, getDefaultKeyBinding, RichUtils } from "draft-js";
import editor1 from "../images/editor1.png";
import editor3 from "../images/editor3.png";
import Back from "../images/Back.png";
import Quot from "../images/Quot.png";
import UnList from "../images/UnList.png";
import "./MobileEditor.css";

class MobileEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  render() {
    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    return (
      <div className="RichEditor-root">
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
            style={{ lineHeight: 500 }}
          />
        </div>
        {/* <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        /> */}
        <Container
          editorState={editorState}
          onBlockToggle={this.toggleBlockType}
          onInlineToggle={this.toggleInlineStyle}
        ></Container>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    case "textalignleft":
      return "RichEditor-textalignleft";
    case "textaligncenter":
      return "RichEditor-textaligncenter";
    case "textalignright":
      return "RichEditor-textalignright";
    case "header1":
      return "RichEditor-header1";
    case "header2":
      return "RichEditor-header2";
    case "default":
      return "RichEditor-default";
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: "제목1", style: "header-one" },
  { label: "제목2", style: "header-two" },
  { label: "본문", style: "unstyled" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls" style={{ backgroundColor: "pink" }}>
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const Container = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  const [show, setShow] = useState(false);

  const onClickEditor2 = () => {
    setShow(true);
  };
  const onClickBack = () => {
    setShow(false);
  };
  const currentStyle = props.editorState.getCurrentInlineStyle();

  if (!show) {
    return (
      <div
        className="RichEditor-controls"
        style={{
          height: 48,
          backgroundColor: "#F8F8F8",
        }}
      >
        <div
          style={{
            float: "left",
            margin: 0,
            padding: 0,
            position: "relative",
            top: 10.5,
            marginLeft: 23,
            marginRight: 28,
          }}
        >
          <img
            style={{ width: 27, height: 27, verticalAlign: "middle" }}
            className="editor1"
            alt=""
            src={editor1}
          />
        </div>
        <div
          onMouseDown={onClickEditor2}
          style={{
            float: "left",
            position: "relative",
            top: 4.5,
            marginRight: 28,
          }}
        >
          <span
            style={{
              fontFamily: "NotoSansKR-Bold",
              fontSize: 24,
              color: "#828282",
            }}
          >
            가
          </span>
        </div>
        <div
          style={{
            float: "left",
            position: "relative",
            top: 12.5,
          }}
        >
          <StyleButton1
            key="left"
            active={"textalignleft" === blockType}
            label="left"
            onToggle={props.onBlockToggle}
            style="textalignleft"
            buttonStyle={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 14,
            }}
          ></StyleButton1>
          <StyleButton1
            key="center"
            active={"textaligncenter" === blockType}
            label="center"
            onToggle={props.onBlockToggle}
            style="textaligncenter"
            buttonStyle={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 14,
            }}
          ></StyleButton1>
          <StyleButton1
            key="right"
            active={"textalignright" === blockType}
            label="right"
            onToggle={props.onBlockToggle}
            style="textalignright"
            buttonStyle={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 14,
            }}
          ></StyleButton1>
        </div>
      </div>
    );
  } else
    return (
      <div
        className="RichEditor-controls"
        style={{
          height: 48,
          backgroundColor: "#F8F8F8",
        }}
      >
        <div
          onMouseDown={onClickBack}
          style={{
            float: "left",
            margin: 0,
            padding: 0,
            position: "relative",
            top: 14,
            marginLeft: 23,
            marginRight: 28,
          }}
        >
          <img
            style={{ width: 20, height: 20, verticalAlign: "middle" }}
            className="Back"
            alt=""
            src={Back}
          />
        </div>
        <div
          style={{
            float: "left",
            position: "relative",
            top: 14,
            marginRight: 12,
          }}
        >
          <StyleButton1
            key="제목1"
            active={"header1" === blockType}
            label="제목1"
            onToggle={props.onBlockToggle}
            style="header1"
            buttonStyle={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 14,
            }}
          ></StyleButton1>
        </div>
        <div
          style={{
            float: "left",
            position: "relative",
            top: 14,
            marginRight: 12,
          }}
        >
          <StyleButton1
            key="제목2"
            active={"header2" === blockType}
            label="제목2"
            onToggle={props.onBlockToggle}
            style="header2"
            buttonStyle={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 14,
            }}
          ></StyleButton1>
        </div>
        <div
          style={{
            float: "left",
            position: "relative",
            top: 14,
            marginRight: 12,
          }}
        >
          <StyleButton1
            key="본문"
            active={"default" === blockType}
            label="본문"
            onToggle={props.onBlockToggle}
            style="default"
            buttonStyle={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 14,
            }}
          ></StyleButton1>
        </div>
        <div
          style={{
            float: "left",
            position: "relative",
            top: 12.5,
            marginRight: 12,
          }}
        >
          <StyleButton1
            key="가"
            active={currentStyle.has("BOLD")}
            label="가"
            onToggle={props.onInlineToggle}
            style="BOLD"
            buttonStyle={{
              fontFamily: "NotoSansKR-Black",
              fontSize: 16,
            }}
          />
        </div>
        <div
          style={{
            float: "left",
            position: "relative",
            top: 12.5,
            marginRight: 12,
          }}
        >
          <StyleButton1
            key="가"
            active={currentStyle.has("UNDERLINE")}
            label="가"
            onToggle={props.onInlineToggle}
            style="UNDERLINE"
            buttonStyle={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 16,
              textDecoration: "underline",
            }}
          />
        </div>
        <div
          style={{
            float: "left",
            position: "relative",
            top: 11.75,
            marginRight: 12,
          }}
        >
          <span
            style={{
              fontFamily: "NotoSansKR-Medium",
              fontSize: 17,
              color: "#828282",
              textDecoration: "line-through",
            }}
          >
            가
          </span>
        </div>
        <div
          style={{
            float: "left",
            margin: 0,
            padding: 0,
            position: "relative",
            top: 13.5,
            marginLeft: 23,
            marginRight: 28,
          }}
        >
          <img
            style={{ width: 11, height: 11, verticalAlign: "middle" }}
            className="Quot"
            alt=""
            src={Quot}
          />
        </div>
        <div
          style={{
            float: "left",
            margin: 0,
            padding: 0,
            position: "relative",
            top: 14,
            marginLeft: 23,
            marginRight: 28,
          }}
        >
          <img
            style={{ width: 15, height: 13, verticalAlign: "middle" }}
            className="UnList"
            alt=""
            src={UnList}
          />
        </div>
        <input type="file" />
      </div>
    );
};

class StyleButton1 extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span
        className={className}
        onMouseDown={this.onToggle}
        style={this.props.buttonStyle}
      >
        {this.props.label}
      </span>
    );
  }
}
export default MobileEditor;
