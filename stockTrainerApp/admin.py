from django.contrib import admin

from .models import User, Portfolio, Stock, Study, Indicator, Test, Parameter

# Register your models here.

# TODO: any other model added in .models can be registered along with user

admin.site.register(User)
admin.site.register(Stock)
admin.site.register(Study)
admin.site.register(Parameter)
admin.site.register(Indicator)
admin.site.register(Portfolio)
admin.site.register(Test)

