var btnTranslate = document.querySelector("#translate-btn");
var txtInput = document.querySelector("#translate-input");
var output = document.querySelector("#translate-output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler(){
    var inputText = txtInput.value;

    // calling server for processing 
    fetch(getTranslationURL(inputText))

        .then(response => response.json())
        .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)