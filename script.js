 // Toggle button for navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Sandra 22/6 Contact form Javascript

// Pop-up Close Function (Ensure 'my_popup' is defined)
const my_popup = document.getElementById('my-popup'); // Or use querySelector if it's a class

function ClosePopUp() {
    my_popup.style.display = "none";
}

// Set timeout to close pop-up after 2 minutes (120000 ms)
setTimeout(ClosePopUp, 120000);

// Contact form submit reset
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';  // Clears the 'name' input field
    e.target.elements.email.value = ''; // Clears the 'email' input field
    e.target.elements.message.value = ''; // Clears the 'message' textarea
});

// Optional: Uncomment the below code if you want to show a thank you message after submission
// document.getElementById("sendmessage").onsubmit = function() { 
//   alert("Thank you for your message"); 
// }
