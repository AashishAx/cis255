function checkUsername() {                             // Declare function
	var forfeedback = this.id;
	var forfeedback1 = forfeedback.substr(forfeedback.length-1);
	console.log(forfeedback1);
	var elMsg = document.getElementById('feedback' + forfeedback1);     // Get feedback element
	if (this.value.length < 5) {                         // If username too short
		elMsg.textContent = 'Username must be 5 characters or more '; // Set msg
	} else {                                             // Otherwise
		elMsg.textContent = ' ';                            // Clear msg
	}
	// alert(this.value[0]);
	
	
	if(forfeedback1.equals("1") && this.value[0] >=97 && this.value[0]<= 99)
	{
		elMsg.textContent += 'Should begin with A-C';
	}
	
	else if(forfeedback1 == '2' && this.value[0].toLowerCase() >=100 && this.value[0].toLowerCase()<= 104)
	{
		elMsg.textContent += '';
	}
	
	else if(forfeedback1 == '3' && this.value[0].toLowerCase() >=105 && this.value[0].toLowerCase()<= 109)
	{
		elMsg.textContent += '';
	}
	
	else if(forfeedback1 == '4' && this.value[0].toLowerCase() >=110 && this.value[0].toLowerCase()<= 112)
	{
		elMsg.textContent += '';
	}
	
	else if(forfeedback1 == '5' && this.value[0].toLowerCase() >=113 && this.value[0].toLowerCase()<= 112)
	{
		elMsg.textContent += '';
	}
	else{
		elMsg.textContent += 'Should begin with Q-Z';
	}
}

var elUsername = document.getElementById('username1');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

var elUsername = document.getElementById('username2');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

var elUsername = document.getElementById('username3');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

var elUsername = document.getElementById('username4');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

var elUsername = document.getElementById('username5');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);