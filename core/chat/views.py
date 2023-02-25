from django.shortcuts import render
from core.settings import WS_URL


# Create your views here.
def index(request):
    return render(request, 'index.html', {'websocket_url':WS_URL})
