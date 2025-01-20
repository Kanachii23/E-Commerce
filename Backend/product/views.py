from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import ProductSerializer
from .models import Product
# Create your views here.


class ProductView(APIView):
    parser_classes = [FormParser , MultiPartParser]

    def get(self , request):
        data = Product.objects.all()
        serializer = ProductSerializer(data , many=True) 
        return Response(serializer.data)
    
    def post(self , request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class ProductDetailView(APIView):
    parser_classes = [FormParser, MultiPartParser]

    # Retrieve a single product by ID
    def get(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Update a product
    def put(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete a product
    def delete(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        product.delete()
        return Response({"message": "Product deleted successfully"}, status=status.HTTP_204_NO_CONTENT)