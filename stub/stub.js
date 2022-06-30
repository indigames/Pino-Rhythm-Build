var parentNode = document.getElementById("bg-offset");

if (true) { //imgに背景画像を入れるテスト//
	var bg = document.createElement("img");
	bg.id = "background-image";
	parentNode.appendChild(bg);
	bg.src = "./stub/box.jpg";

	bg.onload = function () {
		var imgWidth = bg.width;
		var imgHeight = bg.height;
		var imgRatio = imgHeight / imgWidth;

		if (screenRatio < imgRatio) {
			//imgのほうが縦長//
			bg.width = window.screenWidth;
			bg.height = window.screenHeight;
			var y = -(bg.height - screenHeight) / 2;
			parentNode.style.position = "absolute";
			parentNode.style.top = y + "px";
		} else {
			bg.height = window.screenHeight;
			bg.width = window.screenWidth;
			var x = -(bg.width - screenWidth) / 2;
			parentNode.style.position = "absolute";
			parentNode.style.left = x + "px";
		}
		bg.style.objectFit = "cover";
	};
} else { //カメラのプレビューを使うテスト//
	var video = document.createElement("video");
	parentNode.appendChild(video);
	video.width = screenWidth;
	video.height = screenHeight;

	var constraints = {
		audio: false,
		video: {
			width: screenWidth,
			height: screenHeight,
			facingMode: {
				exact: "environment"
			}
		}
	};

	navigator.mediaDevices.getUserMedia(constraints).then(
		(stream) => {
			video.srcObject = stream;
			video.onloadedmetadata = (e) => {
				video.play();
			};
		}
	).catch(
		(err) => {
			console.log(err.name + ": " + err.message);
		}
	);
}
