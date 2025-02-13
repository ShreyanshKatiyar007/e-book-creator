document.addEventListener("DOMContentLoaded", () => {
	const contactForm = document.getElementById("contactForm");

	contactForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// Get form values
		const formData = {
			fullName: document.getElementById("fullName").value,
			email: document.getElementById("email").value,
			subject: document.getElementById("subject").value,
			message: document.getElementById("message").value,
		};

		// Validate form
		if (validateForm(formData)) {
			// Here you would typically send the data to a server
			console.log("Form submitted:", formData);

			// Show success message
			showMessage("Message sent successfully!", "success");

			// Reset form
			contactForm.reset();
		}
	});

	// Form validation function
	function validateForm(data) {
		let isValid = true;

		// Remove any existing error messages
		const existingErrors = document.querySelectorAll(".error-message");
		existingErrors.forEach((error) => error.remove());

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email)) {
			showError("email", "Please enter a valid email address");
			isValid = false;
		}

		// Validate required fields
		Object.keys(data).forEach((key) => {
			if (!data[key].trim()) {
				showError(key, "This field is required");
				isValid = false;
			}
		});

		return isValid;
	}

	// Show error message under input
	function showError(fieldId, message) {
		const field = document.getElementById(fieldId);
		const errorDiv = document.createElement("div");
		errorDiv.className = "error-message";
		errorDiv.textContent = message;
		field.parentNode.appendChild(errorDiv);
	}

	// Show success/error message
	function showMessage(message, type) {
		const messageDiv = document.createElement("div");
		messageDiv.className = `message ${type}`;
		messageDiv.textContent = message;

		// Insert message after form
		contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

		// Remove message after 3 seconds
		setTimeout(() => {
			messageDiv.remove();
		}, 3000);
	}
});
