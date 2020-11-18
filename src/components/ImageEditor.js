import React, { Component } from 'react';
import Moveable from "react-moveable";

import {
  updateImage,
} from '../actions/appActions';

class ImageEditor extends Component {

  constructor(props) {
    super(props);

    this.state={}
    this.store = this.props.store;

    this.targetRef=React.createRef();
    this.moveableRef=React.createRef();
    this.containerRef=React.createRef();

    this.state={
      imageTransform:[],
    }

    this.movable_transformHandler=this.movable_transformHandler.bind(this);
    this.movable_transformEndHandler=this.movable_transformEndHandler.bind(this);
    this.loadButton_clickHandler=this.loadButton_clickHandler.bind(this);
  }


  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
    this.onStoreChange();
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState(state);
    }
  }

  movable_transformHandler(params) {
    if (params.transform) {
      params.target.style.transform=params.transform;
    }
    let index=Number(params.target.id.substr(3));
  }

  movable_transformEndHandler(params) {
    let index=Number(params.target.id.substr(3));
    let transform=(/\((.+),\s*(.+),\s*(.+),\s*(.+),\s*(.+),\s*(.+)\)/g).exec(window.getComputedStyle(params.target,null).transform);
    let matrix=[1,0,0,1,0,0];
    if (transform) {
      transform.splice(0,1);
      matrix=[]
      for (let i = 0; i < transform.length; i++) {
        matrix.push(transform[i])
      }
    }
    //
    // this.store.dispatch(
    //   updateImage(index,matrix)
    // )
  }

  loadButton_clickHandler(event) {
    let index=Number(event.target.id.substr(3));

    // let reader  = new FileReader();
    //
    // reader.onloadend = function () {
    //   preview.src = reader.result;
    // }
    //
    // if (file) {
    //   reader.readAsDataURL(file);
    // } else {
    //   preview.src = "";
    // }

  }


  render() {

    let children = [];
    children.push(this.props.children);

    if (this.state.addImagesSrc) {

      let index = this.props.index
      let imageSrc = this.state.addImagesSrc[index];
      let imageTransform = this.state.imagesTransform[index];

      if ((imageSrc)&&(imageSrc!=="")) {

        if (imageTransform) {

          children.push(
            <img
              id={"img"+index}
              key={"img"+index}
              src={imageSrc}
              className="editorImage"
              ref={this.targetRef}
              style={{
                transform:`matrix(${imageTransform})`,
                width:this.state.addImagesDefaultSize.width,
                height:this.state.addImagesDefaultSize.height,
              }}
              onLoad={this.movable_transformEndHandler}
              onMouseDown={this.movable_transformEndHandler}
            />
          );

          children.push(
            <Moveable
              key={"Moveable"+index}
              ref={this.moveableRef}
              target={this.targetRef.current}
              pinchThreshold={20}
              container={this.containerRef.current}
              draggable={true}
              scalable={true}
              resizable={false}
              warpable={false}
              rotatable={true}
              pinchable={false}
              keepRatio={true}
              origin={false}
              throttleDrag={1.5}
              throttleRotate={0.2}
              throttleResize={1}
              throttleScale={0.01}
              onDrag={this.movable_transformHandler}
              onResize={this.movable_transformHandler}
              onScale={this.movable_transformHandler}
              onWarp={this.movable_transformHandler}
              onRotate={this.movable_transformHandler}
              onPinch={this.movable_transformHandler}
              onDragEnd={this.movable_transformEndHandler}
              onScaleEnd={this.movable_transformEndHandler}
              onResizeEnd={this.movable_transformEndHandler}
              onWarpEnd={this.movable_transformEndHandler}
              onRotateEnd={this.movable_transformEndHandler}
              onPinchEnd={this.movable_transformEndHandler}
            />
          )
        }

      } else {

        children.push(
          <div
            id={"lBt"+index}
            key={"lBt"+index}
            className="loadButton"
            ref={this.targetRefs[index]}
            style={{
              width:this.state.addImagesDefaultSize.width,
              height:this.state.addImagesDefaultSize.height,
            }}
            onClick={this.loadButton_clickHandler}
          />
        )
      }
    }






    return React.createElement(
      'div',
      { id:'ImageEditor',
        style:this.props.style,
        ref:this.containerRef,
      },
      children
      );
  }
}

export default ImageEditor;
