(function(window){
    var helloSpeaker ={};
	var speakWord = "Hello";

function speak(name) {
  console.log(speakWord + helloSpeaker + name);
}

 window.helloSpeaker = helloSpeaker;

})(window);