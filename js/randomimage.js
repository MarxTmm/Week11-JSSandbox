const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);

    image.src = "images/" + images[randomIndex]
}