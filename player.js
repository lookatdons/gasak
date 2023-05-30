// Array of image names in the folder
var images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png'
    // add more image names here
];

// Function to select a random image
window.onload = function() {
    var img = document.getElementById('randomImage');
    var randomImg = images[Math.floor(Math.random() * images.length)];
    img.src = 'https://s3.us-west-1.wasabisys.com/fighter/player/' + randomImg;
}

var titles = ["Hot Mom.mp4", "Step Mom.mp4", "MILF.mp4", "Friend's Hot Mom.mp4", "Hot Stepmom.mp4"]; // Add as many titles as you want
var randomIndex = Math.floor(Math.random() * titles.length);
document.getElementById("randomTitle").innerText = titles[randomIndex];
