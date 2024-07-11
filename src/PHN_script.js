import deployNumber from "./fb_upload.js"

console.log("lolz2")
document.getElementById('mobileForm').addEventListener('submit' ,(e) => {
    e.preventDefault()
    var formdata = new FormData(e.target);
    console.log(formdata);
    var numbero = Object.fromEntries(formdata);
    console.log(numbero);
    deployNumber(numbero.phone);
});

let SHEET_ID = "1YFLDaeTJTR7DdnMBzkvCwK4h4DmmJiGCRFRX4sJPK1Q"
let CREDS = "credentials.json"

// const mobileumber = document.getElementById('mobileNumber').value.trim();
// console.log('Submitted phone Number:', mobileumber);