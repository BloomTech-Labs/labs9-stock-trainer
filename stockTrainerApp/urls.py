from django.conf.urls import url
# from django.config import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views
from .views import current_user, UserList

urlpatterns = [
    url(r'^api/public$', views.public),
    url(r'^api/private$', views.private),
    url(r'^api/private-scoped$', views.private_scoped),

    # `current_user/` verifies token and loads static data
    path('current_user/', current_user),
    path('users/', UserList.as_view()),

    # Temp home page
    path('', views.HomePageView.as_view(), name='home'),
    path('stock/', csrf_exempt(views.stock), name='stock'),
    path('api/testdata/', views.TestListCreate.as_view()),
    path('charge/', csrf_exempt(views.charge), name='charge'),  # for now, we're disabling csrf requirements for charging
    path('favorite/', csrf_exempt(views.favorite), name='favorite')
]
 
 #################################
 # axios
#       .request({
#         method: "get",
#         baseURL: `${process.env.REACT_APP_BACKEND_URL}/stock`,
#         headers: {
#           Authorization: `Bearer ${jwt}`
#         },
#         params: paramSettings
#       })
#       .then(res => {
#         const newState = { ...stockData };
#         newState[res.data.symbol] = {
#           symbol: res.data.symbol,
#           name: res.data.name,
#           price: res.data.price
#         };
#         this.setState({
#           stockData: newState
#         });
#       });