from django.http import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response

def home(request):
   return render_to_response('home.html',locals(),context_instance=RequestContext(request))
def resume(request):
   return render_to_response('home.html',locals(),context_instance=RequestContext(request))
def showcase(request):
   return render_to_response('home.html',locals(),context_instance=RequestContext(request))
def contact(request):
   return render_to_response('home.html',locals(),context_instance=RequestContext(request))
