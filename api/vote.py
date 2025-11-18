from gist import load_data, save_data

def handler(request):
    if request.method != "POST":
        return {"error": "Only POST allowed"}

    body = request.get_json()
    position_id = body.get("position")
    candidate = body.get("candidate")

    data = load_data()

    for pos in data["positions"]:
        if pos["id"] == position_id:
            if candidate in pos["votes"]:
                pos["votes"][candidate] += 1

    save_data(data)

    return {
        "status": "success",
        "message": "Vote successfully counted",
        "position": position_id,
        "candidate": candidate
    }
