function validate2() {
    valCheck = true;
    var image1 = getImage(emailCheck(document.forms["validation2"]["email"].value), "email");
    document.getElementById("email").appendChild(image1);
	
	var image2 = getImage(phoneCheck(document.forms["validation2"]["phone"].value), "phone");
    document.getElementById("phone").appendChild(image2);
	
	var image3 = getImage(addressCheck(document.forms["validation2"]["address"].value), "address");
    document.getElementById("address").appendChild(image3);	
}

function getImage(bool, ID) { // Provided code
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function emailCheck(email) { // Provided code
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}

function phoneCheck(num) {
	if (num.length == 10) { // No hyphens, format: xxxxxxxxxx
		if (num.match(/^[0-9]+$/) != null) // Regex to check if input is only numbers
			return true;
		else
			return false;
	}
	else if (num.length == 12) { // With hyphens, format: xxx-xxx-xxxx
		if (num[3] != '-' || num[7] != '-') // Hyphens in incorrect spots
			return false;
		var front = num.substring(0, 3);
		var mid = num.substring(4, 7);
		var end = num.substring(8, num.length);
		
		// Check if all non-hyphen values are numbers
		if ((front.match(/^[0-9]+$/) != null) && (mid.match(/^[0-9]+$/) != null) && (end.match(/^[0-9]+$/) != null))
			return true;
		else
			return false;
	}
	else // Not a phone number if above if-statements are false
		return false;
}

function addressCheck(str) {
	var comma = str.indexOf(',');
	var end = str.length;
	
	if (comma == -1) // No comma in str
		return false;	
	if (str[0] == ' ' || str[comma-1] == ' ')
		return false;
	for (var i = 0; i < comma; i++) {
		if (!isLetter(str[i]) && (str[i] == ' ' && (str[i-1] == ' ' || str[i+1] == ' '))) // Not a letter or a space (invalid character)
			return false;
	}
	// Accounts for space or no space after comma for state abbreviation
	if (!((isLetter(str[end-1]) && isLetter(str[end-2])) && (str[end-3] == ' ' || str[end-3] == ',')))
		return false;
	return true;
	
}

function isLetter(c) { // Regex to check for letter
	return c.length === 1 && c.match(/[a-z]/i);
}

function alphaNumCheck(entry) { // Provided code
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    } 
}

function deleteCookie( name ) { // Provided code
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}