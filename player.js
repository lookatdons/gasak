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
function getRandomImage() {
    var img = document.getElementById('randomImage');
    var randomImg = images[Math.floor(Math.random() * images.length)];
    img.src = 'https://s3.us-west-1.wasabisys.com/fighter/player/' + randomImg;
}

var titleNames = [
    "Hot Mom.mp4",
    "Step Mom.mp4",
    "Friend's Hot Mom.mp4",
    "Hot Stepmom.mp4"
    // add more titles as needed
];

function getRandomTitle() {
    var randomIndex = Math.floor(Math.random() * titleNames.length);
    document.getElementById('randomTitle').textContent = titleNames[randomIndex];
}

window.onload = function() {
    getRandomImage();
    getRandomTitle();
};
