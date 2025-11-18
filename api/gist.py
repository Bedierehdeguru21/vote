import requests
import json
import os

# ---- IMPORTANT ----
# Replace ONLY after creating the Gist
GIST_ID = "b8293acb5472500c4f83e7d9ce4e9fe2"

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
GIST_URL = f"https://api.github.com/gists/{GIST_ID}"

HEADERS = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Accept": "application/vnd.github+json"
}

def load_data():
    response = requests.get(GIST_URL, headers=HEADERS)
    data = response.json()
    file_content = list(data["files"].values())[0]["content"]
    return json.loads(file_content)

def save_data(new_data):
    payload = {
        "files": {
            "voting_data.json": {
                "content": json.dumps(new_data, indent=2)
            }
        }
    }
    response = requests.patch(GIST_URL, headers=HEADERS, data=json.dumps(payload))
    return response.json()
