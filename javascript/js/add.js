function addSnack(){
  var inputSnack = document.addElement.whichElement.value;
  var inputQuantity = document.addElement.quantity.value;
	if( inputSnack === ""|| inputSnack === null){
		alert ("Please enter Snack name");
	}else if(inputQuantity === "" || inputQuantity === null || inputQuantity === 0){
		alert("Enter at least 1 quantity to snack");
	}else{
	createSnack();
	}
  }
  
  //function to create snack when added
  function createSnack(){
	
	var snack_name = document.addElement.whichElement.value;
	console.log(snack_name);
	var quantity = document.addElement.quantity.value;
	
	checkSelector(snack_name, quantity);
	parseSelectorObject(selector)
	document.addElement.reset();
	console.log(selector);
  }
  
  //function Random number genarator to add class;
  function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }
  
  //function to check if selector is alread present
  function checkSelector(which,howMuch){
		if (selector[which]) {
			selector[which] = parseInt(selector[which]) + parseInt(howMuch);
		} else {
			selector[which]= parseInt(howMuch);
		}
		return;
  }
  
  function parseSelectorObject(obj){
		if(typeof obj === Object
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				
				var length = obj[prop];
				//create snack loop through total amount
				while(length != 0){
					var div_tag ;
					div_tag = document.createElement('div');
					div_tag.setAttribute('class','snack');
					var random1 = getRandomInt(1, 4);
					var random2 = getRandomInt(1, 4);
					var random3 = getRandomInt(1, 4);
					var random4 = getRandomInt(1, 4);
					var random5 = getRandomInt(1, 3);
					div_tag.setAttribute('class',' animation snack snack-transform-'+random1+' zindex-'+random2+' margin-'+random3+' marginL-'+random4+' float-'+random5);
					div_tag.setAttribute('id',prop+length);


					var snack_name = prop;
					console.log(snack_name);
					var snack_name_text_node = document.createTextNode(snack_name);

					div_tag.appendChild(snack_name_text_node);
					document.getElementById('vendingMchn').appendChild(div_tag); 

					length--;
				}
				
			}
		}
  }
