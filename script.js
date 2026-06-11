document.getElementById("forgiveBtn").addEventListener("click", () => {

    document.getElementById("message").innerHTML =
    "🥹 Thank you for giving me another chance. You're genuinely important to me ❤️";

    confetti({
        particleCount: 150,
        spread: 100
    });

});
