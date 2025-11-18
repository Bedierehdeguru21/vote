from gist import load_data

def handler(request):
    data = load_data()
    return {"positions": data["positions"]}
