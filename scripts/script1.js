document.addEventListener('DOMContentLoaded', () => {
	const loginForm = document.querySelector('#loginForm');
	const registrationForm = document.querySelector('#registrationForm');

	if (loginForm) {
		loginForm.addEventListener('submit', (event) => {
			event.preventDefault();

			const emailInput = loginForm.querySelector('#email');
			const passwordInput = loginForm.querySelector('#password');
			const email = emailInput ? emailInput.value.trim() : '';
			const password = passwordInput ? passwordInput.value.trim() : '';

			if (!email || !password) {
				alert('Please enter your email and password.');
				return;
			}

			alert('Login successful. Redirecting to the home page.');
			window.location.href = '../index.html';
		});
	}

	if (registrationForm) {
		registrationForm.addEventListener('submit', (event) => {
			event.preventDefault();

			const firstNameInput = registrationForm.querySelector('#firstName');
			const lastNameInput = registrationForm.querySelector('#lastName');
			const emailInput = registrationForm.querySelector('#email');
			const passwordInput = registrationForm.querySelector('#password');
			const confirmPasswordInput = registrationForm.querySelector('#confirmPassword');

			const firstName = firstNameInput ? firstNameInput.value.trim() : '';
			const lastName = lastNameInput ? lastNameInput.value.trim() : '';
			const email = emailInput ? emailInput.value.trim() : '';
			const password = passwordInput ? passwordInput.value.trim() : '';
			const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value.trim() : '';

			if (!firstName || !lastName || !email || !password || !confirmPassword) {
				alert('Please complete the required fields.');
				return;
			}

			if (password !== confirmPassword) {
				alert('Passwords do not match.');
				return;
			}

			alert('Registration successful. Please sign in.');
			window.location.href = 'login.html';
		});
	}
});
