Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
  });

  camera = document.getElementById("camera");

  Webcam.attach('#camera');

  console.log("ml5 version", ml5.version);

  function take_snapshot()
   {     
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id = "captured_img" src = "'+data_uri+'"/>';
    });
    
  }
 
  var imageClassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/39A7A59lt/',modelLoaded);
  function modelLoaded(){
    console.log('model Loaded');
  }
  function check(){
    img = document.getElementById('captured_img');
    imageClassifier.classify(img, gotResult);
  }
 