from django.http import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response, redirect
from django.core.mail import send_mail

def redirHome(request):
   return redirect('/home/');

def home(request):
   return render_to_response('home.html',locals(),context_instance=RequestContext(request))

def resume(request):
   if 'section' in request.GET:
      currentSection = request.GET['section']   
   return render_to_response('resume.html',locals(),context_instance=RequestContext(request))

def showcase(request):
   sitePictures = ["logo.png"]
   return render_to_response('showcase.html',locals(),context_instance=RequestContext(request))

def hire(request):
   success = True
   return render_to_response('emailresult.html',locals(), context_instance=RequestContext(request))

