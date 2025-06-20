@echo off
start "" ollama run deepseek-r1:8b
start "" php -S 0.0.0.0:8080 
start "" caddy run