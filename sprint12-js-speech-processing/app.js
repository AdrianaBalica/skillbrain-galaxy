window.addEventListener("load", function () {
    const btn = document.getElementById('btn-speak');
    const textarea = document.getElementById('speak-text');
    const btnJoke = document.getElementById('btn-joke');

    checkSpeakButtonStatus();

    textarea.addEventListener("input", checkSpeakButtonStatus);

    btn.addEventListener("click", onBtnSpeakClick);

    btnJoke.addEventListener('click', onBtnTellAJokeClick);
});

const onBtnSpeakClick = () => {
    const speakTextEl = document.getElementById("speak-text");
    const txt = speakTextEl.value.trim();

    if (!txt) return;

    speak(txt);

    speakTextEl.value = '';

    checkSpeakButtonStatus();
};

const onBtnTellAJokeClick = () => {
    console.log("tell a joke clicked");

    const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?blacklistFlags=religious,racist,sexist";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("API response:", data);

        const jokeText = getTextFromJoke(data);

        document.getElementById('speak-text').value = jokeText;

        checkSpeakButtonStatus();
        
        speak(jokeText);
    })
    .catch(error => console.error("Error fetching joke:", error));    
}

const getTextFromJoke = (data) => {
    if (data.type === "twopart") {
        return `${data.setup}\n---------------------\n${data.delivery}`;
    }

    if (data.type === 'single') {
        return data.joke;
    }

    throw "Unknown data type: " + data.type;
}

const onSpeakTextInput = () => {
    checkSpeakButtonStatus();
}

const checkSpeakButtonStatus = () => {
    const txt = document.getElementById("speak-text").value.trim();
    const btn = document.getElementById("btn-speak");

    if (txt.length === 0) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
};

const speak = (text) => {

    console.log(`Speaking: ${text}`);

    VoiceRSS.speech({
        key: 'e484d575a6874e518f968d653122f4a2',
        src: text,
        hl: 'en-us',
        v: 'Mike',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

