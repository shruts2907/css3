(function() {
	selector ={};

	selector['prezel'] =3;

	selector['yougurt'] =2;

	selector['chips']=1;

	//function for random selection
	var keys = [];
	var randomKey;
	var randomProperty = function (obj) {
	console.log("in random prop");
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					keys.push(prop);
				}
			}

			return keys[ keys.length * Math.random() << 0 ];
		};
	
	var randomGenerator = function(){
		randomKey = randomProperty(selector);
		document.getElementById('preview').innerHTML = selector[randomKey];
		
			if(document.getElementById('yes').addEventListener){
				
				document.getElementById('yes').addEventListener('click',yesAction);
				document.getElementById('display').innerHTML = selector[randomKey];
				//document.getElementById('display').innerHTML ;
				console.log("selector when pressed yes");
				console.log(selector);

			}
			
			if( document.getElementById('no').addEventListener){
				document.getElementById('no').addEventListener('click',noAction);
			}

		
	}
	
	var yesAction = function(){
			console.log("in yes");
			displayAnimationPick(randomKey);
			selector[randomKey] -= 1;

			if(selector[randomKey] === 0){
			  console.log("in if selector key =0 ");
			  delete selector[randomKey];
			}	
			console.log(selector);
		};
			
	var noAction = function(){		
		console.log("no");
		document.getElementById('display').innerHTML = " ";
		console.log("selector when pressed NO-------");
		console.log(selector);
	}
	
	//display animation pulling off the snack
	function displayAnimationPick(randomKey){
		length = selector[randomKey];
		randomId = randomKey+length;
		var snackToDisplay = document.getElementById(randomId);
		snackToDisplay.removeAttribute("class");
		snackToDisplay.setAttribute('style', 'animation: move '+5+'s; z-index:1111111111');
		snackToDisplay.setAttribute('class', 'snack');
		//snackToDisplay.setAttribute('style', 'z-index:1111111111');
		document.getElementById('tongue').appendChild(snackToDisplay);
		if(document.getElementById('pick').addEventListener){

			console.log("in if add event");
			document.getElementById("pick").addEventListener("click", removeSnack);
			//console.log(document.getElementById("selectRandom").addEventListener("click", randomGenerator));
					
		}
		
		
	}
	
	
	//remove snack fUnction
	var removeSnack = function(){
		randomId = randomKey+length;
		var snackToDisplay = document.getElementById(randomId);
		snackToDisplay.setAttribute('style', 'display:none');

	}
	//register event listenre
	//stores random key
	if(document.getElementById('selectRandom').addEventListener){

		console.log("in if add event");
		document.getElementById("selectRandom").addEventListener("click", randomGenerator);
		//console.log(document.getElementById("selectRandom").addEventListener("click", randomGenerator));
					
	}
	
	console.log("**************global selector**********"+selector);
	parseSelectorObject(selector);
})();
