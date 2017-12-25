function $(pass) {return document.getElementById(pass);}
function submit() {
	var url = $("url").value;
	var method = $("method").value;
	var body = false;
	var headers = new Headers();
	var headerElements = $("headers").childNodes;
	for (var i = 0; i < headerElements.length; i++) {
		headers.append(headerElements[i].childNodes[1].value, headerElements[i].childNodes[3].value);
	}
	if (url) {
		var request;
		if (method == "POST") {
			body = $("requestbod").value;
			request = new Request(url, {method, body, headers});
		} else {
			request = new Request(url, {method, headers});
		}
		fetch(request).then(response => {
			return response.text();
		}).then(response => {
			$("response").innerText = response;
		}).catch(error => {
			$("response").innerHTML = `<span style="color: red">There was an error with the fetch! Check console for details. Error message: ${error.message}</span>`;
		});
	} else {
		$("response").innerHTML = "<span style=\"color: red\">No URL!</span>";
	}
}

function changeMethod() {
	if ($("method").value == "POST") {
		$("requestboddiv").style.display = "block";
	} else {
		$("requestboddiv").style.display = "none";
	}
}
function addHeader() {
	$("headers").innerHTML += "<div>Key: <input /> Value: <input /> <button onClick=\"removeHeader(this)\">-</button><br><br></div>";
}
function removeHeader(buttonElement) {
	buttonElement.parentElement.remove();
}
