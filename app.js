var password=document.getElementById("password");
// setting variables for generate element in the html
function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passowrdLength = 12;
    var password = "";
    for (var i = 0; i <= passowrdLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
}
// setting our variables for the copy element in the html
    function copyPassword() {
var copyText = document.getElementById("password");
copyText.select();
copyText.setSelectionRange(0, 999);
document.execCommand("copy");
}