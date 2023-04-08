from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("flow", views.flow, name="flow"),
    path("charts", views.charts, name="charts"),
]
