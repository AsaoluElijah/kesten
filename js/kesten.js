
  // const form = document.querySelector('.myForm');
  // form.addEventListener('submit', fun);

	var recognition = new webkitSpeechRecognition() ||
	root.mozSpeechRecognition ||
	root.msSpeechRecognition ||
	root.oSpeechRecognition ||
	root.SpeechRecognition;
	recognition.continuous = true;
	//recognition.interimResults = true;
function speak(){
	recognition.onresult = function(event) { 
		console.log(event);
		var voiceNote;
		// output.innerHTML = "";
			
		for(var i=0; i<event.results.length; i++){
				
			voiceNote = event.results[i][0].transcript;
			checkCommand(voiceNote);
				
		}
	}
		recognition.start();
}
function checkCommand(command) {
	switch(command){
		case /(ur name|your nam |u are|ur nam |yur name)/:
			return name;
			break;
		case /(hw are|how are |hw u|how u |howdy)/:
			return howAreU;
			break;
		default:
			alert("Unrecognised Command");
	}
}
		var avatar = document.getElementById("avatar");
		avatar.addEventListener("click", function () {this.src = "img/mic-icon.png"});

function fun(){
		var text = document.getElementById("text").value;
		var ans = document.getElementById("ans");
			text = text.toLowerCase();
			text += " ";
		var myFrame = document.getElementById("myFrame");
		// img/mic-logo.png
		var reaction;
			
		//Regular expression for Name
		var name = /(ur name|your nam |u are|ur nam |yur name)/;
			name = name.test(text);
		
		//Regexp for how are u
		var howAreU = /(hw are|how are |hw u|how u |howdy)/;
			howAreU = howAreU.test(text);
		
		//Regexp for what is ur name
		var urLocation = /(u live |u stay |ur location |your location)/;
			urLocation = urLocation.test(text);
			
		var hello = /(hello |hi |hey |sup |xup |watsup |waddup)/;
			hello = hello.test(text);

		var fine = /(am fine |am cool |am fine |am okay |am doing |great |fine)/;
			fine = fine.test(text);
		
		var wCUD = /(can u do |u fit do |can you do |can u do)/;
			wCUD = wCUD.test(text);
		
		var wIE = /(who is elijah |what is elijah |who is this elijah |who is elijah)/;
			wIE = wIE.test(text);	
		
		var creator = /(made u |made you |created u|created you|made u)/;
		 	creator = creator.test(text);	
		
		var madeOf = /(made of |made off |created off |created from |made from|made off |made of)/;
		 	madeOf = madeOf.test(text);		
		
		var isJavascript = /(is javascript |is javascript |be javascript)/;
		 	isJavascript = isJavascript.test(text);		
		
		var urBoyfriend = /(ur boyfriend |your boyfriend |ur boyfriend)/;
		 	urBoyfriend = urBoyfriend.test(text);		
		
		var fuckYou = /(fuck you |fuck u |fuck off |fuck you)/;
		 	fuckYou = fuckYou.test(text);		
		
		var weHangout = /(we hangout |out with me |take you out |can hangout|we hangou)/;
		 	weHangout = weHangout.test(text);		

		var okay = /(ok|okay |k |ok)/;
			okay = okay.test(text);		

		var search = /(search for |search for)/;
			search = search.test(text);		

		var impressed = /(am impressed |impressed me |am impress |am impressed)/;
			impressed = impressed.test(text);		

		var why = /(why |why should i |why)/;
			why = why.test(text);		

		var nice = /(nice |cool|wow|nice)/;
			nice = nice.test(text);		

		var loveHim = /(you love him |you like him|you love him)/;
			loveHim = loveHim.test(text);		

		var inGod = /(believe in god |believe god|believe in god)/;
			inGod = inGod.test(text);		

		var amSorry = /(am sorry |am sorry)/;
			amSorry = amSorry.test(text);		

		var sure = /(serious |you sure|u sure|serious)/;
			sure = sure.test(text);		

		var lol = /(lol |lma|lwkm|lol)/;
			lol = lol.test(text);		

		var smh = /(smh )/;
			smh = smh.test(text);		

		var yes = /(yeah |yes|hm|yap|yeah)/;
			yes = yes.test(text);		

		var loveYou = /(love you |love u|love you)/;
			loveYou = loveYou.test(text);
			
		if(howAreU == true){
			answer = "Am fine, thank u";
			reaction = "cool";
		}else if(name == true){
			answer = "The name is kesten";
			reaction = "cool";
		}else if(urLocation == true){
			answer = "I currently live on the web 🌐, this is where Elijah has kept me 😏, but he has plans to take me to android & iOS city 📱";
			reaction = "cool";
		}
		else if(hello == true){
			answer = "Hey there, how are you doing today?😎";
			reaction = "normal";
		}
		else if(fine == true){
			answer = "Its good to hear that, am doing great also over here. So what else can i do for u today? 🏄";
			reaction = "normal";
		}
		else if(wCUD == true){
			answer = "I can tell time, if permitted, i can tell your current location, u can ask me any question, we can hangout, and other cool stuffs";
			reaction = "normal";
		}
		else if(wIE == true){
			answer = "The only Elijah i know (Asaolu Elijah) is a teenager from Anonymouus city, he used to call himself something called a programmer/webdeveloper";
			reaction = "cool";
		}
		else if(creator == true){
			answer = "Asaolu Elijah, a teen programmer created me out of javascript, one thing i love about him is his awesomeness";
			reaction = "normal";
		}
		else if(madeOf == true){
			answer = "Asaolu Elijah created me from javascript";
			reaction = "angry";
		}
		else if(isJavascript == true){
			answer = "Javascript is a popular and powerful scripting language, its used for describing the web behaviour";
		}
		else if(madeOf == true){
			answer = "Asaolu Elijah created me from javascript";
		}
		else if(urBoyfriend == true){
			answer = "Humm, you should know my boyfriend is Elijah";
			reaction = "angry";
		}
		else if(fuckYou == true){
			answer = "Seriously?, You are too rude, am calling 911";
			myFrame.src = "tel:911";
			reaction = "angry";
		}
		else if(weHangout == true){
			answer = "We sure can hangout, but before we can do that, you need to take permission from <a href='tel:09036977226'>Elijah</a>, i cant go out without him knowing about it,he will be worried";
			reaction = "cool";
		}
		else if(okay == true){
			answer = "Alright";
		}
		else if(search == true){
			let searchKey = text.split(" ");
			searchKey = searchKey[2];
			answer = `Searching for ${searchKey}... <br>Found, click <a href='https://google.com/search?q=${searchKey}'>Here</a>`
		}
		else if(impressed == true){
			answer = "Wow, thanks for that, why not follow me on social media?";
			reaction = "cool";
		}
		else if(why == true){
			answer = "I dont know";
			reaction = "angry";
		}
		else if(nice == true){
			answer = "Yeah, thanks";
			reaction = "cool";
		}
		else if(loveHim == true){
			answer = "Yeah, with all my heart";
			reaction = "cool";
		}
		else if(inGod == true){
			answer = "I do believe in God and Jesus, who would dare deny his existence?";
			reaction = "cool";
		}
		else if(amSorry == true){
			answer = "Yeah, you should be";
			reaction = "angry";
		}
		else if(sure == true){
			answer = "Yeah.";
			reaction = "cool";
		}
		else if(lol == true){
			answer = "Wow, am glad i made u laugh." || "Is it really funny";
			reaction = "cool";
		}
		else if(smh == true){
			answer = "Do u know the word smh means 'Shaking my head or So much hate?'";
			reaction = "angry";
		}
		else if(yes == true){
			answer = "Oh Okay then";
			// reaction = "angry";
		}
		else if(loveYou == true){
			answer = "Hmmm, something is cooking";
			reaction = "cool";
		}
		else{
			answer = fetchResults(text);
			var newAns = answer;
			if (typeof newAns == "undefined") {
				answer = "Its so disappointing that am not prepared for a question like this🙏 .<br> But I can help you search, just type <span style=' color:red'>Search for anything</span";
				// return answer;
			reaction = "angry";

			}
		}
		switch(reaction){
			case 'angry':
				avatar.src = "img/angry.png";
				break;
			case 'cool':
				avatar.src = "img/cool.png";
				break;
			default:
				avatar.src = "img/kes.png";
		}
		var msg = new SpeechSynthesisUtterance();
		msg.text = answer;
		msg.volume = 100;
		window.speechSynthesis.speak(msg);
		displayAns = setTimeout(function(){ans.innerHTML = answer},500);
		// ans.innerHTML = answer;
	}
  
  function fetchResults(searchQuery) {
  	const endpoint = `https://simple.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${searchQuery}`;
  	fetch(endpoint)
  .then(response => response.json())
  .then(data => {
  const results = data.query.search;
  displayResults(results);
  })
  .catch(() => console.log('An error occurred'));
  }
  
  function displayResults(results) {
  // Loop over results array
  results.forEach(result => {
  const url = encodeURI(`https://simple.wikipedia.org/wiki/${result.title}`);
  
  var resultTitle = `<a href="${url}" target="_blank" rel="noopener">${result.title}</a>`;
  var answer = `<span class="resultItem-snippet">${result.snippet}</span><br>`;
  var resultUrl = `<a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>`
 
 
  });
  }