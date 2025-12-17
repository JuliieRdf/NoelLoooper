function checkCode() {
    const codeSecret = "439"; // code du cadenas

    const d1 = document.getElementById("d1").value;
    const d2 = document.getElementById("d2").value;
    const d3 = document.getElementById("d3").value;

    const codeEntre = d1 + d2 + d3;
    const message = document.getElementById("message");

    if (codeEntre === codeSecret) {
        message.textContent = "Bravo tu as trouvé le code !";
    } else {
        message.textContent = "Oups, code incorrect";
    }
}