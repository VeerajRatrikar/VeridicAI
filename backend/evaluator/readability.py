import subprocess
import tempfile
import os

def analyze_readability(code_str):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".py") as tmp:
        tmp.write(code_str.encode())
        tmp_path = tmp.name

    result = subprocess.run(
        ["pylint", tmp_path, "--disable=all", "--enable=C,R"],
        capture_output=True,
        text=True
    )

    output = result.stdout

    os.remove(tmp_path)

    if "Your code has been rated at" in output:
        try:
            score_line = output.split("Your code has been rated at")[1]
            score = float(score_line.split("/")[0].strip())
        except:
            score = 5.0
    else:
        score = 5.0

    return {
        "pylint_score": score,
        "score": score * 10
    }
