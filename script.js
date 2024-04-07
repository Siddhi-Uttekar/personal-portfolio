function sendEmail() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;

	let body =
		"Name: " +
		name +
		"<br/> Email: " +
		email +
		"<br/> Message:  <br/>" +
		message;

	email.send({
		SecureToken: "40b3c59b-369e-4371-b0bb-de6ace4d3415",
		To: "ssuttekar14116@gmail.com",
		From: "ssuttekar14116@gmail.com",
		Subject: "Contact form submission",
		Body: body,
	}).then(function (message) {
		alert("Mail sent successfully");
	});
}