# GuardianAI
AI-powered scam detection system using Google Gemini AI, React and FastAPI.
# GuardianAI – AI-Powered Scam Detection System

## Overview

GuardianAI is an AI-powered web application that detects and analyzes suspicious messages using Google's Gemini AI. It helps users identify phishing attempts, financial fraud, and social engineering attacks by providing a detailed cybersecurity risk assessment.

## Features

- AI-powered scam detection
- Risk score (0–100)
- Threat level classification
- Scam category detection
- Psychological manipulation analysis
- Security recommendations
- Modern React frontend
- FastAPI backend

## Tech Stack

### Frontend
- React (Vite)
- Axios
- HTML
- CSS

### Backend
- FastAPI
- Python

### AI
- Google Gemini 2.5 Flash API

## Project Structure

```
GuardianAI/
├── frontend/
├── backend/
└── README.md
```

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements

- OCR for image-based scam detection
- Email scam analysis
- QR code scam detection
- Browser extension
- Mobile application

## Developed for

FutureAI Global Hackathon 2026

## 📸 Screenshots

### Home Page

![Home](screenshots/home.png)

### Scam Message Input

![Input](screenshots/input.png)

### Analysis Result

![Result](screenshots/result.png)
