const carList = [
    { model: 'Car Model 1', price: 50, image: 'images/cars/car1.jpg' },
    { model: 'Car Model 2', price: 60, image: 'images/cars/car2.jpg' },
    // Add more cars here
];

const carListContainer = document.querySelector('.car-list');

carList.forEach(car => {
    const carItem = document.createElement('div');
    carItem.className = 'car-item';

    const carImage = document.createElement('img');
    carImage.src = car.image;
    carImage.alt = car.model;

    const carDetails = document.createElement('div');
    carDetails.className = 'car-details';

    const carTitle = document.createElement('h3');
    carTitle.textContent = car.model;

    const carPrice = document.createElement('p');
    carPrice.textContent = `Price: $${car.price}/day`;

    const bookButton = document.createElement('button');
    bookButton.textContent = 'Book Now';

    carDetails.appendChild(carTitle);
    carDetails.appendChild(carPrice);
    carDetails.appendChild(bookButton);

    carItem.appendChild(carImage);
    carItem.appendChild(carDetails);

    carListContainer.appendChild(carItem);
});
