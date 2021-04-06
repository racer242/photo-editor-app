/*! For license information please see main.90dfed8b.chunk.js.LICENSE.txt */
(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(t,e,a){t.exports=a(35)},25:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),s=a(8),o=a.n(s),r=(a(25),a(1)),c=a(4),h=a(5),d=a(2),u=a(7),l=a(6),m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CLEAR_HELP":var a=t.showHelp;return"help2"==t.currentHelp&&(a=!1),Object(r.a)(Object(r.a)({},t),{},{currentHelp:"",showHelp:a});case"USE_IMAGE":var i=t.addImagesSrc.concat();i[e.index]=e.src;var n=t.imagesTransform.concat();return n[e.index].s=2,Object(r.a)(Object(r.a)({},t),{},{addImagesSrc:i,imagesTransform:n,imageChanged:!0,currentHelp:"help2"});case"ROTATE_IMAGE":var s=t.imagesTransform.concat();return s[e.index].r=e.rotation,Object(r.a)(Object(r.a)({},t),{},{imagesTransform:s});case"SCALE_IMAGE":var o=t.imagesTransform.concat();return o[e.index].s=e.scale,Object(r.a)(Object(r.a)({},t),{},{imagesTransform:o});case"CLEAR_IMAGE":var c=t.addImagesSrc.concat();return c[e.index]=null,Object(r.a)(Object(r.a)({},t),{},{addImagesSrc:c,imageChanged:!0});case"SAVE_IMAGES":return Object(r.a)(Object(r.a)({},t),{},{saveImages:!0,target:e.target});case"IMAGES_SAVED":return Object(r.a)(Object(r.a)({},t),{},{resultImagesSrc:e.images,saveImages:!1,imagesSaved:!0});case"APP_INIT":return Object(r.a)(Object(r.a)({},t),e.data);case"SET_STORE_DATA":return Object(r.a)(Object(r.a)(Object(r.a)({},t),e.data),{},{loaded:!0});case"CLEAR_ACTION":return Object(r.a)(Object(r.a)({},t),{},{action:null,imageChanged:!1,imagesSaved:!1});default:return t}},g=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return a.extraAction&&(e=t(e,a.extraAction)),e=m(e,a)},p=a(19),v=a(10);function b(t,e){return new Promise((function(a,i){var n,s=new Image;s.onload=function(){return a(s)},s.onerror=i,!1===(null!==(n=t)&&!!n.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&e&&(s.crossOrigin=e),s.src=t}))}var f=function(t){var e=!1;return{promise:new Promise((function(a,i){t.then((function(t){return e?i({isCanceled:!0}):a(t)}),(function(t){return i(e?{isCanceled:!0}:t)}))})),cancel:function(){e=!0}}},y=!("undefined"===typeof window||"undefined"===typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),w="undefined"!==typeof File,S={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},k=y?S.touch:S.desktop,I="undefined"!==typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,O={x:.5,y:.5},E=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).state={drag:!1,my:null,mx:null,image:O},i.handleImageReady=function(t){var e=i.getInitialSize(t.width,t.height);e.resource=t,e.x=.5,e.y=.5,i.setState({drag:!1,image:e},i.props.onImageReady),i.props.onLoadSuccess(e)},i.clearImage=function(){i.canvas.getContext("2d").clearRect(0,0,i.canvas.width,i.canvas.height),i.setState({image:O})},i.handleMouseDown=function(t){(t=t||window.event).preventDefault(),i.setState({drag:!0,mx:null,my:null})},i.handleMouseUp=function(){i.state.drag&&(i.setState({drag:!1}),i.props.onMouseUp())},i.getElementScale=function(t,e){var a=1;if(t.style.transform){var n=/matrix\(\s*(-*\d*\.*\d*),\s*-*\d*\.*\d*,\s*-*\d*\.*\d*,\s*(-*\d*\.*\d*),\s*-*\d*\.*\d*,\s*-*\d*\.*\d*\)/gm,s=n.exec(t.style.transform);s||(s=(n=/scale\(\s*(-*\d*\.*\d*)\)/gm).exec(t.style.transform)),a=s?Number(s[1]):1}return e*=a,t.parentElement&&(e=i.getElementScale(t.parentElement,e)),e},i.handleMouseMove=function(t){if(t=t||window.event,!1!==i.state.drag){t.preventDefault();var e=1/i.getElementScale(i.props.containerref.current,1),a=(t.targetTouches?t.targetTouches[0].pageX:t.clientX)*e,n=(t.targetTouches?t.targetTouches[0].pageY:t.clientY)*e,s={mx:a,my:n},o=i.props.rotate;if(o=(o%=360)<0?o+360:o,i.state.mx&&i.state.my){var c=i.state.mx-a,h=i.state.my-n,d=i.state.image.width*i.props.scale,u=i.state.image.height*i.props.scale,l=i.getCroppingRect(),m=l.x,g=l.y;m*=d,g*=u;var p=function(t){return t*(Math.PI/180)},v=Math.cos(p(o)),b=Math.sin(p(o)),f=g+-c*b+h*v,y={x:(m+c*v+h*b)/d+1/i.props.scale*i.getXScale()/2,y:f/u+1/i.props.scale*i.getYScale()/2};i.props.onPositionChange(y),s.image=Object(r.a)(Object(r.a)({},i.state.image),y)}i.setState(s),i.props.onMouseMove(t)}},i.setCanvas=function(t){i.canvas=t},i.canvas=null,i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(I=1);var t=this.canvas.getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(t),document){var e=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(a){t=!1}return t}()&&{passive:!1},a=k.native;document.addEventListener(a.move,this.handleMouseMove,e),document.addEventListener(a.up,this.handleMouseUp,e),y&&(document.addEventListener(a.mouseMove,this.handleMouseMove,e),document.addEventListener(a.mouseUp,this.handleMouseUp,e))}}},{key:"componentDidUpdate",value:function(t,e){this.props.image&&this.props.image!==t.image||this.props.width!==t.width||this.props.height!==t.height?this.loadImage(this.props.image):this.props.image||e.image===O||this.clearImage();var a=this.canvas.getContext("2d");a.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(a),this.paintImage(a,this.state.image,this.props.border),t.image===this.props.image&&t.width===this.props.width&&t.height===this.props.height&&t.position===this.props.position&&t.scale===this.props.scale&&t.rotate===this.props.rotate&&e.my===this.state.my&&e.mx===this.state.mx&&e.image.x===this.state.image.x&&e.image.y===this.state.image.y||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){if(document){var t=k.native;document.removeEventListener(t.move,this.handleMouseMove,!1),document.removeEventListener(t.up,this.handleMouseUp,!1),y&&(document.removeEventListener(t.mouseMove,this.handleMouseMove,!1),document.removeEventListener(t.mouseUp,this.handleMouseUp,!1))}}},{key:"isVertical",value:function(){return this.props.rotate%180!==0}},{key:"getBorders",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var t=this.props,e=t.width,a=t.height,i=t.rotate,n=t.border,s={},o=this.getBorders(n),r=Object(v.a)(o,2),c=r[0],h=r[1],d=e,u=a;return this.isVertical()?(s.width=u,s.height=d):(s.width=d,s.height=u),s.width+=2*c,s.height+=2*h,{canvas:s,rotate:i,width:e,height:a,border:n}}},{key:"getImage",value:function(){var t=this.getCroppingRect(),e=this.state.image;t.x*=e.resource.width,t.y*=e.resource.height,t.width*=e.resource.width,t.height*=e.resource.height;var a=document.createElement("canvas");this.isVertical()?(a.width=t.height,a.height=t.width):(a.width=t.width,a.height=t.height);var i=a.getContext("2d");return i.translate(a.width/2,a.height/2),i.rotate(this.props.rotate*Math.PI/180),i.translate(-a.width/2,-a.height/2),this.isVertical()&&i.translate((a.width-a.height)/2,(a.height-a.width)/2),i.drawImage(e.resource,-t.x,-t.y),a}},{key:"getImageScaledToCanvas",value:function(){var t=this.getDimensions(),e=t.width,a=t.height,i=document.createElement("canvas");return this.isVertical()?(i.width=a,i.height=e):(i.width=e,i.height=a),this.paintImage(i.getContext("2d"),this.state.image,0,1),i}},{key:"getXScale",value:function(){var t=this.props.width/this.props.height,e=this.state.image.width/this.state.image.height;return Math.min(1,t/e)}},{key:"getYScale",value:function(){var t=this.props.height/this.props.width,e=this.state.image.height/this.state.image.width;return Math.min(1,t/e)}},{key:"getCroppingRect",value:function(){var t=this.props.position||{x:this.state.image.x,y:this.state.image.y},e=1/this.props.scale*this.getXScale(),a=1/this.props.scale*this.getYScale(),i={x:t.x-e/2,y:t.y-a/2,width:e,height:a},n=0,s=1-i.width,o=0,c=1-i.height;return(this.props.disableBoundaryChecks||e>1||a>1)&&(n=-i.width,s=1,o=-i.height,c=1),Object(r.a)(Object(r.a)({},i),{},{x:Math.max(n,Math.min(i.x,s)),y:Math.max(o,Math.min(i.y,c))})}},{key:"loadImage",value:function(t){var e;w&&t instanceof File?this.loadingImage=f((e=t,new Promise((function(t,a){var i=new FileReader;i.onload=function(e){try{var i=b(e.target.result);t(i)}catch(e){a(e)}},i.readAsDataURL(e)})))).promise.then(this.handleImageReady).catch(this.props.onLoadFailure):"string"===typeof t&&(this.loadingImage=f(b(t,this.props.crossOrigin)).promise.then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(t,e){var a,i,n=this.getDimensions();return n.height/n.width>e/t?i=t*((a=this.getDimensions().height)/e):a=e*((i=this.getDimensions().width)/t),{height:a,width:i}}},{key:"paintImage",value:function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:I;if(e.resource){var n=this.calculatePosition(e,a);t.save(),t.translate(t.canvas.width/2,t.canvas.height/2),t.rotate(this.props.rotate*Math.PI/180),t.translate(-t.canvas.width/2,-t.canvas.height/2),this.isVertical()&&t.translate((t.canvas.width-t.canvas.height)/2,(t.canvas.height-t.canvas.width)/2),t.scale(i,i),t.globalCompositeOperation="destination-over",t.drawImage(e.resource,n.x,n.y,n.width,n.height),t.restore()}}},{key:"calculatePosition",value:function(t,e){t=t||this.state.image;var a=this.getBorders(e),i=Object(v.a)(a,2),n=i[0],s=i[1],o=this.getCroppingRect(),r=t.width*this.props.scale,c=t.height*this.props.scale,h=-o.x*r,d=-o.y*c;return this.isVertical()?(h+=s,d+=n):(h+=n,d+=s),{x:h,y:d,height:c,width:r}}},{key:"paint",value:function(t){t.save(),t.scale(I,I),t.translate(0,0),t.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var e=this.props.borderRadius,a=this.getDimensions(),i=this.getBorders(a.border),n=Object(v.a)(i,2),s=n[0],o=n[1],r=a.canvas.height,c=a.canvas.width;e=Math.max(e,0),e=Math.min(e,c/2-s,r/2-o),t.beginPath(),function(t,e,a,i,n,s){if(0===s)t.rect(e,a,i,n);else{var o=i-s,r=n-s;t.translate(e,a),t.arc(s,s,s,Math.PI,1.5*Math.PI),t.lineTo(o,0),t.arc(o,s,s,1.5*Math.PI,2*Math.PI),t.lineTo(i,r),t.arc(o,r,s,2*Math.PI,.5*Math.PI),t.lineTo(s,n),t.arc(s,r,s,.5*Math.PI,Math.PI),t.translate(-e,-a)}}(t,s,o,c-2*s,r-2*o,e),t.rect(c,0,-c,r),t.fill("evenodd"),t.restore()}},{key:"render",value:function(){var t=this.props,e=(t.scale,t.rotate,t.image,t.border,t.borderRadius,t.width,t.height,t.position,t.color,t.style),a=(t.crossOrigin,t.onLoadFailure,t.onLoadSuccess,t.onImageReady,t.onImageChange,t.onMouseUp,t.onMouseMove,t.onPositionChange,t.disableBoundaryChecks,t.disableHiDPIScaling,Object(p.a)(t,["scale","rotate","image","border","borderRadius","width","height","position","color","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling"])),i=this.getDimensions(),s={width:i.canvas.width,height:i.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},o={width:i.canvas.width*I,height:i.canvas.height*I,style:Object(r.a)(Object(r.a)({},s),e)};return o[k.react.down]=this.handleMouseDown,y&&(o[k.react.mouseDown]=this.handleMouseDown),n.a.createElement("canvas",Object.assign({ref:this.setCanvas},o,a))}}]),a}(n.a.Component);E.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1};var j,M=E,C=function(t){return{type:"SAVE_IMAGES",target:t}},R=function(t){return{type:"SET_STORE_DATA",data:Object(r.a)({},t)}},B=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;Object(c.a)(this,a),(i=e.call(this,t)).state={},i.store=i.props.store,i.targetRefs=[],i.containerRefs=[];for(var s=0;s<1;s++)i.targetRefs.push(n.a.createRef()),i.containerRefs.push(n.a.createRef());return i.containerRef=n.a.createRef(),i.state={},i.loadButton_clickHandler=i.loadButton_clickHandler.bind(Object(d.a)(i)),i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();if(this.setState(t),t.saveImages){for(var e=[],a=0;a<this.targetRefs.length;a++){var i=this.targetRefs[a];i.current?e.push(i.current.getImageScaledToCanvas().toDataURL(this.state.mimeType)):e.push(null)}this.store.dispatch(function(t){return{type:"IMAGES_SAVED",images:t}}(e))}}}},{key:"loadButton_clickHandler",value:function(t){var e=this,a=Number(t.target.id.substr(3)),i=t.target.files[0];if(i){var n=new FileReader;n.onload=(this.store,function(t){e.store.dispatch(function(t,e){return{type:"USE_IMAGE",index:t,src:e}}(a,t.target.result))}),n.readAsDataURL(i)}}},{key:"render",value:function(){var t=[];if(t.push(this.props.children),this.state.addImagesSrc)for(var e=0;e<this.state.addImagesSrc.length;e++){var a=this.state.addImagesSrc[e],i=this.state.addImagesTransform[e],s=this.state.imagesTransform[e];a&&""!==a&&i&&s?t.push(n.a.createElement("div",{key:"cnt"+e,id:"cnt"+e,className:"editorImageContainer",ref:this.containerRefs[e],style:{transform:"matrix(".concat(i,")"),width:this.state.addImagesDefaultSize.width,height:this.state.addImagesDefaultSize.height,pointerEvents:this.state.editable?"all":"none"}},n.a.createElement(M,{ref:this.targetRefs[e],image:a,containerref:this.containerRefs[e],width:this.state.addImagesDefaultSize.width,height:this.state.addImagesDefaultSize.height,border:0,scale:s.s,rotate:s.r}))):t.push(n.a.createElement("div",{id:"lBt"+e,key:"lBt"+e,className:"loadButton",style:{transform:"matrix(".concat(i,")"),width:this.state.addImagesDefaultSize.width,height:this.state.addImagesDefaultSize.height,pointerEvents:this.state.editable?"all":"none"}},n.a.createElement("input",{id:"inp"+e,type:"file",onChange:this.loadButton_clickHandler,className:"loadInput"})))}return n.a.createElement("div",{id:"Editor",style:this.props.style,ref:this.containerRef},t)}}]),a}(i.Component),_=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;Object(c.a)(this,a),(i=e.call(this,t)).state={},i.store=i.props.store,i.containerRefs=[];for(var s=0;s<10;s++)i.containerRefs.push(n.a.createRef());return i.containerRef=n.a.createRef(),i.state={},i.scaleRange_changeHandler=i.scaleRange_changeHandler.bind(Object(d.a)(i)),i.rotateRange_changeHandler=i.rotateRange_changeHandler.bind(Object(d.a)(i)),i.clearButton_clickHandler=i.clearButton_clickHandler.bind(Object(d.a)(i)),i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(t)}}},{key:"scaleRange_changeHandler",value:function(t){var e=Number(t.target.id.substr(3));this.store.dispatch(function(t,e){return{type:"SCALE_IMAGE",index:t,scale:e}}(e,t.target.value))}},{key:"rotateRange_changeHandler",value:function(t){var e=Number(t.target.id.substr(3));this.store.dispatch(function(t,e){return{type:"ROTATE_IMAGE",index:t,rotation:e}}(e,t.target.value))}},{key:"clearButton_clickHandler",value:function(t){var e=Number(t.target.id.substr(3));this.store.dispatch(function(t){return{type:"CLEAR_IMAGE",index:t}}(e,t.target.value))}},{key:"render",value:function(){var t=[];if(t.push(this.props.children),this.state.addImagesSrc){for(var e=0;e<this.state.addImagesSrc.length;e++){var a=this.state.addImagesSrc[e],i=this.state.addImagesTransform[e],s=this.state.imagesTransform[e];a&&""!==a&&i&&s&&t.push(n.a.createElement("div",{key:"ctl"+e,id:"ctl"+e,className:"controlsContainer",ref:this.containerRefs[e],style:{transform:"matrix(".concat(i,")"),width:this.state.addImagesDefaultSize.width,height:this.state.addImagesDefaultSize.height}},n.a.createElement("input",{type:"range",id:"srn"+e,name:"srn"+e,min:this.state.minScale,max:this.state.maxScale,step:"0.01",value:s.s,className:"scaleRange",onChange:this.scaleRange_changeHandler}),n.a.createElement("input",{type:"range",id:"rrn"+e,name:"rrn"+e,min:this.state.minRotation,max:this.state.maxRotation,step:"1",value:s.r,className:"rotateRange",onChange:this.rotateRange_changeHandler}),n.a.createElement("div",{key:"ldb"+e,id:"ldb"+e,className:"clearImageButton",onClick:this.clearButton_clickHandler})))}if(this.state.showHelp)switch(this.state.currentHelp){case"help1":t.push(n.a.createElement("img",{id:"help",key:"help",src:this.state.help1ImageSrc}));break;case"help2":t.push(n.a.createElement("img",{id:"help",key:"help",src:this.state.help2ImageSrc}))}}return n.a.createElement("div",{id:"Controls",style:this.props.style,ref:this.containerRef},t)}}]),a}(i.Component),D=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).store=i.props.store,i.ref=n.a.createRef(),i.containerRef=n.a.createRef(),i.editorRef=n.a.createRef(),i.state={editorScale:.15,editorX:0,editorY:0},i.continueButton_clickHandler=i.continueButton_clickHandler.bind(Object(d.a)(i)),i.publishFbButton_clickHandler=i.publishFbButton_clickHandler.bind(Object(d.a)(i)),i.publishVkButton_clickHandler=i.publishVkButton_clickHandler.bind(Object(d.a)(i)),i.publishSaveButton_clickHandler=i.publishSaveButton_clickHandler.bind(Object(d.a)(i)),i.readyButton_clickHandler=i.readyButton_clickHandler.bind(Object(d.a)(i)),i.viewButton_clickHandler=i.viewButton_clickHandler.bind(Object(d.a)(i)),i.mouseDownHandler=i.mouseDownHandler.bind(Object(d.a)(i)),i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e,a){this.updateBounds(this.ref.current.clientWidth,this.ref.current.clientHeight)}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(Object(r.a)(Object(r.a)({},this.state),t))}}},{key:"updateBounds",value:function(t,e){if((this.lastWidth!==t||this.lastHeight!==e)&&this.state.editorBounds){this.lastWidth=t,this.lastHeight=e;var a=this.state.editorBounds,i=Math.min(t/a.width,e/a.height),n=(t-a.width*i)/2/i,s=(e-a.height*i)/2/i;this.setState(Object(r.a)(Object(r.a)({},this.state),{},{editorScale:i,editorX:n,editorY:s}))}}},{key:"continueButton_clickHandler",value:function(t){this.store.dispatch(C())}},{key:"viewButton_clickHandler",value:function(t){this.store.dispatch(R({editable:!this.state.editable}))}},{key:"readyButton_clickHandler",value:function(t){this.publish("ready")}},{key:"publish",value:function(t){var e=this;this.store.dispatch(R({publishable:!1})),setTimeout((function(){e.store.dispatch(R({publishable:!0}))}),this.state.republishInterval),this.store.dispatch(C(t))}},{key:"publishFbButton_clickHandler",value:function(t){this.publish("fb")}},{key:"publishVkButton_clickHandler",value:function(t){this.publish("vk")}},{key:"publishSaveButton_clickHandler",value:function(t){this.publish("save")}},{key:"mouseDownHandler",value:function(){this.store.dispatch({type:"CLEAR_HELP"})}},{key:"render",value:function(){var t=[];t.push(this.props.children);if(this.state.addImagesSrc)for(var e=0;e<this.state.addImagesSrc.length;e++)this.state.addImagesSrc[e]&&""!=this.state.addImagesSrc[e]&&0;t.push(n.a.createElement("div",{id:"EditorContainer",key:"EditorContainer",ref:this.containerRef,style:{width:this.state.editorBounds?this.state.editorBounds.width:0,height:this.state.editorBounds?this.state.editorBounds.height:0,transform:"scale(".concat(this.state.editorScale,") translateX(").concat(this.state.editorX,"px) translateY(").concat(this.state.editorY,"px)")}},n.a.createElement("img",{id:"BackImage",key:"BackImage",src:this.state.backImageSrc}),n.a.createElement(B,{id:"Editor",key:"Editor",scale:this.state.editorScale,store:this.props.store,ref:this.editorRef,style:{width:this.state.editorBounds?this.state.editorBounds.width:0,height:this.state.editorBounds?this.state.editorBounds.height:0}}),n.a.createElement("img",{id:"MainImage",key:"MainImage",src:this.state.mainImageSrc,style:{opacity:this.state.editable?.9:1}}),n.a.createElement(_,{id:"Controls",key:"Controls",scale:this.state.editorScale,store:this.props.store,ref:this.editorRef,style:{display:this.state.editable?"block":"none",width:this.state.editorBounds?this.state.editorBounds.width:0,height:this.state.editorBounds?this.state.editorBounds.height:0}})));var a=this.state.addImagesSrc?this.state.addImagesSrc[0]:null,i=this.state.addImagesTransform?this.state.addImagesTransform[0]:null,s=this.state.imagesTransform?this.state.imagesTransform[0]:null;return a&&""!==a&&i&&s&&t.push(n.a.createElement("div",{id:"buttonContainer",key:"bditorContainer",style:{width:this.state.editorBounds?this.state.editorBounds.width:0,height:this.state.editorBounds?this.state.editorBounds.height:0,transform:"scale(".concat(this.state.editorScale,") translateX(").concat(this.state.editorX,"px) translateY(").concat(this.state.editorY,"px)")}},n.a.createElement("div",{id:"viewButton",key:"viewButton",className:"viewButton",onClick:this.viewButton_clickHandler},this.state.editable?"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),n.a.createElement("div",{id:"readyButton",key:"readyButton",className:this.state.publishable?"active":"inactive",style:{display:this.state.editable?"none":"block"},onClick:this.readyButton_clickHandler},"\u0413\u041e\u0422\u041e\u0412\u041e"),n.a.createElement("div",{id:"publishButtons",key:"publishButtons",className:"publishButtons",style:{display:this.state.editable?"none":"block"}},n.a.createElement("div",{id:"fbButton",key:"fbButton",className:"publishButton"+(this.state.publishable?" active":" inactive"),onClick:this.publishFbButton_clickHandler},n.a.createElement("img",{src:this.state.fbIconSrc,width:"60",height:"60"})),n.a.createElement("div",{id:"vkButton",key:"vkButton",className:"publishButton"+(this.state.publishable?" active":" inactive"),onClick:this.publishVkButton_clickHandler},n.a.createElement("img",{src:this.state.vkIconSrc,width:"60",height:"60"})),n.a.createElement("div",{id:"saveButton",key:"saveButton",className:"publishButton"+(this.state.publishable?" active":" inactive"),onClick:this.publishSaveButton_clickHandler},n.a.createElement("img",{src:this.state.saveIconSrc,width:"60",height:"60"}))))),n.a.createElement("div",{id:"EditorPlace",style:this.props.style,ref:this.ref,onMouseDown:this.mouseDownHandler},t)}}]),a}(i.Component),H=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).state={},i.store=i.props.store,i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(t)}}},{key:"render",value:function(){var t=[];return t.push(this.props.children),t.push(n.a.createElement(D,{store:this.store,key:"EditorPlace",style:{right:this.state.sideMenu?this.state.sideMenu.width:0,top:this.state.topMenu?this.state.topMenu.height:0}})),n.a.createElement("div",{id:"Container"},t)}}]),a}(i.Component),T=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).store=i.props.store,i.state={isLoading:!1,isLoaded:!1},i.loader=null,i.result=null,i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e){}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();t.reloadData||t.saveStorageData&&this.saveStorageData()}}},{key:"loadStorageData",value:function(){var t=this.localStorageManager.load();this.store.dispatch(function(t){return{type:"SET_STORAGE_DATA",data:t}}(t))}},{key:"saveStorageData",value:function(){this.localStorageManager.save({}),this.store.dispatch({type:"STORAGE_DATA_SAVED",data:{saveStorageData:!1}})}},{key:"render",value:function(){return null}}]),a}(i.Component),x=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).state={},i.store=i.props.store,i.actionMap={},i.appStartDelay=500,i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();t.imageChanged&&(this.props.app.props.onImage(this.props.app),this.store.dispatch({type:"CLEAR_ACTION"})),t.imagesSaved&&(this.props.app.props.onImages(this.props.app,t.resultImagesSrc,t.target),this.store.dispatch({type:"CLEAR_ACTION"})),t.dataForStorageChanged&&this.store.dispatch({type:"SAVE_STORAGE_DATA",data:{saveStorageData:!0,dataForStorageChanged:null}})}}},{key:"stopTimeout",value:function(){this.loadTimeout&&(clearTimeout(this.loadTimeout),this.loadTimeout=null)}},{key:"waitForReload",value:function(){var t=this;this.stopTimeout(),this.loadTimeout=setTimeout((function(){t.store.dispatch({type:"RELOAD_STORE_DATA",data:{dataLoaded:!1,reloadData:!0,loadDataError:!1}})}),this.store.reloadTimeout)}},{key:"render",value:function(){return null}}]),a}(i.Component),A=a(18),L=a(9),P=a(3),U=a(16),N=a.n(U),z=(a(17),j={assetsUrl:".",localStoreName:"appState_261020",isMobile:new N.a(window.navigator.userAgent).mobile(),isLocal:!/^h/.test(document.location.toString()),editorBounds:{width:0,height:0},addImagesDefaultSize:{width:500,height:500},addImagesDefaultScale:.5,mainImageSrc:"",addImagesSrc:[""],addImagesTransform:[null],resultImagesSrc:[""]},Object(P.a)(j,"mainImageSrc",""),Object(P.a)(j,"backImageSrc",""),Object(P.a)(j,"help1ImageSrc",""),Object(P.a)(j,"help2ImageSrc",""),Object(P.a)(j,"currentHelp","help1"),Object(P.a)(j,"showHelp",!0),Object(P.a)(j,"minScale",1),Object(P.a)(j,"maxScale",20),Object(P.a)(j,"minRotation",0),Object(P.a)(j,"maxRotation",360),Object(P.a)(j,"imagesTransform",[{s:1,r:0}]),Object(P.a)(j,"editable",!0),Object(P.a)(j,"publishable",!0),Object(P.a)(j,"republishInterval",5e3),j),V=(a(34),Object(L.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),W=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).state={},i.initHandler=i.initHandler.bind(Object(d.a)(i)),i.resizeHandler=i.resizeHandler.bind(Object(d.a)(i)),i}return Object(h.a)(a,[{key:"updateLayout",value:function(){var t=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,e=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;this.setState(Object(r.a)(Object(r.a)({},this.state),{},{windowWidth:t,windowHeight:e}))}},{key:"initHandler",value:function(t){this.updateLayout()}},{key:"resizeHandler",value:function(t){this.updateLayout()}},{key:"setData",value:function(t){V.dispatch(R(t))}},{key:"getData",value:function(t){return V.getState()}},{key:"saveImages",value:function(){V.dispatch(C())}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"componentDidMount",value:function(){var t;V.dispatch((t=z,{type:"APP_INIT",data:Object(r.a)({},t)})),window.addEventListener("load",this.initHandler),window.addEventListener("resize",this.resizeHandler),this.props.onInit(this)}},{key:"render",value:function(){return n.a.createElement(A.a,{store:V},n.a.createElement(H,{id:"Container",windowWidth:this.state.windowWidth,windowHeight:this.state.windowHeight,store:V},n.a.createElement(T,{store:V}),n.a.createElement(x,{app:this,store:V})))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=document.getElementById("editorWidget");console.log(F.getAttribute("oninit")),o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,{id:"editorApp",onInit:window[F.getAttribute("oninit")],onImage:window[F.getAttribute("onimage")],onImages:window[F.getAttribute("onimages")]})),F),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.90dfed8b.chunk.js.map