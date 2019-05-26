from rest_framework import serializers
from .models import Announcement


class AnnouncementSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    created = serializers.DateTimeField(format='%Y-%m-%d')

    class Meta:
        model = Announcement
        exclude = ('updated', )
