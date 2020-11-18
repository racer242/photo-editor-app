var currentFrame=0;
var frames=[];
var appInstance=null;

function onEditorAppReadyHandler(app) {

  appInstance=app;

  app.setData(
    {
      editorBounds:{
        width:1200,
        height:1200,
      },

      addImagesDefaultSize:{
        width:500,
        height:500,
      },

      addImagesDefaultScale:0.5,

      minScale:1,
      maxScale:20,

      minRotation:0,
      maxRotation:360,

      mainImageSrc:"holes.png",

      addImagesSrc:["","",""],

      resultImagesSrc:["","",""],

      addImagesTransform:[
        ["0.5","0","0","0.5","118.25","71"],
        ["0.5","0","0","0.5","276.5","461"],
        ["0.5","0","0","0.5","643.25","202.25"],
      ],

      editable:true,
      // mimeType:"image/png",
      mimeType:"image/jpeg",
    }
  );

}

function onEditorAppImageHandler(app) {
  var data=app.getData()
  var loadedImageCount=0
  for (var i = 0; i < data.addImagesSrc.length; i++) {
    if ((data.addImagesSrc[i])&&(data.addImagesSrc[i]!="")) {
      loadedImageCount++;
    }
  }
  console.log("onEditorAppImageHandler Loaded:",loadedImageCount);

  // (function (app) {
  //   setTimeout(
  //     function () {app.setData({editable:false})},
  //     100
  //   )
  // })(app)
}

function onEditorAppImagesHandler(app,images) {
  console.log("onEditorAppImagesHandler");
  console.log(images);

  (function (app) {
    setTimeout(
      function () {app.setData({editable:true})},
      5000
    )
  })(app)

}


function onContinueButtonClick(event) {
  console.log("onContinueButtonClick");
  appInstance.saveImages();
  var data=appInstance.getData();
  console.log(data.resultImagesSrc);

  appInstance.setData({editable:false})

}
