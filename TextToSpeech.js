const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        error.textContent = `Enter text to convert!`
    }
    
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter =
            new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertBtn.textContent = "Playing Conversion!..."
    }
    
    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound"
    }, 5000);
});

/// Lights-Function ///
function toggleClass(){

    const body = document.querySelector('body');
    body.classList.toggle('light');
    
    }
