@echo off
REM Star Dental - Installation & Setup Script for Windows

echo.
echo ========================================
echo    Star Dental Website Setup
echo ========================================
echo.

REM Check if Node.js is installed
echo [1/5] Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    exit /b 1
) else (
    node --version
    echo Node.js ✓ OK
)

echo.
echo [2/5] Checking npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    exit /b 1
) else (
    npm --version
    echo npm ✓ OK
)

echo.
echo [3/5] Clearing npm cache...
npm cache clean --force >nul 2>&1
echo npm cache cleared ✓

echo.
echo [4/5] Installing dependencies...
echo This may take a few minutes...
npm install --legacy-peer-deps

if errorlevel 1 (
    echo ERROR: npm install failed!
    echo Try running: npm install --no-optional
    exit /b 1
)

echo.
echo [5/5] Verifying installation...
if exist node_modules (
    echo node_modules directory ✓ Found
    if exist node_modules\react (
        echo React package ✓ Installed
    )
    if exist node_modules\vite (
        echo Vite ✓ Installed
    )
    if exist node_modules\tailwindcss (
        echo Tailwind CSS ✓ Installed
    )
    if exist node_modules\framer-motion (
        echo Framer Motion ✓ Installed
    )
) else (
    echo ERROR: node_modules not found!
    exit /b 1
)

echo.
echo ========================================
echo    Installation Complete! ✓
echo ========================================
echo.
echo To start the development server, run:
echo    npm run dev
echo.
echo The website will be available at:
echo    http://localhost:5173
echo.
echo To build for production, run:
echo    npm run build
echo.
echo ========================================
pause
