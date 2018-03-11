function checkUsername() {                            // Declare function

	var forfeedback = this.id;
	var forfeedback1 = forfeedback.substr(forfeedback.length-1);
	var elMsg = document.getElementById('feedback' + forfeedback1);    // Get feedback element
	if (this.value.length < 5) {                        // If username too short
		elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
	} else {                                            // Otherwise
		elMsg.textContent = '';                           // Clear message
	}
}


var elUsername = document.getElementById('username1'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()

var elUsername = document.getElementById('username2'); // Get username input
elUsername.onblur = checkUsername; 

var elUsername = document.getElementById('username3'); // Get username input
elUsername.onblur = checkUsername; 

var elUsername = document.getElementById('username4'); // Get username input
elUsername.onblur = checkUsername; 

var elUsername = document.getElementById('username5'); // Get username input
elUsername.onblur = checkUsername; 