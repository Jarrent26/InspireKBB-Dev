
function showLoading() {
  const button = document.getElementById('loadButton');
  const buttonText = document.getElementById('buttonText');
  const spinnerContainer = document.getElementById('spinnerContainer');

  // Disable the button and show the spinner with "Loading..."
  button.disabled = true;
  buttonText.style.display = 'none';
  spinnerContainer.style.display = 'flex';

  // Simulate a loading process
  setTimeout(() => {
    spinnerContainer.style.display = 'none'; // Hide spinner and text
    buttonText.textContent = 'Check your email'; // Update button text
    buttonText.style.display = 'inline';
    button.disabled = false; // Enable the button
  }, 2000); //2 seconds
}