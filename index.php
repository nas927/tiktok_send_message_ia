<?php
// Headers CORS (si gérés côté PHP)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

// Exemple : requête cURL vers Ollama (ou autre API locale/distance)
$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "http://localhost:11434/api/generate",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json"
    ],
    CURLOPT_POSTFIELDS => json_encode([
        "model" => "deepseek-r1:8b",
        "prompt" => "Tu es l'hote d'un live et tu dois l'animer le sujet c'est le piano en quelque mot ne parle pas beaucoup",
        "stream" => false
    ])
]);

$response = curl_exec($curl);

if ($response === false) {
    http_response_code(500);
    echo json_encode(["error" => curl_error($curl)]);
} else {
    header("Content-Type: application/json");
    echo $response;
}

curl_close($curl);
