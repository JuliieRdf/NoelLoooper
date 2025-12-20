function lancerConfettis() {
    const duration = 2000;
    const end = Date.now() + duration;


    (function frame() {
        confetti({
            particleCount: 5,
            startVelocity: 60,
            spread: 120,
            gravity: 3,
            ticks: 400,
            origin: {
                x: Math.random(),
                y: 0
            },
            colors: ['#3C61F5', '#BB6EF6', '#F6B254']
        });

        if (Date.now() < end) requestAnimationFrame(frame);
    })();
}
let isFinde = false;

function checkCode() {
    const codeSecret = "439"; // code du cadenas

    const d1 = document.getElementById("d1").value;
    const d2 = document.getElementById("d2").value;
    const d3 = document.getElementById("d3").value;

    const codeEntre = d1 + d2 + d3;
    const message = document.getElementById("message");


    if (isFinde == false) {
        if (codeEntre === codeSecret) {
            lancerConfettis();
            isFinde = true;
            message.textContent = "Bravo tu as trouvé le code !";
        } else {
            message.textContent = "Oups, code incorrect";
        }
    }


}