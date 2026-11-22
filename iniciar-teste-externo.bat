@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title Com Clima - Teste Externo

echo.
echo Iniciando o site local...
start "Com Clima - Dev" cmd /k "npm run dev"

echo Aguardando o Vite subir...
timeout /t 4 /nobreak >nul

set "LOG=%TEMP%\comclima-tunnel.log"
del "%LOG%" >nul 2>&1

echo Iniciando o tunel externo...
start "Com Clima - Tunel Externo" cmd /c "npx --yes cloudflared tunnel --url http://localhost:5173 > \"%LOG%\" 2>&1"

echo Aguardando o link publico...
set "LINK="

:waitlink
timeout /t 2 /nobreak >nul
for /f "usebackq delims=" %%U in (`powershell -NoProfile -Command "if (Test-Path '%LOG%') { $m = Select-String -Path '%LOG%' -Pattern 'https://[a-z0-9-]+\.trycloudflare\.com' -AllMatches; if ($m) { $m.Matches[0].Value } }"`) do set "LINK=%%U"
if not defined LINK goto waitlink

echo.
echo ========================================
echo %LINK%
echo ========================================
echo.
echo| set /p="%LINK%"| clip
echo Link copiado. Cole com Ctrl+V onde quiser.
echo.
echo Deixe as janelas abertas enquanto for testar.
echo Feche a janela Dev e esta para encerrar.
echo.
pause
endlocal
