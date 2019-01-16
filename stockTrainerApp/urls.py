from django.conf.urls import url
# from django.config import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    url(r'^api/public$', views.public),
    url(r'^api/private$', views.private),
    url(r'^api/private-scoped$', views.private_scoped),
  
    # Temp home page
    path('', views.HomePageView.as_view(), name='home'),
    path('charge/', views.charge, name='charge'),
    path('stock/', views.stock, name='stock'),
    path('charge/', csrf_exempt(views.charge), name='charge')  # for now, we're disabling csrf requirements for charging
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