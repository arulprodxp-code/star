#!/bin/bash
# Star Dental - Installation & Setup Script for macOS/Linux

echo ""
echo "========================================"
echo "    Star Dental Website Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
echo "[1/5] Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install from https://nodejs.org/"
    exit 1
fi
node --version
echo "Node.js ✓ OK"

echo ""
echo "[2/5] Checking npm..."
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm is not installed!"
    exit 1
fi
npm --version
echo "npm ✓ OK"

echo ""
echo "[3/5] Clearing npm cache..."
npm cache clean --force > /dev/null 2>&1
echo "npm cache cleared ✓"

echo ""
echo "[4/5] Installing dependencies..."
echo "This may take a few minutes..."
npm install --legacy-peer-deps

if [ $? -ne 0 ]; then
    echo "ERROR: npm install failed!"
    echo "Try running: npm install --no-optional"
    exit 1
fi

echo ""
echo "[5/5] Verifying installation..."
if [ -d "node_modules" ]; then
    echo "node_modules directory ✓ Found"
    [ -d "node_modules/react" ] && echo "React package ✓ Installed"
    [ -d "node_modules/vite" ] && echo "Vite ✓ Installed"
    [ -d "node_modules/tailwindcss" ] && echo "Tailwind CSS ✓ Installed"
    [ -d "node_modules/framer-motion" ] && echo "Framer Motion ✓ Installed"
else
    echo "ERROR: node_modules not found!"
    exit 1
fi

echo ""
echo "========================================"
echo "    Installation Complete! ✓"
echo "========================================"
echo ""
echo "To start the development server, run:"
echo "    npm run dev"
echo ""
echo "The website will be available at:"
echo "    http://localhost:5173"
echo ""
echo "To build for production, run:"
echo "    npm run build"
echo ""
echo "========================================"
