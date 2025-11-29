@echo off
REM Portfolio Deployment Script for Windows
REM This script builds and deploys the portfolio to your server

setlocal enabledelayedexpansion

REM Configuration
set SERVER_USER=your-username
set SERVER_HOST=your-domain.com
set REMOTE_PATH=/var/www/portfolio
set BUILD_DIR=dist

echo.
echo ======================================
echo 🚀 Portfolio Deployment Script
echo ======================================
echo.

REM Step 1: Build the project
echo Step 1: Building project...
call npm run build

if not exist "%BUILD_DIR%" (
    echo.
    echo ❌ Build failed! dist/ folder not found.
    pause
    exit /b 1
)

echo ✓ Build successful!

REM Step 2: Upload to server
echo.
echo Step 2: Uploading to server...
echo Please ensure you have WinSCP or similar tool set up
echo Or use: scp -r dist/* %SERVER_USER%@%SERVER_HOST%:%REMOTE_PATH%/

REM If you have scp available, uncomment the line below
REM scp -r %BUILD_DIR%\* %SERVER_USER%@%SERVER_HOST%:%REMOTE_PATH%/

echo.
echo ⚠ Please upload the contents of the 'dist' folder manually via:
echo   - FTP/SFTP client
echo   - WinSCP
echo   - Windows PowerShell scp command
echo.
echo Command template:
echo scp -r dist/* %SERVER_USER%@%SERVER_HOST%:%REMOTE_PATH%/
echo.
echo 🎉 Build ready for deployment!
echo Your portfolio files are in: %BUILD_DIR%
echo.
pause
