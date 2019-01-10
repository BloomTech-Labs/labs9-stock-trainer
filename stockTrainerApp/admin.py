from django.contrib import admin

from .models import User, Portfolio, Stock

# Register your models here.

# TODO: any other model added in .models can be registered along with user


class stockTrainerAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'last_modified')


admin.site.register((User, Portfolio, Stock), stockTrainerAdmin)
