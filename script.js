// Get the button and the dropdown content
const button = document.querySelector(".dropbtn");
const Close=document.querySelector(".closebtn")
const dropdownContent = document.querySelector(".dropdown-content");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Toggle the visibility of the dropdown content
  dropdownContent.classList.toggle(".show");
});
Close.addEventListener("click", () => {
  // Toggle the visibility of the dropdown content
  dropdownContent.classList.toggle(".show");
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropbtn")) {
    if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
    }
  }
});
