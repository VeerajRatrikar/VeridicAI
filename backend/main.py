from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, UploadFile, File
from evaluator.test_runner import evaluate_code
from pydantic import BaseModel
import requests

app = FastAPI(title="VeridicAI")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# Request Model for GitHub URL
# -----------------------------
class GitHubRequest(BaseModel):
    github_url: str


# -----------------------------
# Home Route
# -----------------------------
@app.get("/")
def home():
    return {"message": "Welcome to VeridicAI 🚀"}


# -----------------------------
# File Upload Evaluation
# -----------------------------
@app.post("/evaluate/")
async def evaluate(file: UploadFile = File(...)):

    code = await file.read()
    code_str = code.decode("utf-8")

    result = evaluate_code(code_str)

    return result


# -----------------------------
# GitHub URL Evaluation
# -----------------------------
@app.post("/evaluate-github/")
def evaluate_github(request: GitHubRequest):

    try:
        headers = {
            "User-Agent": "VeridicAI"
        }

        response = requests.get(request.github_url, headers=headers)

        if response.status_code != 200:
            return {
        "error": f"Failed to fetch GitHub file.",
        "status_code": response.status_code,
        "response_text": response.text[:200]
    }


        code_str = response.text

        result = evaluate_code(code_str)

        return result

    except Exception as e:
        return {"error": str(e)}
