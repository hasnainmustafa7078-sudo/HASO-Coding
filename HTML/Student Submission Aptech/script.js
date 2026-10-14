// Live value display for the "computer skills" range slider
var skillLevel = document.getElementById('skillLevel');
var skillOut = document.getElementById('skillOut');
skillLevel.addEventListener('input', function () {
  skillOut.value = this.value;
});

// Handle form submission
document.getElementById('admissionForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (this.checkValidity()) {
    alert('Form is valid. In a real system this would now be submitted to the server.');
  }
});
