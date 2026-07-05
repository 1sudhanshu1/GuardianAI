import json
from google import genai
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def analyze_text(message: str):
    prompt = f"""
You are an expert cybersecurity analyst.

Analyze the following message and return ONLY valid JSON.

Message:
{message}

Return exactly this JSON:

{{
  "risk_score": 0,
  "threat_level": "",
  "category": "",
  "confidence": "",
  "reasons": [],
  "psychological_tricks": [],
  "recommendation": ""
}}

Do not add markdown.
Do not add explanation.
Return only JSON.
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        text = response.text.strip()

        if text.startswith("```json"):
            text = text.replace("```json", "").replace("```", "").strip()

        return json.loads(text)

    except Exception as e:
        return {
            "error": str(e)
        }