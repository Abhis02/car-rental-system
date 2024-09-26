// Toggle Menu for Mobile View
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
}

// Close Navbar When Link is Clicked (For Mobile View)
let navLinks = document.querySelectorAll('.navbar li a');
navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
    }
});

// Form Submission Handling (Basic Example)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way

    // Capture the form data
    let location = document.querySelector('input[type="search"]').value;
    let pickUpDate = document.querySelector('input[type="date"]:first-of-type').value;
    let returnDate = document.querySelector('input[type="date"]:last-of-type').value;

    // Simple validation
    if (location === '' || pickUpDate === '' || returnDate === '') {
        alert('Please fill out all the fields');
        return;
    }

    // Output the captured data (This is just for testing, you can send it to a backend)
    console.log('Location:', location);
    console.log('Pick-up Date:', pickUpDate);
    console.log('Return Date:', returnDate);

    alert('Form submitted successfully!');
});

// Change background on scroll (Optional visual effect)
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Car Carousel (Optional - You can implement this if you want a carousel for the cars section)
let carIndex = 0;
const cars = document.querySelectorAll('.car-box');
const showCar = (index) => {
    cars.forEach((car, i) => {
        car.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.next-btn').onclick = () => {
    carIndex = (carIndex + 1) % cars.length;
    showCar(carIndex);
}

document.querySelector('.prev-btn').onclick = () => {
    carIndex = (carIndex - 1 + cars.length) % cars.length;
    showCar(carIndex);
}
