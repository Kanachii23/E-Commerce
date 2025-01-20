from django.contrib import admin
from django.urls import path
from product.views import ProductView, ProductDetailView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', ProductView.as_view(), name='product-list'),
    path('api/products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]

urlpatterns += static(settings.MEDIA_URL , document_root = settings.MEDIA_ROOT)
