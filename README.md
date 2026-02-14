🚀 VeridicAI
AI-Powered Coding Assignment Evaluator

Fair. Fast. Intelligent.

🌍 Live Deployment

Frontend (Vercel):
https://veridicai.vercel.app

Backend API (Render):
https://your-backend-url.onrender.com

Swagger Docs:
https://your-backend-url.onrender.com/docs

📌 Overview

VeridicAI is an AI-powered coding assignment evaluator that goes beyond traditional test-case validation. It evaluates submissions across multiple dimensions — correctness, efficiency, readability, structural quality, and edge-case handling — delivering structured, human-like feedback in under two minutes.

Designed for hiring platforms, educators, bootcamps, and competitive programming environments, VeridicAI provides scalable, explainable, and fair automated evaluation.

🎯 Problem Statement

Traditional code evaluation systems face several challenges:

⏳ Delayed or manual grading

📉 Binary pass/fail test case scoring

❓ Lack of structured feedback

⚖️ Inconsistent evaluation standards

📈 Poor scalability for large submissions

VeridicAI addresses these limitations through a multi-dimensional automated evaluation engine that provides consistent, explainable, and performance-aware scoring.

🧠 Core Features
✅ 1. Correctness Evaluation

Executes submitted code against predefined test cases

Calculates pass/fail ratio

Detects incorrect edge-case handling

Generates correctness score

⚡ 2. Efficiency Analysis

Cyclomatic complexity detection using Radon

Identifies nested logic structures

Encourages optimal algorithmic patterns

Provides performance classification

📖 3. Readability & Code Quality

Static analysis using Pylint

Evaluates naming conventions

Checks structural clarity

Encourages maintainable code practices

🗣️ 4. AI-Generated Feedback

Structured, human-like improvement suggestions

Clear explanation of weaknesses

Actionable recommendations

🌐 5. Professional Dashboard UI

Clean SaaS-style interface

Real-time evaluation display

Performance visualization

Fully responsive design

📊 Scoring Model
Dimension	Weight
Correctness	50%
Efficiency	30%
Readability	20%
Final Score Formula
Overall Score = 
0.5 × Correctness 
+ 0.3 × Efficiency 
+ 0.2 × Readability


This ensures balanced evaluation beyond surface-level validation.

🏗️ System Architecture
Frontend (React + TailwindCSS)
        ↓
FastAPI REST API
        ↓
Evaluation Engine
 ├── Test Case Runner
 ├── Complexity Analyzer (Radon)
 ├── Readability Analyzer (Pylint)
 └── Feedback Generator

🔄 How Evaluation Works

User uploads Python file or GitHub RAW link

Backend securely executes code in isolated environment

Test cases are run using subprocess

Complexity analysis is performed using Radon

Readability analysis is performed using Pylint

Weighted score is calculated

Structured feedback is generated

Results are returned to frontend dashboard

Total response time: ~1–2 seconds (local) / ~2–5 seconds (production).

🛠️ Tech Stack
Frontend

React (Vite)

TailwindCSS

Custom CSS animations

Backend

FastAPI

Uvicorn

Radon

Pylint

Requests

Deployment

Vercel (Frontend)

Render (Backend)

🚀 Running Locally
Backend Setup
pip install -r requirements.txt
uvicorn main:app --reload


Backend runs at:

http://127.0.0.1:8000

Frontend Setup
npm install
npm run dev


Frontend runs at:

http://localhost:5173

📤 Supported Input Methods

Upload Python file

Provide GitHub RAW file URL

📈 Sample Output
Overall Score: 87/100

Correctness: 100/100
Efficiency: 90/100
Readability: 50/100

Feedback:
- All test cases passed.
- Efficient implementation detected.
- Improve variable naming and documentation.

📊 Evaluation Dimensions

✔ Correctness
✔ Edge-case handling
✔ Algorithmic efficiency
✔ Code maintainability
✔ Structural clarity

🔐 Security & Isolation

Code execution handled via subprocess with timeout

Temporary file storage with automatic cleanup

Execution timeout to prevent infinite loops

Controlled evaluation environment

📈 Scalability Potential

VeridicAI can be extended to support:

Multi-language evaluation (C/C++/Java)

Plagiarism detection

Submission history tracking

Role-based evaluation

Leaderboard and benchmarking

Cloud database integration

AI-powered optimal solution comparison


👨‍💻 Author

Veeraj Ratrikar

💡 Vision

To redefine automated code evaluation by combining fairness, performance intelligence, and AI-driven feedback into one scalable and explainable platform.
