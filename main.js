// Récupérer l'input
const chat = document.querySelector("div[placeholder*=Dis]");
// Récupérer le bouton d'envoie
const send = chat.parentElement.parentElement.parentElement.nextSibling;
// Url de ollama https://github.com/ollama/ollama

function send_request() {
    let result;

    fetch("https://localhost")
    .then(r => result = r.json().response.replace(/<think>([\s\S]*?)<\/think>/, ""))
    .then(console.log)
    .catch(console.error); 

    return result;
}

// <think>([\s\S]*?)<\/think>

const interval = setInterval(async () => {
    let result = await send_request();

    chat.innerText = result;

    send.click();
    console.log("Envoyé !");
}, 2 * 60 * 1000);

// curl https://127.0.0.1/api/generate -d "{ \"model\": \"deepsee-r1:v8\", \"prompt\": \"hey\" }"