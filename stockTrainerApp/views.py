import stripe

from django.shortcuts import render
from django.conf import settings
from django.views.generic.base import TemplateView

stripe.api_key = settings.STRIPE_SECRET_TEST_KEY

# Create your views here.


class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['STRIPE_PUBLISHABLE_TEST_KEY'] = settings.STRIPE_PUBLISHABLE_TEST_KEY
        # TODO: set this key to STRIPE_PUBLISHABLE_KEY post testing
        return context


def charge(request):
    if request.method == 'POST':
        charge = stripe.Charge.create(
            amount=500,
            currency='usd',
            description="It's just stuff... Don't worry about it...",
            source=request.POST['stripeToken']
        )
        return render(request, 'charge.html')
