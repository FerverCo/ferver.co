document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    alert(`Booking confirmed for ${date} at ${time}`);
});
