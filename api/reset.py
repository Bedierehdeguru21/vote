from gist import load_data, save_data

def handler(request):
    data = load_data()

    for pos in data["positions"]:
        for name in pos["votes"].keys():
            pos["votes"][name] = 0
    
    save_data(data)

    return {"status": "reset_complete"}
