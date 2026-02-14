from radon.complexity import cc_visit

def analyze_complexity(code_str):
    blocks = cc_visit(code_str)

    total_complexity = 0
    for block in blocks:
        total_complexity += block.complexity

    if total_complexity < 5:
        rating = "Low"
        score = 90
    elif total_complexity < 10:
        rating = "Moderate"
        score = 70
    else:
        rating = "High"
        score = 50

    return {
        "cyclomatic_complexity": total_complexity,
        "rating": rating,
        "score": score
    }
