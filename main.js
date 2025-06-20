// Récupérer l'input
const chat = document.querySelector("div[placeholder*=Dis]");
// Récupérer le bouton d'envoie
const send = chat.parentElement.parentElement.parentElement.nextSibling;
// Url de ollama https://github.com/ollama/ollama

async function send_request() {
    try {
        const r = await fetch("https://localhost");
        const data = await r.json();
        // Nettoie la réponse
        return data.response.replace(/<think>([\s\S]*?)<\/think>/, "");
    } catch (err) {
        // Affiche l'erreur explicite
        console.error("Erreur lors de la requête :", err);
        throw err;
    }
}

const interval = setInterval(async () => {
    try {
        let result = await send_request();
        chat.innerText = result;
        send.click();
        console.log("Envoyé !");
    } catch (err) {
        chat.innerText = "Erreur lors de la récupération du message.";
    }
}, 3 * 60 * 1000);

// curl https://127.0.0.1/api/generate -d "{ \"model\": \"deepsee-r1:v8\", \"prompt\": \"hey\" }"