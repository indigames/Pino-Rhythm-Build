window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight; 
    // canvas
    var unityCanvas = document.getElementById("unity-canvas");
    unityCanvas.style.width = newWidth  + "px";
    unityCanvas.style.height = newHeight  + "px";

    var canvasOffset = document.getElementById("canvas-offset");
    canvasOffset.style.width = newWidth  + "px";
    canvasOffset.style.height = newHeight  + "px";

    var canvasLayer = document.getElementById("canvas-layer");
    canvasLayer.style.width = newWidth  + "px";
    canvasLayer.style.height = newHeight  + "px";

    // background
    var backgroundImage = document.getElementById("background-image");
    backgroundImage.style.width = newWidth + "px";
    backgroundImage.style.height = newHeight  + "px";

    var backgroundOfset = document.getElementById("bg-offset");
    backgroundOfset.style.width = newWidth  + "px";
    backgroundOfset.style.height = newHeight  + "px";

    var backgroundLayer = document.getElementById("bg-layer");
    backgroundLayer.style.width = newWidth  + "px";
    backgroundLayer.style.height = newHeight  + "px";

    console.log("onChangeSize" + newWidth + "x" + newHeight);
});
