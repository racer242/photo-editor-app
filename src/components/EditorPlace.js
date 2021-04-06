import React, { Component } from 'react';
import Editor from './Editor.js'
import Controls from './Controls.js'

import {
  saveImages,
  setStoreData,
  clearHelp
 } from '../actions/appActions';

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
    this.publishFbButton_clickHandler=this.publishFbButton_clickHandler.bind(this);
    this.publishVkButton_clickHandler=this.publishVkButton_clickHandler.bind(this);
    this.publishSaveButton_clickHandler=this.publishSaveButton_clickHandler.bind(this);

    this.readyButton_clickHandler=this.readyButton_clickHandler.bind(this);
    this.viewButton_clickHandler=this.viewButton_clickHandler.bind(this);

    this.mouseDownHandler=this.mouseDownHandler.bind(this);

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

  viewButton_clickHandler(event) {
    this.store.dispatch(
      setStoreData({editable:!this.state.editable})
    );
  }

  readyButton_clickHandler(event) {
    this.publish("ready")
  }

  publish(target) {
    this.store.dispatch(
      setStoreData({publishable:false})
    );
    setTimeout(()=>
      {
        this.store.dispatch(
          setStoreData({publishable:true})
        );
      },
      this.state.republishInterval
    )
    this.store.dispatch(
      saveImages(target)
    );
  }

  publishFbButton_clickHandler(event) {
    this.publish("fb")
  }

  publishVkButton_clickHandler(event) {
    this.publish("vk")
  }

  publishSaveButton_clickHandler(event) {
    this.publish("save")
  }

  mouseDownHandler() {
    this.store.dispatch(
      clearHelp()
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
        <img
          id="BackImage"
          key="BackImage"
          src={this.state.backImageSrc}
        />
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


    let imageSrc = (this.state.addImagesSrc)?this.state.addImagesSrc[0]:null;
    let addImageTransform = (this.state.addImagesTransform)?this.state.addImagesTransform[0]:null;
    let imageTransform = (this.state.imagesTransform)?this.state.imagesTransform[0]:null;

    if ((imageSrc)&&(imageSrc!=="")&&(addImageTransform)&&(imageTransform)) {

      children.push(
        <div
          id="buttonContainer"
          key="bditorContainer"
          style={{
            width:(this.state.editorBounds)?this.state.editorBounds.width:0,
            height:(this.state.editorBounds)?this.state.editorBounds.height:0,
            transform:`scale(${this.state.editorScale}) translateX(${this.state.editorX}px) translateY(${this.state.editorY}px)`
          }}
        >
          <div
            id="viewButton"
            key="viewButton"
            className="viewButton"
            onClick={this.viewButton_clickHandler}
            >{this.state.editable?"Посмотреть":"Изменить"}
          </div>
          <div
            id="readyButton"
            key="readyButton"
            className={(this.state.publishable)?"active":"inactive"}
            style={{
              display:(!this.state.editable)?"block":"none",
            }}
            onClick={this.readyButton_clickHandler}
            >ГОТОВО
          </div>
          <div
            id="publishButtons"
            key="publishButtons"
            className="publishButtons"
            style={{
              display:(!this.state.editable)?"block":"none",
            }}
          >
            <div
              id="fbButton"
              key="fbButton"
              className={"publishButton"+((this.state.publishable)?" active":" inactive")}
              onClick={this.publishFbButton_clickHandler}
              ><img src={this.state.fbIconSrc} width="60" height="60"/>
            </div>
            <div
              id="vkButton"
              key="vkButton"
              className={"publishButton"+((this.state.publishable)?" active":" inactive")}
              onClick={this.publishVkButton_clickHandler}
              ><img src={this.state.vkIconSrc} width="60" height="60"/>
            </div>
            <div
              id="saveButton"
              key="saveButton"
              className={"publishButton"+((this.state.publishable)?" active":" inactive")}
              onClick={this.publishSaveButton_clickHandler}
              ><img src={this.state.saveIconSrc} width="60" height="60"/>
            </div>
          </div>
        </div>
      );
    }

    return React.createElement(
      'div',
      { id:'EditorPlace',
        style:this.props.style,
        ref:this.ref,
        onMouseDown:this.mouseDownHandler,
      },
      children
      );
  }
}

export default EditorPlace;
