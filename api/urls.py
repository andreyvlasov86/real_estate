from django.conf.urls import url, include
from rest_framework import routers
from api import views


router = routers.DefaultRouter()
#router.register(r'data', views.UploadFileDataViewSet, base_name='UploadFileData')
#router.register(r'get_data', views.CollectData.as_view())


urlpatterns = [
    #url('^swagger', schema_view),
    #url('^get_data', views.CollectData.as_view()),
    #url('^del_data', views.ClearFilesData.as_view()),
    #url('^ping_status/(?P<process_id>\d+)/$', views.PingFilesData.as_view())
]
