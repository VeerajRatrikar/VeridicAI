import subprocess
import tempfile
import os

from evaluator.complexity import analyze_complexity
from evaluator.readability import analyze_readability


TEST_CASES = [
    {"input": "5\n", "expected": "25"},
    {"input": "3\n", "expected": "9"},
]


def evaluate_code(code_str):

    passed = 0
    total = len(TEST_CASES)

    with tempfile.NamedTemporaryFile(delete=False, suffix=".py") as tmp:
        tmp.write(code_str.encode())
        tmp_path = tmp.name

    # -----------------------------
    # RUN TEST CASES
    # -----------------------------
    for test in TEST_CASES:
        try:
            result = subprocess.run(
                ["python3", tmp_path],
                input=test["input"],
                text=True,
                capture_output=True,
                timeout=2
            )

            output = result.stdout.strip()

            if output == test["expected"]:
                passed += 1

        except Exception:
            pass

    os.remove(tmp_path)

    # -----------------------------
    # CORRECTNESS SCORE
    # -----------------------------
    correctness_score = (passed / total) * 100 if total > 0 else 0

    # -----------------------------
    # COMPLEXITY ANALYSIS
    # -----------------------------
    complexity = analyze_complexity(code_str)

    # -----------------------------
    # READABILITY ANALYSIS
    # -----------------------------
    readability = analyze_readability(code_str)

    # -----------------------------
    # FINAL WEIGHTED SCORE
    # -----------------------------
    overall_score = (
        0.5 * correctness_score +
        0.3 * complexity["score"] +
        0.2 * readability["score"]
    )

    # -----------------------------
    # FEEDBACK ENGINE
    # -----------------------------
    feedback = []

    # Correctness feedback
    if correctness_score == 100:
        feedback.append("All test cases passed. Excellent work!")
    else:
        feedback.append("Some test cases failed. Review edge cases and input handling.")

    # Complexity feedback
    if complexity["rating"] == "Low":
        feedback.append("Your code has low complexity. Efficient solution.")
    elif complexity["rating"] == "Moderate":
        feedback.append("Your code has moderate complexity. Consider optimization.")
    else:
        feedback.append("High complexity detected. Try simplifying logic or reducing nested loops.")

    # Readability feedback
    if readability["score"] < 70:
        feedback.append("Improve readability: add comments, meaningful variable names, and docstrings.")
    else:
        feedback.append("Code readability is good and follows basic best practices.")

    return {
        "overall_score": round(overall_score, 2),
        "correctness": {
            "score": correctness_score,
            "passed": passed,
            "total": total
        },
        "efficiency": complexity,
        "readability": readability,
        "feedback": feedback
    }
