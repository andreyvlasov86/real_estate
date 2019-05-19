from __future__ import absolute_import

from celery import shared_task

import os, sys

sys.path.append(os.path.abspath(__file__))

#from pyvirtualdisplay import Display
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import shutil


@shared_task
def test():

    return True

