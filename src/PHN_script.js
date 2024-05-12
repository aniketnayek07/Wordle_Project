import deployNumber from "./fb_upload.js"

document.getElementById('mobileForm').addEventListener('submit' ,(e) => {
    //e.preventDefault()
    var formdata = new FormData(e.target);
    console.log(formdata);
    var numbero = Object.fromEntries(formdata);
    console.log(numbero);
    deployNumber(numbero.mobileNumber);
});

// const mobileumber = document.getElementById('mobileNumber').value.trim();
// console.log('Submitted phone Number:', mobileumber);