from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope

from .serializers import AnnouncementSerializer
from .models import Announcement

from django.views.generic import View
from django.http import JsonResponse

import os
import sys


sys.path.append(os.path.abspath(__file__))


class AnnouncementViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]

    queryset = Announcement.objects.all().order_by('-id')
    serializer_class = AnnouncementSerializer
