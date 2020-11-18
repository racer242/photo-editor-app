import React, { Component } from 'react';
import Editor from './Editor.js'
import Controls from './Controls.js'

import { saveImages } from '../actions/appActions';

class EditorPlace extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.ref=React.createRef()
    this.containerRef=React.createRef()
    this.editorRef=React.createRef()

    this.state={
      editorScale:.15,
      editorX:0,
      editorY:0,
    }

    this.continueButton_clickHandler=this.continueButton_clickHandler.bind(this);
  }

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateBounds(this.ref.current.clientWidth,this.ref.current.clientHeight);
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState({
        ...this.state,
        ...state,
      });
    }
  }

  updateBounds(width,height) {
    if ((this.lastWidth!==width)||(this.lastHeight!==height)) {
      if (this.state.editorBounds) {
        this.lastWidth=width;
        this.lastHeight=height;
        let bounds=this.state.editorBounds;
        let editorScale=Math.min(width/bounds.width,height/bounds.height);
        let editorX=(width-bounds.width*editorScale)/2/editorScale;
        let editorY=(height-bounds.height*editorScale)/2/editorScale;
        this.setState({
          ...this.state,
          editorScale,
          editorX,
          editorY,
        })
      }
    }
  }

  continueButton_clickHandler(event) {
    this.store.dispatch(
      saveImages()
    );
  }

  render() {

    let children = [];
    children.push(this.props.children);

    let loadedImageCount=0
    if (this.state.addImagesSrc) {
      for (let i = 0; i < this.state.addImagesSrc.length; i++) {
        if ((this.state.addImagesSrc[i])&&(this.state.addImagesSrc[i]!="")) {
          loadedImageCount++;
        }
      }
    }

    children.push(
      <div
        id="EditorContainer"
        key="EditorContainer"
        ref={this.containerRef}
        style={{
          width:(this.state.editorBounds)?this.state.editorBounds.width:0,
          height:(this.state.editorBounds)?this.state.editorBounds.height:0,
          transform:`scale(${this.state.editorScale}) translateX(${this.state.editorX}px) translateY(${this.state.editorY}px)`
        }}
      >
        <Editor
          id="Editor"
          key="Editor"
          scale={this.state.editorScale}
          store={this.props.store}
          ref={this.editorRef}
          style={{
            width:(this.state.editorBounds)?this.state.editorBounds.width:0,
            height:(this.state.editorBounds)?this.state.editorBounds.height:0,
          }}
        />
        <img
          id="MainImage"
          key="MainImage"
          src={this.state.mainImageSrc}
          style={{
            opacity:(this.state.editable)?0.90:1,
          }}
        />
        <Controls
          id="Controls"
          key="Controls"
          scale={this.state.editorScale}
          store={this.props.store}
          ref={this.editorRef}
          style={{
            display:(this.state.editable)?"block":"none",
            width:(this.state.editorBounds)?this.state.editorBounds.width:0,
            height:(this.state.editorBounds)?this.state.editorBounds.height:0,
          }}
        />

      </div>
    );

    return React.createElement(
      'div',
      { id:'EditorPlace',
        style:this.props.style,
        ref:this.ref,
      },
      children
      );
  }
}

export default EditorPlace;