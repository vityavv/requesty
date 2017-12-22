function $(pass) {return document.getElementById(pass);}
function submit() {
	var url = $("url").value;
	var method = $("method").value;
	var body = false;
	if (method == "POST") {
		body = $("requestbod").value;
	}
	if (url && method) {
		var request = new Request(url, {method, body ? body : undefined});
	}
}
function changeMethod() {
	if ($("method").value == "POST") {
		$("requestboddiv").style.display = "block";
	} else {
		$("requestboddiv").style.display = "none";
	}
}
