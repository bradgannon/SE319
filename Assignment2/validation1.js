function validate1() {
    valCheck = true;
	
	validFirstname = alphaNumCheck(document.forms["validation1"]["firstname"].value); // Validation boolean
    var image1 = getImage(validFirstname, "firstname");
    document.getElementById("firstname").appendChild(image1);
	
	validLastname = alphaNumCheck(document.forms["validation1"]["lastname"].value); // Validation boolean
	var image2 = getImage(validLastname, "lastname");
    document.getElementById("lastname").appendChild(image2);
	
	validGender = checkBlank(document.forms["validation1"]["gender"].value); // Validation boolean
	var image3 = getImage(validGender, "gender");
    document.getElementById("gender").appendChild(image3);
	
	validState = checkBlank(document.forms["validation1"]["state"].value); // Validation boolean
	var image4 = getImage(validState, "state");
    document.getElementById("state").appendChild(image4);
	
	// Go to next page if all info is valid
	if (validFirstname && validLastname && validGender && validState) {
		window.location.href = "validation2.html"; // Found this solution on GeeksForGeeks.com
	}
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

function checkBlank(val) { // Included a blank option in dropdown to prevent skipped response
	if (val == "blank")
		return false;
	else
		return true;
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