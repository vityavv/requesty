function $(pass) {return document.getElementById(pass);}
function submit() {
	var url = $("url").value;
	var method = $("method").value;
	var body = false;
	if (url) {
		var request;
		if (method == "POST") {
			body = $("requestbod").value;
			request = new Request(url, {method, body});
		} else {
			request = new Request(url, {method});
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
