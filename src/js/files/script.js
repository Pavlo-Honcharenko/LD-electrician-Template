// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// // Regular expression for phone number validation (international format)
// var phonePattern = /^\+?[0-9]{10,15}$/;

// // Get all inputs with type="tel"
// var phoneInputs = document.querySelectorAll('input[type="tel"]');

// // Function to validate the phone number
// function validatePhoneInput(event) {
// 	var input = event.target;
// 	var errorMessage = input.nextElementSibling;

// 	// If there's no error message after the input, create it
// 	if (!errorMessage || !errorMessage.classList.contains('error-message')) {
// 		errorMessage = document.createElement('span');
// 		errorMessage.classList.add('error-message');
// 		input.parentNode.insertBefore(errorMessage, input.nextSibling);
// 	}

// 	// Validate the phone input value
// 	if (!phonePattern.test(input.value)) {
// 		errorMessage.textContent = 'Invalid phone number.';
// 		errorMessage.style.display = 'inline';
// 	} else {
// 		errorMessage.style.display = 'none';
// 	}
// }

// // Attach 'blur' event to each phone input
// phoneInputs.forEach(function (input) {
// 	input.addEventListener('blur', validatePhoneInput);
// });