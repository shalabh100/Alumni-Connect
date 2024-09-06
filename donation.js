document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Hide the donation form and show the thank you message
    document.querySelector('.donation-container').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
