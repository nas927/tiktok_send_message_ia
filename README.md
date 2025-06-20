# TikTok Live Auto Message Bot

This project automatically sends messages to a TikTok live chat at regular intervals using an AI model (via Ollama). It consists of a simple PHP backend, a JavaScript automation script, and a local reverse proxy for HTTPS.

## How It Works

- The JavaScript (`main.js`) script runs in the browser and interacts with the TikTok live chat input and send button make sure you see the input and button send else it won't work.
- Every 4 minutes, it fetches a new message from the backend (served by PHP), which in turn queries an AI model (using Ollama) to generate a message.
- The generated message is automatically inserted into the chat and sent.

## Project Structure

- [`main.js`](main.js): Script to automate message sending in TikTok live.
- [`index.php`](index.php): PHP backend that queries the Ollama API for message generation.
- [`CaddyFile`](CaddyFile): Configuration for Caddy reverse proxy to provide HTTPS locally.
- [`launch.bat`](launch.bat): Batch script to start Ollama, PHP server, and Caddy.
- [`README.md`](README.md): This documentation.

## Prerequisites

- [Ollama](https://github.com/ollama/ollama) installed and the `deepseek-r1:8b` model available.
- PHP installed.
- [Caddy](https://caddyserver.com/) installed.
- [PHP](https://windows.php.net/download#php-8.3) installed enable curl in .ini and set maximum max_execution_time = 3000000 

## Setup & Usage

1. **Start All Services**

   Run the batch script to start Ollama, the PHP server, and Caddy:

   ```sh
   ./launch.bat