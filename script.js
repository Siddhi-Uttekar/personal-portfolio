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
		SecureToken: "0126b54a-4d8c-4ca3-beb3-d3cbb707921f",
		To: "ssuttekar14116@gmail.com",
		From: "ssuttekar14116@gmail.com",
		Subject: "Contact form submission",
		Body: body,
	}).then(function (message) {
		alert("Mail sent successfully");
	});
}