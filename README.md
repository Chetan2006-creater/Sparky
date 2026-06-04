# 🤖 SPArKY - Intelligent Desktop Voice Assistant

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Eel](https://img.shields.io/badge/Eel-Web%20Framework-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📖 Overview

SPArKY is an intelligent desktop voice assistant developed using Python, Eel, HTML, CSS, and JavaScript. The project enables users to interact with their computer through natural voice commands, creating a hands-free and efficient user experience.

The assistant integrates speech recognition, text-to-speech synthesis, web automation, and desktop application control within a modern graphical interface. SPArKY is designed to demonstrate practical applications of Human-Computer Interaction (HCI), Voice Processing, and Full-Stack Development concepts.

This project showcases the integration of Python backend services with a responsive web-based frontend using the Eel framework.

---

## 🎯 Project Objectives

The primary objectives of SPArKY are:

* Build a real-world AI-powered desktop assistant.
* Enable voice-based interaction with computer systems.
* Automate repetitive tasks through speech commands.
* Provide an intuitive and modern user interface.
* Demonstrate integration between frontend and backend technologies.
* Explore speech processing and automation techniques.

---

## ✨ Key Features

### 🎤 Voice Recognition

* Captures user speech through the microphone.
* Converts spoken language into text commands.
* Supports real-time command processing.

### 🔊 Text-to-Speech Responses

* Generates natural voice responses.
* Provides feedback for executed commands.
* Improves user interaction experience.

### 🌐 Web Automation

* Open websites directly through voice commands.
* Quick access to frequently used platforms.
* Browser integration support.

### ▶️ YouTube Search and Playback

* Search YouTube using voice.
* Automatically play requested videos.
* Hands-free entertainment and learning.

### 💻 Application Launching

* Open desktop applications through speech.
* Increase productivity with quick access.
* Reduce manual navigation.

### 🎨 Modern Interactive User Interface

* Clean and responsive design.
* Voice assistant inspired animations.
* Real-time visual feedback.

### 🗄️ Database Integration

* SQLite database support.
* Efficient storage and retrieval of information.
* Lightweight and portable architecture.

### ⚡ Frontend-Backend Communication

* Real-time interaction using Eel.
* Seamless data exchange between Python and JavaScript.
* Fast and responsive execution.

---

## 🏗️ System Architecture

```text
User Voice Input
        │
        ▼
Speech Recognition Engine
        │
        ▼
Command Processing Module
        │
 ┌──────┼─────────┐
 │      │         │
 ▼      ▼         ▼
Web   System   Database
Tasks Commands Operations
 │      │         │
 └──────┼─────────┘
        ▼
Text-to-Speech Engine
        │
        ▼
Voice Response
```

---

## 🛠️ Technology Stack

### Backend Technologies

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| Python            | Core application logic         |
| Eel               | Frontend-Backend communication |
| SpeechRecognition | Voice command processing       |
| Pyttsx3           | Text-to-Speech synthesis       |
| SQLite3           | Database management            |
| PyWhatKit         | Web automation                 |
| Playsound         | Audio playback                 |

### Frontend Technologies

| Technology  | Purpose                   |
| ----------- | ------------------------- |
| HTML5       | Structure                 |
| CSS3        | Styling                   |
| JavaScript  | Client-side functionality |
| Bootstrap 5 | Responsive UI             |
| jQuery      | DOM manipulation          |
| SiriWave    | Voice animation effects   |

---

## 📂 Project Structure

```text
SPArKY
│
├── engine/
│   ├── command.py
│   ├── features.py
│   ├── config.py
│   └── db.py
│
├── www/
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   ├── controller.js
│   └── assets/
│
├── Sofia/
│
├── Sparky.db
│
├── main.py
│
└── README.md
```

---

## ⚙️ Installation Guide

### Clone Repository

```bash
git clone https://github.com/Chetan2006-creater/Sparky.git
```

### Navigate to Project Directory

```bash
cd Sparky
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

Windows:

```bash
venv\Scripts\activate
```

Linux/Mac:

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install eel
pip install pyttsx3
pip install SpeechRecognition
pip install pywhatkit
pip install playsound
pip install pyaudio
```

---

## 🚀 Running the Application

```bash
python main.py
```

Upon execution, the application launches a browser-based interface and initializes the voice assistant.

---

## 🎙️ Example Commands

### Open Applications

```text
Open Calculator
Open Chrome
Open Notepad
```

### Open Websites

```text
Open Google
Open YouTube
Open Gmail
```

### Search Content

```text
Play Python Tutorial
Play Data Science Roadmap
Play Machine Learning Course
```

### General Commands

```text
Hello Sparky
How are you
What is the time
```

---

## 🎓 Learning Outcomes

This project helped develop practical experience in:

* Software Engineering
* Python Development
* Voice Assistant Architecture
* Speech Processing
* Web Development
* Database Management
* Automation Systems
* Human-Computer Interaction
* API Integration
* Full-Stack Application Development

---





