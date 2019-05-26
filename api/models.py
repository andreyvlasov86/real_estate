from django.db import models
from django.utils.timezone import now
# Create your models here.


class BaseModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)
    is_delete = models.BooleanField(default=False)
    status = models.CharField(default='new', max_length=20)

    class Meta:
        abstract = True


class Announcement(BaseModel):
    text = models.TextField(null=True, default='')

    class Meta:
        db_table = 'announcement'

