AI Chatbot Web Application (React + Node.js + Gemini API)

**Project Overview**

This is a full-stack AI-powered chatbot application built using modern web technologies.
The system allows users to interact with an AI chatbot through a real-time chat interface powered by the Google Gemini API.

User messages are sent from the frontend to a backend server, which securely communicates with the Gemini API and returns AI-generated responses.

**Features**
- Real-time chat interface
- AI-generated responses using Google Gemini API
- Auto-scroll chat messages for better UX
- Fast and responsive React UI
- Clean component-based architecture
- Secure backend API handling
- Environment variable support using .env

**Tech Stack**
- Frontend
    React (Vite)
    JavaScript (ES6+)
    CSS
- Backend
    Node.js
    Express.js
    AI Integration
    Google Gemini API
**System Architecture**
  User → React Frontend → Node.js Backend → Gemini API → AI Response → Frontend UI

**How It Works**
- User types a message in the chat UI
- React frontend sends request to backend API
- Node.js server forwards request to Gemini API
- Gemini generates AI response
- Backend returns response to frontend
- Chat UI updates in real-time

**Environment Variables**

- Create a .env file in backend:
    GEMINI_API_KEY=your_api_key_here

**Getting Started**
  1. Clone the repository
    git clone <your-repo-url>
  2. Install dependencies
    Frontend
    cd frontend
    npm install
    npm run dev
    Backend
    cd backend
    npm install
    node index.js

**Screenshots**
<img width="1920" height="928" alt="image" src="https://github.com/user-attachments/assets/2afa54df-35ad-4ffd-91d6-3f1613454b2f" />

<img width="1920" height="929" alt="image" src="https://github.com/user-attachments/assets/a6b68110-1e4f-4224-9dcb-5ac51d25de2f" />

**What I Learned**
  Full-stack application development using React and Node.js
  API integration with external AI services
  Handling asynchronous data flow between frontend and backend
  Working with environment variables securely
  Building responsive and interactive UI components

**Author**
  Deemantha Viraj
  Computer Science Undergraduate
  Passionate about AI, Web Development, and Cybersecurity
