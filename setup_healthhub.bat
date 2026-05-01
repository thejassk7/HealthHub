@echo off
echo ==============================================
echo       HealthyHub Setup ^& Runner
echo ==============================================

:: Check if Python is installed
python --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Python is not installed or not in your system PATH.
    echo Please install Python 3.8 or newer and try again.
    pause
    exit /b 1
)

:: Create virtual environment if it doesn't exist
IF NOT EXIST "venv" (
    echo [INFO] Creating Python virtual environment...
    python -m venv venv
) ELSE (
    echo [INFO] Virtual environment already exists.
)

:: Activate the virtual environment
echo [INFO] Activating virtual environment...
call venv\Scripts\activate

:: Install dependencies
echo [INFO] Installing required dependencies (FastAPI, Uvicorn)...
pip install fastapi uvicorn >nul 2>&1

:: Run the application
echo [INFO] Starting the HealthyHub server...
echo.
echo ==============================================
echo The application will be available at:
echo http://127.0.0.1:8000
echo Press CTRL+C in this window to stop the server.
echo ==============================================
echo.

python backend\main.py

pause
