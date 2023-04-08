from collections import Counter

from django.shortcuts import render
from django.http import HttpResponse

from .models import Sales

# Create your views here.


def index(request):
    # Page from the theme
    return render(request, "pages/index.html")

def flow(request):
    # Page from the theme
    return render(request, "pages/reactflow.html")

def charts(request):
    countries = list(Sales.objects.values_list('country', flat=True))
    country_counts = Counter(countries)
    country_count = [{'country': country, 'count': country_counts[country]} for country in country_counts]
    return render(request, "pages/recharts.html", {"country_count": country_count})
