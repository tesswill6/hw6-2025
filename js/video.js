var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('auto play is set to '+ video.autoplay);
	video.loop=false;
	console.log('loop is set to '+ video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = slider.value / 100;
	output.innerHTML = slider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	console.log('mute is set to '+ video.muted);
	if (video.muted) {
		document.querySelector("#mute").textContent = "Unmute";
	} else {
		document.querySelector("#mute").textContent = "Mute";
	}
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.1;
	console.log('speed is set to '+ video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.1;
	console.log('speed is set to '+ video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.pause();
        video.currentTime = 0; 
      }
      else {
         video.currentTime += 10;
      }
	console.log('current time is set to '+ video.currentTime);
});

var slider = document.getElementById("slider");
var output = document.getElementById("volume");
output.innerHTML = slider.value + "%";
slider.oninput = function() {
  output.innerHTML = this.value + "%";
}
slider.addEventListener("input", function() {
	console.log('current volume is set to '+ video.volume);
	video.volume = slider.value / 100;
	console.log('current volume is set to '+ video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log('video is set to vintage');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log('video is set to original');
});