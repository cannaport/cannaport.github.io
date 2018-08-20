function UserAction() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			alert(this.responseText);
		}
	};
	xhttp.open("GET", "https://watest.leafdatazone.com/api/v1/areas", true);
	xhttp.setRequestHeader("x-mjf-key", "GLyxMFqIrrFqtnyILMIv");
	xhttp.setRequestHeader("x-mjf-mme-code", "M86898");
	xhttp.send();
};