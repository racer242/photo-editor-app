var currentFrame=0;
var frames=[];
var appInstance=null;

function onEditorAppReadyHandler(app) {

  appInstance=app;

  app.setData(
    {
      editorBounds:{
        width:1140,
        height:700,
      },

      addImagesDefaultSize:{
        width:450,
        height:450,
      },

      addImagesDefaultScale:0.5,

      minScale:0.5,
      maxScale:10,

      minRotation:0,
      maxRotation:360,

      mainImageSrc:"image.png",
      backImageSrc:"back_image.jpg",

      help1ImageSrc:"help1.svg",
      help2ImageSrc:"help2.svg",


      addImagesSrc:[""],

      resultImagesSrc:[""],

      addImagesTransform:[
        ["1","0","0","1","340","169"],
        // ["0.5","0","0","0.5","115","-55"],
      ],

      editable:true,
      mimeType:"image/png",
      // mimeType:"image/jpeg",
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
}

function onEditorAppImagesHandler(app,images) {
  console.log("onEditorAppImagesHandler");

  var data=app.getData();

  console.log(images,data);

  var xhr = new XMLHttpRequest();

  var url = "save_image.php";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log("Response:",json);
          var publishUrl=escape(window.location.href+"/"+json.url);
          window.open("https://www.facebook.com/sharer/sharer.php?u="+publishUrl,"_blank")
      }
  };
  var data = JSON.stringify(
    {
      image:images[0],
      x:340,
      y:169,
      width:450,
      height:450,
      scale:1,
    }
  );
  xhr.send(data);

  // const image = document.createElement('img')
  // image.src=images[0];
  // image.style.transform="scale(0.5)"
  // document.querySelector('#editorWidget').appendChild(image)

}
