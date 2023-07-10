// Array of image names in the folder
var images = [
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdZ5wWfwkfHDJZR2e_eOU2dVc2syHFUjA-h3k58Tlm4g4oiFBQamRUr8gYpWyagGnPenJI66vXvf6JgVxTXx-iMgZDDPPncWNE43njoOgrIYvc_jMif85xsQn1O3pBzmvIRPNOs3BazFiVmsjMFID3HxwBKtl70DIUN7w616mC00Zi-nk/s1600/1.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge5pfSwrzapCjm2bomZ0N2jzuIXJItLFm_AlRrKN2Xkbj2j7B37_KS0G3oe90NvjaB9enfI3gKKTKkaeZDpIkeaxO0EcUeoxeggC2YXPnxTigDe6o2hx9QNNkAbqU2xTXtHZpSwC5uU3aJKXBB1jtUgqf2LA-RKSWrjQSmbcrjP2pn22k/s1600/2.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7WFkAwfoUPN7JukYkYrzY1ra_Drf1JH5LE6CCxB-jxaHb719_SM43negHjdJ_ZucagCops7qwUsQw6EzofNAAZ7QxjtM3FSX5ysE5eXu-xoLgskb1CQ9Y4etBjmwOAwEkMPGK0c0vv_c07NHmA34k3vnIDv0JPSBLJRSUrMnW3i0H3_U/s1600/3.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMiF4Ar7tZAsnqtkwvgw3cCYg1NCuLWLg1Tp755uqz4mP0cpbVko8cEd0bvmfshEe6IQ-oevQofZy56z6G3NK5Ml54g1lZKgimyOuccX7CoaCgGrpE_-2nvxrdqQSNbMKkVBipw3LK1McXxCiTxb_mm-I8Drm8ieUb8EmTO9ZrNkBKHg8/s1600/4.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioAl7XHU0S2E0Nth2hiY23-IOffPmgCAT7YgDJnSmmyFP1dM8E8fBDHlrKmjKOfjgMseAwa9UFljs-JukQoxt46v4BwwSbtYSh7J7bi4Sr-eT4rkRYBU2-RmNqrw6oM9nfHmn68g77XDjCBcNx4V3WTiGqNgLkmK1smughGoWNccKkk8U/s1600/5.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4B4kiYCTXuT9wWhNj5aePGU65j5y5OOD2C3t8V_aqeeAxJFF6eUhbW_Ho2Gj3NY3bfUDtd5jijlCo8g118FS95pkUV-FygZkvAbSV63mYlCyLnsusL48iRS4ykfHMciSpayqML4qcngM9_XQkGfG2-0qIE3hm7uLF1oJDB81QHQyqIa8/s1600/6.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_QszPZYddA_d_tVNfCOGVoaXEEo31Sjg_Gvctq3OoGSR-dDRxcuVRPhQkAb-gLbgHvURqiZhpV7fnvx0jgEtgYOIRafRtdwyo5NmvqBnuzCC5xSx5V2BXepL6wbuVkoY9BDd4_cYbeFfg9P8XN3nH1wE3uKNU_ATUBe1hjREDI0fpE6o/s1600/7.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8fTz2G5VMXL2v-FN-PuuPw8ij8uXNn0cg3Nz5TxfJzaUNQDtiyYuS2MVzZuPJcLBCNBSAaDoJdd1IhOVvl-en0r1_SpJhpGYKwXXXwgc6zKzAm3kK4SH49zPKI_Tbj--QimZvDYVUc1hi841VpbM3AiHrjCLVOfZerzdrFEjjiBoy0Lk/s1600/8.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXudAsglo5p_ceoVz_D9RFXmUmkJ3DBqBVFIjRRHFJdA8v1Mpu7xbyNwyqEaTZwbSFkE44p39pn_l5YkM5I8UibxAt7EfViJ5LQ5VozTdJdYVgXfl1LxCngrmGWYiJrCvNRmb8M5Z1x9a-BdGK4cSAcCHweu0EGjJXjUfvJaFgEHgv8RA/s1600/9.png',
'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjxwQJQlKBbJZRFEAMUnroqOhHMpGqm6PfG6ki84BtrmlF9sQ6KZILM15--72AQs8gID6cih4HDfjPhazZ-BMke1yO-U8wySeuPCZ0gdWeLwnCUEkNI_3wVY0iWqJBONfasPTrv68TA1GAU5RhtFaQxFkcitWD1d6T1tKtQFw2mhjGTPo/s1600/10.png'
    // add more image names here
];

// Function to select a random image
function getRandomImage() {
    var img = document.getElementById('randomImage');
    var randomImg = images[Math.floor(Math.random() * images.length)];
    img.src = randomImg;
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
